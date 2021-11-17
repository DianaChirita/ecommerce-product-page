function openLinksMenu() {
    const linksMenu = document.querySelector('.navbar-links-menu');

    if (linksMenu){
        linksMenu.style.display = "block";
    }
}

function closeLinksMenu() {
    const linksMenu = document.querySelector('.navbar-links-menu');

    if (linksMenu){
        linksMenu.style.display = "none";
    }
}

function closeThumbnail() {
    const lightbox = document.getElementById('lightbox');

    if (lightbox){
        lightbox.classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    const imageThumbnails = document.querySelectorAll('.image-thumbnail');

    if (imageThumbnails){
        for (let img of imageThumbnails){
            img.addEventListener("click", function() {
                const selectedImageThumbnail = document.querySelector('.image-selected');
                const lightbox = document.getElementById('lightbox');

                if (lightbox){
                    lightbox.classList.add('active');
                }

                if (selectedImageThumbnail){
                    selectedImageThumbnail.classList.remove('image-selected');
                }

                img.classList.add('image-selected');

                const imageNumber = img.id.split('_')[1];
                const imageMain = document.querySelector('.image-main');

                if (imageNumber && imageMain){
                    imageMain.src = `./images/image-product-${imageNumber}.jpg`;
                }
            })
        }
    }
})
