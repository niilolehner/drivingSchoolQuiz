<?php
isset($_GET['page']) ? $page = $_GET['page'] : $page = '';
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="author" content="Ismo Manninen Niilo Lehner Malla Marttala",>
    <meta name="keywords" content="Ismo Manninen Niilo Lehner Malla Marttala">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" defer></script>
    <script src="https://kit.fontawesome.com/416b989c77.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <!-- SweetAlerts2-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
    <!-- Core Javascript -->
    <script src="./js/index.js" defer></script>
    <title>Datadrivers Oy</title>
</head>

<body>

<?php
if ($page === '') {
    $page = 'userChoose';
}
?>

<!-- Navigation-->
<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div id="navBar" class="container px-4 px-lg-5 fade-in">
            <a class="navbar-brand" id="btnChoose" href="index.php?page=userChoose">Valitse käyttäjä (demo)</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Valikko
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php?page=casual">Harjoittelutehtäviä</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.php?page=competitive">Teoriakoeharjoitus</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.php?page=studentachievements">Saavutukset</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.php?page=scoreboard">Tulostaulu</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
