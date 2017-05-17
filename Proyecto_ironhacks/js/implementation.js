var map;
function myMap() {
	var myCenter = new google.maps.LatLng(41.8708,-87.6505);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 14};
	map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}

/* Farnes narket */

var markers = [];
var xhttp =new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
	}
};
xhttp.open("GET", "https://data.cityofchicago.org/api/views/x5xx-pszi/rows.xml?accessType=DOWNLOAD", true);
xhttp.send();
function myFunction(xml) {
	var x, y, i, xmlDoc;
	var content = ""; 
	xmlDoc = xml.responseXML;
	x = xmlDoc.getElementsByTagName("latitude");
	y = xmlDoc.getElementsByTagName("longitude");
	a = xmlDoc.getElementsByTagName("location");
	b = xmlDoc.getElementsByTagName("intersection");
	c = xmlDoc.getElementsByTagName("day");
	d = xmlDoc.getElementsByTagName("start_time");
	e = xmlDoc.getElementsByTagName("end_time");
	for (i = 0; i < x.length, i < y.length, i < a.length, i < b.length, i < c.length, i < d.length, i < e.length; i++) { 
	var latLng = new google.maps.LatLng(x[i].childNodes[0].nodeValue,y[i].childNodes[0].nodeValue);
	content += "location: " + a[i].childNodes[0].nodeValue + "<br>" + "intersection: " + b[i].childNodes[0].nodeValue + "<br>" + "day attention :" + c[i].childNodes[0].nodeValue + "<br>"
	+ " Hours of operation" +d[i].childNodes[0].nodeValue + "-" + e[i].childNodes[0].nodeValue ;
	addMarkerF(latLng, content);
	content = "";
	}
}

function addMarkerF(location, content) {
        var marker = new google.maps.Marker({
          position: location,
          icon: "Images/Iconos/farmstand.png",
          map: map
        });
        markers.push(marker);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        	return function() {
        		infowindow.setContent(content);
        		infowindow.open(map,marker);
        	};
        })(marker,content,infowindow));
      }

      function setMapOnAllF(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      function clearMarkersF() {
        setMapOnAllF(null);
      }

      function showMarkersF() {
        setMapOnAllF(map);
      }

      function deleteMarkersF() {
        clearMarkersF();
        markers = [];
      }

/*Police stations */

var markers2 = [];
var xhttp2 =new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction2(this);
	}
};
xhttp2.open("GET", "https://data.cityofchicago.org/api/views/z8bn-74gv/rows.xml?accessType=DOWNLOAD", true);
xhttp2.send();
function myFunction2(xml) {
	var x, y, i, xmlDoc; 
	var content = ""; 
	xmlDoc = xml.responseXML;
	x = xmlDoc.getElementsByTagName("latitude");
	y = xmlDoc.getElementsByTagName("longitude");
	a = xmlDoc.getElementsByTagName("district_name");
	b = xmlDoc.getElementsByTagName("address");
	c = xmlDoc.getElementsByTagName("phone");
	for (i = 0; i < x.length, i < y.length, i < a.length, i < b.length, i < c.length; i++) { 
	var latLng = new google.maps.LatLng(x[i].childNodes[0].nodeValue,y[i].childNodes[0].nodeValue);
	content += "district_name: " + a[i].childNodes[0].nodeValue + "<br>" + "address: " + b[i].childNodes[0].nodeValue + "<br>" + "phone: " + c[i].getAttribute('phone_number') + "<br>" ;
	addMarkerP(latLng, content);
	content = "";
	}
}

function addMarkerP(location, content) {
        var marker = new google.maps.Marker({
          position: location,
          icon: "Images/Iconos/police2.png",
          map: map
        });
        markers2.push(marker);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        	return function() {
        		infowindow.setContent(content);
        		infowindow.open(map,marker);
        	};
        })(marker,content,infowindow));
      }

      function setMapOnAllP(map) {
        for (var i = 0; i < markers2.length; i++) {
          markers2[i].setMap(map);
        }
      }

      function clearMarkersP() {
        setMapOnAllP(null);
      }

      function showMarkersP() {
        setMapOnAllP(map);
      }

      function deleteMarkersP() {
        clearMarkersP();
        markers2 = [];
      }      

