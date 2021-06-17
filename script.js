const tabElms = document.getElementsByClassName('tab');

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', switchMenu);
}

const contentElms = document.getElementsByClassName('content');

function switchMenu() {
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');

    document.getElementsByClassName('show')[0].classList.remove('show');

    const tabArray = Array.from(tabElms);
    const index = tabArray.indexOf(this);
    contentElms[index].classList.add('show');
}

