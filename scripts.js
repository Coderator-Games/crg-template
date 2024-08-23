new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        sortKey: '',
        sortOrder: 1,
        transactions: [
            { id: 1,  date: '01/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 2,  date: '02/01/2024', person: 'Jane Doe', type: 'Deposit',  amount: 200, description: "ATM" },
            { id: 3,  date: '02/01/2024', person: 'Jane Doe', type: 'Deposit',  amount: 200, description: "Bank Office" },
            { id: 4,  date: '02/01/2024', person: 'Jane Doe', type: 'Deposit',  amount: 200, description: "Bank Office" },
            { id: 5,  date: '02/01/2024', person: 'Jane Doe', type: 'Deposit',  amount: 200, description: "ATM" },
            { id: 6,  date: '02/01/2024', person: 'Jane Doe', type: 'Transfer', amount: 200, description: "Bank Office" },
            { id: 7,  date: '02/01/2024', person: 'Jane Doe', type: 'Transfer', amount: 200, description: "Mobile App" },
            { id: 8,  date: '02/01/2024', person: 'Jane Doe', type: 'Transfer', amount: 200, description: "ATM" },
            { id: 9,  date: '02/01/2024', person: 'Jane Doe', type: 'Withdraw', amount: 200, description: "Bank Office" },
            { id: 10, date: '02/01/2024', person: 'Jane Doe', type: 'Withdraw', amount: 200, description: "ATM" },
            { id: 11, date: '02/01/2024', person: 'Jane Doe', type: 'Withdraw', amount: 200, description: "Bank Office" },
            { id: 12, date: '02/01/2024', person: 'Jane Doe', type: 'Withdraw', amount: 200, description: "Bank Office" },
            // Diğer örnek işlemler burada olacak
        ]
    },
    computed: {
        filteredTransactions() {
            let transactions = this.transactions.filter(transaction => {
                return Object.keys(transaction).some(key =>
                    String(transaction[key]).toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            });

            if (this.sortKey) {
                transactions.sort((a, b) => {
                    a = a[this.sortKey];
                    b = b[this.sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * this.sortOrder;
                });
            }

            return transactions;
        }
    },
    methods: {
        closeBox() {
            alert("Closed");
        },
        sortTable(key) {
            this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
            this.sortKey = key;
        }
    }
});
