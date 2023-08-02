let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function validasi() {
    let nama = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["femail"].value;
    let telp = document.forms["myForm"]["ftelp"].value;
    if (nama == "") {
        alert("Nama tidak boleh kosong");
        return false;
    } else if (email == "") {
        alert("Email tidak boleh kosong");
        return false;
    } else if (telp == "") {
        alert("Telp tidak boleh kosong");
        return false;
    } else {
        alert("Nama : " + nama + " Email : " + email + " Telp : " + telp);
    }
}