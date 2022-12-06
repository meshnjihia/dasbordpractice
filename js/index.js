const sideMenu = document.querySelector('aside'); 
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggle = document.querySelector('.theme-toggler');
// const themeToggle = document.getElementById('dark');
// const themeToggleLight = document.getElementById("light");

// show side menu function 
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});
// close side menu function 
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});
// dark theme change function 
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-clr');

    themeToggle.querySelector('span').classList.toggle('active');
})
// themeToggleLight.addEventListener("click", () => {
//     document.body.classList.toggle("light-theme-clr");

//     themeToggleLight.querySelector("span").classList.toggle("active");
// });

// add active class to side menu 
const sideMenuActive = document.querySelectorAll("#dash_a");
sideMenuActive.forEach(dash_a => {
    dash_a.addEventListener('click', function (){
        sideMenuActive.forEach(atn => atn.classList.remove('active'));
        this.classList.add('active');
    });
});


// fill the orders table
// orders.forEach(orders => {
//     const tr = document.createElement('tr');
//     const trContent = '<td>${orders.productName}</td><td>${order.orderNumber}</td><td>${order.paymentStatus}</td><td class ="danger">${order.shipping}</td><td class ="primary">Details</td>';

//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr);
// })
const table = document.getElementById('tableBody');
orders.map(orders => { 
    let row = table.insertRow();
    let productName = row.insertCell(0);
    productName.innerHTML = orders.productName;

    let orderNumber = row.insertCell(1);
    orderNumber.innerHTML = orders.orderNumber;

    let paymentStatus = row.insertCell(2);
    paymentStatus.innerHTML = orders.paymentStatus;

    let shipping = row.insertCell(3);
    shipping.innerHTML = orders.shipping;
});