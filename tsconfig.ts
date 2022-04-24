import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  //配置目录别名
  plugins: [vue()],
  //css预处理配置 全局引入scss文件
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData:
          ` @import "/@assets/scss/mixin"; @import "/@assets/scss/variable";` 
      }
    }
  },
  server: {
    open: false, // 项目启动完成后是否自动在浏览器打开
    port: 4000, // 项目启动端口
    host: '0.0.0.0', //解决项目启动后，控制台出现 Network: use `--host` to expose的问题
    https: false,// 使用的是http协议则设置为false，https协议则设置为true
    //配置请求代理
    proxy: {
      '/api': {
        //所有的接口请求都会被代理到这个路径上，后台网关地址为http://127.0.0.1:10000/，所以配置的是这个
        target: 'http://127.0.0.1:10000/',
        /**
         * 重写路径，api及之前的会被替换为target的内容
         * 当我们在浏览器中看到请求的地址为：http://127.0.0.1/api/account-server/user/login
         * 实际上访问的地址是：http://127.0.0.1:10000/account-server/user/login
         */
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: true, // 是否启用webSockets
        secure: false, // 使用的是http协议则设置为false 安全证书校验
        //是否开启跨域 前后端分离项目此项开启
        changeOrigin: true,
      }
    }
  },
  //项目打包配置
  build: {
    target: "modules",
    outDir: "dist", // 打包文件指定输出路径
    assetsDir: "static", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器,terser构建后文件体积更小
    // 移除console
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true, // 生产环境移除debugger
      },
    },
    //配置多页面
    rollupOptions: {
      treeshake: false,
      //压缩最小输入
      output: {
        manualChunks(id: any) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        }
      }
    }
  }
});