// Adicionar classe ao fazer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('fixed-header', window.scrollY > 0);
});

// Mostrar Partes da Plataforma
const dashboard = document.querySelector('#dashboard');
const recebimentos = document.querySelector('#recebimentos');
const agenda = document.querySelector('#agenda');

const left = document.querySelector('.fa-chevron-left');
const right = document.querySelector('.fa-chevron-right');

const platformDiv1 = document.querySelector('.platform_div1');
const platformDiv2 = document.querySelector('.platform_div2');
const platformDiv3 = document.querySelector('.platform_div3');

platformDiv2.style.display = 'none';
platformDiv3.style.display = 'none';

dashboard.addEventListener('click', ()=> {
    platformDiv1.style.display = 'flex';
    platformDiv2.style.display = 'none';
    platformDiv3.style.display = 'none';

    dashboard.classList = 'active';
    recebimentos.classList = 'none';
    agenda.classList = 'none';
})

recebimentos.addEventListener('click', ()=> {
    platformDiv1.style.display = 'none';
    platformDiv2.style.display = 'flex';
    platformDiv3.style.display = 'none';

    dashboard.classList = 'none';
    recebimentos.classList = 'active';
    agenda.classList = 'none';
})

agenda.addEventListener('click', ()=> {
    platformDiv1.style.display = 'none';
    platformDiv2.style.display = 'none';
    platformDiv3.style.display = 'flex';

    dashboard.classList = 'none';
    recebimentos.classList = 'none';
    agenda.classList = 'active';
})

left.addEventListener('click', () => {
    if (platformDiv1.style.display === 'flex') {
        platformDiv1.style.display = 'none';
        platformDiv3.style.display = 'flex';
        dashboard.classList.remove('active');
        recebimentos.classList.remove('active');
        agenda.classList.add('active');
    } else if (platformDiv2.style.display === 'flex') {
        platformDiv2.style.display = 'none';
        platformDiv1.style.display = 'flex';
        dashboard.classList.add('active');
        recebimentos.classList.remove('active');
        agenda.classList.remove('active');
    } else if (platformDiv3.style.display === 'flex') {
        platformDiv3.style.display = 'none';
        platformDiv2.style.display = 'flex';
        dashboard.classList.remove('active');
        recebimentos.classList.add('active');
        agenda.classList.remove('active');
    }
});

right.addEventListener('click', () => {
    if (platformDiv1.style.display === 'flex') {
        platformDiv1.style.display = 'none';
        platformDiv2.style.display = 'flex';
        dashboard.classList.remove('active');
        recebimentos.classList.add('active');
        agenda.classList.remove('active');
    } else if (platformDiv2.style.display === 'flex') {
        platformDiv2.style.display = 'none';
        platformDiv3.style.display = 'flex';
        dashboard.classList.remove('active');
        recebimentos.classList.remove('active');
        agenda.classList.add('active');
    } else if (platformDiv3.style.display === 'flex') {
        platformDiv3.style.display = 'none';
        platformDiv1.style.display = 'flex';
        dashboard.classList.add('active');
        recebimentos.classList.remove('active');
        agenda.classList.remove('active');
    }
});



