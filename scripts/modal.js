//on button click toggle modal window
document.getElementById('modalCloseButton').addEventListener('click', toggleModalWindow);

//function which toggles modal window on click
function toggleModalWindow(){

    document.getElementById('modalWindow').classList.toggle('modal-window-show');

}

//set values from slider to the modal 
function setSliderModalValues(image, name, description, rating, categories, regularPrice, salePrice, releaseDate){

    document.getElementById('modalWindow').classList.toggle('modal-window-show');

    document.getElementsByClassName('modal-slider-product-image')[0].src=image;

    //check if product has a description
    if(description === null){

        document.getElementsByClassName('modal-slider-product-description')[0].textContent =`Description: This product does not have a description.`;
        document.getElementsByClassName('modal-slider-product-description')[0].style.color = "crimson";

    } else {

        document.getElementsByClassName('modal-slider-product-description')[0].textContent =`Description: ${description}`;

    }

    //check if product has a rating
    if(rating === null){

        document.getElementsByClassName('modal-slider-product-rating')[0].textContent  =`Rating: This product has not been rated yet.`;
        document.getElementsByClassName('modal-slider-product-rating')[0].style.color = "crimson";

    } else {

        document.getElementsByClassName('modal-slider-product-rating')[0].textContent =`Rating: ${rating}`;
        
    }

    document.getElementsByClassName('modal-slider-product-name')[0].textContent =`${name}`;
    document.getElementsByClassName('modal-slider-product-category')[0].textContent =`Categories: ${categories}`;
    document.getElementsByClassName('modal-slider-product-price-regular')[0].textContent =`Price: ${regularPrice}$`;
    document.getElementsByClassName('modal-slider-product-price-sale')[0].textContent =`Sale Price: ${salePrice}$`;
    document.getElementsByClassName('modal-slider-product-release-date')[0].textContent =`Release Date: ${releaseDate}`
    
}