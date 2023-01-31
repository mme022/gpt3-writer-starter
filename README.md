# GPT3-Writer-Starter

[![GitHub license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

This is a template to get started with GPT-3 and OpenAI's API quick and easy. It is a full stack application built with Next.js and React in the frontend and Node.js in the backend.

## Table of Contents

- [GPT3-Writer-Starter](#gpt3-writer-starter)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)

## About The Project

This project is intended to provide an easy starting point to use OpenAI's GPT-3 API. It provides a React component which can be used to access the API and show the result of your query.

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repo

```sh
git clone https://github.com/mme022/gpt3-writer-starter.git
```

2. Install Yarn packages

```sh
yarn
```

3. Create a .env file based on the env.example

```sh
cp env.example .env
```

4. Add your OpenAI API key to the .env file

## Usage

To start the application run

```sh
yarn dev
```

This will start the application at http://localhost:3000/

To use the GPT-3 component import it into your React component as follows:

```jsx
import GPT3 from "./GPT3";

<GPT3 apiKey={process.env.API_KEY} />;
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

[mme](https://github.com/mme022)

## Acknowledgements

- [GitHub Pages](https://pages.github.com)
- [OpenAI](https://openai.com/)
