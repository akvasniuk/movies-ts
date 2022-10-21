import css from "./UserInfo.module.css";
import userImage from "../../assets/user.png";

const UserInfo = () => {
    return (
        <div className={css.userinfo}>
            <div className={css.user}>
                <img src={userImage} alt="search"/>
                <div>Welcome&nbsp;User</div>
            </div>
        </div>
    );
};

export {UserInfo};