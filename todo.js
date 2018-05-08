let toDoList = [];
let i = 0;
toDoList[i];
const addText = () => {
    const text = document.getElementById('data').value;
    if(text !== '' && text !== ' ')
    {
        const myTodo = document.createElement('div');

        toDoList.push(text);
        
        myTodo.textContent = text;
        
        document.getElementById('head1').appendChild(myTodo);
        const removeText = document.createElement('button'); 
        removeText.textContent='x';
        
        document.getElementById('head1').appendChild(removeText);
       
    }
    
}

document.getElementById('press').addEventListener('click', (e) =>{
    e.preventDefault();
    addText();
    if (e.target.value !== '' && e.target.value !== ' ') {
         toDoList.push(document.getElementById('data').value);
         
         toDoList[i]++;
    }
    document.getElementById('data').value = '';
    
})


// removeText.addEventListener('click', function () {
//     for (let todo in toDoList) {
//         console.log(todo);
//         myTodo.innerHTML = `<del>${todo} </del>`;
//     }

// })