/*
  VALTER 2025 Landing Page Scripts
  - Mobile menu toggle
  - Smooth scrolling for in-page navigation
  - Countdown timer
  - Swiper slider initialization
  - Modal and Form logic (NEW)
*/

// --- 1. UTILITY FUNCTIONS & CONFIG ---

const eventData = {
    webdesign: {
        title: 'Web Design',
        subtitle: 'UI/UX!',
        poster: 'assets/Poster Kegiatan/Copy of posterWebDes-02.png',
        deskripsi_lomba: 'Siap Unjuk Kreativitas? Web Design VALTER 2025 hadir sebagai ajang kompetisi merancang Landing Page bertema VALTER 2025 dengan kebebasan penuh dalam gaya dan kreativitas. Lomba ini dapat diikuti secara individu maupun kelompok, dan tentunya menghadirkan hadiah menarik bagi sang juara! Tunjukkan ide orisinalmu, ciptakan desain web inovatif, dan jadilah bagian dari energi baru di dunia digital!',
        harga: 'Rp 35.000',
        timeline: [
            'Pendaftaran: 1 September - 13 Oktober 2025',
            'Technical Meeting: 15 Oktober 2025',
            'Pengumpulan Karya: 16 - 21 Oktober 2025',
            'Seleksi Karya: 22 Oktober 2025',
            'Pengumuman Finalis: 23 Oktober 2025',
            'Presentasi Karya: 25 Oktober 2025'
        ],
                pembayaran: [
            { platform: 'Mandiri', nomor: '1130020796169' },
            { platform: 'Dana', nomor: '081337857563' }
        ],
        contact: 'Afiyah (0897-8737-184)',
    },
    videocampaign: {
        title: 'Video Campaign',
        subtitle: 'Kampanye Video Kreatif!',
        poster: 'assets/Poster Kegiatan/Copy of posterVidCamp-02.png',
        deskripsi_lomba: 'Video campaign valter 2025 mengajak peserta untuk mengeksplorasi dan menampilkan bagaimana teknologi Kecerdasan Buatan (AI) tidak hanya menjadi alat bantu, tetapi juga menjadi mitra kreatif bagi para content creator di era digital saat ini dengan tema Peran AI dalam Pemanfaatan Media Sosial oleh Para Content Creator.',
        harga: 'Rp 60.000',
        timeline: [
            'Pendaftaran: 1 Septenber - 13 Oktoktober 2025',
            'Technical Meeting: 15 Oktober 2025',
            'Pengumpulan Karya: 16 - 23 Oktober 2025',
            'Seleksi hasil karya: 24 Oktober 2025',
            'Pengumuman Finalis: 25 Oktober 2025',
            'Presentasi Karya: 27 Oktober 2025'
        ],
                pembayaran: [
            {
            platform: 'Mandiri', nomor: '1130020796169',
            platform: 'Dana', nomor: '081337857563',
            }
        ],
        contact: 'Kiki (0857-0925-1828)',
    },
    esport: {
        title: 'E-Sport: Mobile Legends',
        subtitle: 'Turnamen Mobile Legends: Bang Bang!',
        poster: 'assets/Poster Kegiatan/Copy of posterMole-02.png',
        deskripsi_lomba: 'E-Sport VALTER 2025 menghadirkan Turnamen Mobile Legends: Bang Bang dalam format hybrid, yang menggabungkan keseruan kompetisi online dan pengalaman langsung secara offline. Menjadi ruang bagi para pemain untuk mengasah strategi, membangun kekompakan tim, serta menjunjung tinggi sportivitas. Buktikan diri sebagai penguasa Land of Dawn dan rebut hadiah menariknya!',
        harga: 'Rp 45.000',
        timeline: [
            'Pendaftaran: 1 September - 22 Oktober 2025',
            'Technical Meeting: 23 Oktober 2025',
            'Pelaksanaan: 25 Oktober 2025'
        ],
                pembayaran: [
            {
            platform: 'Mandiri', nomor: '1130020796169',
            platform: 'Dana', nomor: '081337857563',
            }
        ],
        contact: 'Rama (0896-2015-6526)',
        contact: 'Ihsan (0856-5836-4556)',
    },
    seminar: {
        title: 'CoCreate or Compete:',
        subtitle: 'Kolaborasi atau kompetisi bersama Al',
        poster: 'assets/Poster Kegiatan/Copy of posterSeminar-01.png',
        deskripsi_lomba: 'Seminar VALTER 2025 hadir sebagai acara puncak dari Festival Multimedia dan Komputer (VALTER)! Dengan mengusung tema “CoCreate or Compete: Kolaborasi atau Kompetisi bersama AI”, seminar ini menjadi momen spesial yang menghadirkan GUEST STAR inspiratif untuk berbagi pengalaman dan insight terbaru. Seminar ini menggali bagaimana kreativitas, teknologi, dan AI dapat berjalan berdampingan, sekaligus menjadi tantangan di era digital dan content creation.',
        harga: 'Rp 60.000',
        timeline: [
            'Pendaftaran: 1 September - 13 Oktober 2025',
            'Pelaksanaan: 30 Oktober 2025'
        ],
                pembayaran: [
            {
            platform: 'Mandiri', nomor: '1130020796169',
            platform: 'Dana', nomor: '081337857563',
            }
        ],
        contact: 'Cia (0895-2040-9992)',
    },
    pelatihan: {
        title: 'Pelatihan',
        subtitle: 'Konten Kreator!',
        poster: 'assets/Poster Kegiatan/Copy of posterPelatihan-01.png',
        deskripsi_lomba: 'Pelatihan Konten Kreator VALTER 2025 adalah program intensif selama tiga hari bersama narasumber profesional untuk mengasah keterampilan editing dan produksi konten. Mengusung tema “Optimalisasi Produksi & Penyajian Konten Digital Berkelanjutan”, pelatihan ini membantu peserta meningkatkan personal branding, kreativitas, daya saing, sekaligus mendapatkan pengalaman praktis, fasilitas lengkap, dan sertifikat nasional sebagai nilai tambah di era pesatnya perkembangan content creator.',
        harga: 'Rp 75.000',
        timeline: [
            'Pendaftaran: 1 September - 13 Oktober 2025',
            'Technical Meeting: 15 Oktober 2025',
            'Pengumpulan Karya: 16 - 23 Oktober 2025',
            'Seleksi hasil karya: 24 Oktober 2025',
            'Pengumuman Finalis: 25 Oktober 2025',
            'Presentasi Karya: 27 Oktober 2025'
        ],
                pembayaran: [
            {
            platform: 'Mandiri', nomor: '1130020796169',
            platform: 'Dana', nomor: '081337857563',
            }
        ],
        contact: 'Faita (0821-7776-1829)',
        contact: 'Rio YB (0859-4560-5948)',
    },
    challenge: {
        title: 'Open Recruitment',
        subtitle: 'Volunteer VALTER 2025!',
        poster: 'assets/Poster Kegiatan/Copy of posterLomba-02.png',
        deskripsi_lomba: 'Jadilah bagian dari kesuksesan VALTER 2025! Kami mengundang Anda untuk bergabung sebagai Volunteer VALTER 2025 dan berkontribusi langsung dalam menyelenggarakan acara terbesar tahun ini. Raih pengalaman berharga, perluas jaringan, dan kembangkan soft skill Anda. Daftarkan diri Anda sekarang!',
        harga: '',
        timeline: [
            'Pendaftaran: 1 September - 13 Oktober 2025',
            'Penutup penerimaan: 20 Oktober 2025'
        ],
    },
    // Tambahkan data lomba lain di sini
};

