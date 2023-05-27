import About from "../component/about";
import Home from "../component/home";
import Header from "../component/header";
import Contact from "../component/contact";
import Footer from "../component/footer";
import Portfolio from "../component/portfolio";
import Service from "../component/service";
const Homepage = () => {
    return `
        ${Header()}
        ${Home()}
        ${About()}
        ${Service()}
        ${Portfolio()}
        ${Contact()}
        ${Footer()}
    `
}

export default Homepage;