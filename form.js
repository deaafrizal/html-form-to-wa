document.querySelector("#kirim").addEventListener("click", e => {
  e.preventDefault();

  //MASUKKAN NOMOR WHATSAPP YANG VALID DI SINI:
  const telepon = "6285860099046";

  const pelanggan = document.querySelector("#pelanggan").value;
  const tanggal = document.querySelector("#tanggal").value;
  const waktu = document.querySelector("#waktu").value;
  const layanan = document.querySelector("#layanan").value;
  const respon = document.querySelector("#respon");

  respon.classList.remove("gagal");
  respon.classList.remove("terkirim");

  const urlToWhatsapp = `https://api.whatsapp.com/send?phone=${telepon}&text=
        *_BISNIS SAYA_*%0A
        *Reservasi*%0A%0A
        Hallo, saya : ${pelanggan}%0A
        Tanggal Reservasi : ${tanggal}%0A
        Waktu Reservasi : ${waktu} %0A
        Layanan yang Ingin Dipesan : %0A
        ${layanan}`;

  if (pelanggan === "" || tanggal === "" || waktu === "") {
    respon.classList.add("gagal");
    respon.innerHTML = `Beberapa data masih kosong, ${pelanggan}`;
    return false;
  }
  respon.classList.remove("gagal");
  respon.classList.add("terkirim");
  respon.innerHTML = `Reservasi Anda telah terkirim, ${pelanggan}`;

  window.open(urlToWhatsapp, "_self");
});