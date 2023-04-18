const page_1 = document.querySelector('.sing_up_page');
const page_2 = document.querySelector('.account_page');
const name_1 = document.querySelector('.account_name');
const email_1 = document.querySelector('.account_email');
const avatar = document.querySelector('.account_avatar');
const position = document.querySelector('.account_position')
const f1 = document.forms.f1;
const f2 = document.forms.f2;



function display_none() {
    name_1.innerHTML = f1.name.value;
    name_1.innerHTML += " " + f1.name_2.value;
    email_1.innerHTML = f1.email.value;
    position.innerHTML = f1.select.value;
    page_1.classList.add('none');
    page_2.classList.remove('none');
    if(f1.men.value == 'men'){
        avatar.classList.add('men_avatar')
    }
    else{
        avatar.classList.add('women_avatar')
    }
}

function display_none_2() {
    page_2.classList.add('none');
    page_1.classList.remove('none');
    f1.name.value = "";
    f1.name_2.value= "";
    f1.email.value = "";
    f1.select.value = 'empty';
    f1.agree.checked = false;
    f1.sing_up.disabled=true;
    avatar.classList.remove('men_avatar');
    avatar.classList.remove('women_avatar');
}

f1.sing_up.addEventListener('click', display_none);
f2.out.addEventListener('click', display_none_2);
f1.agree.addEventListener('click' , function(){
    if(f1.agree.checked){
        f1.sing_up.disabled = false;
    }
    else if(f1.agree.checked == false){
        f1.sing_up.disabled = true;
    }
    if(f1.name.value == ""){
        f1.sing_up.disabled = true;
    }
    else if(f1.name_2.value == ""){
        f1.sing_up.disabled = true;
    }
    else if(f1.email.value == ""){
        f1.sing_up.disabled = true;
    }
    else if(f1.select.value == "empty"){
        f1.sing_up.disabled = true;
    }
})