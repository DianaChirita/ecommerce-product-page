function openLinksMenu() {
    const linksMenu = document.querySelector('.navbar-links-menu');

    if (linksMenu) {
        linksMenu.style.display = "block";
    }
}

function closeLinksMenu() {
    const linksMenu = document.querySelector('.navbar-links-menu');

    if (linksMenu) {
        linksMenu.style.display = "none";
    }
}

function closeLightBox() {
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        lightbox.classList.remove('active');

        const imageMain = document.querySelector('.image-main');
        const lightboxImage = document.getElementById('lightbox-img');

        if (lightboxImage && imageMain) {
            const selectedImageNumber = lightboxImage.getAttribute("data-image-number");

            document.querySelectorAll('.image-thumbnail')[selectedImageNumber - 1].classList.add('image-selected');
            imageMain.src = `./images/image-product-${selectedImageNumber}.jpg`;
        }
    }
}

function changeImage(isNext) {
    const lightbox = document.getElementById('lightbox');
    let activeImage;

    if (lightbox.classList.contains('active')) {
        activeImage = document.getElementById('lightbox-img');
    }
    else {
        activeImage = document.querySelector('.image-main');
    }

    const activeImageNumber = parseInt(activeImage.getAttribute("data-image-number"));
    const newActiveImageNumber = isNext ? activeImageNumber + 1 : activeImageNumber - 1;
    const newActiveImage = document.querySelectorAll('.lightbox .image-thumbnail')[newActiveImageNumber - 1];

    if (newActiveImage) {
        activeImage.src = `./images/image-product-${newActiveImageNumber}.jpg`;
        activeImage.setAttribute('data-image-number', newActiveImageNumber);
    }
}

function changeItemsNumber(add) {
    const noOfItemsElement = document.querySelector(".counter").querySelector('h5');

    if (noOfItemsElement) {
        const noOfItems = parseInt(noOfItemsElement.innerHTML);
        if (add) {
            noOfItemsElement.innerHTML = noOfItems + 1;
        } else if (noOfItems !== 0) {
            noOfItemsElement.innerHTML = noOfItems - 1;
        }
    }
}

function toggleCartPreview() {
    const cartPreview = document.querySelector('.cart');

    if (cartPreview) {
        if (cartPreview.style.display === 'block') {
            cartPreview.style.display = 'none';
        }
        else {
            const cartItemsNumberElement = document.querySelector('.cart-items-number');
            const cartPreviewPriceElement = document.querySelector('.cart-price');
            const cartContentElement = cartPreview.querySelector('.cart-content');
            const cartEmptyElement = cartPreview.querySelector('.cart-empty');

            if (parseFloat(cartItemsNumberElement.innerHTML) > 0) {
                const cartPreviewPriceTotalElement = cartPreviewPriceElement.querySelector('b');

                cartPreviewPriceTotalElement.innerHTML = '$' + (parseFloat(cartPreviewPriceElement.querySelectorAll('p')[1].innerHTML, 2) * parseFloat(cartItemsNumberElement.innerHTML, 2)).toFixed(2);
                cartPreviewPriceElement.querySelectorAll('p')[3].innerHTML = '&nbsp' + cartItemsNumberElement.innerHTML + '&nbsp';

                cartContentElement.style.display = 'block';
                cartEmptyElement.style.display = 'none';
            }
            else {
                cartContentElement.style.display = 'none';
                cartEmptyElement.style.display = 'flex';
            }

            cartPreview.style.display = 'block';
        }
    }
}

function addToCart() {
    const numberOfItems = parseInt(document.querySelector('.counter').querySelector('h5').innerHTML);
    const cartItemsNumberElement = document.querySelector('.cart-items-number');

    if (cartItemsNumberElement) {
        if (numberOfItems > 0) {
            cartItemsNumberElement.style.display = 'block';
            cartItemsNumberElement.innerHTML = numberOfItems;
        }
        else {
            cartItemsNumberElement.style.display = 'none';
            cartItemsNumberElement.innerHTML = numberOfItems;
        }
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    const imageThumbnails = document.querySelectorAll('.image-thumbnail');

    if (imageThumbnails) {
        for (let img of imageThumbnails) {
            img.addEventListener("click", function () {
                const selectedImageThumbnail = document.querySelector('.image-selected');
                const lightbox = document.getElementById('lightbox');

                if (lightbox) {
                    lightbox.classList.add('active');
                }

                if (selectedImageThumbnail) {
                    selectedImageThumbnail.classList.remove('image-selected');
                }

                const imageNumber = img.id.split('_')[1];
                const lightboxImage = document.getElementById('lightbox-img');

                lightboxImage.src = `./images/image-product-${imageNumber}.jpg`;
                lightboxImage.setAttribute("data-image-number", imageNumber);
            })
        }
    }

    document.addEventListener('mouseup', function (e) {
        const cartPreview = document.querySelector('.cart');
        const cartPreviewEmpty = document.querySelector('.cart-empty');

        if (!cartPreview.contains(e.target)) {
            cartPreview.style.display = 'none';
        }

        if (!cartPreviewEmpty.contains(e.target)) {
            cartPreviewEmpty.style.display = 'none';
        }
    });
})
