import styles from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import cl from 'classnames';
import loginIcon from '../assets/images/login.svg';
import userIcon from '../assets/images/user.svg';
import { useUserContext } from '../context/user.context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { resetFavorites } from '../store/favoritesSlice';


export function Layout() {
	const { userName, isLogined, logout } = useUserContext();
	const dispatch = useDispatch();
	console.log(userName);

	const filmNum = useSelector((state: RootState) => {
		console.log(state.favorites.items);
		if (!state.favorites.items) {
			return 0;
		}
		return state.favorites.items.length;
	});

	const handleLoginClick = () => {
		logout();
		dispatch(resetFavorites());
	};

	const menuLoginContent = isLogined ? (
		<NavLink
			to={'/'}
			className={({ isActive }) => cl(styles['menu-item'], {
				[styles['menu-item-active']] : isActive
			})}
			onClick={handleLoginClick}>
            Выйти
		</NavLink>
	) : (
		<NavLink
			to={'/login'}
			className={({ isActive }) => cl(styles['menu-item'], {
				[styles['menu-item-active']] : isActive
			})}
			onClick={handleLoginClick}>
				Войти
			<img src={loginIcon} alt="login-icon" />
		</NavLink>
	);
    
	const userNameMenu = isLogined ? (
		<div className={styles['menu-item']}>
			{userName} 
			<img src={userIcon} alt="User Icon" />
		</div>
	) : null;

	return (
		<div className={styles['layout']}>
			<div className={styles.menu}>
				<img src="/logo.svg" alt="Logo" />
				<nav className={styles['menu-list']}>
					<NavLink
						to={'/'}
						className={({ isActive }) => cl(styles['menu-item'], {
							[styles['menu-item-active']] : isActive
						})}>
						Поиск фильмов
					</NavLink>
					<NavLink
						to={'/favotites'}
						className={({ isActive }) => cl(styles['menu-item'], {
							[styles['menu-item-active']] : isActive
						})}>
						Мои фильмы
						{isLogined
							? <span className={styles['filmNum']}>{filmNum}</span>
							: null
						}
					</NavLink>
					{userNameMenu}
					{menuLoginContent}
				</nav>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
		
	);
}


