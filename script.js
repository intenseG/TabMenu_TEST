const tabElms = document.querySelectorAll('.tab');

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', switchMenu);
}

const contentElms = document.querySelectorAll('.content');

function switchMenu() {
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    document.querySelector('.show').classList.remove('show');

    const tabArray = Array.from(tabElms);
    const index = tabArray.indexOf(this);
    contentElms[index].classList.add('show');
}

