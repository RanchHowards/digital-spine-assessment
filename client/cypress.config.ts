import { defineConfig } from "cypress";
import dotenv from "dotenv";
// Populate process.env with values from .env file
dotenv.config();

export default defineConfig({
  env: {
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
    auth0_audience: process.env.REACT_APP_API_AUDIENCE,
    auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
    auth0_client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
