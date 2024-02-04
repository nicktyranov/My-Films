
import cl from 'classnames';
import styles from './Menu.module.css';

import loginIcon from '../../assets/images/login.svg';

function Menu() {
	const filmNum = 2;

	const menuSearchClassName = cl({
		[styles['menu-item']]: true,
		[styles['menu-item-active']]: true
	});

	return (
		<div className={styles.menu}>
			<img src="../../public/logo.svg" alt="" />
			<nav className={styles['menu-list']}>
				<div className={menuSearchClassName}>Поиск фильмов</div>
				<div className={styles['menu-item']}>Мои фильмы <span className={styles['filmNum']}>{filmNum }</span></div>
				<div className={styles['menu-item']}>
					Войти <img src={loginIcon} alt="login-icon" />
				</div>
			</nav>

		</div>
	);
}

export default Menu;