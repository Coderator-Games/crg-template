const { createApp } = Vue;

createApp({
    data() {
        return {
            header: 'Haydar TAŞIYAN',
            level: 0,
            exp: 0,
            skill_points: 0,
            company_balance: 0,
            total_earned: 0,
            completed_deliveries: 0,
            travelled_distance: 0,
            top_driver: [
                { name: 'japa brandao', distance: 2.69, exp: 76 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'john doe', distance: 1.98, exp: 50 }
            ],
            activePanel: 'panel_home',
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
