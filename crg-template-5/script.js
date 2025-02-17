const { createApp } = Vue;

createApp({
    data() {
        return {
            // Script Data
            job_renewal_time: 2,
            withdraw_amount: 0,
            deposit_amount: 0,

            // User Data
            header: 'Haydar TAŞIYAN',
            level: 0,
            exp: 50000000000,
            company_balance: 0,
            total_earned: 0,
            completed_deliveries: 0,
            travelled_distance: 0,
            has_convoy: true,
            is_convoy_leader: true,

            convoy_requests: [
                { name: 'japa brandao', exp: 76 },
            ],

            available_drivers: [
                { name: 'japa brandao', exp: 76 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'maria lopez', exp: 89 },
                { name: 'john doe', exp: 50 }
            ],

            company_drivers: [
                { name: 'japa brandao', exp: 76 },
                { name: 'maria lopez', exp: 89 },
                { name: 'john doe', exp: 50 }
            ],

            top_drivers: [
                { name: 'japa brandao', distance: 2.69, exp: 76 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
                { name: 'maria lopez', distance: 3.45, exp: 89 },
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
                panel_convoy: {
                    required_level: 0,
                    name: 'Convoy',
                    desc: "This panel provides you with the ability to create or join a convoy, drive together with other players, and complete jobs as a team.",
                    icon: '<i class="fa-solid fa-users-rectangle"></i>'
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
                    desc: 'On this page, you can take Tier 2 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: '<i class="fa-solid fa-radiation"></i>'
                },
                panel_jobs_tier_3: {
                    required_level: 10,
                    name: 'Jobs Tier 3 (lv.10)',
                    desc: 'On this page, you can take Tier 3 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: '<i class="fa-solid fa-road-lock"></i>'
                },
                panel_jobs_tier_4: {
                    required_level: 10,
                    name: 'Jobs Tier 4 (lv.20)',
                    desc: 'On this page, you can take Tier 4 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: '<i class="fa-solid fa-skull-crossbones"></i>'
                },
                panel_bank: {
                    required_level: 0,
                    name: 'Bank Account',
                    desc: 'On this page, you can manage your companies bank account.',
                    icon: '<i class="fa-solid fa-building-columns"></i>'
                },
            },

            // Jobs
            jobs_list: {
                tier_1: [
                    { reward: 11000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 11000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 11000, title: "Automobile Transport", distance: 8.5 },
                ],
                tier_2: [
                    { reward: 12000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 12000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 12000, title: "Automobile Transport", distance: 8.5 },
                ],
                tier_3: [
                    { reward: 13000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 13000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 13000, title: "Automobile Transport", distance: 8.5 },
                ],
                tier_4: [
                    { reward: 14000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 14000, title: "Automobile Transport", distance: 8.5 },
                    { reward: 14000, title: "Automobile Transport", distance: 8.5 },
                ]
            }
        };
    },
    methods: {
        close_panel() {
        },
        set_active_panel(panel) {
            this.active_panel = panel;
        },
        calculate_level_from_exp(exp_to_calc = undefined) {
            exp_to_calc = exp_to_calc ? exp_to_calc : this.exp
            let counter = 0;
            while (true) {
                let exp_achieved = counter === 0 ? 0 : 500 + 250 * ((counter - 1) ** 2);
                let exp_required = 500 + 250 * (counter ** 2);
                if (exp_achieved <= exp_to_calc && exp_to_calc <= exp_required) {
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
        },
        fire_driver(driver_index) {
            alert(driver_index)
        },
        withdraw_money() {
            alert("withdraw_money")
        },
        deposit_money() {
            alert("deposit_money")
        }
    },
    mounted() {
        this.initialize_level();
    }
}).mount("#app");
