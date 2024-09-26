new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            gender: '',
            hobbies: [],
            subscription: '',
        },
        selectedGenderText: 'Select Gender',
        showOptions: false,
        tableData: [
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
            { name: 'Item 1', description: 'Description 1' },
            { name: 'Item 2', description: 'Description 2' },
            { name: 'Item 3', description: 'Description 3' },
        ]
    },
    mounted() {
        this.$nextTick(() => {
            $('#table-id').DataTable();
        });
    },
    methods: {
        toggleSelect() {
            this.showOptions = !this.showOptions;
        },
        selectOption(option) {
            this.formData.gender = option;
            this.selectedGenderText = option.charAt(0).toUpperCase() + option.slice(1);
            this.showOptions = false;
        },
        toggleCheckbox(hobby) {
            const index = this.formData.hobbies.indexOf(hobby);
            if (index > -1) {
                this.formData.hobbies.splice(index, 1);
            } else {
                this.formData.hobbies.push(hobby);
            }
        },
        isChecked(hobby) {
            return this.formData.hobbies.includes(hobby);
        },
        selectRadio(option) {
            this.formData.subscription = option;
        },
        isSelected(option) {
            return this.formData.subscription === option;
        },
        handleSubmit() {
            console.log('Form submitted:', this.formData);
        }
    }
});
