import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite'



// https://vitejs.dev/config/
export default defineConfig({
  build: {
    reportCompressedSize: false
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    vue(),
    ElementPlus(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
