document.querySelector('button').addEventListener('click',function(e){
    console.log('did this work');
    console.log(e);
})

document.querySelector('#userinput').addEventListener('input',function(e){
    console.log(e.target.vlaue);
})
//const para = document.querySelector('p').