// Form
var theForm = document.forms["order_form"];

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBgJ1xaXADp-cxoGD6lMS9BvYQH_p76ZG4",
    authDomain: "solent-pizzas.firebaseapp.com",
    databaseURL: "https://solent-pizzas.firebaseio.com",
    projectId: "solent-pizzas",
    storageBucket: "solent-pizzas.appspot.com",
    messagingSenderId: "119133245723"
};
firebase.initializeApp(config);

// Orders collection
var ordersRef = firebase.database().ref('orders');

// Listen for form submit
theForm.addEventListener('submit', function () {
    // Selections
    // Bases
    // small_base
    if (document.getElementById('small_base').checked == true) {
        var small_base = 'selected';
    } else {
        var small_base = '-';
    }
    // medium_base
    if (document.getElementById('medium_base').checked == true) {
        var medium_base = 'selected';
    } else {
        var medium_base = '-';
    }
    // large_base
    if (document.getElementById('large_base').checked == true) {
        var large_base = 'selected';
    } else {
        var large_base = '-';
    }
    // xlarge_base
    if (document.getElementById('xlarge_base').checked == true) {
        var xlarge_base = 'selected';
    } else {
        var xlarge_base = '-';
    }

    // Toppings
    // cheese_topping
    if (document.getElementById('cheeseT').checked == true) {
        var cheese_topping = 'selected';
    } else {
        var cheese_topping = '-';
    }
    // mushrooms_topping
    if (document.getElementById('mushroomsT').checked == true) {
        var mushrooms_topping = 'selected';
    } else {
        var mushrooms_topping = '-';
    }
    // ham_topping
    if (document.getElementById('hamT').checked == true) {
        var ham_topping = 'selected';
    } else {
        var ham_topping = '-';
    }
    // anchovies_topping
    if (document.getElementById('anchoviesT').checked == true) {
        var anchovies_topping = 'selected';
    } else {
        var anchovies_topping = '-';
    }

    // Extras
    // chips_extra
    if (document.getElementById('chipsE').checked == true) {
        var chips_extra = 'selected';
    } else {
        var chips_extra = '-';
    }
    // garlic_extra
    if (document.getElementById('garlicE').checked == true) {
        var garlic_extra = 'selected';
    } else {
        var garlic_extra = '-';
    }

    // Address
    var address = document.getElementById('address').value;
        post_code = document.getElementById('post_code').value;

    // Save Order
    saveFullOrder(small_base, medium_base, large_base, xlarge_base,
        cheese_topping, mushrooms_topping, ham_topping, anchovies_topping,
        chips_extra, garlic_extra,
        address, post_code);
    
    // Save Order to Firebase
    function saveFullOrder(small_base, medium_base, large_base, xlarge_base,
        cheese_topping, mushrooms_topping, ham_topping, anchovies_topping,
        chips_extra, garlic_extra,
        address, post_code) {
        var newOrderRef = ordersRef.push();
        var emptyString = '';
        newOrderRef.set({
            'a) Small Base': small_base,
            'b) Medium Base': medium_base,
            'c) Large Base': large_base,
            'd) Extra Large Base': xlarge_base,
            'e) Cheese Topping': cheese_topping,
            'f) Mushrooms Topping': mushrooms_topping,
            'g) Ham Topping': ham_topping,
            'h) Anchovies Topping': anchovies_topping,
            'i) Extra Chips': chips_extra,
            'j) Extra Garlic': garlic_extra,
            'k) Address': address,
            'l) Post Code': post_code,
            'm) Price': '£' + total_price
        });
    }
});