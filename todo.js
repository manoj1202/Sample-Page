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
        removeText.id = 'remove';
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


document.querySelector('button')[1].addEventListener('click', function () {
    for(const todo of toDoList){
        if (toDoList === toDoList[todo]){
        myTodo.innerHTML = `<del>${toDoList} </del>`;
        }
    }
})