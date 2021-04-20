function paymentProcess() {

    var options = {
        "key": "rzp_test_91MfvU3VQtn1Ry", // Enter the Key ID generated from the Dashboard
        "amount": 100*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Auto Finance",
        "description": "Registration Fee",
        "image": "/static/img/login.jpg",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            $('#myModal').modal();
        },
        // "prefill": {
        //     "name": "Test User",
        //     "email": "pachasaheb55@gmail.com",
        //     "contact": "9999999999"
        // },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response);
}