/* Statistics for Public Health */
var markers3 = [];
var xhttp3 =new XMLHttpRequest();
xhttp3.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction3(this);
	}
};
xhttp3.open("GET", "https://data.cityofchicago.org/api/views/kcki-hnch/rows.xml?accessType=DOWNLOAD", true);
xhttp3.send();
function myFunction3(xml) {
	var x,y, i, xmlDoc, a,b,c,d;
	var content = ""; 
	xmlDoc = xml.responseXML;
	x = xmlDoc.getElementsByTagName("latitude");
	y = xmlDoc.getElementsByTagName("longitude");
	a = xmlDoc.getElementsByTagName("site_name");
	b = xmlDoc.getElementsByTagName("hours_of_operation");
	c = xmlDoc.getElementsByTagName("street_address");
	d = xmlDoc.getElementsByTagName("phone_1");

	for (i = 0; i < x.length, i < y.length, i < a.length, i < b.length, i < c.length, i < d.length; i++) { 
	var latLng = new google.maps.LatLng(x[i].childNodes[0].nodeValue,y[i].childNodes[0].nodeValue);
	content += "site name: " + a[i].childNodes[0].nodeValue + "<br>" + "hours of operation: " +b[i].childNodes[0].nodeValue + "<br>"
	+ "street address" + c[i].childNodes[0].nodeValue + "<br>" + "phone :" + d[i].childNodes[0].nodeValue;
	addMarker(latLng,content);
	content = "";  
	}
}

function addMarker(location,content) {
        var marker = new google.maps.Marker({
          position: location,
          icon: "Images/Iconos/health.jpg",
          map: map
        });
        markers3.push(marker);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        	return function() {
        		infowindow.setContent(content);
        		infowindow.open(map,marker);
        	};
        })(marker,content,infowindow));
      }

      
      function setMapOnAll(map) {
        for (var i = 0; i < markers3.length; i++) {
          markers3[i].setMap(map);
        }
      }

      
      function clearMarkers() {
        setMapOnAll(null);
      }

      
      function showMarkers() {
        setMapOnAll(map);
      }

      
      function deleteMarkers() {
        clearMarkers();
        markers3 = [];
      }

/* Libraries */

var markers4 = [];
var xhttp4 = new XMLHttpRequest();
xhttp4.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction4(this);
	}
};
xhttp4.open("GET", "https://data.cityofchicago.org/api/views/x8fc-8rcq/rows.xml?accessType=DOWNLOAD", true);
xhttp4.send();
function myFunction4(xml) {
	var x, i, txt, xmlDoc; 
	var content = "";
	xmlDoc = xml.responseXML;
	txt = "";
	x = xmlDoc.getElementsByTagName("location");
	a = xmlDoc.getElementsByTagName("name_");
	b = xmlDoc.getElementsByTagName("hours_of_operation");
	c = xmlDoc.getElementsByTagName("address");
	for (i = 0; i < x.length, i < a.length, i < b.length, i < c.length; i++) { 
	var latLng = new google.maps.LatLng(x[i].getAttribute('latitude'),x[i].getAttribute('longitude'));
	content += "name: " + a[i].childNodes[0].nodeValue + "<br>" + "hours_of_operation: " + b[i].childNodes[0].nodeValue + "<br>" + "address: " + c[i].childNodes[0].nodeValue ;
	addMarkerL(latLng,content);
	content = "";
	}

}

function addMarkerL(location, content) {
        var marker = new google.maps.Marker({
          position: location,
          icon: "Images/Iconos/library.png",
          map: map
        });
        markers4.push(marker);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        	return function() {
        		infowindow.setContent(content);
        		infowindow.open(map,marker);
        	};
        })(marker,content,infowindow));
      }

      
      function setMapOnAllL(map) {
        for (var i = 0; i < markers4.length; i++) {
          markers4[i].setMap(map);
        }
      }

      
      function clearMarkersL() {
        setMapOnAllL(null);
      }

      
      function showMarkersL() {
        setMapOnAllL(map);
      }

      
      function deleteMarkersL() {
        clearMarkersL();
        markers4 = [];
      }

