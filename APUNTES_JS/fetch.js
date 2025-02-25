fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log('Deleted:', data))

    //OTRO EJEMPLO


    document.getElementById('getWeather').addEventListener('click', function() {
        const apiKey = 'TU_CLAVE_API';
        const city = document.getElementById('city').value;
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Red no OK: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('cityName').textContent = `Clima en ${data.name}`;
                document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Descripción: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al obtener los datos. Por favor, verifica el nombre de la ciudad.');
            });
    });

    
    