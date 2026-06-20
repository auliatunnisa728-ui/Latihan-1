function showSection(sectionId) {

  // Bagian ini untuk sembunyiin semua section
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });

  // Menampilkan section yg dipilih sesuai dengan ID-nya
  document.getElementById(sectionId).classList.add('active');

  //Reset semua link navbar biar tidak ada yg nyala
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  //Kasih tanda aktif ke menu yg baru diklik oleh user 
  event.target.classList.add('active');

  //Bagian untuk scroll otomatis ke atas halaman
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Saat website dibuka akan langsung nampilkan section 'home'
document.addEventListener('DOMContentLoaded', () =>{
    showSection('home');
})