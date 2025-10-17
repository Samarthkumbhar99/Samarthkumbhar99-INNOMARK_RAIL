@echo off
echo ========================================
echo   Railway Component Management System
echo ========================================
echo.
echo Stopping any existing Node.js processes...
taskkill /F /IM node.exe >nul 2>&1

echo.
echo Starting application with Firebase integration...
echo.
echo 🔥 Firebase Project: innomarkrv
echo 🌐 Application URL: http://localhost:3003
echo 📊 Check browser console for Firebase connection status
echo.
echo Starting development server...
echo.

npm run dev
