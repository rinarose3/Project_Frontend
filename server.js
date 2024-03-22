const express = require('express');
const path = require('path'); 
const db = require('./database.js');

const app = express();
const port = 8000;

// Задаем путь к статическим файлам
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    // Отправляем файл project.html
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Обработчик запроса на корень сайта
app.get('/plants', (req, res) => {
    // SQL-запрос для выборки всех данных из таблицы Plants
    const query = `
        SELECT p.id, p.Name, p.Photo_url, p.Price, GROUP_CONCAT(c.NameCountry) AS Country
        FROM Plants p
        INNER JOIN PlantCountry pc ON p.id = pc.PlantID
        INNER JOIN Countries c ON pc.CountryID = c.CountryID
        GROUP BY p.id, p.Name, p.Photo_url, p.Price;
    `;

    // Выполнение SQL-запроса
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Ошибка при выполнении запроса:', err.message);
            res.status(500).send('Внутренняя ошибка сервера');
            return;
        }

        // Отправка данных на клиент в формате JSON
        res.json(rows);
    });
});

app.get('/promotion', (req, res) => {
    // SQL-запрос для выборки всех данных из таблицы Promotions
    const query = `
        SELECT *
        FROM Promotions p
    `;

    // Выполнение SQL-запроса
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Ошибка при выполнении запроса:', err.message);
            res.status(500).send('Внутренняя ошибка сервера');
            return;
        }

        // Отправка данных на клиент в формате JSON
        res.json(rows);
    });
});

app.get('/contacts', (req, res) => {
    // SQL-запрос для выборки всех данных из таблицы Promotions
    const query = `
        SELECT *
        FROM Contacts
    `;

    // Выполнение SQL-запроса
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Ошибка при выполнении запроса:', err.message);
            res.status(500).send('Внутренняя ошибка сервера');
            return;
        }

        // Отправка данных на клиент в формате JSON
        res.json(rows);
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});