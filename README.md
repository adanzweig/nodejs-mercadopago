# MercadoPago Integration in Node.js

This project demonstrates how to integrate MercadoPago's payment processing capabilities into a Node.js application. It provides a simple yet effective way of creating payment links using the MercadoPago API.

## Features

- Load environment variables for secure access token management.
- Initialize MercadoPago client with custom configurations.
- Create payment preferences and generate payment links.
- Handle error scenarios gracefully.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm or yarn
- A MercadoPago account

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```
   git clone https://github.com/adanzweig/nodejs-mercadopago.git
   ```
2. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Create a `.env` file in the root directory and add your MercadoPago `ACCESS_TOKEN`:
   ```
   ACCESS_TOKEN=your_access_token_here
   ```

## Usage

To use this project:

1. Run the script:
   ```
   node index.js
   ```
2. Check the console for the payment link.

## Running the Tests

Explain how to run the automated tests for this system (if applicable).

### Break down into end-to-end tests

Explain what these tests test and why.

### And coding style tests

Explain what these tests test and why.

## Deployment

Add additional notes about how to deploy this on a live system.