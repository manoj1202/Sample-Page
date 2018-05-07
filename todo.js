const toDoList = [];
const addText = () => {
    const text = document.getElementById('data').value;
    if(text !== '' && text !== ' ')
    {
        toDoList.push(text);
        const myTodo = document.createElement('div');
        myTodo.textContent = text;
        
        document.getElementById('head1').appendChild(myTodo);
        const removeText = document.createElement('button');
        removeText.textContent='x';
        document.getElementById('head1').appendChild(removeText);

    }
    console.log(toDoList);
}

document.getElementById('press').addEventListener('click', (e) =>{
    e.preventDefault();
    addText();
    document.getElementById('data').value = '';
})