// Global counters for dynamic participant fields
let pesertaCountM = 1;
let pesertaCountU = 1;

// --- 2. MODAL & FORM FUNCTIONS (HARUS DI ATAS openEventModal) ---

/** Menggulir konten modal ke bagian formulir pendaftaran. */
function scrollToForm() {
    const formContainer = document.querySelector('.form-container');
    const formTitle = document.getElementById('registration-title');
    
    if (!formContainer || !formTitle) return;

    const formOffset = formTitle.offsetTop;
    
    formContainer.scrollTo({
        top: formOffset,
        behavior: 'smooth'
    });
}

/** Mengganti tampilan form antara Mahasiswa dan Umum. */
function switchForm(type) {
    const formM = document.getElementById('form-mahasiswa');
    const formU = document.getElementById('form-umum');
    const btnM = document.getElementById('btn-mahasiswa');
    const btnU = document.getElementById('btn-umum');
    
    if (!formM || !formU || !btnM || !btnU) return;

    // Reset button colors (asumsi style dasar)
    btnM.style.backgroundColor = 'rgb(75 85 99)';
    btnM.style.color = 'white';
    btnU.style.backgroundColor = 'rgb(75 85 99)';
    btnU.style.color = 'white';

    if (type === 'mahasiswa') {
        formM.classList.remove('hidden');
        formU.classList.add('hidden');
        btnM.style.backgroundColor = '#FFD700'; // Warna aktif
        btnM.style.color = '#1a1a2e';
    } else { // type === 'umum'
        formU.classList.remove('hidden');
        formM.classList.add('hidden');
        btnU.style.backgroundColor = '#FFD700'; // Warna aktif
        btnU.style.color = '#1a1a2e';
    }
}

