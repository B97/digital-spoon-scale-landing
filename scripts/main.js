function submitForm() {
    const form = document.getElementById("orderForm");
    const formData = {
        name: form.name.value,
        phone: form.phone.value,
        address: form.address.value,
        quantity: form.quantity.value,
    };

    fetch("https://script.google.com/macros/s/AKfycbxNTWNlQY3tuNCEGhk0jj-IZllFLYZZgkkyd3iIvEl-QGyroHk4b3pjFkt3JY1zKjo/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "success") {
                alert("تم إرسال الطلب بنجاح!");
                form.reset();
            } else {
                alert("حدث خطأ أثناء إرسال الطلب.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("حدث خطأ أثناء إرسال الطلب.");
        });
}

