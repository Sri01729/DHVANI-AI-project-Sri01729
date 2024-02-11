<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/DHVANI/assets/style.css">
</head>

<body>
    <header>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">Home</a>
            <a href="#">Artists</a>
            <a href="#">Genre</a>
            <a href="#">Climate</a>
            <a href="#">Place</a>
            <a href="#">mood</a>
        </div>
    </header>
    <nav id="navlist">
        <a href="#">DHVANI</a>
        <div class="block1">
            <a href="#">Profile</a>
            <a href="#">About</a>
        </div>
        <!-- search bar right align -->
        <div class="search">
            <form action="#" class="searchbar">
                <input type="text" placeholder="Search...." name="search">
            </form>
        </div>
        <div class="nav-main-buttons">
            <button style="font-size:12px"><i class="fa fa-sign-out"></i></button>
            <span style="font-size:30px;cursor:pointer;color:#604cff;margin-right: 20px ;"
                onclick="openNav()">&#9776;</span>
        </div>
    </nav>

    <script>
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("navlist").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("navlist").style.marginLeft = "0";
    }
    </script>