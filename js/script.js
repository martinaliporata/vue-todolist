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
    },
    methods: {
        invertDone : function(itemIndex){
            this.toDoList[itemIndex].done = !this.toDoList[itemIndex].done
        } ,

        addNewTask : function(){
            const newTask = {
                nome: newContent,
                done: false,
            }

            this.toDoList.push(newTask)
        }
    }
}).mount('#app')