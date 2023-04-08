const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function (){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#E3E0DE';
        body.style.color = '#212A30';
        body.style.transition = '2s'
    }else{
        body.style.background = '#212A30';
        body.style.color = '#E3E0DE';
        body.style.transition = '2s'
    }
}

)