const {createApp} = Vue

createApp ({
    data(){
        return {
            toDoList: [
                {
                    name: 'patate',
                    done: false,
                },
                {
                    name: 'cipolle',
                    done: false,
                },
                {
                    name: 'zucchine',
                    done: false,
                },
                {
                    name: 'melanzane',
                    done: false,
                },
                {
                    name: 'vino',
                    done: false,
                },
                {
                    name: 'torta',
                    done: false,
                },
                {
                    name: 'latte',
                    done: false,
                },
            ]
        }
    }
}).mount('#app')