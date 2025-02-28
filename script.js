document.querySelectorAll('.sef img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

// 이미지 영역을 마우스 스크롤로 좌우 스크롤 가능하게
const sef = document.querySelector('.sef');
let isDown = false;
let startX;
let scrollLeft;

sef.addEventListener('mousedown', (e) => {
    isDown = true;
    sef.classList.add('active');
    startX = e.pageX - sef.offsetLeft;
    scrollLeft = sef.scrollLeft;
});

sef.addEventListener('mouseleave', () => {
    isDown = false;
    sef.classList.remove('active');
});

sef.addEventListener('mouseup', () => {
    isDown = false;
    sef.classList.remove('active');
});

sef.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sef.offsetLeft;
    const walk = (x - startX) * 3; // 스크롤 속도 조정
    sef.scrollLeft = scrollLeft - walk;
});
