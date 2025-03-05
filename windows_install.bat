@echo off
setlocal enabledelayedexpansion

REM ��ȡ�ű�����Ŀ¼����Ŀ��Ŀ¼��
set "ROOT_DIR=%~dp0"
cd /d "%ROOT_DIR%"

REM ROOT_DIR ��ֵ
echo ROOT_DIR: %ROOT_DIR%

echo 1. ��鲢��װuv
where uv >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing uv...
    powershell -Command "irm https://astral.sh/uv/install.ps1 | iex"
    if errorlevel 1 (
        echo ��װuvʧ�ܣ����ֶ���װ������
        exit /b 1
    )
)

echo 2. ���Python 3.11���⻷��
if not exist ".venv\" (
    echo ����Python 3.11���⻷��...
    uv venv --python=3.11 .venv
    if errorlevel 1 (
        echo �������⻷��ʧ��
        exit /b 1
    )
)

echo �������⻷��
call .venv\Scripts\activate.bat

echo 3. ��װ���ذ�
echo ��װ����������...
@REM pip install wheel
uv pip install "%ROOT_DIR%package/pytdx-1.72r2-py3-none-any.whl"
uv pip install "%ROOT_DIR%package/ta_lib-0.4.25-cp311-cp311-win_amd64.whl"

echo 4. ��������ļ�
if not exist "%ROOT_DIR%src\chanlun\config.py" (
    echo ���������ļ�...
    copy "%ROOT_DIR%src\chanlun\config.py.demo" "%ROOT_DIR%src\chanlun\config.py" >nul
)

echo 5. ��װrequirements.txt����
if exist "%ROOT_DIR%requirements.txt" (
    echo ��װ��Ŀ����...
    uv pip install -r "%ROOT_DIR%requirements.txt"
)

echo REM 6. ���û�������
set "PYTHONPATH=%ROOT_DIR%src"
echo ����PYTHONPATH: !PYTHONPATH!

echo 7. ���л������ű�
if exist "%ROOT_DIR%check_env.py" (
    uv run "%ROOT_DIR%check_env.py"
)

echo ����������ɣ�
pause
