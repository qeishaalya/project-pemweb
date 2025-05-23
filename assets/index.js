document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#customCarousel');
    const carouselInner = carousel.querySelector('.custom-carousel-inner');
    const items = carousel.querySelectorAll('.custom-carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    let currentIndex = 0;
    const totalItems = items.length;
    const transitionDuration = 700; // Sesuai dengan CSS

    // Fungsi untuk memindahkan carousel
    function moveCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active class
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Pindah ke slide berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        moveCarousel();
    }

    // Pindah ke slide sebelumnya
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        moveCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide (opsional)
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Hentikan auto slide ketika hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    // Lanjutkan auto slide ketika mouse leave
    carousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Inisialisasi pertama kali
    moveCarousel();
});