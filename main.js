import Homepage from "./src/page/homepage";
import Navigo from "navigo";
import './assets/css/style.css'
const router = new Navigo("/", { linkSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
    container.innerHTML = content();
}
app.innerHTML = Homepage();
router.on('/', function () {
    render(Homepage, app);
});

router.resolve();