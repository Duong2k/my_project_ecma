
import { router, useEffect } from "../lib";
const Signup = () => {
    useEffect(() => {
        const formSignup = document.querySelector("#form-signup");
        if (!formSignup) return;
        formSignup.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            }).then(() => {
                console.log("Bạn đăng ký thành công");
            });
        });
    });
    return `
    
    `;
};
export default Signup;