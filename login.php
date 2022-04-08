<html>
<head>
<!-- sweet alert --> 
    <link rel="stylesheet" type="text/css" href="plugins/sweetalert/sweetalert.css">
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- end sweet alert --> 
</head>
<body style="background-color: #0c84d3; backdrop-filter: blur(25%);">

<?php
    $nama        = $_POST["username"];
    $password = $_POST['pass'];

    if ($nama == "laita zidan" && $password == "12345678")
    {   
        echo '<script type ="text/JavaScript">';  
        echo 'swal("Login Berhasil!", "selamat datang di website official Teras Biru Polinema", {
            icon: "success",
          }).then((value) => {
            window.location.href = "landingPage.html"
          });';
        echo '</script>';
    }
    else
    {
        echo '<script language="javascript">';
        echo 'swal("Login Gagal!", "username dan password anda salah, silahkan coba lagi!", {
            icon: "error", }).then((value) => {
                window.history.back();
              });';
          echo '</script>';
    }
?>
</body>
</html> 
