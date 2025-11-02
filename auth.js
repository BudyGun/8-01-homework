// Учетные данные (можно изменить здесь)
const CREDENTIALS = {
    username: 'admin',
    password: 'password'
};

// Ключ для хранения в localStorage
const AUTH_KEY = 'isAuthenticated';

/**
 * Проверка логина и пароля
 * @param {string} username - Логин пользователя
 * @param {string} password - Пароль пользователя
 * @returns {boolean} - true если данные верны
 */
function login(username, password) {
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
        // Сохраняем состояние авторизации
        localStorage.setItem(AUTH_KEY, 'true');
        localStorage.setItem('loginTime', new Date().toISOString());
        return true;
    }
    return false;
}

/**
 * Выход из системы
 */
function logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem('loginTime');
    window.location.href = 'login.html';
}

/**
 * Проверка авторизации
 * @returns {boolean} - true если пользователь авторизован
 */
function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
}

/**
 * Защита страницы - перенаправление на login.html если не авторизован
 */
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

/**
 * Получение времени входа
 * @returns {string} - Время входа в систему
 */
function getLoginTime() {
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
        const date = new Date(loginTime);
        return date.toLocaleString('ru-RU');
    }
    return 'Неизвестно';
}
