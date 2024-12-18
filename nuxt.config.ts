// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Set compatibility date for Nuxt features
  compatibilityDate: '2024-11-01',
  // Enable Nuxt devtools for development
  devtools: { enabled: true },
  // Register Nuxt modules
  modules: [
    '@nuxt/icon', // Icons support
    'nuxt-lodash', // Lodash utility functions
    '@pinia/nuxt', // State management
    '@pinia-plugin-persistedstate/nuxt', // Persist Pinia state
    '@nuxtjs/tailwindcss', // CSS framework
    '@nuxtjs/supabase' // Backend integration
  ],
  // Runtime configuration
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY // Stripe public key
    }
  },
  // App configuration
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true } // Load Stripe JS library
      ]
    }
  }
})