/** Menambah baris input peserta dinamis. */
function addPeserta(type) {
    const list = document.getElementById(`peserta-list-${type === 'mahasiswa' ? 'm' : 'u'}`);
    if (!list) return;

    let newCount;
    let newHTML;
    
    if (type === 'mahasiswa') {
        pesertaCountM++;
        newCount = pesertaCountM;
        newHTML = `
            <div class="flex items-end space-x-4">
              <div class="flex-1">
                <label class="block text-gray-300 mb-2">#${newCount} NPM</label>
                <input type="text" class="form-input" placeholder="ex: 0624..." name="npm_${newCount}">
              </div>
              <div class="flex-1">
                <label class="block text-gray-300 mb-2">Nama</label>
                <input type="text" required class="form-input" placeholder="ex: Timothy R." name="nama_${newCount}">
              </div>
              <button type="button" onclick="removePeserta(this, '${type}')" class="text-red-500 hover:text-red-700 p-2">🗑️</button>
            </div>
        `;
    } else { // umum
        pesertaCountU++;
        newCount = pesertaCountU;
        newHTML = `
            <div class="flex items-end space-x-4">
              <div class="flex-1">
                <label class="block text-gray-300 mb-2">#${newCount} Nama</label>
                <input type="text" required class="form-input" placeholder="ex: Timothy R." name="nama_u_${newCount}">
              </div>
              <button type="button" onclick="removePeserta(this, '${type}')" class="text-red-500 hover:text-red-700 p-2">🗑️</button>
            </div>
        `;
    }

    list.insertAdjacentHTML('beforeend', newHTML);
}
function togglePosterExpand() {
  const wrapper = document.querySelector('.poster-wrapper');
  const btn = document.querySelector('.expand-poster-btn');
  
  if (!wrapper || !btn) return;
  
  const isExpanded = wrapper.classList.toggle('expanded');
  
  // Ganti icon
  btn.textContent = isExpanded ? '✕' : '🔍';
  
  // Prevent body scroll saat expanded
  if (isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    // Restore scroll (tapi masih di modal)
    document.body.style.overflow = 'hidden'; // Tetap hidden karena modal masih aktif
  }
}
/** Menghapus baris input peserta. */
function removePeserta(button, type) {
    const item = button.closest('.flex');
    item && item.remove();
    // Untuk produksi, Anda mungkin perlu menyesuaikan ulang hitungan (pesertaCountM/U)
}

/** Membuat efek kembang api. */
function createFireworks() {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const fireworksCount = 50;

    for (let i = 0; i < fireworksCount; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;
            firework.style.setProperty('--x', x + 'px');
            firework.style.setProperty('--y', y + 'px');
            
            document.body.appendChild(firework);
            firework.style.animation = 'explode 1s ease-out forwards';

            setTimeout(() => firework.remove(), 1000);
        }, i * 20);
    }
}

/** Memainkan suara (contoh menggunakan Web Audio API). */
function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

/** Fungsi untuk menutup modal. */
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal && modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/** Menangani pengiriman formulir. */
function handleSubmit(event) {
    event.preventDefault();
    alert('🎉 Pendaftaran berhasil! Tim kami akan menghubungi Anda segera.');
    closeEventModal();
}

