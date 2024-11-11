// hover
const produk = document.querySelectorAll(".product");

produk.forEach((produk) => {
  produk.addEventListener("mouseover", () => {
    produk.style.transform = "scale(1.1)";
    produk.style.transition = "all 0.3s ease-in-out";
  });

  produk.addEventListener("mouseout", () => {
    produk.style.transform = "scale(1)";
    produk.style.transition = "all 0.3s ease-in-out";
  });
});

//shop form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bouquetForm');
    const modal = new bootstrap.Modal(document.getElementById('outputModal'));

    // Fungsi validasi form
    function validateForm() {
        var name = document.getElementById("name").value;
        var phoneNumber = document.getElementById("phone").value;
        var typeOfBouquet = document.getElementById("bouquet").value;
        var note = document.getElementById("note").value;

        // Validasi input
        if (name == "" || phoneNumber == "" || typeOfBouquet == "" || note == "") {
            alert("Silakan isi semua field!");
            return false;
        }
        return true;
    }

    // Tambahkan event listener pada tombol submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            // Ambil data form
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const bouquet = document.getElementById('bouquet').value;
            const note = document.getElementById('note').value;
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

            // Buat output untuk modal
            const output = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Bouquet:</strong> ${bouquet}</p>
                <p><strong>Note:</strong> ${note}</p>
                <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            `;

            // Masukkan output ke modal
            document.getElementById('modalBody').innerHTML = output;

            // Tampilkan modal
            modal.show();
        }
    });
});

// Fungsi untuk mengganti warna navbar ketika di-scroll
function changeNavbarColor() {
  var navbar = document.querySelector("nav");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
}

// Tambahkan event listener pada window untuk mengganti warna navbar
window.addEventListener("scroll", changeNavbarColor);

// Fungsi untuk mengganti warna tombol pada hover
function changeButtonColor() {
  var buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
      button.classList.add("bg-success");
    });

    button.addEventListener("mouseout", function () {
      button.classList.remove("bg-success");
    });
  });
}

// Tambahkan event listener pada tombol untuk mengganti warna
changeButtonColor();

// Fungsi untuk menganimasikan gambar pada hover
function animateImage() {
  var images = document.querySelectorAll("img");

  images.forEach(function (image) {
    image.addEventListener("mouseover", function () {
      image.classList.add("animate");
    });

    image.addEventListener("mouseout", function () {
      image.classList.remove("animate");
    });
  });
}

// Tambahkan event listener pada gambar untuk menganimasikan
animateImage();

// Fungsi untuk membuat efek hover pada teks
function hoverText() {
  var texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  texts.forEach(function (text) {
    text.addEventListener("mouseover", function () {
      text.classList.add("hover");
    });

    text.addEventListener("mouseout", function () {
      text.classList.remove("hover");
    });
  });
}

// Tambahkan event listener pada teks untuk membuat efek hover
hoverText();

// Fungsi untuk membuat galeri foto yang dapat di-scroll
function createGallery() {
  var gallery = document.querySelector(".gallery");
  var images = document.querySelectorAll(".gallery img");

  gallery.addEventListener("scroll", function () {
    var scrollPosition = gallery.scrollLeft;
    var imageWidth = images[0].offsetWidth;

    if (scrollPosition > imageWidth) {
      gallery.scrollLeft = 0;
    }
  });
}

// Tambahkan event listener pada galeri untuk membuat efek scroll
createGallery();

// Fungsi untuk membuat form yang dapat diisi secara dinamis
function createForm() {
  var form = document.querySelector("form");
  var fields = document.querySelectorAll("input, select, textarea");

  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      var value = field.value;
      var label = field.labels[0];

      if (value != "") {
        label.classList.add("filled");
      } else {
        label.classList.remove("filled");
      }
    });
  });
}
