// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', fetchJoke);

    async function fetchJoke() {
        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            document.getElementById('joke').innerText = data.joke;
        } catch (error) {
            document.getElementById('joke').innerText = 'Oops! Could not fetch a joke at the moment.';
            console.error('Error fetching joke:', error);
        }
    }
});
