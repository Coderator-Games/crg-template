new Vue({
    el: '#app',
    data: {
        accountOwner: 'Ali Veli',
        accountNumber: '1234567890',
        balance: 5000,
        withdrawAmount: undefined,
        depositAmount: undefined,
        transactions: [
            { id: 1, date: '2024-08-01 12:30', type: 'Yatırma', amount: 1000, description: 'Maaş yatırıldı' },
            { id: 2, date: '2024-08-05 10:15', type: 'Çekme', amount: 500, description: 'Market alışverişi' },
        ],
    },
    methods: {
        depositMoney() {
            if(this.depositAmount > 0) {
                this.balance += parseFloat(this.depositAmount);
                this.addTransaction('Yatırma', this.depositAmount, 'Para yatırıldı');
                this.depositAmount = undefined;
            }
        },
        withdrawMoney() {
            if(this.withdrawAmount > 0 && this.withdrawAmount <= this.balance) {
                this.balance -= parseFloat(this.withdrawAmount);
                this.addTransaction('Çekme', this.withdrawAmount, 'Para çekildi');
                this.withdrawAmount = undefined;
            }
        },
        formatDateTime(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        },
        addTransaction(type, amount, description) {
            const newTransaction = {
                id: this.transactions.length + 1,
                date: this.formatDateTime(new Date()),
                type: type,
                amount: parseFloat(amount),
                description: description
            };
            this.transactions.push(newTransaction);
        },
        closeApp() {
            alert('Uygulama kapatıldı!');
            // Kapatma işlemi burada yapılabilir.
        }
    }
});
