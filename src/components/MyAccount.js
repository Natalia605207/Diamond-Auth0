import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const MyAccount = () => {
    const {user, isAuthenticated} = useAuth0();
    const [active, setActive] = useState(false);

    const toggleProfile = () => {
        setActive(!active)
    }

    return(
        isAuthenticated && (
            <div>
                <div className='logo-box flex'>
                <img src={logo} alt='logo' className='logo' />
                <FaUserCircle className="user-icon" onClick={toggleProfile} />
                </div>
            <div className={active ? "account-data" : "close"}>
                <img src={user.picture} alt="userPhoto" className="userPhoto" />
                <div className="name-email">
                <p className="profile"><span className="bold">Name:</span> {user.nickname}</p>
                <p className="profile"><span className="bold">Email:</span> {user.email}</p>
                </div>
            </div>
            </div>
        )
    )
}

export default MyAccount;