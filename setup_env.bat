@echo off
title Установка окружения для Telegram Mini App
echo =============================================
echo 🔧 Установка Node.js, Serve и Cloudflared
echo =============================================

:: Проверка Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js не найден.
    echo 🔽 Загружаю установщик Node.js...
    powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi -OutFile nodejs_installer.msi"
    echo 📦 Устанавливаю Node.js...
    msiexec /i nodejs_installer.msi /quiet /norestart
    echo ✅ Node.js установлен.
) else (
    echo ✅ Node.js уже установлен.
)

:: Обновление переменных окружения
setx PATH "%PATH%;%ProgramFiles%\nodejs"

:: Установка serve
echo 🔧 Устанавливаю глобально 'serve' для запуска фронта...
npm install -g serve

:: Проверка Cloudflared
if not exist cloudflared.exe (
    echo 🌐 Загружаю cloudflared...
    powershell -Command "Invoke-WebRequest -Uri https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe -OutFile cloudflared.exe"
    echo ✅ cloudflared.exe загружен.
) else (
    echo ✅ cloudflared.exe уже существует.
)

echo =============================================
echo ✅ Окружение настроено. Теперь можешь запустить:
echo 👉  start_cf_tunnel.bat
echo =============================================
pause
