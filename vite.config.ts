import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  // ...
  return {
    base: '/chandan-adhikari-portfolio/', // Replace 'portfolio' with your actual GitHub repo name
    plugins: [react(), tailwindcss()],
    // ...
  };
});
