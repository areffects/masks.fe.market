# Masks Front

The client side application based on [Next.js](https://nextjs.org/).

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install:

- `node=12.16.1` (recommend to use [nvm](https://github.com/nvm-sh/nvm) to manage version multiple active node.js versions)

### Installing

*If you use `nvm`, you should to execute the next command:

```bash
nvm use
```

To the first you need to clone project:

```bash
git clone git@github.com:lossless1/masks.fe.git
```

Next you should to install npm dependencies of project:

```bash
yarn
```

### Usage

You should create the `.env` file with necessary variables. You can take them from the `.env.example`.

#### Development environment

#### Locally

The development environment are based on [node.js](https://nodejs.org/). You can run `dev` environment using next npm command:

App

```bash
yarn dev
```

Storybook

```bash
yarn storybook
```

#### Docker

App

```bash
# Build image
docker-compose build app

# Run image
docker-compose up -d app
```

Storybook

```bash
# Build image
docker-compose build storybook

# Run image
docker-compose up -d storybook
```

#### Production environment

```bash
# Build app
yarn build

# Run builded app
./node_modules/.bin/next start
```

### Apollo Graphql

Need to write.

### Linter

Need to write.

### End-to-end testing

Need to write.

### Unit testing

Need to write.

### Deploy

Need to write.
