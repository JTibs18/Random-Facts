const { createApp } = Vue 

const obj = {
    data(){
        return {
            greeting: "Random Facts!",
            fact: ""
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

            this.fact = await response.json()
        }
    }, 
    delimiters: ['{', "}"]
}

createApp(obj).mount('#app')