## Prerequisites

You will need a Postgres database installed locally. Once you have a Postgres database running, create a `.env` file and modify the values accordingly.

```bash
HOST=<YOUR_HOST>
DB_PORT=<YOUR_DATABASE_PORT>
USERNAME=<YOUR_DATABASE_USERNAME>
PASSWORD=<YOUR_DATABASE_PASSWORD>
DATABASE=<YOUR_DATABASE>
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
