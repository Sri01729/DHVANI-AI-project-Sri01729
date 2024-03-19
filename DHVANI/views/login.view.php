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
    <header class="introHeader">
        <nav class="navbar">
            <a href="/" class="logo" style="color:#ff8800;">DHVANI</a>
            <div class="nav-buttons">
                <button onclick="window.location.href='/DHVANI/views/login.view.php';" class="btn signup">Login</button>
                <button onclick="window.location.href='/DHVANI/views/signup.view.php';"
                    class="btn login">Signup</button>
            </div>
        </nav>
    </header>
    <section class="intro">

        <div class="form-box">
            <div class="form-value">
                <div class="form-heading">
                    <h2 style="color:#ff8800;">Login</h2>
                </div>
                <form action="../models/login_authentication.php" method="POST">
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
                    <div class="login-button">
                        <div class="forget">
                            <label><input type="checkbox">Remember Me</label>
                            <a href="#">Forget password?</a>

                        </div>
                        <button>Log in</button>
                        <div class="register">
                            <label>Don't have an account?</label>
                            <a href="/DHVANI/views/signup.view.php"> Register</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <div class="overlay"></div>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.58/build/spline-viewer.js"></script>
    <spline-viewer url="https://prod.spline.design/c9fcTwaKmqpWhCkC/scene.splinecode"></spline-viewer>


    <script src="/DHVANI/assets/js/main.js" async defer></script>
</body>

</html>