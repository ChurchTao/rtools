<script lang="ts" setup>
  import { computed } from 'vue';
  import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import useLocale from '@/hooks/locale';
  import Greet from './components/Greet.vue';
  const { currentLocale } = useLocale();
  const locale = computed(() => {
    switch (currentLocale.value) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return enUS;
    }
  });
</script>

<template>
  <a-config-provider :locale="locale">
    <div class="container">
      <h1>Welcome to Tauri!</h1>

      <div class="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

      <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
          >Volar</a
        >
        +
        <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank"
          >Tauri</a
        >
        +
        <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
          >rust-analyzer</a
        >
      </p>

      <Greet />
    </div>
  </a-config-provider>
</template>

<style scoped>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #249b73);
  }
</style>
