<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/style.css">
</head>

<body>
    <header>
        <nav class="navbar">
            <a href="/" class="logo" style="color:#ff8800;">DHVANI</a>
            <div class="nav-buttons">
                <button onclick="window.location.href='../controllers/login.php';" class="btn login">Login</button>
                <button onclick="window.location.href='../controllers/signup.php';" class="btn signup">Signup</button>
            </div>
        </nav>
    </header>
    <section>
        <div class="form-box" style="height:470px;">
            <div class="form-value">
                <div class="form-heading">
                    <h2 style="color:#ff8800;">Sign up</h2>
                </div>
                <form action="../models/signup_register.php" method="POST">
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="name" name="name" required>
                        <label for="">Name</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" name="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="password" required>
                        <label for="">Password</label>
                    </div>

                    <button id="login">Register</button>
                    <div class="register">
                        <label>Already have an account?</label>
                        <a href="../controllers/login.php"> Login</a>
                </form>
            </div>
        </div>
    </section>
    <div class="overlay"></div>

    <!-- <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.58/build/spline-viewer.js"></script>
    <spline-viewer url="https://prod.spline.design/c9fcTwaKmqpWhCkC/scene.splinecode"></spline-viewer>
 -->

    <script src="../assets/js/main.js" async defer></script>
</body>

</html>