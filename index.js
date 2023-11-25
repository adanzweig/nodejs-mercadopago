// Load environment variables from a .env file
require('dotenv').config();

// Import the necessary classes from the MercadoPago package
const { MercadoPagoConfig, Preference } = require('mercadopago');

// Initialize the MercadoPago client with your access token and a custom timeout option
const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
    option: { timeout: 5000 }
});

// Create a new Preference instance, which is used to manage payment preferences
const preference = new Preference(client);

// Define an asynchronous function to create a payment link
async function createPaymentLink(id, title, amount, quantity) {
    try {
        // Attempt to create a payment preference with the given details
        const paymentRequest = await preference.create({
            body: {
                items: [
                    {
                        id,
                        title,
                        quantity,
                        unit_price: amount
                    }
                ]
            }
        });
        // Return the sandbox initialization point URL for testing
        return paymentRequest.sandbox_init_point;
    } catch (error) {
        // Log any errors that occur during the process
        console.error('error', error);
    }
}

// Immediately-invoked function to execute the payment link creation process
(async () => {
    // Create a payment link for a specific item and log the result
    const paymentLink = await createPaymentLink(1234, 'Tutorial', 100, 3);
    console.log(paymentLink);
})();
