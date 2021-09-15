import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import defaultAvatar from "./defaultImg/ava.svg";
import styles from "./UserMenu.module.css";
import { Button } from "react-bootstrap";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.menu}>
      <img src={defaultAvatar} alt="avatar" className={styles.img}></img>
      <span className={styles.text}>Welcome, {name}</span>
      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </Button>
    </div>
  );
}
