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
        removeText.id = "Del";
        document.getElementById('head1').appendChild(removeText);
        removeText.addEventListener('click',function(e){
            e.preventDefault();          
            myTodo.innerHTML = `<del>${toDoList[i]} </del>`;
            i++;
        })
        
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


// document.getElementById('Del').addEventListener('click', function () {
//     for(const todo of toDoList){
//         if (toDoList === toDoList[todo]){
//         myTodo.innerHTML = `<del>${toDoList} </del>`;
//         }
//     }
// })