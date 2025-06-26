
import cl from 'classnames';
import styles from './Menu.module.css';
import loginIcon from '../../assets/images/login.svg';
import userIcon from '../../assets/images/user.svg';
import { useUserContext } from '../../context/user.context';

function Menu() {
	const { userName, isLogined, setIsLogined } = useUserContext();
	const filmNum = 2;

	const menuSearchClassName = cl({
		[styles['menu-item']]: true,
		[styles['menu-item-active']]: true
	});
    
	const handleLoginClick = () => {
		let userDataStr;
		if (isLogined && userName) {
			userDataStr = localStorage.getItem(userName);
		}
						
		if (userDataStr) {
			const userData = JSON.parse(userDataStr);
			userData.isLogined = false;
			localStorage.setItem(userName, JSON.stringify(userData));
		}
		setIsLogined(false);
	};

	const menuLoginContent = isLogined ? (
		<div className={styles['menu-item']} onClick={handleLoginClick}>
            Logout
		</div>
	) : (
		<div className={styles['menu-item']} onClick={handleLoginClick}>
            Login <img src={loginIcon} alt="login-icon" />
		</div>
	);
    
	const userNameMenu = isLogined ? (
		<div className={styles['menu-item']}>
			{userName} 
			<img src={userIcon} alt="User Icon" />
		</div>
	) : null;

	return (
		<div className={styles.menu}>
			<div>
				<img src="/logo.svg" alt="Logo" />
				<span>My Films</span>
			</div>
			
			<nav className={styles['menu-list']}>
				<div className={menuSearchClassName}>Film Search</div>
				<div className={styles['menu-item']}>Favorite Films <span className={styles['filmNum']}>{filmNum}</span></div>
				{userNameMenu}
				{menuLoginContent}
			</nav>
		</div>
	);
}

export default Menu;
