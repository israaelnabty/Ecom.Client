# EcomClient (Angular 20)

A modern, responsive **E-Commerce frontend client** built with **Angular 20**.  
This project serves as the presentation layer for the [Ecom Backend API](https://github.com/YourUsername/Ecom-Backend), providing a seamless shopping experience with authentication, cart management, order tracking, and address selection via interactive maps.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## 🚀 Features

### 🛒 Core Functionality
- Product browsing with categories and brands.
- Shopping cart with persistent state.
- Checkout flow integrated with backend orders.
- Address management with **Leaflet + OpenStreetMap** (users can select delivery addresses directly on a map).

### 🔐 Authentication
- JWT Authentication with secure token storage.
- Google OAuth 2.0 login.
- Role-based UI (Admin vs Customer).

### 📦 Order Management
- Place and track orders in real time.
- Display order history and statuses.
- Integration with backend tracking numbers.

### 🌍 Localization & Globalization
- Multi-language support (English, Arabic).
- Currency and date formatting based on locale.

---

## 🛠 Tech Stack
- **Framework**: Angular 20
- **UI**: Angular Material + Bootstrap
- **Maps**: Leaflet + OpenStreetMap
- **State Management**: Angular Signals / Services
- **Testing**: Karma + Jasmine (unit tests), Cypress/Playwright (e2e optional)
- **API Integration**: ASP.NET Core Web API backend

---


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
