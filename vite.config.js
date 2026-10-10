
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/motos-shaft1/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        inicio: resolve(root, 'src/pages/Inicio.html'),
        nosotros: resolve(root, 'src/pages/nosotros.html'),
        productos: resolve(root, 'src/pages/productos.html'),
      },
    },
  },
})
