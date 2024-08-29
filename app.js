const express = require('express');
const path = require('path');

// Создаем экземпляр приложения Express
const app = express();

// Определяем порт, на котором будет слушать сервер
const port = 3000;

// Определяем путь к папке с нашими статическими файлами (HTML, CSS, JS)
const publicPath = path.join(__dirname, 'public');

// Говорим Express, что все файлы из папки 'public' должны быть доступны по их адресам
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'home.html'));
});


app.get('/about', (req, res) => {
  res.sendFile(path.join(publicPath, 'about.html'))
});

app.get('/sale', (req, res) => {
  res.sendFile(path.join(publicPath, 'sale.html'));
});


app.get('/food', (req, res) => {
  res.sendFile(path.join(publicPath, 'food.html'));
});

app.get('/movie', (req, res) => {
  res.sendFile(path.join(publicPath, 'movie.html'));
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
