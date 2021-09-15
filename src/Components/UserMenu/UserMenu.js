import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { Button } from 'react-bootstrap';
import defaultAvatar from './defaultImg/avatar.svg';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.menu}>
      <img src={defaultAvatar} alt="avatar" className={styles.img}></img>
      <span className={styles.text}>
        Welcome, <span className={styles.text_name}>{name}</span>
      </span>
      <Button
        variant="outline-primary"
        type="button"
        size="sm"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </Button>
    </div>
  );
}
