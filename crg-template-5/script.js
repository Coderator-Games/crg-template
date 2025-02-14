const { createApp } = Vue;

createApp({
    data() {
        return {
            playerName: 'Haydar TAŞIYAN',
            activePanel: 'panel_home',
            balance: 1000,
            level: 5,
            panelTitles: {
                panel_home: { name: 'Main Page', icon: '<i class="fa-solid fa-house-user"></i>' },
                panel_jobs: { name: 'Jobs List', icon: '<i class="fa-solid fa-truck-fast"></i>' },
                panel_bank: { name: 'Bank Account', icon: '<i class="fa-solid fa-building-columns"></i>' },
            }
        };
    },
    methods: {
        closePanel() {
            this.activePanel = null;
        },
        setActivePanel(panel) {
            this.activePanel = panel;
        }
    }
}).mount("#app");
