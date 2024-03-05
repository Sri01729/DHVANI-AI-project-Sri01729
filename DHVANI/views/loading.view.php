<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading</title>
    <link rel="stylesheet" href="../assets/style.css">
    <style>
    body,
    html {
        height: 100%;
        margin: 0;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    </style>
</head>

<body>
    <div class="loading-container">
        <div class="sharingon">
            <div class="ring">
                <div class="to"></div>
                <div class="to"></div>
                <div class="to"></div>
                <div class="sharingoncircle"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
    setTimeout(function() {
        window.location.href = "../Controllers/home.php"; // Redirect to the home page after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
    </script>
</body>

</html>