import baseConfig from 'abruno-dev-config/prettier';

export default {
  ...baseConfig,
  singleQuote: true, // Explicitly set single quotes
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true, // Ensure Astro files also use single quotes
      },
    },
  ],
};
