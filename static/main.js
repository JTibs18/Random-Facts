const { createApp } = Vue 

const factObj = {
    data(){
        return {
            greeting: "Random Facts!",
            facts: [],
            image: "./static/images/fun-facts.png",
            factType: "trivia",
            min: 0,
            max: 100, 
        }
    }, 
    methods:{
        async sendRequest(url, method){
            const myHeaders = new Headers({
                'Content-Type': 'application/json', 
                'X-Requested-With': "XMLHttpRequest"
            })
            const response = await fetch(url, {
                method: method,
                headers: myHeaders, 
            })

            return response
        },
        async submit(){
            const response = await this.sendRequest(window.location, 'get')

            await response.json().then((fact) => this.facts.push({...fact, id: this.facts.length}))
        },
        onShuffle(){
             this.facts = _.shuffle(this.facts)
        }
    }, 
    delimiters: ['{', "}"]
}

createApp(factObj).mount('#app')