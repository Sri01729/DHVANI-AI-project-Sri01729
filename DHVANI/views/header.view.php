<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dhvani</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/music.css' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intro.js/minified/introjs.min.css">
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/3a1fd0a5ce.js" crossorigin="anonymous"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <script type="text/javascript">
    (function(c, l, a, r, i, t, y) {
        c[a] = c[a] || function() {
            (c[a].q = c[a].q || []).push(arguments)
        };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "lmkq1joacw");
    </script>
    <link rel="stylesheet" href="/DHVANI/assets/style.css">
</head>

<body>
    <header>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">Home</a>
            <a href="#">Climate</a>
            <a href="#">Place</a>
            <a href="#">mood</a>
        </div>
    </header>
    <nav id="navlist">

        <div class="logo"><a href="/DHVANI/controllers/home.php" style="color:#ff8800;">DHVANI</a></div>
        <!-- search bar right align -->
        <!-- <div class="search">
            <form action="#" class="searchbar">
                <input type="text" placeholder="Search...." name="search">
            </form>
        </div> -->
        <div class="nav-main-buttons">
            <div class="block1">
                <a href="#">Profile</a>
                <a href="#" id="myBtn">About</a>
            </div>
            <span style="font-size:18px" class="guide" id="nav">Guide</span>
            <span style="font-size:18px" onclick="window.location.href='../controllers/login.php';" id="nav"><i
                    class="fa fa-sign-out"></i></span>
            <span class="open-nav" style="font-size:40px;cursor:pointer;color:white;margin-right: 20px;">&#9776;</span>

        </div>
    </nav>
    <ul>
        <li><input id="checkbox" type="checkbox">
            <label class="switch" for="checkbox" id="locationButton"><i class="fa-solid fa-location-dot"></i>
            </label>
        </li>
    </ul>