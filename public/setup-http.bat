@echo off
echo Установка Node.js и http-server...
winget install OpenJS.NodeJS -e --id OpenJS.NodeJS -h
call npm install -g http-server
pause
