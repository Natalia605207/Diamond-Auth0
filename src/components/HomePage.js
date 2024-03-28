import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.jpg";
import Login from "./Login";
import MySwiper from "./Swiper/MySwiper";

export const HomePage = () => {
    const { isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
        <div className="home">
            <div className="announcement-line flex">
                <p className="announcement">Join us to view the collection</p>
            </div>
        <div className='logo-box flex'>
        <img src={logo} alt='logo' className='logo' />
        <div className="login-button">
        <Login />
        </div>
        </div>
        <MySwiper />
        </div>
    ))
}