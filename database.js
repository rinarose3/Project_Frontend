const sqlite3 = require('sqlite3').verbose();

// Создание и инициализация объекта базы данных
const db = new sqlite3.Database('DataBase.db', (err) => {
    if (err) {
        console.error('Ошибка при подключении к базе данных:', err.message);
    } else {
        console.log('Подключение к базе данных успешно');
    }
});

module.exports = db;