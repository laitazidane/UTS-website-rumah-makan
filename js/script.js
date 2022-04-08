let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

// 

function pesan(){
  swal("Pesanan Berhasil!", "pesanan anda sekarang telah diproses", {
    icon: "success",
  }).then((value) => {
    window.location.href = "tampilPesanan.html"
  });;
}
  
function tampilPesan(){
  swal("Pesanan Berhasil!", "pesanan anda sekarang telah diproses", {
    icon: "success",
  }).then((value) => {
    window.location.href = "#detail-pesanan"
  });;

    var nama = document.getElementById("nama");
    var pesanan = document.getElementById("pesanan");
    var harga = document.getElementById("harga");
    var jml = document.getElementById("jmlPesanan");
    var tgl = document.getElementById("tgl");
    var telp = document.getElementById("telp");
    var alamat = document.getElementById("alamat");
    var pesan = document.getElementById("message");
    var table = document.getElementById("myTableData");
    var totalharga = parseInt(document.getElementById("harga").value) * parseInt(document.getElementById("jmlPesanan").value);
   
    
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML= nama.value;
    row.insertCell(1).innerHTML= pesanan.value;
    row.insertCell(2).innerHTML= harga.value;
    row.insertCell(3).innerHTML= jml.value;
    row.insertCell(4).innerHTML= totalharga;
    row.insertCell(5).innerHTML= tgl.value;
    row.insertCell(6).innerHTML= telp.value;
    row.insertCell(7).innerHTML= alamat.value;
    row.insertCell(8).innerHTML= pesan.value;
    row.insertCell(9).innerHTML=  '<input type="button" id="delete" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    
}
function deleteRow(obj) {
      
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
  
}