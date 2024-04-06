## Prerequisites

You will need a Postgres database installed locally. You will also need to update the `orm.config.ts` details to be able to connect to your database. You will also need to create a `.env` file and modify the values accordingly.

```bash
HOST=<HOST>
PORT=<PORT>
USERNAME=<USERNAME>
PASSWORD=<PASSWORD>
DATABASE=<DATABASE>
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
