# Compose Express App

Compose Express App is a TypeScript-powered generator for quickly scaffolding Express.js applications. It provides a streamlined setup with essential tools and configurations to kickstart your Express projects.

## Features

- **Express.js Web Application with TypeScript**: Scaffold a robust Express.js application using TypeScript for enhanced type safety and modern JavaScript features.
- **Middleware for Handling CORS**: Built-in middleware for handling Cross-Origin Resource Sharing (CORS) to secure your API endpoints.
- **Environment Variable Configuration**: Integrated dotenv for managing environment variables conveniently, allowing seamless configuration across different environments.
- **Development Server with Automatic Code Reloading**: Utilize nodemon for automatic server reloading during development, providing a smooth development experience.
- **Testing Environment with Jest and Supertest**: Includes Jest for unit testing and Supertest for testing HTTP requests, ensuring robust and reliable code.
- **HTTP Request Logging with Morgan**: Integrated Morgan for logging HTTP requests, helping in debugging and monitoring the application's behavior.
- **Webpack Support**: Utilize webpack for bundling TypeScript code into a production-ready bundle, optimizing performance and deployment.

## Installation

To use Compose Express App, you can run it directly using npx without installing it globally. Ensure you have Node.js installed on your machine. Run the following command to scaffold a new Express app:

```bash
npx compose-express-app my-express-app
```

Replace `my-express-app` with the name of your project directory. This command will download and run the latest version of Compose Express App, creating a new Express app with the necessary files and configurations.

## Scripts

- `npm run build`: Build the TypeScript code using webpack for production.
- `npm run dev`: Run webpack in watch mode for development.
- `npm run serve`: Start the server using nodemon for automatic reloading.
- `npm start`: Concurrently run development mode and server for a seamless workflow.
- `npm run coverage`: Run Jest with coverage reporting.
- `npm test`: Run Jest in watch mode for continuous testing.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request. Please follow the code style and include tests for new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [Harshal Limaye](https://github.com/harshalslimaye)
- Email: [harshal.limaye@outlook.com](mailto:harshal.limaye@outlook.com)
