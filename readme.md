Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.



Creo il collegamento con vue con createApp
All’interno del return data creo un array di oggetti (con nome, done false (done è far sì che se un elemento lo clicchiamo, sbarra il testo)
Creo un v-for per inserire i li all’interno dell’ul (v-for=”item in todoList”)
Per quanto concerne i metodi, ne aggiungo uno che mostri se il done è true o false (sbarrato o no)
Come mostro l'elemento sbarrato con done true? Classe css con vbind al li 
Se done è true, applico la classe; al contrario no (nello stesso li scrivo :class=”(item.done === true)?’done’: ‘’ “).
Creo un metodo toggleDone (come fosse un interruttore); siccome il risultato è un'espressione booelnae, uso il ! per dire il contrario (il soggetto è index perché se scrivo item -della to do list non sai quale ti passa)
Aggiungo click con toggleDone con l’index
Creo un input tale per cui se scrivo un nuovo elemento, questo si aggiunge alla lista.
Creo una funzione che aggiunge un task facendo un push
Quando inserisco elementi in struttura dati esistenti, devo travestire il nuovo dato come fosse un dato esistente () quindi creo una funzione per crearlo 
Lo posso collegare con v-model i cui mi collego a un input e se la variabile cambia l’input e viceversa.
Aggiunge keyup.enter per far sì che all’invio dell’utente si agginga il task
