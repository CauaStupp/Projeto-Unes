const menu = document.querySelector('.menu-mobile');
const menuFechar = document.querySelector('.nav-fechar');
const nav = document.querySelector('.nav-bg');



menu.addEventListener('click', function() {
    nav.classList.add('active');
});

menuFechar.addEventListener('click', function() {
    nav.classList.remove('active');
});





// Validação de formulário
const form = document.querySelector('.section-contato-form form');
const btnSubmit = document.querySelector('#btnEnviar');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const errorAssunto = document.querySelector('.error.assunto');
const errorEmail = document.querySelector('.error.email');
const msg = document.querySelector('.section-contato-form form textarea');


function validEmail() {
    if (email.value === '' || email.value === null) {
        email.style.outline = '1px solid red';
        errorEmail.innerHTML = 'Complete o campo acima!'
    } else if (email.value.length < 5) {
        email.style.outline = '1px solid red';
        errorEmail.innerHTML = 'Email deve ter mais de 5 caracteres'
    } else if (email.value.indexOf('@') === -1) {
        errorEmail.innerHTML = 'Coloque um email válido. Exemplo - (teste@gmail.com)'
    } else {
        email.style.outline = '';
        errorEmail.innerHTML = '';
        return true;
    }
 
}

function validAssunto() {
    if (assunto.value === '' || assunto.value === null) {
        assunto.style.outline = '1px solid red';
        errorAssunto.innerHTML = 'Complete o campo acima!'
    } else {
        assunto.style.outline = '';
        errorAssunto.innerHTML = '';
        return true;
    }
}

form.addEventListener('change', () => {
    validEmail();
    validAssunto();
})

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validEmail() && validAssunto()) {
        alert('Email enviado com succeso!');
        email.value = '';
        assunto.value = '';
        msg.value = '';
        // window.location.href = '/./index.html';
    }
    
    
})