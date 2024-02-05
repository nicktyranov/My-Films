
import cl from 'classnames';
import styles from './Menu.module.css';

import loginIcon from '../../assets/images/login.svg';
import userIcon from '../../assets/images/user.svg';

function Menu({ isLogined, setIsLogined }) {
	const filmNum = 2;

	const menuSearchClassName = cl({
		[styles['menu-item']]: true,
		[styles['menu-item-active']]: true
	});
    
	const handleLoginClick = () => {
		if (isLogined) {
			const lastLoggedInUser = localStorage.getItem('lastLoggedInUser');
			
			if (lastLoggedInUser) {
				const userDataStr = localStorage.getItem(lastLoggedInUser);
				
				if (userDataStr) {
					const userData = JSON.parse(userDataStr);
					userData.isLogined = false;
					localStorage.setItem(lastLoggedInUser, JSON.stringify(userData));
				}
				localStorage.removeItem('lastLoggedInUser');
			}
			setIsLogined(false);
		} else {
			// Логика для начала процесса логина
		}
	};

	const menuLoginContent = isLogined ? (
		<div className={styles['menu-item']} onClick={handleLoginClick}>
            Выйти
		</div>
	) : (
		<div className={styles['menu-item']} onClick={handleLoginClick}>
            Войти <img src={loginIcon} alt="login-icon" />
		</div>
	);
    
	const userName = isLogined ? localStorage.getItem('lastLoggedInUser') : null;

	const userNameMenu = isLogined ? (
		<div className={styles['menu-item']}>
			{userName} 
			<img src={userIcon} alt="User Icon" />
		</div>
	) : null;

	return (
		<div className={styles.menu}>
			<img src="/logo.svg" alt="Logo" />
			<nav className={styles['menu-list']}>
				<div className={menuSearchClassName}>Поиск фильмов</div>
				<div className={styles['menu-item']}>Мои фильмы <span className={styles['filmNum']}>{filmNum}</span></div>
				{userNameMenu}
				{menuLoginContent}
			</nav>
		</div>
	);
}

export default Menu;
