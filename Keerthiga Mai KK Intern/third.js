document.addEventListener('DOMContentLoaded', () => {
    const places = [
        { name: 'Chinnar Water Sanctuary', cost: '₹200' },
        { name: 'Muniyara', cost: '₹150' },
        { name: 'Pathamedu View Point', cost: '₹100' },
        { name: 'Rose Garden', cost: '₹250' },
        { name: 'Idly Hill View Point', cost: '₹150' },
        { name: 'Combay Park', cost: '₹200' },
        { name: 'Meshapuli Mala', cost: '₹300' },
        { name: 'Lockhart Tea Museum', cost: '₹250' },
        { name: 'Spice Plantation Visit', cost: '₹350' },
        { name: 'Cheeyappara Water Falls', cost: '₹200' },
        { name: 'Attukad Water Falls', cost: '₹150' },
        { name: 'Eravikulam National Park', cost: '₹500' },
        { name: 'Elephant Ride', cost: '₹800' },
        { name: 'Mattupetty Dam', cost: '₹300' },
        { name: 'Echo Point', cost: '₹150' }
    ];

    const container = document.getElementById('places-container');
    
    places.forEach(place => {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `
            <h2>${place.name}</h2>
            <div class="cost">Cost: ${place.cost}</div>
        `;
        container.appendChild(div);
    });
});