// --- 3. FUNGSI UTAMA (MEMANGGIL FUNGSI PEMBANTU) ---
/** Menentukan apakah tanggal sudah lewat atau belum. */
// Perbaikan isDatePassed untuk handle rentang tanggal lebih baik
function isDatePassed(dateString) {
    const parts = dateString.split(': ');
    if (parts.length < 2) return false;
    
    const range = parts[1].trim();
    const rangeParts = range.split(' - ');
    
    let endDateStr;
    if (rangeParts.length === 2) {
        endDateStr = rangeParts[1].trim();
    } else {
        endDateStr = range;
    }
    
    // Parse bulan Indonesia ke Inggris untuk Date()
    const monthMap = {
        'Januari': 'January', 'Februari': 'February', 'Maret': 'March',
        'April': 'April', 'Mei': 'May', 'Juni': 'June',
        'Juli': 'July', 'Agustus': 'August', 'September': 'September',
        'Oktober': 'October', 'November': 'November', 'Desember': 'December'
    };
    
    for (const [id, en] of Object.entries(monthMap)) {
        endDateStr = endDateStr.replace(new RegExp(id, 'g'), en);
    }
    
    // Tambahkan tahun jika tidak ada (asumsi 2025)
    if (!/\d{4}/.test(endDateStr)) {
        endDateStr += ' 2025';
    }
    
    const endDate = new Date(endDateStr);
    if (isNaN(endDate.getTime())) return false;
    
    const now = new Date('2025-10-20T23:59:59'); // Current date dari query; ganti dengan new Date() di produksi
    return endDate < now;
}

// Fungsi baru untuk update timeline dan scroll otomatis ke hari ini
function updateTimelineAndScroll(timelineContainer, timelineData) {
    const now = new Date('2025-10-20T23:59:59');
    let timelineHTML = '';
    let currentStepIndex = -1;

    timelineData.forEach((item, index) => {
        const isPast = isDatePassed(item);
        const pastClass = isPast ? 'past-event' : '';
        
        // Cari index pertama yang belum lewat (hari ini atau mendatang)
        if (!isPast && currentStepIndex === -1) {
            currentStepIndex = index;
        }

        const [title, dateRange] = item.split(':').map(s => s.trim());
        timelineHTML += `
            <div class="modal-timeline-step ${pastClass}">
                <div class="modal-timeline-dot"></div>
                <div class="timeline-content">
                    <p class="font-bold text-yellow-400 mb-1">${title}</p>
                    <p class="text-xs">${dateRange}</p>
                </div>
            </div>
        `;
    });

    timelineContainer.innerHTML = timelineHTML;

    // Otomatis scroll ke step hari ini
    if (currentStepIndex !== -1) {
        const steps = timelineContainer.querySelectorAll('.modal-timeline-step');
        const currentStep = steps[currentStepIndex];
        if (currentStep) {
            const container = document.getElementById('timeline-info-container');
            // Scroll ke tengah: offsetLeft - (lebar container / 2) + (lebar step / 2)
            const stepOffset = currentStep.offsetLeft - (container.clientWidth / 2) + (currentStep.clientWidth / 2);
            container.scrollTo({
                left: stepOffset,
                behavior: 'smooth'
            });
        }
    }
}

// Modifikasi openEventModal
function openEventModal(eventType, cardElement) {
    const modal = document.getElementById('eventModal');
    const data = eventData[eventType];

    if (!data || !modal) return; 

    // 1. Set data Kartu (Poster, Judul, Subtitle)
    const posterSrc = data.poster; 
    document.getElementById('modalPosterFront').src = posterSrc; 
    document.getElementById('modalPosterBack').src = posterSrc; 
    
    // PERUBAHAN UTAMA: Gabungkan Title dan Subtitle
    document.getElementById('formTitle').innerHTML = `
        ${data.title} 
        (<span class="subtitle-text text-white">${data.subtitle}</span>)
    `;    

    // 2. Set Deskripsi, Harga, Pembayaran, dan Timeline
    let hargaHTML = '';  // Kosong awal
    if (data.harga && data.harga.trim() !== '') {  // Cek jika harga ada dan tidak kosong
        hargaHTML = `
           <p class="text-3xl font-extrabold text-cp-violet mb-4 ">
          Harga: ${data.harga}
        </p>
        `;
    }

    document.getElementById('event-description').innerHTML = `
        <p class="text-gray-300 mb-4 text-sm">${data.deskripsi_lomba}</p>
        ${hargaHTML}
    `;


    // 3.Payment cards dengan styling rapi
// Dapatkan elemen kontainer UTAMA yang ingin disembunyikan
    const paymentAndContactContainer = document.getElementById('payment-info-container');
    const paymentCardsContainer = document.getElementById('payment-info-cards');
    
    // Asumsi: data.pembayaran adalah array.
const hasPaymentData = data.pembayaran && Array.isArray(data.pembayaran) && data.pembayaran.length > 0;
const hasContactData = data.contact && data.contact.trim() !== '';

    if (hasPaymentData || hasContactData) {
        // Jika data pembayaran ADA dan tidak kosong:
        const paymentHTML = data.pembayaran.map(p =>
            `<div class="payment-card">
                 <p class="platform font-bold">${p.platform}</p>
                 <p class="number">${p.nomor}</p>
             </div>`
        ).join('');

        paymentCardsContainer.innerHTML = paymentHTML;
        
        // Pastikan container UTAMA terlihat (Jika sebelumnya disembunyikan)
        if (paymentAndContactContainer) {
            paymentAndContactContainer.style.display = 'block'; 
        }

    } else {
        // Jika data pembayaran KOSONG atau tidak ada:
        paymentCardsContainer.innerHTML = ''; // Kosongkan kartu pembayaran
        
        // Sembunyikan container UTAMA, termasuk judul "Pembayaran & Kontak" dan "Contact Person"
        if (paymentAndContactContainer) {
            paymentAndContactContainer.style.display = 'none';
        }
    }


    // --- 4. Set Contact Person ---
    // Logika Contact Person tetap dijalankan, tetapi karena container disembunyikan, hasilnya tidak terlihat.
    document.getElementById('contact-info').innerHTML = `
        <p class="text-gray-300">
            <span class="font-semibold text-yellow-400">Contact Person:</span> ${data.contact}
        </p>
    `;
    
    // 4. Set Timeline menggunakan fungsi baru
    const timelineContainer = document.getElementById('timeline-horizontal');
    updateTimelineAndScroll(timelineContainer, data.timeline);

    // 5. Logic Lain: Panggil switchForm sekarang sudah didefinisikan!
    switchForm('mahasiswa'); 
    modal.classList.add('active');
    setTimeout(() => {
        createFireworks();
        playSound();
    }, 850); 
    document.body.style.overflow = 'hidden';
}


