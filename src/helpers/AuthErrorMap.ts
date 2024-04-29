export default {
  'auth/user-not-found': 'Пользователь с таким Email не найден',
  'auth/wrong-password': 'Неверный пароль',
  'auth/weak-password': 'Пароль должен состоять из 6 символов',
  'auth/too-many-requests':
    'Из-за многочисленных неудачных попыток запрос был отклонен. Повторите попытку позже',
  'auth/email-already-in-use': 'Пользователь с таким Email уже зарегистрирован',

  'login-unknown-error': 'Произошла ошибка при авторизации. Попробуйте позже',
  'register-unknown-error':
    'Произошла ошибка при регистрации. Попробуйте позже',
  'logout-unknown-error':
    'Произошла ошибка при попытке выхода из аккаунта. Попробуйте позже',
  'updateName-unknown-error':
    'Произошла ошибка при смене имени. Попробуйте позже',
  'updateEmail-unknown-error':
    'Произошла ошибка при смене Email. Попробуйте позже',
  'updatePassword-unknown-error':
    'Произошла ошибка при смене пароля. Попробуйте позже',
  'deleteAccount-unknown-error':
    'Произошла ошибка при удалении аккаунта. Попробуйте позже',
} as Record<string, string>;
