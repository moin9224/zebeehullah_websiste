@echo off
echo ========================================================
echo        ONE-CLICK GITHUB REPOSITORY UPLOADER
echo ========================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/username/repo.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo [1/3] Adding all files and preparing commit...
git add .
git commit -m "Upload project files" >nul 2>&1

echo [2/3] Setting main branch and remote origin...
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [3/3] Uploading all files to GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   SUCCESS! All files uploaded to your GitHub repository!
    echo ========================================================
) else (
    echo [NOTICE] If prompted, please complete GitHub sign-in in your browser window.
)

pause
