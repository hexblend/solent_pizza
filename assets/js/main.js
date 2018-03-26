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
  var slide2 = document.getElementById('slide2');
  var slide3 = document.getElementById('slide3');
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

// Contact Page Functions
// Contact Form
var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last_name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var error_container = document.getElementById('error-container');
var error_message = document.getElementById('errorMsg');
var email_filter = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

// Basic Form Validation
document.getElementById("submit").addEventListener("click", function (event) {
  if ( (first_name.value == '') || (last_name.value == '') || (email.value == '')  || (message.value == '') ){
    event.preventDefault();
    error_container.style.display = 'block';
    error_container.style.background = 'red';
    error_message.innerHTML = 'Please fill out all the required(*) spaces!';
    window.scrollTo(0, 0);
    realTimeValidation();
  } else if ( (!email_filter.test(email.value)) ){
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

// Intermediate & Advanced Real-Time Validation
function realTimeValidation(){
  if (first_name.value == ''){
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
  if ( (email.value == '') || (!email_filter.test(email.value)) ){
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