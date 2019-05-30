# Nest Typescript example with TypeORM PostgreSQL database and Code first GraphQL

## TL;DR
This is a combination of official Nest samples:

- [05-sql-typeorm](https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm)
- [23-type-graphql](https://github.com/nestjs/nest/tree/master/sample/23-type-graphql)

## Database
We need PostgreSQL database for the *sql-typeorm* part:

- `docker pull postgres`
- `docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres`
