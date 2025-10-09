@echo off
echo Building Twine game...

:: Create build directory if it doesn't exist
if not exist "build" mkdir build

:: Build the game with Tweego
..\tweego -o build/game.html passages/ scripts/ styles/

:: Copy images to build directory
if exist "img" (
    echo Copying images...
    xcopy /E /I /Y img build\img
    echo Images copied to build\img\
) else (
    echo No img directory found
)

:: Copy index.html for local testing
if exist "index.html" (
    copy index.html build\index.html
    echo Landing page copied
)

echo.
echo Build complete! Files in build\ directory:
dir build

echo.
echo Open build\game.html to play locally
echo Or open build\index.html for the landing page