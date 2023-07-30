const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const loader = document.querySelector(".loader");
const loading = document.querySelector(".loading");
const teks = document.querySelector(".teks");
const end = document.querySelector(".end");

search.addEventListener("click", () => {
  container.style.height = "590px";

  let daftarKalimat = ["Scanning weather", "Get the data", "Asking BMKG"];

  let indexKalimat = 0; // Menunjukkan index kalimat saat ini

  function gantiKalimat() {
    loading.style.display = "block";
    let kalimatElement = document.querySelector(".teks");
    kalimatElement.innerHTML = daftarKalimat[indexKalimat];

    indexKalimat++; // Pindah ke kalimat berikutnya
    if (indexKalimat > daftarKalimat.length) {
        loading.style.display = "none";
        end.style.display = "block";
    }
  }

  setInterval(gantiKalimat, 1500);

});
