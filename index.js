const Counter = {
    data() {
    return {
    counter
        }
    },
    mounted(){
        setInterval(() => {
            var d = new Date()
            this.counter = d
        }, 100);
    }
}
Vue.createApp(Counter).mount('#counter')