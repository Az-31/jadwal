// Simpan status ceklis ke localStorage
const ceklisKey = "jadwal-ceklis";
const cekboxes = document.querySelectorAll(".cek-selesai");
// Load dari localStorage
function loadCeklis() {
  const saved = JSON.parse(localStorage.getItem(ceklisKey) || "[]");
  cekboxes.forEach((cb, i) => {
    cb.checked = !!saved[i];
  });
}
// Simpan ke localStorage setiap ada perubahan
cekboxes.forEach((cb, i) => {
  cb.addEventListener("change", () => {
    const arr = Array.from(cekboxes).map((c) => c.checked);
    localStorage.setItem(ceklisKey, JSON.stringify(arr));
  });
});
loadCeklis();
