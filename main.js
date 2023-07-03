import Homepage from "./src/page/homepage";
import Navigo from "navigo";
import './assets/css/style.css';
import Signin from "./src/page/SignIn";
import Signup from "./src/page/SignUp";
import { render, router } from "./src/lib";

const app = document.querySelector("#app");


router.on("/admin/*", () => { }, {
    before(next) {
        const { user } = JSON.parse(localStorage.getItem("user")) || {};
        if (!user) return (window.location.href = "/");
        if (user && user.id != "1") return (window.location.href = "/signin");
        next();
    },
});

app.innerHTML = Homepage();
router.on('/', function () {
    render(Homepage, app);
});
router.on('/signup', () => render(Signup, app));
router.on('/signin', () => render(Signin, app));

router.resolve();