// --- 4. INISIALISASI & EVENT LISTENERS (Kode yang sudah ada) ---

// Mobile menu toggle
(function () {
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => {
        const isHidden = menu.classList.toggle("hidden");
        iconOpen && iconOpen.classList.toggle("hidden");
        iconClose && iconClose.classList.toggle("hidden");
        btn.setAttribute("aria-expanded", String(!isHidden));
    });
})();

// Smooth scroll for anchor links
(function () {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 72;
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#" || !targetId.startsWith("#")) return;
            const el = document.querySelector(targetId);
            if (!el) return;
            e.preventDefault();
            const rect = el.getBoundingClientRect();
            const offset = window.pageYOffset + rect.top - headerHeight;
            window.scrollTo({ top: offset, behavior: "smooth" });
        });
    });
})();

// Countdown timer
(function () {
    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");
    if (!d || !h || !m || !s) return;

    const target = new Date("2025-10-25T09:00:00+07:00").getTime();

    function update() {
        const now = Date.now();
        let diff = Math.max(0, target - now);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        const seconds = Math.floor(diff / 1000);

        d.textContent = String(days).padStart(2, "0");
        h.textContent = String(hours).padStart(2, "0");
        m.textContent = String(minutes).padStart(2, "0");
        s.textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
})();

// Swiper initialization
(function () {
    const el = document.querySelector(".swiper");
    if (!el || typeof Swiper === "undefined") return;
    new Swiper(".swiper", {
        spaceBetween: 16,
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})();

// Progressive image loading
(function () {
    const imgs = document.querySelectorAll('main img');
    imgs.forEach((img) => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }
    });
})();


// Close modal on overlay click
document.getElementById('eventModal') && document.getElementById('eventModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEventModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEventModal();
    }
});

// Timeline Fading Logic
(function () {
    // Gunakan new Date() tanpa parameter untuk mengambil waktu saat ini (dari browser pengguna)
    // Atau gunakan tanggal statis jika Anda ingin menguji pada titik waktu tertentu:
    const now = new Date('2025-10-21T17:23:00+07:00'); // Tanggal & waktu saat ini: 21 Okt 2025

    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        // Ambil tanggal dari atribut data-date
        const dateStr = item.getAttribute('data-date');
        
        // Pastikan atribut ada
        if (!dateStr) return;

        // Buat objek Date dari data-date (YYYY-MM-DD)
        const eventDate = new Date(dateStr);
        
        // Atur eventDate ke akhir hari (23:59:59) untuk perbandingan yang lebih baik
        // Ini memastikan event hari ini tidak dianggap 'past' sampai besok
        eventDate.setHours(23, 59, 59, 999);

        // Perbandingan: Jika waktu sekarang lebih besar dari tanggal event, tambahkan kelas
        if (now.getTime() > eventDate.getTime()) {
            item.classList.add('past-event');
        }
    });
})();

