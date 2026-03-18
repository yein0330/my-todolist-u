# 개발 환경 설정 가이드 (macOS)

## 사전 준비 — 프로젝트 파일 준비

GitHub 클론 대신 다운로드한 프로젝트 폴더를 사용합니다.

```bash
mkdir ~/vibe
cp -r ~/Downloads/my-todolist-u ~/vibe/
cd ~/vibe/my-todolist-u
```

---

## 1. Homebrew 설치

macOS 패키지 매니저입니다. 아직 없으면 먼저 설치하세요.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## 2. VS Code 설치

[https://code.visualstudio.com](https://code.visualstudio.com) 에서 Mac용 다운로드 후 설치

---

## 3. NVM + Node.js 설치

```bash
brew install nvm
```

설치 후 `~/.zshrc` 에 아래 두 줄 추가:

```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
```

> **주의**: 반드시 두 줄로 나눠서 입력하세요. 한 줄로 붙으면 파싱 에러가 납니다.

```bash
source ~/.zshrc
nvm install 24
nvm use 24
node -v   # v24.x.x 확인
```

---

## 4. Python 설치

```bash
brew install python
python3 --version
```

---

## 5. Git 설정

macOS는 Git이 기본 내장되어 있습니다. 초기 설정만 진행합니다.

```bash
git config --global user.name "영문이름"
git config --global user.email "이메일주소"
git config --global init.defaultBranch main
git config --global credential.helper osxkeychain
```

---

## 6. GitHub CLI 설치

```bash
brew install gh
gh auth login  # 브라우저 인증으로 GitHub 계정 연동
```

---

## 7. AI 에이전트 설치 (선택)

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @google/gemini-cli
npm install -g @qwen-code/qwen-code
```

> **주의**: `claude --version` 이 안 된다면 Homebrew Node와 NVM Node가 충돌하는 것입니다.
> ```bash
> brew unlink node
> brew uninstall node
> source ~/.zshrc
> npm install -g @anthropic-ai/claude-code
> ```

---

## 8. PostgreSQL 설치

macOS는 WSL/Docker 없이 Homebrew로 바로 설치할 수 있습니다.

```bash
brew install postgresql@17

# PATH 추가 (~/.zshrc 에 아래 줄 추가 후 저장)
export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"

source ~/.zshrc
brew services start postgresql@17
```

postgres 유저 생성 및 비밀번호 설정:

```bash
# macOS 기본 유저는 postgres가 아니라 현재 계정명입니다
psql postgres -c "CREATE USER postgres WITH SUPERUSER PASSWORD 'post';"
```

DB 초기화 (프로젝트 루트에서):

```bash
cd ~/vibe/my-todolist-u
bash tododb-setup.sh
# 비밀번호 입력 시: post
```

---

## 9. 의존성 설치

```bash
cd ~/vibe/my-todolist-u

cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

npm install
cd frontend && npm install
cd ../backend && npm install
```

node_modules 실행 권한 부여:

```bash
cd ~/vibe/my-todolist-u
chmod -R +x node_modules/.bin
chmod -R +x frontend/node_modules/.bin
chmod -R +x backend/node_modules/.bin
```

---

## 10. 실행

```bash
cd ~/vibe/my-todolist-u
npm run dev
```

| 서비스 | 주소 |
|---|---|
| 프론트엔드 | http://localhost:5173 |
| 백엔드 API | http://localhost:3000 |
| Swagger UI | http://localhost:3000/api-docs |

**테스트 계정:**

| 이메일 | 비밀번호 |
|---|---|
| alice@example.com | Password1! |
| bob@example.com | Password1! |

---

## 목서버로 실행 (백엔드 없이)

```bash
cd mockup && npm install && cd ..
npm run dev:mock
```

| 서비스 | 주소 |
|---|---|
| 목서버 API | http://localhost:4010/api |
| Swagger UI | http://localhost:4010/docs |
| 프론트엔드 | http://localhost:5173 |
