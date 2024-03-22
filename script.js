document.addEventListener("DOMContentLoaded", function() {
    fetch('/plants')
        .then(response => response.json())
        .then(data => {
            const catalogContainer = document.querySelector('.catalog-items');

            data.forEach(item => {
                const plantItem = document.createElement('div');
                plantItem.classList.add('item');

                const img = document.createElement('img');
                img.classList.add('plant-img');

                const name = document.createElement('h3');
                name.classList.add('plant-name');

                const description = document.createElement('p');
                description.classList.add('description')

                const country = document.createElement('p');
                country.classList.add('plant-country');

                const price = document.createElement('h4');
                price.classList.add('plant-price');

                const button = document.createElement('button');
                button.classList.add('detailsButton');
                button.textContent = 'Подробнее';

                img.src = item.Photo_url;
                name.textContent = item.Name;
                country.textContent = item.Country;
                price.textContent = `${item.Price} руб.`;
                description.textContent = 'Область естественного распространения:';

                plantItem.appendChild(img);
                plantItem.appendChild(name);
                plantItem.appendChild(description);
                plantItem.appendChild(country);
                plantItem.appendChild(price);
                plantItem.appendChild(button);

                catalogContainer.appendChild(plantItem);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

    fetch('/promotion')
        .then(response => response.json())
        .then(data => {
            const actionContainer = document.querySelector('.main-stocks');

            data.forEach(item => {
                const stockDiv = document.createElement('div');
                stockDiv.classList.add('stock');
                
                const name = document.createElement('h3');
                name.classList.add('stock-name');
    
                const description = document.createElement('p');
                description.classList.add('description-stock');

                const img = document.createElement('img');
                img.classList.add('stock_img');
    
                name.textContent = item.Name;
                description.textContent = item.Description;
                img.src = item.Photo;
    
                stockDiv.appendChild(name);
                stockDiv.appendChild(description);
                stockDiv.appendChild(img)
    
                actionContainer.appendChild(stockDiv);
            });
        })
    .catch(error => console.error('Error fetching JSON:', error));

    fetch('/promotion')
        .then(response => response.json())
        .then(data => {
            const actionContainer = document.querySelector('.main-stocks');

            data.forEach(item => {
                const stockDiv = document.createElement('div');
                stockDiv.classList.add('stock');
                
                const name = document.createElement('h3');
                name.classList.add('stock-name');
    
                const description = document.createElement('p');
                description.classList.add('description-stock');

                const img = document.createElement('img');
                img.classList.add('stock_img');
    
                name.textContent = item.Name;
                description.textContent = item.Description;
                img.src = item.Photo;
    
                stockDiv.appendChild(name);
                stockDiv.appendChild(description);
                stockDiv.appendChild(img)
    
                actionContainer.appendChild(stockDiv);
            });
        })
    .catch(error => console.error('Error fetching JSON:', error));

    
    fetch('/contacts')
    .then(response => response.json())
    .then(data => {
        const actionContainer = document.querySelector('.main-stocks');

        data.forEach(item => {
            const stockDiv = document.createElement('div');
            stockDiv.classList.add('stock');
            
            const name = document.createElement('h3');
            name.classList.add('stock-name');

            const description = document.createElement('p');
            description.classList.add('description-stock');

            const img = document.createElement('img');
            img.classList.add('stock_img');

            name.textContent = item.Name;
            description.textContent = item.Description;
            img.src = item.Photo;

            stockDiv.appendChild(name);
            stockDiv.appendChild(description);
            stockDiv.appendChild(img)

            actionContainer.appendChild(stockDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

});