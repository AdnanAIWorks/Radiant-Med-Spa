/**
 * Radiant Med Spa — Houston, Texas
 * Custom AI Voice Receptionist Engine powered by ElevenLabs Client SDK
 * 
 * Directly connects the custom-designed AI Receptionist card, modal, and demo widgets
 * to ElevenLabs Conversational AI Agent (agent_3701m5qszq25e77vgdx2y12d4kz1).
 * Features real-time state reflection (idle, connecting, listening, speaking, ended, error),
 * microphone permission handling, and bidirectional voice streaming.
 */

(function () {
  'use strict';

  if (window.__RADIANT_AI_ENGINE_INITIALIZED__) return;
  window.__RADIANT_AI_ENGINE_INITIALIZED__ = true;

  // State Management
  let ConversationSDK = null;
  let activeConversation = null;
  let currentState = 'idle'; // 'idle' | 'connecting' | 'connected' | 'disconnecting' | 'error'
  let currentMode = 'idle';  // 'listening' | 'speaking' | 'idle'

  // Preload ElevenLabs Client SDK in background
  async function loadSDK() {
    if (ConversationSDK) return ConversationSDK;
    try {
      const module = await import('https://cdn.jsdelivr.net/npm/@elevenlabs/client@latest/+esm');
      ConversationSDK = module.Conversation;
      console.log('[Radiant AI] ElevenLabs Client SDK loaded successfully.');
      return ConversationSDK;
    } catch (err) {
      console.error('[Radiant AI] Failed to load ElevenLabs Client SDK:', err);
      return null;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadSDK(); // Preload SDK
    initAiModalSystem();
    initPromptChips();
    initCustomWidgetTriggers();
    updateAllUIStates('idle');
  });

  // 1. Core Voice Conversation Lifecycle
  async function startConversation() {
    if (activeConversation || currentState === 'connecting') {
      console.log('[Radiant AI] Session already active or connecting. Ending current session.');
      await endConversation();
      return;
    }

    const config = window.CLINIC_CONFIG?.aiReceptionist;
    const agentId = config?.agentId || 'agent_3701m5qszq25e77vgdx2y12d4kz1';

    updateAllUIStates('connecting');

    try {
      // 1. Request microphone permission
      console.log('[Radiant AI] Requesting microphone access...');
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // 2. Load SDK
      const ConvClass = await loadSDK();
      if (!ConvClass) {
        throw new Error('Unable to initialize voice connection engine.');
      }

      // 3. Start real WebRTC session with ElevenLabs agent
      console.log('[Radiant AI] Connecting to ElevenLabs agent:', agentId);
      activeConversation = await ConvClass.startSession({
        agentId: agentId,
        connectionType: 'webrtc',
        onConnect: ({ conversationId }) => {
          console.log('[Radiant AI] Session connected! ID:', conversationId);
          currentState = 'connected';
          currentMode = 'listening';
          updateAllUIStates('connected');
          if (window.showToast) {
            window.showToast('Connected to Radiant AI Receptionist. Speak freely!', 'success');
          }
        },
        onDisconnect: () => {
          console.log('[Radiant AI] Session disconnected.');
          activeConversation = null;
          currentState = 'idle';
          currentMode = 'idle';
          updateAllUIStates('idle');
        },
        onError: (err) => {
          console.error('[Radiant AI] Session error:', err);
          activeConversation = null;
          currentState = 'error';
          updateAllUIStates('error', err?.message || 'Connection interrupted');
          if (window.showToast) {
            window.showToast('Voice connection error. Tap to retry.', 'error');
          }
        },
        onModeChange: ({ mode }) => {
          // mode is 'speaking' or 'listening'
          console.log('[Radiant AI] Agent mode changed:', mode);
          currentMode = mode;
          updateModeUI(mode);
        },
        onStatusChange: (status) => {
          console.log('[Radiant AI] Status change:', status);
        }
      });

    } catch (error) {
      console.error('[Radiant AI] Start conversation error:', error);
      activeConversation = null;
      currentState = 'error';

      let userMsg = 'Could not start voice session.';
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        userMsg = 'Microphone permission is required for voice calls.';
      } else if (error.message) {
        userMsg = error.message;
      }

      updateAllUIStates('error', userMsg);
      if (window.showToast) {
        window.showToast(userMsg, 'error');
      }
    }
  }

  async function endConversation() {
    if (!activeConversation) return;
    updateAllUIStates('disconnecting');
    try {
      await activeConversation.endSession();
    } catch (err) {
      console.warn('[Radiant AI] Error ending session:', err);
    }
    activeConversation = null;
    currentState = 'idle';
    currentMode = 'idle';
    updateAllUIStates('idle');
    if (window.showToast) {
      window.showToast('Call ended.', 'info');
    }
  }

  // 2. Comprehensive UI State Updates across All Custom Widgets
  function updateAllUIStates(state, errorMessage = '') {
    currentState = state;

    // A. Hero Card Status Pill (.hero-ai-status-pill)
    const heroStatusPill = document.getElementById('hero-ai-status');
    if (heroStatusPill) {
      heroStatusPill.classList.remove('live', 'connecting', 'speaking', 'error');
      const label = heroStatusPill.querySelector('.status-label');

      if (state === 'idle') {
        heroStatusPill.classList.add('live');
        if (label) label.textContent = 'Live Voice Ready';
      } else if (state === 'connecting') {
        heroStatusPill.classList.add('connecting');
        if (label) label.textContent = 'Connecting...';
      } else if (state === 'connected') {
        heroStatusPill.classList.add('live');
        if (label) label.textContent = currentMode === 'speaking' ? 'Speaking...' : 'Listening...';
      } else if (state === 'disconnecting') {
        if (label) label.textContent = 'Ending Call...';
      } else if (state === 'error') {
        heroStatusPill.classList.add('error');
        if (label) label.textContent = 'Mic Error • Tap to Retry';
      }
    }

    // B. Hero Card Waveform (.hero-ai-waveform)
    const heroWaveform = document.querySelector('.hero-ai-waveform');
    if (heroWaveform) {
      heroWaveform.classList.remove('is-speaking', 'is-listening');
      if (state === 'connected') {
        heroWaveform.classList.add(currentMode === 'speaking' ? 'is-speaking' : 'is-listening');
      }
    }

    // C. Hero Card CTA Button (#open-hero-ai-modal)
    const heroBtn = document.getElementById('open-hero-ai-modal');
    if (heroBtn) {
      heroBtn.classList.remove('btn-end-call', 'btn-connecting');
      if (state === 'idle') {
        heroBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
          Talk to Our AI Receptionist
        `;
      } else if (state === 'connecting') {
        heroBtn.classList.add('btn-connecting');
        heroBtn.textContent = 'Connecting to AI...';
      } else if (state === 'connected') {
        heroBtn.classList.add('btn-end-call');
        heroBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          End Conversation
        `;
      } else if (state === 'error') {
        heroBtn.textContent = 'Retry Voice Call';
      }
    }

    // D. Modal Dialog Call Button (#modal-start-call-btn)
    const modalBtn = document.getElementById('modal-start-call-btn');
    if (modalBtn) {
      modalBtn.classList.remove('btn-end-call', 'btn-connecting', 'btn-gold');
      if (state === 'idle') {
        modalBtn.classList.add('btn-gold');
        modalBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
          Start Voice Conversation Now
        `;
      } else if (state === 'connecting') {
        modalBtn.classList.add('btn-gold', 'btn-connecting');
        modalBtn.textContent = 'Connecting to Voice Agent...';
      } else if (state === 'connected') {
        modalBtn.classList.add('btn-end-call');
        modalBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          End Conversation (Hang Up)
        `;
      } else if (state === 'error') {
        modalBtn.classList.add('btn-gold');
        modalBtn.textContent = 'Retry Voice Call';
      }
    }

    // E. Modal Live Notice Text
    const modalLiveNotice = document.querySelector('.ai-modal-live-area .ai-modal-notice');
    if (modalLiveNotice) {
      const heading = modalLiveNotice.querySelector('.ai-modal-notice-heading span');
      const paragraph = modalLiveNotice.querySelector('p');
      if (state === 'idle') {
        if (heading) heading.textContent = 'Live Conversational AI Active • ElevenLabs Connected';
        if (paragraph) paragraph.textContent = 'Our 24/7 aesthetic receptionist is ready. Click "Start Voice Conversation Now" to speak in real time.';
      } else if (state === 'connecting') {
        if (heading) heading.textContent = 'Connecting Audio Stream...';
        if (paragraph) paragraph.textContent = 'Requesting secure microphone connection and initializing ElevenLabs voice synthesis...';
      } else if (state === 'connected') {
        if (heading) heading.textContent = currentMode === 'speaking' ? 'Agent Speaking...' : 'Listening to You...';
        if (paragraph) paragraph.textContent = currentMode === 'speaking'
          ? 'Radiant AI Assistant is speaking. Listen through your speakers or headphones.'
          : 'Listening to your voice. Speak clearly into your microphone to ask about treatments or booking.';
      } else if (state === 'error') {
        if (heading) heading.textContent = 'Voice Connection Notice';
        if (paragraph) paragraph.textContent = errorMessage || 'Could not connect. Please verify microphone access and try again.';
      }
    }

    // F. Dedicated Demo Page (voice-demo.html) Controls
    const demoStatusText = document.getElementById('ai-status-text');
    const demoStatusDot = document.querySelector('.voice-status-dot');
    if (demoStatusText) {
      if (state === 'idle') {
        demoStatusText.textContent = 'Live Voice Assistant Connected';
        demoStatusText.style.color = '#2E7D32';
      } else if (state === 'connecting') {
        demoStatusText.textContent = 'Connecting to Voice Agent...';
        demoStatusText.style.color = '#C0A16B';
      } else if (state === 'connected') {
        demoStatusText.textContent = currentMode === 'speaking' ? 'Radiant AI is Responding...' : 'Listening to Your Question...';
        demoStatusText.style.color = currentMode === 'speaking' ? '#C0A16B' : '#2E7D32';
      } else if (state === 'error') {
        demoStatusText.textContent = 'Microphone Access Required';
        demoStatusText.style.color = '#C62828';
      }
    }
    if (demoStatusDot) {
      demoStatusDot.className = 'voice-status-dot';
      if (state === 'idle' || state === 'connected') demoStatusDot.classList.add('live');
      if (state === 'connecting') demoStatusDot.classList.add('connecting');
      if (state === 'error') demoStatusDot.classList.add('error');
    }

    const demoBtn = document.getElementById('start-voice-demo-btn');
    if (demoBtn) {
      demoBtn.classList.remove('btn-end-call', 'btn-connecting', 'btn-gold');
      if (state === 'idle') {
        demoBtn.classList.add('btn-gold');
        demoBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
          Start Live Voice Call &rarr;
        `;
      } else if (state === 'connecting') {
        demoBtn.classList.add('btn-gold', 'btn-connecting');
        demoBtn.textContent = 'Connecting...';
      } else if (state === 'connected') {
        demoBtn.classList.add('btn-end-call');
        demoBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          End Conversation (Hang Up)
        `;
      } else if (state === 'error') {
        demoBtn.classList.add('btn-gold');
        demoBtn.textContent = 'Retry Voice Call &rarr;';
      }
    }
  }

  function updateModeUI(mode) {
    if (currentState !== 'connected') return;

    // Update Hero Waveform
    const heroWaveform = document.querySelector('.hero-ai-waveform');
    if (heroWaveform) {
      heroWaveform.classList.remove('is-speaking', 'is-listening');
      heroWaveform.classList.add(mode === 'speaking' ? 'is-speaking' : 'is-listening');
    }

    // Update Hero Status Pill
    const heroStatusPill = document.getElementById('hero-ai-status');
    if (heroStatusPill) {
      const label = heroStatusPill.querySelector('.status-label');
      if (label) label.textContent = mode === 'speaking' ? 'Speaking...' : 'Listening...';
    }

    // Update Modal Notice
    const modalLiveNotice = document.querySelector('.ai-modal-live-area .ai-modal-notice');
    if (modalLiveNotice) {
      const heading = modalLiveNotice.querySelector('.ai-modal-notice-heading span');
      const paragraph = modalLiveNotice.querySelector('p');
      if (heading) heading.textContent = mode === 'speaking' ? 'Agent Speaking...' : 'Listening to You...';
      if (paragraph) {
        paragraph.textContent = mode === 'speaking'
          ? 'Radiant AI Assistant is speaking. Listen through your speakers or headphones.'
          : 'Listening to your voice. Speak clearly into your microphone to ask about treatments or booking.';
      }
    }

    // Update Voice Demo page
    const demoStatusText = document.getElementById('ai-status-text');
    if (demoStatusText) {
      demoStatusText.textContent = mode === 'speaking' ? 'Radiant AI is Responding...' : 'Listening to Your Question...';
      demoStatusText.style.color = mode === 'speaking' ? '#C0A16B' : '#2E7D32';
    }
  }

  // 3. Attach Custom Widget Trigger Listeners
  function initCustomWidgetTriggers() {
    // Hero CTA button (#open-hero-ai-modal)
    const heroBtn = document.getElementById('open-hero-ai-modal');
    if (heroBtn) {
      heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentState === 'connected' || currentState === 'connecting') {
          // If already in call, clicking the button ends the call
          endConversation();
        } else {
          // Open modal and start conversation
          if (window.openAiReceptionistModal) window.openAiReceptionistModal();
          startConversation();
        }
      });
    }

    // Modal Call Button (#modal-start-call-btn)
    const modalBtn = document.getElementById('modal-start-call-btn');
    if (modalBtn) {
      modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentState === 'connected' || currentState === 'connecting') {
          endConversation();
        } else {
          startConversation();
        }
      });
    }

    // Dedicated Voice Demo Page Button (#start-voice-demo-btn)
    const demoBtn = document.getElementById('start-voice-demo-btn');
    if (demoBtn) {
      demoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentState === 'connected' || currentState === 'connecting') {
          endConversation();
        } else {
          startConversation();
        }
      });
    }
  }

  // 4. Modal Open / Close Logic
  function initAiModalSystem() {
    const modalBackdrop = document.getElementById('ai-receptionist-modal');
    if (!modalBackdrop) return;

    const modalCloseBtn = modalBackdrop.querySelector('.ai-modal-close');
    let lastFocusedElement = null;

    function openModal() {
      lastFocusedElement = document.activeElement;
      modalBackdrop.classList.add('is-active');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (modalCloseBtn) {
        modalCloseBtn.focus();
      }
    }

    function closeModal() {
      modalBackdrop.classList.remove('is-active');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    // Modal open triggers
    document.querySelectorAll('.open-ai-modal-btn, [data-open-ai-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
        closeModal();
      }
    });

    window.openAiReceptionistModal = openModal;
    window.closeAiReceptionistModal = closeModal;
  }

  // 5. Interactive Question Chips
  function initPromptChips() {
    const chips = document.querySelectorAll('.ai-prompt-chip, .suggested-verbal-card, .suggested-question-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const textSpan = chip.querySelector('span');
        const text = textSpan ? textSpan.textContent.trim() : chip.textContent.trim();

        chip.style.transform = 'scale(0.97)';
        setTimeout(() => { chip.style.transform = ''; }, 160);

        if (window.showToast) {
          window.showToast(`Prompt: "${text}"`, 'info');
        }

        // If call is idle, prompt starts the call
        if (currentState === 'idle') {
          startConversation();
        }
      });
    });
  }

  // Expose Global Controller for Diagnostics & Testing
  window.RadiantAI = {
    startConversation,
    endConversation,
    getState: () => currentState,
    getMode: () => currentMode,
    isSDKLoaded: () => !!ConversationSDK
  };

})();
