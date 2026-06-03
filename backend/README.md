# Backend (Django + DRF)

## Create & activate virtual environment (Windows)

From the repository root:

```bat
cd backend
python -m venv .venv
.
```

If the above line doesn’t expand correctly on your shell, use one of these:

**cmd.exe**
```bat
cd backend
python -m venv .venv
.
```

**PowerShell**
```powershell
cd backend
python -m venv .venv
.\.
```

(Choose the one that matches your shell.)

### Activate (copy/paste the correct line)

**cmd.exe**
```bat
cd backend
.venv\Scripts\activate.bat
```

**PowerShell**
```powershell
cd backend
.\venv\Scripts\Activate.ps1
```

## Install dependencies

```bat
pip install -r requirement.txt
```

## Run DB migrations

```bat
python manage.py migrate
```

## Run the server

```bat
python manage.py runserver
```

Server URL: http://127.0.0.1:8000

## Common notes

- Keep your virtual env out of git.
- This project uses `backend/requirement.txt` (note spelling: `requirement.txt`).

