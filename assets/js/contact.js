//maps
function initMap() {

  var myOptions = {
    zoom: 14,
    scrollwheel: false,
    center: new google.maps.LatLng(52.1615977, -7.1501521),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
          {
            color: '#f8f8f8',
            gamma: 5
          }
        ]
      }]
  };
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  esq = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(52.161583, -7.154476)
  });
  infoEsq = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0, 0),
    content: '<p style="margin-bottom: 0px; display:flex;"><img src="assets/img/header-1.jpg" height="80" width="100" style="margin-bottom: 15px; margin-left:auto; margin-right:auto;"; /><div style="float:right; text-align:center;">Esquire & Raglan Road<br>1 Little Market Street<br> Tramore, Co.Waterford</div></p>'
  });


  infoEsq.open(map, esq);
  google.maps.event.addDomListener(window, 'load', initMap);
}


var form = document.getElementById("contact");
    var button = document.getElementById("contact-submit");
    

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      alert( "Success! we will be in touch shortly.");
    }

    function error() {
      alert( "Oops! There was a problem.");
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });

  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

