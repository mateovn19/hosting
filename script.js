document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        document.getElementById('dateTime').innerText = `Fecha: ${date} | Hora: ${time}`;
    }

    function updateLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('location').innerText = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
            }, function(error) {
                document.getElementById('location').innerText = 'No se puede obtener la ubicación.';
            });
        } else {
            document.getElementById('location').innerText = 'Geolocalización no es soportada por este navegador.';
        }
    }

    updateDateTime();
    updateLocation();
    setInterval(updateDateTime, 1000); // Actualizar la fecha y hora cada segundo
});
