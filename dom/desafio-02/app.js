new Vue({
    el: '#desafio',
    data: {
        valor_target: '',
        valor_enter: ''
    },
    methods: {
        showAlert(event){
            alert('Botão Clicado')
        },
        receiveType(event){
            this.valor_target = event.target.value
        },
        printValue(event){
            this.valor_enter = event.target.value
        }
    }
})