<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="theme-color" content="#BE2530">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New England Insurance Policy</title>
    <link rel="apple-touch-icon" sizes="57x57" href="./images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./images/favicon//android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon//favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./images/favicon//favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon//favicon-16x16.png">

    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="icon" href="images/favicon.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
    
    <main>
        <div class="wrapper">
            <nav class="navbar bg-dark fixed-top">
                <div class="container-fluid text-center">

                    <div class="d-flex align-items-center justify-content-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand d-none d-md-block" href="#"><img src="./images/logo.svg" alt=""></a>

                    </div>
                    <a class="navbar-brand d-md-none m-0" href="#"><img src="./images/logo.svg" alt=""></a>
                    <div class="d-flex align-items-center justify-content-center">
                        <!-- <select class="vodiapicker">
                            <option value="en" class="test" data-thumbnail="./images/us_flag.svg">
                                English</option>
                            <option value="au"
                                data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NYCS-bull-trans-B.svg/480px-NYCS-bull-trans-B.svg.png">
                                Engllish </option>


                        </select> -->

                        <!-- <div class="lang-select me-3 pe-2">
                            <button class="btn-select" value=""></button>
                            <div class="b">
                                <ul id="a"></ul>
                            </div>
                        </div> -->


                        <!-- https://codepen.io/aaroniker/pen/XxBjKN?editors=0100-->

                        <div class="f-group me-3 pe-2">

                            <select class="f-control f-dropdown" placeholder="Please choose 2">
                                <option value=""> </option>
                                <option value="1" data-image="./images/us_flag.svg">English
                                </option>
                                <option value="2" selected="selected" data-image="./images/us_flag.svg">English1
                                </option>

                            </select>
                        </div>

                        <img src="./images/message-question.svg" alt="" class="me-3 pe-2 nav-icon d-none d-md-block">
                        <img src="./images/user.svg" alt="" class="nav-icon d-none d-md-block">
                    </div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item ">
                                    <a class="nav-link active text-left" aria-current="page" href="#"> <img
                                            src="./images/message-question-blue.svg" alt=""
                                            class="d-inline-block me-3 pe-2 nav-icon nav-icon-mob">
                                        Help
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  text-left" href="#">
                                        <img src="./images/user-blue.svg" alt=""
                                            class="nav-icon d-inline-block  nav-icon-mob">
                                        User</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            <div class="content-main">
                <div class="content">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style="width:20%">

                                    </div>

                                </div>
                                <div class="progress-text mt-1">Drivers</div>
                            </div>
                            <div class="col-4">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style="width:0%">

                                    </div>

                                </div>
                                <div class="progress-text mt-1">Vehicles
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style="width:0%">

                                    </div>

                                </div>
                                <div class="progress-text mt-1">Discounts</div>
                            </div>
                        </div>
                        <a class="text-blue ms-3 back-arrow" href="#"><i class="fa fa-arrow-left-long me-2"></i>BACK</a>
                    </div>
                    <div class="container mt-5 pt-5">
                        <div class="text-center mb-4 user-info">
                            <img src="./images/user-person.svg" alt="" class="user-person mx-auto">
                            <p class="user-welcome mt-2">Hey! My Name is Anne</p>
                        </div>
                        <h3 class="title  text-center">Are you buying this from a dealer?</h3>


                        <div style="gap:10px;" class="d-flex flex-column flex-sm-row align-items-center justify-content-center mt-4">
                            <button type="submit"
                                class="btn btn-primary "><span>Yes</span></button>

                            <button type="submit" class="btn btn-outline "><span>No</span></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="js/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
    </script>
    <script src="js/app.js"></script>

</body>

</html>