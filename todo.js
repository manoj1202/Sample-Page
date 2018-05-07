const toDoList = [];
const myTodo = document.createElement('div');
const addText = () => {
    const text = document.getElementById('data').value;
    if(text !== '' && text !== ' ')
    {
        toDoList.push(text);
        
        myTodo.textContent = text;
        
        document.getElementById('head1').appendChild(myTodo);
        const removeText = document.createElement('button'); 
        removeText.textContent='x';
        
        document.getElementById('head1').appendChild(removeText);
        // removeText.addEventListener('click',function(){
        //     for(let todo in toDoList)
        //     {
        //         myTodo.innerHTML = `<del>${toDoList[todo]} </del>` ;
        //     }
        // })
    }
    
}

document.getElementById('press').addEventListener('click', (e) =>{
    e.preventDefault();
    addText();
    document.getElementById('data').value = '';
})

