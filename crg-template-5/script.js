const { createApp } = Vue;

createApp({
    data() {
        return {
            activePanel: 'panel_home',
            balance: 1000,
            level: 5,
            panelTitles: {
                panel_home: "Main Page",
                panel_jobs: "Jobs List",
                panel_bank: "Bank Account"
            }
        };
    },
    methods: {
        closePanel() {
            this.activePanel = null;
        }
    }
}).mount("#app");
