import Stripe from "stripe";
import { version } from '../../package.json';

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error("A variável de ambiente STRIPE_API_KEY não está definida.");
}

export const stripe = new Stripe(
    stripeApiKey,
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'Ignews',
            version
        },
    }
);