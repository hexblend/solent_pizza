// Self-Executing Function When Page Loads.
(function() {
  console.log('Javascript up and working!');
  var curr_hour = {}; // Globally scoped object
  function TimeNow(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
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

    // Open-Close Switcher
    function open_close(){
      if (h >= 8 && h < 16){
        document.getElementById('open-close-switcher').innerHTML = 'Open';
        document.getElementById('open-close-switcher').style.color = 'green';
      } else {
        document.getElementById('open-close-switcher').innerHTML = 'closed';
        document.getElementById('open-close-switcher').style.color = 'red';
      }
    }
    open_close();
  }

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
  }

  // Refreshing The Clock & Date Every Second
  setInterval(function(){
    TimeNow();
    DateNow();
  }, 1000);
})();
