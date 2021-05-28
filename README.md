
<h1 align="center">
  <img src="https://i.imgur.com/uzXoW0I.png" alt="Origin" width="250px">
</h1>
<p align="center">
	<img src="https://img.shields.io/github/languages/top/waugustoaf/gobarber-back?style=flat-square&logo=appveyor" />
	<img src="https://img.shields.io/github/repo-size/waugustoaf/gobarber-back?style=flat-square&logo=appveyor" />
	<img src="https://img.shields.io/github/last-commit/waugustoaf/gobarber-back?style=flat-square&logo=appveyor" />
	<img src="https://img.shields.io/github/license/waugustoaf/gobarber-back?style=flat-square&logo=appveyor" />
</p>


<h3 align="center">
  From scissors to razor - Your chance to wake up beautifulest tomorrow
</h3>


<p align="center">
  <a href="#house-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-installation">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bug-issues">Issues</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-license">License</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<br>


## :house: About the project

REST API built with Node.js which allows requests from the mobile and web app to connect so that customers can make an appointment with a barber

Customers can choose the best schedule available to them.


See the **mobile app here**: [GoBarber Mobile](https://github.com/waugustoaf/gobarber-mobile)
See the **website here**: [GoBarber Web](https://github.com/waugustoaf/gobarber-web)
<br>

## :computer: Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


<br>

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/)  and [Docker](https://www.docker.com/) first, then in order to clone the project via HTTPS, run this command:**

```$ git clone https://github.com/waugustoaf/gobarber-back.git```

<br>

**Install dependencies**

```$ npm install```

<br>

**Create excluded files from example and custom it like as needed**
```$ cp .env.example .env```
```$ cp ormconfig.example.json ormconfig.json```

<br>

**Run dockers containers**
```$ docker run --name gobarber-postgres -e POSTGRES_USER=docker -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres```

```$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo```
```$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine```

<br>

**Create database tables**
```$ yarn typeorm migration:run```

<br>

# :runner: Getting Started

Run the following commands in order to start the application in a development environment:

 ```$ yarn dev:server```

*Enjoy!*

<br>


# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [Origin Take-Home Assignment](https://github.com/waugustoaf/gobarber-back/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!.

<br>


# :page_with_curl: License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/waugustoaf/gobarber-back/blob/master/LICENSE) file for details.

<br>
<h1>




Made with ♥ by waugustoaf - Augusto Fernandes :wave: [Get in touch!](https://www.linkedin.com/in/waugustoaf/)
