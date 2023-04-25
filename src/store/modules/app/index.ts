import { defineStore } from "pinia";
// import { Notification } from "@arco-design/web-vue";
// import type { NotificationReturn } from "@arco-design/web-vue/es/notification/interface";
import defaultSettings from "@/config/settings.json";
import { AppState } from "./types";

const useAppStore = defineStore("app", {
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // Change theme color
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = "dark";
        document.body.setAttribute("theme", "dark");
      } else {
        this.theme = "light";
        document.body.removeAttribute("theme");
      }
    },
  },
});

export default useAppStore;
