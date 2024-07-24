# PokeApi + React + TypeScript + Redux Toolkit

## Description

This project is a web application that consumes the PokeApi to display information on 151 different Pokemon.

## Characteristics

- **API consumption**: Obtaining data from the PokeApi.
- **React**: Development of reusable components.
- **TypeScript**: Static typing for greater robustness and code maintenance.
- **Redux Toolkit**: Efficient management of the global state of the application.
- **redux-persist**: Persistence of state in local storage.

## Instalation

```bash

# Install the dependencies
npm install
```

## Enviroment

For the application to work correctly, it is necessary to create a `.env` file in the root of the project with the following environment variable (This file is currently already provided in the repository):

```env
VITE_POKE_API_URL="https://pokeapi.co/api/v2"
VITE_POKE_API_GET_POKEMON="https://pokeapi.co/api/v2/pokemon"
VITE_POKE_API_LIMIT="?limit=151"
```

## Use

To start the application in development mode:

```bash
npm run dev
```

Then, open http://localhost:5173 to view the application in your browser.

## Contribute

Contributions are welcome. If you have any ideas or improvements, don't hesitate to open an issue or submit a pull request.
