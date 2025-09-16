import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    allowOnly: true,
    setupFiles: './src/test/setup.jsx',
    setupFilesAfterEnv: ['./src/test/setup.jsx'],
    css: false, 
    exclude: [...configDefaults.exclude, 'path/to/exclude/**/*'],
    resolveSnapshotPath: (testPath, snapExtension) => {
      const testsFolderPath = path.join(__dirname, 'tests');
      const snapshotPath = path.join(testsFolderPath, testPath + snapExtension);
      return snapshotPath;
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './tests/unit/coverage',
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx}'],
    },
  }
})


