const upToTopBtn = document.querySelector('.up-to-top');
const navTabs = document.querySelectorAll('.nav-tab');
const productLists = document.querySelectorAll('.products-list');
const toggleBtn = document.querySelector('.toggle-btn');
const btnLine = document.querySelector('.btn-line');
const slideMenu = document.querySelector('.slideMenu');

navTabs.forEach((navTab,index) => {
    navTab.addEventListener('click', function(e) {
        e.preventDefault();
        navTabs.forEach((navTab) => {
            navTab.classList.remove('nav-tab-active');
        })

        productLists.forEach((productList) => {
            productList.classList.remove('products-list--active');
        })

        this.classList.add('nav-tab-active');
        productLists[index].classList.add('products-list--active');
    })
})

upToTopBtn.addEventListener('click',function(e)  {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop  = 0;
})

toggleBtn.addEventListener('click',(e) => {
    btnLine.classList.toggle('active');
    slideMenu.classList.toggle('active');
})

