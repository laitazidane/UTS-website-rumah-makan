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

  var nama = document.getElementById("nama").value;
  var pesanan = document.getElementById("pesanan").value;
  var harga = document.getElementById("harga").value;
  var jml = document.getElementById("jmlPesanan").value;
  var tgl = document.getElementById("tgl").value;
  var telp = document.getElementById("telp").value;
  var alamat = document.getElementById("alamat").value;
  var pesan = document.getElementById("message").value;
  var table = document.getElementById("myTableData");
  var totalharga = parseInt(document.getElementById("harga").value) * parseInt(document.getElementById("jmlPesanan").value);
  
 
if(nama == "zidan" || nama == "dito"){
  
  if(jml > 3){
    hargaDiskon = totalharga-(totalharga*10/100);
    
  }else if(jml >= 2){
    hargaDiskon = totalharga-(totalharga*7/100);
    
   
  }else{
    hargaDiskon = totalharga-(totalharga*5/100);
    
  }
  
}else{  
  if(jml >= 3){
    hargaDiskon = totalharga-(totalharga*5/100);
    
  }else{
    hargaDiskon = totalharga;
  }
 
}
 
var hargaDiskon;
 
    swal("Pesanan Berhasil!", "pesanan anda sekarang telah diproses", {
      icon: "success",
    }).then((value) => {
      window.location.href = "#detail-pesanan"
    });;

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML= nama;
    row.insertCell(1).innerHTML= pesanan;
    row.insertCell(2).innerHTML= harga;
    row.insertCell(3).innerHTML= jml;
    row.insertCell(4).innerHTML= hargaDiskon;
    row.insertCell(5).innerHTML= tgl;
    row.insertCell(6).innerHTML= telp;
    row.insertCell(7).innerHTML= alamat;
    row.insertCell(8).innerHTML= pesan;
    row.insertCell(9).innerHTML=  '<input type="button" id="delete" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    
    
}
function deleteRow(obj) {
      
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
  
}

function login(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user == "laita zidan" && pass == "12345678"){   
        swal("Login Berhasil!", "Selamat Datang di Official Website Rawon Nguling", {
      icon: "success",
    }).then((value) => {
      window.location.href = "landingPage.html"
    });;
    }else{
        
        swal("Login Gagal!", "username dan password anda salah, silahkan coba lagi!", {
            icon: "error", }).then((value) => {
                  window.history.back();       
              });;
    }
  
}