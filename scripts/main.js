document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Simulate form submission (you can replace this with an API call)
    alert(`شكرًا ${name}! سيتم التواصل معك على الرقم ${phone} لتأكيد الطلب.`);
});