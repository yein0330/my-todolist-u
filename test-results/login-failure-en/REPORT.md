# Login Failure E2E Test Report (EN UI)

- **Date**: 2026-03-04
- **Spec**: `e2e/login-failure-en.spec.ts`
- **Browser**: Chromium (headless)
- **Locale**: English (en)
- **Result**: 7 passed / 0 failed

---

## Test Cases

| # | Test Case | Status | Screenshot |
|---|---|---|---|
| 1 | Empty email and password | PASS | [01-empty-fields.png](./01-empty-fields.png) |
| 2 | Invalid email format (no @) | PASS | [02-invalid-email-format.png](./02-invalid-email-format.png) |
| 3 | Non-existent email | PASS | [03-nonexistent-email.png](./03-nonexistent-email.png) |
| 4 | Correct email, wrong password | PASS | [04-wrong-password.png](./04-wrong-password.png) |
| 5 | Email only, password empty | PASS | [05-missing-password.png](./05-missing-password.png) |
| 6 | Password only, email empty | PASS | [06-missing-email.png](./06-missing-email.png) |
| 7 | Whitespace-only password | PASS | [07-whitespace-password.png](./07-whitespace-password.png) |

---

## Notes

- 언어 설정은 `localStorage.setItem('locale', 'en')` 으로 적용
- 3, 4, 7번 케이스는 백엔드 API 호출이 필요 (`npm run dev` 실행 상태에서 테스트)
- 1, 2, 5, 6번 케이스는 프론트엔드 유효성 검사로 처리 (API 호출 없음)
