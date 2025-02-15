const { createApp } = Vue;

createApp({
    data() {
        return {
            // User Data
            header: 'Haydar TAŞIYAN',
            level: 0,
            exp: 50000000000,
            company_balance: 0,
            total_earned: 0,
            completed_deliveries: 0,
            travelled_distance: 0,

            top_driver: [
                { name: 'japa brandao', distance: 2.69, exp: 76 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'john doe', distance: 1.98, exp: 50 }
            ],

            // Panels
            active_panel: 'panel_jobs_tier_1',
            panel_titles: {
                panel_dashboard: {
                    required_level: 0,
                    name: 'Dashboard',
                    desc: "This panel provides an overview of your company's progress, including earnings, deliveries, and top drivers' performance.",
                    icon: '<i class="fa-solid fa-house-user"></i>'
                },
                panel_jobs_tier_1: {
                    required_level: 0,
                    name: 'Jobs Tier 1',
                    desc: 'On this page, you can take Tier 1 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: '<i class="fa-solid fa-truck-fast"></i>'
                },
                panel_jobs_tier_2: {
                    required_level: 5,
                    name: 'Jobs Tier 2 (lv.5)',
                    desc: '',
                    icon: '<i class="fa-solid fa-radiation"></i>'
                },
                panel_jobs_tier_3: {
                    required_level: 10,
                    name: 'Jobs Tier 3 (lv.10)',
                    desc: '',
                    icon: '<i class="fa-solid fa-road-lock"></i>'
                },
                panel_jobs_tier_4: {
                    required_level: 10,
                    name: 'Jobs Tier 4 (lv.20)',
                    desc: '',
                    icon: '<i class="fa-solid fa-road-lock"></i>'
                },
                panel_bank: {
                    required_level: 0,
                    name: 'Bank Account',
                    desc: '',
                    icon: '<i class="fa-solid fa-building-columns"></i>'
                },
            }
        };
    },
    methods: {
        close_panel() {
        },
        set_active_panel(panel) {
            this.active_panel = panel;
        },
        calculate_level_from_exp() {
            let counter = 0;
            while (true) {
                let exp_achieved = counter === 0 ? 0 : 500 + 250 * ((counter - 1) ** 2);
                let exp_required = 500 + 250 * (counter ** 2);
                if (exp_achieved <= this.exp && this.exp <= exp_required) {
                    return counter;
                }
                counter++;
            }
        },
        calculate_needed_exp(level) {
            let exp_achieved = level === 0 ? 0 : 500 + 250 * ((level - 1) ** 2);
            let exp_required = 500 + 250 * (level ** 2);
            return `${this.exp - exp_achieved} / ${exp_required - exp_achieved}`;
        },
        calculate_needed_exp_progressbar(level) {
            let exp_achieved = level === 0 ? 0 : 500 + 250 * ((level - 1) ** 2);
            let exp_required = 500 + 250 * (level ** 2);
            return {
                value: this.exp - exp_achieved,
                max: exp_required - exp_achieved
            };
        },
        initialize_level() {
            this.level = this.calculate_level_from_exp();
        }
    },
    mounted() {
        this.initialize_level();
    }
}).mount("#app");
