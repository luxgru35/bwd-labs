const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики для обработки CSS-файлов
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Поддержка форматов изображений
        type: 'asset/resource', // Автоматически копирует изображения в `dist`
      },
    ],
  },

  plugins: [
    // Плагин для главной страницы
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон для mainPage
      inject: true,
      chunks: ['index'], // Использовать только основной chunk
      filename: 'index.html', // Выходной файл для этой страницы
    }),

    // Плагин для страницы проекта
    new HtmlWebpackPlugin({
      template: './src/projectpage.html', // Шаблон для projectpage
      inject: true,
      chunks: ['index'],
      filename: 'projectpage.html',
    }),

    // Плагин для страницы задач
    new HtmlWebpackPlugin({
      template: './src/tasks.html', // Шаблон для tasks
      inject: true,
      chunks: ['index'],
      filename: 'tasks.html',
    }),

    // Плагин для страницы добавления
    new HtmlWebpackPlugin({
      template: './src/add.html', // Шаблон для add
      inject: true,
      chunks: ['index'],
      filename: 'add.html',
    }),

    // Плагин для страницы "О приложении"
    new HtmlWebpackPlugin({
      template: './src/aboutpage.html', // Шаблон для aboutpage
      inject: true,
      chunks: ['index'],
      filename: 'aboutpage.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/images'), to: 'images' },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};
