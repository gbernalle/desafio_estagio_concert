<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description
The backend is developed in NestJS, utilizing the PostgreSQL database platform from Neon Serverless, supported by Prisma ORM for table creation and data management.

## Info

Fiz o deploy da aplicação apenas para o backend. Será possível assim testar usando ferramentas como o insomnia e o postman, seguindo os enpoints no fim do arquivo.

```
Para requisições do tipo post e patch, seguir esse formato de json no corpo da requisição:

{
	"name": "Nova Máquina 3000",
	"location": "-4,23342343 -2,123",
	"status": "Desligada"
}
```
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
GET http://https://desafio-estagio-concert.onrender.com/machine-data

GET https://desafio-estagio-concert.onrender.com/machine-data?status=[Operando | Parada para manutenção | Desligada]

POST https://desafio-estagio-concert.onrender.com/machine-data

PATCH https://desafio-estagio-concert.onrender.com/machine-data/[id]

DELETE https://desafio-estagio-concert.onrender.com/machine-data/[id]
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
