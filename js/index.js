const sideMenu = document.querySelector('aside'); 
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggle = document.querySelector('.theme-toggler');

// show side menu function 
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});
// close side menu function 
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});
// theme change function 
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-clr');

    themeToggle.querySelector('span').classList.toggle('active');
})

// fill the orders table 
orders.forEach(orders => {
    const tr = document.createElement('tr');
    const trContent = '<td>${orders.productName}</td><td>${order.productNumber}</td><td>${order.paymentStatus}</td><td class ="danger">${order.shipping}</td><td class ="primary">Details</td>';

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})