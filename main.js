import Homepage from "./src/page/homepage";
import Navigo from "navigo";

const router = new Navigo("/", { linkSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
    container.innerHTML = content();
}
router.on("/", function () {
    render(Homepage);
});

router.resolve();