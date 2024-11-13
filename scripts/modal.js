document.addEventListener('DOMContentLoaded', function() {
    const carDivs = document.querySelectorAll('.car-div');
    const modal = document.getElementById('myModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalImage = modal.querySelector('.detail-title img');
    const modalDetailRight = modal.querySelector('.detail-right');
    const modalDetailInfo = modal.querySelector('.detail-info');

    carDivs.forEach(carDiv => {
        carDiv.addEventListener('click', function() {
            const carName = carDiv.querySelector('.car-name').textContent;
            const carPrice = carDiv.querySelector('.car-price').textContent;
            const carImageSrc = carDiv.querySelector('img').src;
            const carMileage = carDiv.dataset.carMileage;
            const carColor = carDiv.dataset.carColor;
            const carYear = carDiv.dataset.carYear;

            modalTitle.textContent = carName;
            modalImage.src = carImageSrc;
            modalDetailRight.innerHTML = `
                <h2>${carName}</h2>
                <p>Price: ${carPrice}</p>
                <p>Year: ${carYear}</p>
                <p>Mileage: ${carMileage}</p>
                <p>Car Color: ${carColor}</p>
            `;
            modalDetailInfo.innerHTML = `
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate ducimus dolores fugit distinctio. Pariatur illum ratione molestias atque fugit minima voluptates vitae. Vero architecto atque necessitatibus ipsum molestias, sint provident mollitia debitis cum enim!</p>
            `;
        });
    });
});