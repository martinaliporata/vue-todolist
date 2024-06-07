const {createApp} = Vue

createApp ({
    data(){
        return {
            toDoList: [
                {
                    text: 'patate',
                    done: true
                },
                {
                    text: 'cipolle',
                    done: false
                },
                {
                    text: 'zucchine',
                    done: false
                },
                {
                    text: 'melanzane',
                    done: true
                },
                {
                    text: 'vino',
                    done: false
                },
                {
                    text: 'torta',
                    done: false
                },
                {
                    text: 'latte',
                    done: true
                },
            ],
            newTaskContent: '',
        }
    },
    methods: {
        invertDone : function(itemIndex){
            this.toDoList[itemIndex].done = !this.toDoList[itemIndex].done;
        },

        addNewTask : function(newContent){
            const newTask = {
                text: newContent,
                done: false,
            }
            this.toDoList.push(newTask)
        },

        deleteItem : function(taskIndex){
            this.toDoList.splice(taskIndex, 1);
        }
    }
}).mount('#app')