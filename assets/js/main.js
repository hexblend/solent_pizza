// Self-Executing Function When Page Loads.
(function() {
  console.log('Javascript up and running!');

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
      document.getElementById('sidebar').style.marginLeft = '-201px';
      document.getElementById('content-wrapper').classList.add('padding-without-nav');
      this.style.opacity = '0';
      document.getElementById('open-nav').style.display = 'block';
    });
    document.getElementById('open-nav').addEventListener('click', function(){
      document.getElementById('sidebar').style.marginLeft = '0';
      document.getElementById('content-wrapper').classList.remove('padding-without-nav');
      this.style.display = 'none';
      document.getElementById('close-nav').style.opacity = '100';
    });
  }
  open_close_nav();
})();
