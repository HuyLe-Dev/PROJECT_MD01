function changeColorIcon(icon) {
    // Kiểm tra class của chính icon được click
    if (icon.classList.contains("ri-heart-line")) {
        // --- Chuyển sang YÊU THÍCH ---
        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");
        icon.style.color = "red";
    } else {
        // --- Bỏ YÊU THÍCH ---
        icon.classList.remove("ri-heart-fill");
        icon.classList.add("ri-heart-line");
        icon.style.color = ""; // Trả về màu mặc định
    }
}

// START SLIDE

let slideIndex = 1;
showSlides(slideIndex);

// Tự động chuyển sau 5s
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Ẩn tất cả slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Xóa active ở dấu chấm
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // HIỆN SLIDE HIỆN TẠI VỚI DISPLAY FLEX
    slides[slideIndex - 1].style.display = "flex";

    dots[slideIndex - 1].className += " active";
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

//END SLIDE