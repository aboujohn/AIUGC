@echo off
echo Setting up Git repository...

"C:\Program Files\Git\cmd\git.exe" init
"C:\Program Files\Git\cmd\git.exe" config --global user.email "abou.john@gmail.com"
"C:\Program Files\Git\cmd\git.exe" config --global user.name "aboujohn"

echo Creating initial commit...
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Initial commit: Project setup with Next.js, TypeScript, and tooling"

echo Setting up remote repository...
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/aboujohn/AIUGC.git
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo Repository initialized successfully!
echo.
echo To complete setup, run:
echo git push -u origin main 