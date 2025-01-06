//document.getElementById('order-form').addEventListener('submit', function (e) {
//    e.preventDefault();
//
//    const form = e.target;
//    const formData = new FormData(form);
//
//    // Convert FormData to a plain object
//    const data = {};
//    formData.forEach((value, key) => {
//        data[key] = value;
//    });
//
//    // Replace with your Google Apps Script URL
//    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvMLwVpdz_xV3AlS2QJk09ssnfDKRAq9QPW19J7TtT1-sn2fl2r__Awbdbtcc2PzTa/exec';
//
//    fetch(scriptURL, {
//        method: 'POST',
//        body: JSON.stringify(data), // Send data as JSON
//        headers: {
//            'Content-Type': 'application/json' // Set content type to JSON
//        }
//    })
//    .then(response => response.json()) // Parse the JSON response
//    .then(result => {
//        // Show success message
//        document.getElementById('success-message').style.display = 'block';
//        form.reset(); // Reset the form
//    })
//    .catch(error => {
//        console.error('Error:', error);
//        alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
//    });
//});