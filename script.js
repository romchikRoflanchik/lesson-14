let f1 = document.forms.f1;


f1.move.addEventListener('click', function(){
    f1.input_2.value = f1.input_1.value
})

let f2 = document.forms.f2;

f2.input_3.addEventListener('blur', function(){
    f2.input_3.placeholder=f2.input_3.value;
    f2.reset()
})



