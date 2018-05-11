// Self-Executing Function On Every Page.
(function() {
  console.log('Javascript is up and running!');

  // D A T E   Function
  function DateNow(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (day < 10){
      day = '0' + day;
    }
    if (month < 10){
      month = '0' + month;
    }
    //Final Date Output;
    var dateNow = day + '.' + month + '.' + year;
    document.getElementById('date').innerHTML = dateNow;
    document.getElementById('footer-year').innerHTML = year + ' Solent Pizzas. All rights reserved.';
  }
  DateNow();

  // T I M E   Function
  function TimeNow(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dayOfWeek = today.getDay();

    // Make single digits numbers appear as '0x'
    if (h < 10){
      h = '0' + h;
    }
    if (m < 10){
      m = '0' + m;
    }
    if (s < 10){
      s = '0' + s;
    }

    // Final Time Output;
    var time = h + ':' + m + ':' + s;
    document.getElementById('time').innerHTML = time;

    // Open-Close Switcher after restaurant's schedule
    function open_close(){
      // from Monday to Thursday
      if (dayOfWeek > 0 && dayOfWeek < 5){
        // Open from 10 to 19
        if (h >= 10 && h < 19){
          document.getElementById('open-close-switcher').innerHTML = 'Open';
          document.getElementById('open-close-switcher').style.color = 'green';
        } else {
          document.getElementById('open-close-switcher').innerHTML = 'closed';
          document.getElementById('open-close-switcher').style.color = '#ce0000';
        }
      // from Friday to Sunday
      } else {
        // Open from 10 to 23
        if (h >= 10 && h < 23){
          document.getElementById('open-close-switcher').innerHTML = 'Open';
          document.getElementById('open-close-switcher').style.color = 'green';
        } else {
          document.getElementById('open-close-switcher').innerHTML = 'closed';
          document.getElementById('open-close-switcher').style.color = '#ce0000';
        }
      }
    }
    open_close();
  }

  // Refreshing The Clock & Date Every Second
  setInterval(function(){
    TimeNow();
  }, 1000);


  // OPEN-CLOSE NAVBAR Function
  function open_close_nav(){
    document.getElementById('close-nav').addEventListener('click', function(){
      document.getElementById('sidebar').style.marginLeft = '-100%';
      document.getElementById('content-wrapper').classList.add('padding-without-nav');
      this.style.opacity = '0';
      document.getElementById('open-nav').style.display = 'block';
      document.getElementById('open-nav').style.opacity = '100';
    });
    document.getElementById('open-nav').addEventListener('click', function(){
      document.getElementById('sidebar').style.marginLeft = '0';
      document.getElementById('content-wrapper').classList.remove('padding-without-nav');
      this.style.opacity = '0';
      document.getElementById('close-nav').style.opacity = '100';
    });
  }
  open_close_nav();
})();

// Home Page Functions
// Sliding Header
function slidingHeader() {
  var slide1 = document.getElementById('slide1');
      slide2 = document.getElementById('slide2');
      slide3 = document.getElementById('slide3');
  setInterval(function () {
    slide1.classList.add('curr_slide');
    slide2.classList.remove('curr_slide');
    slide3.classList.remove('curr_slide');
  }, 5000);
  setInterval(function () {
    slide2.classList.add('curr_slide');
    slide1.classList.remove('curr_slide');
    slide3.classList.remove('curr_slide');
  }, 10000);
  setInterval(function () {
    slide3.classList.add('curr_slide');
    slide1.classList.remove('curr_slide');
    slide2.classList.remove('curr_slide');
  }, 15000);
}

// Order Page Functions
// Form
var theForm = document.forms["order_form"];

// Pizza Bases Price
var base_prices = new Array();
    base_prices["Small Base - £5"] = 5;
    base_prices["Medium Base - £7.50"] = 7.5;
    base_prices["Large Base - £10.00"] = 10;
    base_prices["Extra Large Base - £12.50"] = 12.5;
function Base_Order(){
  var base_price = 0;
  var selected_base = theForm.elements["base"];
  for (var i = 0; i < selected_base.length; i++){
    if (selected_base[i].checked) {
      base_price = base_prices[selected_base[i].value];
      break;
    }
  }
  return base_price; 
}

// Toppings Price
var topping_prices = new Array();
    topping_prices["Cheese Topping - £0.20"] = 0.2;
    topping_prices["Mushrooms Topping - £0.40"] = 0.4;
    topping_prices["Ham Topping - £0.50"] = 0.5;
    topping_prices["Anchovies Topping - £0.60"] = 0.6;
function Topping_Order(){
  var topping_price = 0;
  var selected_topping = theForm.elements["topping"];
  for (var i = 0; i< selected_topping.length; i++){
    if (selected_topping[i].checked == true){
      topping_price = topping_price + topping_prices[selected_topping[i].value];
    }
  }
  return topping_price;
}

// Extras Price
var extra_prices = new Array();
    extra_prices["Extra Chips - £1.50"] = 1.5;
    extra_prices["Extra Garlic - £2.00"] = 2;
function Extra_Order(){
  var extra_price = 0;
  var selected_extra = theForm.elements["extra"];
  for (var i = 0; i < selected_extra.length; i++){
    if (selected_extra[i].checked == true){
      extra_price = extra_price + extra_prices[selected_extra[i].value];
    }
  }
  return extra_price;
}

