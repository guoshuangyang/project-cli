import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import legacy from '@vitejs/plugin-legacy'
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import {
  VantResolver
} from "unplugin-vue-components/resolvers";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 兼容不兼容的问题
    // legacy(),
    VueJsx(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [VantResolver()],
    }),
    Components({
      dirs: ["src/components"],
      include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/, /\.js$/],
      resolvers: [
        VantResolver({
          importStyle: "less"
        }),
        IconsResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ]
})