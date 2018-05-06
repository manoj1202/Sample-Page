// document.querySelector('#input').addEventListener('input',function(e){
//     console.log(e.target.value)
// })

document.querySelector('#form1').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target.elements.todoValue.value);
    const p = document.createElement('p');
    const button = document.createElement('button');
    p.textContent = e.target.elements.todoValue.value ;
    button.innerHTML = "x";
    document.querySelector('#head1').appendChild(p);
    document.querySelector('#head1').appendChild(button);
    e.target.elements.todoValue.value = '';
})