// Add Selected Elements to the Summary Section
function add_to_recit(topping,extra,base) {
  var recit = document.getElementById('recit_body');
  if (topping.checked) {
    var paragraph = document.createElement("P");
    var text = document.createTextNode(topping.value);
    paragraph.appendChild(text);
    paragraph.classList.add('last-elem');
    recit.appendChild(paragraph);
  } else {
    var items = document.querySelectorAll(".last-elem");
    var lastchild = items[items.length - 1];
    recit.removeChild(lastchild);
  }
  return recit;
}

// Total Price
function Total_Price() {
  var base_price = Base_Order();
      topping_price = Topping_Order();
      extra_price = Extra_Order();
      total_price = base_price + topping_price + extra_price;
  document.getElementById('total_price').innerHTML = "£" + total_price.toFixed(2);
  return total_price;
}

// Order Validation
function order_validation(event) {
  var error_container = document.getElementById('error-container');
  var error_message = document.getElementById('errorMsg');

  // Display Error Function
  function display_error() {
    event.preventDefault();
    error_container.style.display = 'block';
    error_container.style.background = 'red';
    error_message.innerHTML = '';
    window.scrollTo(0, 0);
  }

  // Topping Checking
  var all_toppings = theForm.elements["topping"];
  if (!all_toppings[0].checked &&
    !all_toppings[1].checked &&
    !all_toppings[2].checked &&
    !all_toppings[3].checked) {
    // Error Displaying  
    display_error();
    error_message.innerHTML = 'You must select at least a pizza topping!';
  } else {
    window.scrollTo(0, 0);
    error_container.style.display = 'block';
    error_container.style.background = 'green';
    error_message.innerHTML = 'Submitted!';
  }

  // Base Checking
  var all_bases = theForm.elements["base"];
  if (!all_bases[0].checked &&
    !all_bases[1].checked &&
    !all_bases[2].checked &&
    !all_bases[3].checked) {
    // Error Displaying 
    display_error();
    error_message.innerHTML = 'You must select at least a pizza base!';
  }
};

// Order Reset
function resetFunction(event){
  event.preventDefault();
  theForm.reset();
  document.getElementById('recit_body').innerHTML = '';
};

// Modal Open-Close
function open_modal(){
  document.getElementById('overlay').style.display = "block";
  document.getElementById('order-body').style.overflowY = "hidden";
}
function close_modal(){
  document.getElementById('overlay').style.display = "none";
  document.getElementById('order-body').style.overflowY = "scroll";
}


// Contact Page Functions
// Contact Form
var first_name = document.getElementById('first_name');
    last_name = document.getElementById('last_name');
    email = document.getElementById('email');
    phone = document.getElementById('phone');
    message = document.getElementById('message');
    error_container = document.getElementById('error-container');
    error_message = document.getElementById('errorMsg');
    email_filter = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

// Basic Form Validation
function ContactForm(){
  document.getElementById("submit").addEventListener("click", function (event) {
    if ((first_name.value == '') || (last_name.value == '') || (email.value == '') || (message.value == '')) {
      event.preventDefault();
      error_container.style.display = 'block';
      error_container.style.background = 'red';
      error_message.innerHTML = 'Please fill out all the required(*) spaces!';
      window.scrollTo(0, 0);
      realTimeValidation();
    } else if ((!email_filter.test(email.value))) {
      event.preventDefault();
      error_container.style.display = 'block';
      error_container.style.background = 'red';
      error_message.innerHTML = 'You have entered an invalid Email format!';
      window.scrollTo(0, 0);
      realTimeValidation();
    } else {
      window.scrollTo(0, 0);
      error_container.style.display = 'block';
      error_container.style.background = 'green';
      error_message.innerHTML = 'Submitted!';
    }
  });
}
// Intermediate & Advanced Real-Time Validation
function realTimeValidation() {
  if (first_name.value == '') {
    first_name.style.backgroundColor = '#ce0000';
    document.getElementById('fn_tick').style.display = 'none';
    document.getElementById('fn_cross').style.display = 'block';
  } else {
    first_name.style.backgroundColor = '';
    document.getElementById('fn_cross').style.display = 'none';
    document.getElementById('fn_tick').style.display = 'block';
  }
  if (last_name.value == '') {
    last_name.style.backgroundColor = '#ce0000';
    document.getElementById('ln_tick').style.display = 'none';
    document.getElementById('ln_cross').style.display = 'block';
  } else {
    last_name.style.backgroundColor = '';
    document.getElementById('ln_cross').style.display = 'none';
    document.getElementById('ln_tick').style.display = 'block';
  }
  if ((email.value == '') || (!email_filter.test(email.value))) {
    email.style.backgroundColor = '#ce0000';
    document.getElementById('email_tick').style.display = 'none';
    document.getElementById('email_cross').style.display = 'block';
  } else {
    email.style.backgroundColor = '';
    document.getElementById('email_cross').style.display = 'none';
    document.getElementById('email_tick').style.display = 'block';
  }
  if (message.value == '') {
    message.style.backgroundColor = '#ce0000';
    document.getElementById('message_tick').style.display = 'none';
    document.getElementById('message_cross').style.display = 'block';
  } else {
    message.style.backgroundColor = '';
    document.getElementById('message_cross').style.display = 'none';
    document.getElementById('message_tick').style.display = 'block';
  }
}
// Google Map
function initMap() {
  var solentpizzas = { lat: 50.907747, lng: -1.400166 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: solentpizzas
  });
  var marker = new google.maps.Marker({
    position: solentpizzas,
    map: map
  });
}