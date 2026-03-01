(function() {
            // ===== КАСТОМНЫЙ КУРСОР =====
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });

                // эффект наведения на кликабельные элементы
        const hoverables = document.querySelectorAll('a, button, .feature-card, .btn, .modal-close');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }

            // ===== ПОДСВЕТКА КАРТОЧЕК ОТ МЫШИ =====
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', x + 'px');
            card.style.setProperty('--y', y + 'px');
        });
    });

            // ===== МОДАЛЬНОЕ ОКНО =====
    const modalOverlay = document.getElementById('modalOverlay');
    const showBtn = document.getElementById('showModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    if (showBtn && modalOverlay && closeBtn) {
        showBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('active');
        });
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

            // ===== АНИМАЦИЯ ХЕДЕРА ПРИ СКРОЛЛЕ =====
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 3rem';
            header.style.background = 'rgba(10,12,18,0.9)';
        } else {
            header.style.padding = '1.8rem 3rem';
            header.style.background = 'rgba(14,15,20,0.7)';
        }
    });

            // плавный скролл для якорей (если есть)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
                const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
