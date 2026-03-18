interface ValidationError {
  field: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignup(
  email: unknown,
  password: unknown,
  name: unknown
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    errors.push({ field: 'email', message: '이메일 형식이 올바르지 않습니다.' });
  }

  if (
    typeof password !== 'string' ||
    password.length < 8 ||
    !/[a-zA-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    errors.push({
      field: 'password',
      message: '비밀번호는 최소 8자이며 영문과 숫자를 혼용해야 합니다.',
    });
  }

  if (typeof name !== 'string' || name.trim().length === 0) {
    errors.push({ field: 'name', message: '이름은 필수 입력 항목입니다.' });
  }

  return errors;
}

export function validateLogin(
  email: unknown,
  password: unknown
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    errors.push({ field: 'email', message: '이메일 형식이 올바르지 않습니다.' });
  }

  if (typeof password !== 'string' || password.length === 0) {
    errors.push({ field: 'password', message: '비밀번호는 필수 입력 항목입니다.' });
  }

  return errors;
}

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export function validateCreateTodo(
  title: unknown,
  start_date: unknown,
  due_date: unknown,
  description?: unknown
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (typeof title !== 'string' || title.trim().length === 0) {
    errors.push({ field: 'title', message: '제목은 필수 입력 항목입니다.' });
  } else if (title.length > 255) {
    errors.push({ field: 'title', message: '제목은 1자 이상 255자 이하이어야 합니다.' });
  }

  const checkDate = (date: unknown, field: string, label: string) => {
    if (typeof date !== 'string' || !DATE_REGEX.test(date)) {
      errors.push({ field, message: `${label}은 YYYY-MM-DD 형식이어야 합니다.` });
      return false;
    }
    const [year, month, day] = date.split('-').map(Number);
    const d = new Date(Date.UTC(year, month - 1, day));
    if (d.getUTCFullYear() !== year || d.getUTCMonth() + 1 !== month || d.getUTCDate() !== day) {
      errors.push({ field, message: `${label}은 YYYY-MM-DD 형식이어야 합니다.` });
      return false;
    }
    return true;
  };

  const isStartValid = checkDate(start_date, 'start_date', '시작일');
  const isDueValid = checkDate(due_date, 'due_date', '마감일');

  if (isStartValid && isDueValid) {
    if (start_date! > due_date!) {
      errors.push({ field: 'start_date', message: '시작일은 마감일보다 늦을 수 없습니다.' });
    }
  }

  if (description !== undefined && description !== null) {
    if (typeof description !== 'string' || description.length > 1000) {
      errors.push({ field: 'description', message: '설명은 최대 1000자까지 입력할 수 있습니다.' });
    }
  }

  return errors;
}

export function validateUpdateTodo(
  title: unknown,
  start_date: unknown,
  due_date: unknown,
  description?: unknown,
  status?: unknown
): ValidationError[] {
  const errors = validateCreateTodo(title, start_date, due_date, description);

  if (status !== undefined && status !== 'pending' && status !== 'completed') {
    errors.push({
      field: 'status',
      message: "status는 'pending' 또는 'completed'이어야 합니다.",
    });
  }

  return errors;
}
