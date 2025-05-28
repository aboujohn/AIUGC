@echo off
echo Committing changes...
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "docs: add GitHub templates and Git workflow conventions"
"C:\Program Files\Git\cmd\git.exe" push origin develop 