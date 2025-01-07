function submitForm() {
    const form = document.getElementById('orderForm');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;

    // Replace with your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwmHmFTKK8Rlj6davrC6YTW45mE3DKzjJPD_iGYLUOUJijXBUbhFMKSj5G_mqeV-Rd7/exec';

    // Show loading state
    const button = form.querySelector('button');
    const originalButtonText = button.innerHTML;
    button.innerHTML = 'جاري الإرسال...';
    button.disabled = true;

    // First, get the IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const formData = {
                name: name,
                phone: phone,
                address: address,
                quantity: quantity,
                ip: data.ip,
                userAgent: navigator.userAgent // Optional: Include user agent
            };

            // Send the form data including IP
            return fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        })
        .then(() => {
            alert('تم إرسال طلبك بنجاح!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.');
        })
        .finally(() => {
            // Restore button state
            button.innerHTML = originalButtonText;
            button.disabled = false;
        });
}