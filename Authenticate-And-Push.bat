@echo off
title "Radiant Med Spa - GitHub Authentication and Push"
echo ================================================================
echo        RADIANT MED SPA - GITHUB AUTHENTICATION AND PUSH
echo ================================================================
echo.
echo Target Repository: https://github.com/AdnanAIWorks/Radiant-Med-Spa.git
echo Local Directory:   E:\Med Spa Website
echo Branch:            main
echo.
echo Starting GitHub push...
echo Your web browser may open to authorize GitHub.
echo If prompted, click 'Authorize git-ecosystem' to confirm.
echo.
cd /d "E:\Med Spa Website"
"C:\Users\h\AppData\Local\Programs\Git\cmd\git.exe" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================================
    echo  [SUCCESS] All files uploaded to GitHub!
    echo  Repository: https://github.com/AdnanAIWorks/Radiant-Med-Spa
    echo ================================================================
) else (
    echo.
    echo [NOTE] Push completed with exit code %ERRORLEVEL%.
)
echo.
echo You may close this window.
pause
