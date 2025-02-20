const { createApp } = Vue;

createApp({
    data() {
        return {
            user_data: {
                exp: 0,
            },
            active_panel: 'panel_dashboard',
            panels: {
                panel_dashboard: {
                    required_level: 0,
                    name: 'Dashboard',
                    desc: "This panel provides an overview of your company's progress, including earnings, deliveries, and top drivers' performance.",
                    icon: 'home_work',
                },
                panel_convoy: {
                    required_level: 0,
                    name: 'Convoy',
                    desc: "This panel provides you with the ability to create or join a convoy, drive together with other players, and complete jobs as a team.",
                    icon: 'groups',
                },
                panel_jobs_tier_1: {
                    required_level: 0,
                    name: 'Jobs Tier 1',
                    desc: 'On this page, you can take Tier 1 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: 'local_shipping',
                },
                panel_jobs_tier_2: {
                    required_level: 5,
                    name: 'Jobs Tier 2 (lv.5)',
                    desc: 'On this page, you can take Tier 2 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: 'delivery_truck_speed',
                },
                panel_jobs_tier_3: {
                    required_level: 10,
                    name: 'Jobs Tier 3 (lv.10)',
                    desc: 'On this page, you can take Tier 3 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: 'delivery_truck_bolt',
                },
                panel_jobs_tier_4: {
                    required_level: 10,
                    name: 'Jobs Tier 4 (lv.20)',
                    desc: 'On this page, you can take Tier 4 trucking jobs, transport cargo, and earn experience. Start your journey now!',
                    icon: 'deployed_code_alert',
                },
                panel_bank: {
                    required_level: 0,
                    name: 'Bank Account',
                    desc: 'On this page, you can manage your companies bank account.',
                    icon: 'account_balance',
                },
            }
        };
    },
    methods: {
        initialize_nui() {
        },
        calculate_level(exp_to_calc) {
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
    },
    mounted() {
        this.initialize_nui();
    }
}).mount("#app");