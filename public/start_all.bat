@echo off
start cmd /k "http-server public -p 3000"
start "" "C:\Users\host\Desktop\tgminiapp-main\xtunnel.exe" 3000
