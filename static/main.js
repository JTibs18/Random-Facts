const { createApp } = Vue 

const factObj = {
    data(){
        return {
            greeting: "Random Facts!",
            facts: [],
            image: "./static/images/fun-facts.png"
        }
    }, 
    methods:{
        async getFact(){
            const response = await fetch(window.location, {
                method: "get",
                headers: {
                    'X-Requested-With': "XMLHttpRequest"
                }
            })
            await response.json().then((fact) => this.facts.push({...fact, id: this.facts.length}))
        },
        onShuffle(){
             this.facts = _.shuffle(this.facts)
        }
    }, 
    delimiters: ['{', "}"]
}

createApp(factObj).mount('#app')