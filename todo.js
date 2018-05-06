// document.querySelector('#input').addEventListener('input',function(e){
//     console.log(e.target.value)
// })

document.querySelector('#form1').addEventListener('submit', function(e){
    e.preventDefault();
    
    const p = document.createElement('p');
    p.textContent = e.target.elements.todoValue.value ;
    document.querySelector('#head1').appendChild(p);
    
    e.target.elements.todoValue.value = '';
   
})
let a = []; 
a.push(e.target.elements.todoValue.value);
console.log(a);