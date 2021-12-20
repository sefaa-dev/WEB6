function konumBul() {
    if (navigator.geolocation) {
        console.log('Geolocation destekliyor')
        navigator.geolocation.getCurrentPosition(function (data) {

            console.log(data);

            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();

           // const evKonum = {
               // lat: SVGFEDropShadowElement,
               // lng: fsdfsd
           // }

            const konum = {
                lat: data.coords.latitude,
                lng: data.coords.longitude
            };
            const haritaDiv = document.getElementById('map');
            const gogleMap = new google.maps.Map(haritaDiv, {
                center:konum,
                zoom:15,
              
            });
            // const marker = new google.maps.Marker({
            //     position:konum,
            //     map:googleMap,
            //     title : 'Şuan buradasınız'
            // });
            directionsRenderer.setMap(googleMap);

            directionsService
            .route({
                origin:konum,
                destination:evKonum,
                travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((response)=>{
                directionsRenderer.setDirections(response);
            })
           

        }, function (error) {
            alert(error.message);

        })
    } else {
        alert('Geolocation desteklemiyor')
    }

}

konumBul();