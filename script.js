
var f = 0;
document.addEventListener("keydown" , (e) =>{
    
    let val = document.querySelector('p');
    
    var v = e.key;
    
    if(v == '-'){
        f = f-1;
    }
    else if(v == '+'){
        f = f+1;
    }
    else if(v != 'Shift') {
        alert("Click '+' or '-' only")
    }
    val.innerHTML = f;
    console.log(v);
});
var but = document.getElementById("but");
but.addEventListener("click" , (e) =>{
    let val = document.querySelector('p');
    f = 0;
    val.innerHTML = f;
})