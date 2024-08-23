new Vue({
    el: '#app',
    data: {
        transferAccountNumeber: '',
        transferAmount: '',
        transactAmount: '',
        searchQuery: '',
        sortKey: '',
        sortOrder: 1,
        currentPage: 1,
        itemsPerPage: 12,
        transactions: [
            { id: 1, date: '01/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '02/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '03/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '04/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '05/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '06/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '07/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '08/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '09/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '11/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '12/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '13/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '14/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '15/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '16/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '17/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '18/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '19/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
            { id: 1, date: '20/01/2024', person: 'John Doe', type: 'Withdraw', amount: 500, description: "Bank Office" },
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

            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = this.currentPage * this.itemsPerPage;
            return transactions.slice(start, end);
        },
        totalPages() {
            const filteredCount = this.transactions.filter(transaction => {
                return Object.keys(transaction).some(key =>
                    String(transaction[key]).toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }).length;

            return Math.ceil(filteredCount / this.itemsPerPage);
        }
    },
    methods: {
        closeBox() {
            alert("Closed");
        },
        sortTable(key) {
            this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
            this.sortKey = key;
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        }
    }
});