@echo off
title Flask App + x-tunnel

REM Запуск Flask-сервера
start cmd /k "python app.py"

REM Подождать 3 секунды, пока Flask стартует
timeout /t 3 > nul

REM Запустить туннель на порт 3000
start cmd /k "xtunnel.exe --url http://localhost:3000"
