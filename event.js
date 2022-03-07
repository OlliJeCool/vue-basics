const App = {
    data(){
        return { 
        message: "Kobyla má malý bok",
        upper: false
        }
    },
    methods:{
        reverseMessage(){
            this.message = this.message
            .split("")
            .reverse()
            .join("")
        },

        upperLower(){
            if(this.upper != true){
                this.message = this.message.toUpperCase()
                this.upper = true
            }
            else{
                this.message = this.message.toLowerCase()
                this.upper = false
            }
        }
    }
}

Vue.createApp(App).mount("#app")