# 개발 환경 설정 가이드

## 1. VS Code 설치

- [https://code.visualstudio.com](https://code.visualstudio.com) 에서 다운로드 후 설치

---

## 2. NVM 설치 (Node.js 버전 관리)

### 2.1 NVM 설치
- [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) 에서 `nvm-setup.exe` 다운로드 후 설치

### 2.2 PowerShell에서 Node.js 설치

```powershell
nvm install 24
nvm use 24
node -v
npm -v
```

---

## 3. Python 3.13 이상 설치

- [https://www.python.org/downloads/](https://www.python.org/downloads/) 에서 최신 버전 다운로드
- 설치 첫 화면에서 **`Add Python.exe to Path`** 체크 후 **`Install Now`** 클릭

---

## 4. GitHub 계정 생성

- [https://github.com](https://github.com) 에서 계정 생성

---

## 5. Git 설치 및 설정

### 5.1 Git 설치
- [https://git-scm.com/downloads/win](https://git-scm.com/downloads/win) 에서 **64-bit Git for Windows Setup** 다운로드
- 설치 중 **`Select components`** 화면에서 **`(New) Add a git bash profile to Windows Terminal`** 항목 체크

### 5.2 Git 초기 설정 (Windows 터미널에서 실행)

```bash
git config --global user.name "자신의 영문이름"
git config --global user.email "자신의 이메일 주소"
git config --global init.defaultBranch main
git config --global credential.helper store
git config --global core.editor "notepad"
git config --list
```

---

## 6. GitHub CLI (gh) 설치

```powershell
winget install --id GitHub.cli
```

---

## 7. AI Coding Agent 설치

```bash
# Claude Code
npm install -g @anthropic-ai/claude-code
claude --version

# Qwen
npm install -g @qwen-code/qwen-code

# Gemini CLI
npm install -g @google/gemini-cli
```

---

## 8. Docker 설치

### 8.1 WSL 설치 (Windows 터미널에서)

```powershell
wsl --install
```

### 8.2 시스템 아키텍처 확인

**설정 > 시스템 > 정보 > 시스템 종류** 확인:

| 표시 내용 | 아키텍처 |
|---|---|
| 64비트 운영 체제, x64 기반 프로세서 | AMD64 (Intel/AMD CPU) |
| 64비트 운영 체제, ARM 기반 프로세서 | ARM64 (스냅드래곤 등) |

### 8.3 Docker Desktop 설치
- [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/) 에서 다운로드
- 설치 옵션:
  - **`Use WSL 2 instead of Hyper-V`**: 반드시 체크
  - **`Allow Windows containers...`**: 체크하지 않음

### 8.4 Ubuntu 설치 (Windows 터미널에서)

```powershell
node --version
wsl --install -d Ubuntu
# 계정: sogang / 비밀번호: root
```

### 8.5 Node.js 설치 (Ubuntu 터미널에서)

```bash
node --version
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
sudo npm install -g @anthropic-ai/claude-code
```

### 8.6 Git 설치 및 설정 (Ubuntu 터미널에서)

```bash
sudo apt-get update
sudo apt-get install -y git
git config --global user.name "sujinchoi-u"
git config --global user.email "sujinchoi@u.sogang.ac.kr"
git config --global init.defaultBranch main
git config --global credential.helper store
git config --global core.editor "notepad"
git config --list
```

---

## 9. 프로젝트 클론 (Ubuntu 터미널에서)

```bash
git clone https://github.com/sujinchoi-u/my-todolist-u
```

## 10. Claude를 Ubuntu 샌드박스 환경에서 호출

```bash
wsl          # Ubuntu 진입
claude       # Claude 실행
/usage       # 명령 실행해보기
```