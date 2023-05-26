const Homepage = () => {
    return
    `
<body>
    <header class="header">
        <a href="" class="logo">Portfolio</a>

        <nav class="navbar">
            <a href="" style="--1:1" class="active">Home</a>
            <a href="" style="--1:2">About</a>
            <a href="" style="--1:3">Service</a>
            <a href="" style="--1:4">Portfolio</a>
            <a href="" style="--1:5">Contact</a>
        </nav>
    </header>
    <section class="home">
        <div class="home-content">
            <h3>Hello, It's ME</h3>
            <h1>Dang Duong</h1>
            <h3>And I'm a <span class="text"></span></h3>
            <p>I'm a final year student majoring Web Design and have less than 1 year experience
                <br>I can create websites using technologies like HTML, CSS, Javascript and more....
            </p>
            <div class="home-sci">
                <a href="" style="--1:6"><i class='bx bxl-facebook'></i></a>
                <a href="" style="--1:7"><i class='bx bxl-instagram'></i></a>
                <a href="" style="--1:8"><i class='bx bxl-twitter'></i></a>
                <a href="" style="--1:9"><i class='bx bxl-youtube'></i></a>
                <a href="" style="--1:10"><i class='bx bxl-tiktok'></i></a>
            </div>
            <a href="" class="btn-box">More About Me</a>
        </div>
        <div class="image">
            <img src="img/avatar.jpg" alt="" width="370px">
        </div>
    </section>
    <script src="main.js"></script>
</body>
`
}

export default Homepage;