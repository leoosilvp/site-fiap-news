document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const likesCount = this.nextElementSibling;
            let currentLikes = parseInt(likesCount.textContent);

            if (this.classList.contains('liked')) {
                currentLikes--;
                this.classList.remove('liked');
                this.textContent = '❤️';
            } else {
                currentLikes++;
                this.classList.add('liked');
                this.textContent = '💗';
            }

            likesCount.textContent = `${currentLikes} curtidas`;

        });
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: this.getAttribute("href") });
    });
});

