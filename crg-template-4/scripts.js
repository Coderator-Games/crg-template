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
        itemsPerPage: 10,
        transactions: [
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
            { id: 1, date: 1, person: 1, type: 1, amount: 1, description: 1 },
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
            axios.post(`https://${GetParentResourceName()}/close_ui`)
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
    },
    mounted() {
        //document.body.style.display = 'none';
        window.addEventListener('message', event => {
            if (event.data.action === 'open_ui') {
                document.body.style.display = 'block';
            } else if (event.data.action === 'close_ui') {
                document.body.style.display = 'none';
            }
        });
    },
});