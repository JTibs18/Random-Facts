const { createApp } = Vue 

const obj = {
    data(){
        return {
            greeting: "Hello World"
        }
    },
    delimiters: ['{', "}"]
}

createApp(obj).mount('#app')