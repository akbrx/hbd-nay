document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang dibutuhkan
    const moreInfoBtn = document.getElementById('more-info-btn');
    const modalContainer = document.getElementById('info-modal-container');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Tampilkan modal saat tombol 'More Info' diklik
    moreInfoBtn.addEventListener('click', () => {
        modalContainer.classList.add('active');
    });

    // Sembunyikan modal saat tombol 'Close' (X) diklik
    closeModalBtn.addEventListener('click', () => {
        modalContainer.classList.remove('active');
    });

    // Sembunyikan modal saat area luar modal (overlay) diklik
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Kode untuk modal "More Info" Anda yang sudah ada
    const moreInfoBtn = document.getElementById('more-info-btn');
    const modalContainer = document.getElementById('info-modal-container');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', () => {
            modalContainer.classList.add('active');
        });
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modalContainer.classList.remove('active');
        });
    }
    if (modalContainer) {
        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                modalContainer.classList.remove('active');
            }
        });
    }

    // --- TAMBAHKAN KODE BARU DI BAWAH INI ---
    const browseBtn = document.getElementById('browse-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const browseMenu = document.querySelector('.browse-menu');

    if (browseBtn) {
        browseBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Mencegah event "click" menyebar ke window
            browseMenu.classList.toggle('active');
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
    }

    // Menutup dropdown jika klik di luar area menu
    window.addEventListener('click', () => {
        if (browseMenu && browseMenu.classList.contains('active')) {
            browseMenu.classList.remove('active');
            mobileNav.style.display = 'none';
        }
    });
});