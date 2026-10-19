# Radiant Med Spa — GitHub Push Helper Script
param(
    [string]$Message = "Update Radiant Med Spa website"
)

$ErrorActionPreference = "Stop"

$gitExe = "C:\Users\h\AppData\Local\Programs\Git\cmd\git.exe"
if (!(Test-Path $gitExe)) {
    $found = Get-Command git -ErrorAction SilentlyContinue
    if ($found) { $gitExe = $found.Source }
}

if (!(Test-Path $gitExe)) {
    Write-Error "Git executable not found at $gitExe"
    exit 1
}

Write-Host "Checking Git status..." -ForegroundColor Cyan
Set-Location -Path $PSScriptRoot

& $gitExe add .

$changes = & $gitExe status --porcelain
if ($changes) {
    Write-Host "Committing changes..." -ForegroundColor Green
    & $gitExe commit -m $Message
} else {
    Write-Host "Working tree clean. No new changes to commit." -ForegroundColor Yellow
}

Write-Host "Pushing to origin main..." -ForegroundColor Cyan
& $gitExe push -u origin main
