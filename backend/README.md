<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description
The backend is developed in NestJS, utilizing the PostgreSQL database platform from Neon Serverless, supported by Prisma ORM for table creation and data management.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Endpoint
```
GET http://localhost:3000/machine-data

GET http://localhost:3000/machine-data?status=[Operando | Parada para manutenção | Desligada]

POST http://localhost:3000/machine-data

PATCH http://localhost:3000/machine-data/[id]

DELETE http://localhost:3000/machine-data/[id]
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
