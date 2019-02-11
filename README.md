# Weeknd

Projeto cobaia com a finalidade de aprendizado.

## Dependencias / .. Dev

```
"dependencies": {
    "body-parser": "^1.18.3",
    "consign": "^0.1.6",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "express-validator": "^5.3.1",
    "mysql": "^2.16.0",
    "node-sass": "^4.11.0"
  },
 "devDependencies": {
    "nodemon": "^1.18.10"
  }
```

## Start

```bash
"scripts": {
    "dev": "nodemon app/app",
    "sass": "node-sass public/styles/sass/master.sass -wo public/styles/css"
  },
```

## DDL
```sql
    CREATE TABLE `news` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `title` varchar(100) NOT NULL,
      `content` text NOT NULL,
      `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
      `resumo` varchar(100) DEFAULT NULL,
      `author` varchar(30) DEFAULT NULL,
      `data` date DEFAULT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
