<<<<<<< HEAD:elewa-frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
=======
const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
>>>>>>> origin/ayimdomnic/tal-15-talents-chat-backend-setup:apps/elewa/tailwind.config.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
<<<<<<< HEAD:elewa-frontend/tailwind.config.js
}
=======
};
>>>>>>> origin/ayimdomnic/tal-15-talents-chat-backend-setup:apps/elewa/tailwind.config.js
