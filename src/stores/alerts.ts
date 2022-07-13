import { defineStore } from "pinia";

export const useAlerts = defineStore("alerts", {
  state: () => ({
    items: [],
  }),

  actions: {
    notify(message: string, style: AlertStyle, options: unknown = {}) {},

    clear() {},
  },
});
