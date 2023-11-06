
function initGMap() {
    // let google;
    // let map;
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(42.546642, -70.978803);


    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    // var $marker_url = ( is_internetExplorer11 ) ? document.location.origin + '/wp-content/themes/wps-redwoodfd/assets/images/map-pin.svg' : document.location.origin + '/wp-content/themes/wps-redwoodfd/assets/images/map-pin.svg';
    var $marker_url = wps_vars.wps_site_theme_url + "/assets/images/icon-map-pin.svg";


    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map.
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        // styles: style,
    };


    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('foo-map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var contentString = '<div class="map-info-window">' +
        '<div class="bodyContent">' +
        '<h3>Pavlo Orthodontics</h3>' +
        '<p>9 Bourbon Street, Suite #1,<br>\n' +
        'Peabody, MA 01960</p>' +
        '<p><a href="https://goo.gl/maps/NbNzK1UHPN25zZ8CA" target="_blank">Get Direction</a></p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: $marker_url
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, "click", function (event) {
        infowindow.close(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initGMap);

initGMap();
