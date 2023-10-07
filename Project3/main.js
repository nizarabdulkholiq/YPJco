import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inisialisasi Typewriter
new Typewriter("#typewriter", {
  strings: ["typewriter", "Effect", "typewriter.js", "example"],
  autoStart: true,
  loop: true,
});

// Menginisialisasi AOS dengan opsi konfigurasi (opsional)
AOS.init({
  once: true,
});

// Memasang event listener pada dokumen untuk memicu animasi saat gulir
document.addEventListener('DOMContentLoaded', function () {
  AOS.refresh(); // Memperbarui animasi saat dokumen dimuat
});
