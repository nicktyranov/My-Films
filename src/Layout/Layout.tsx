import { NavLink, Outlet } from 'react-router-dom';
import cl from 'classnames';
import loginIcon from '../assets/images/login.svg';
import userIcon from '../assets/images/user.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { resetFavorites } from '../store/favoritesSlice';
import { userSlice } from '../store/userSlice';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Layout.module.css';

export function Layout() {
	const dispatch = useDispatch();
	
	const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 550);
	const [mobileMenuClicked, setMobileMenuClicked] = useState(false);
	const userName = useSelector((state: RootState) => state.user.userName);
	const isLogined = useSelector((state: RootState) => {
		return state.user.isLogined;
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobileMenu(window.innerWidth < 550);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const filmNum = useSelector((state: RootState) => {
		console.log(state.favorites.items);
		if (!state.favorites.items) {
			return 0;
		}
		return state.favorites.items.length;
	});

	const handleLoginClick = () => {
		dispatch(userSlice.actions.logout());
		dispatch(resetFavorites());
	};

	useEffect(() => {
		if (!isLogined) {
			<Navigate to="/login" replace />;
		}
	}, [isLogined, userName]);

	const menuLoginContent = isLogined ? (
		<NavLink
			to={'/'}
			className={({ isActive }) =>
				cl(styles['menu-item'], {
					[styles['menu-item-active']]: isActive
				})
			}
			onClick={handleLoginClick}
		>
         Logout
		</NavLink>
	) : (
		<NavLink
			to={'/login'}
			className={({ isActive }) =>
				cl(styles['menu-item'], {
					[styles['menu-item-active']]: isActive
				})
			}
			onClick={handleLoginClick}
		>
         Login
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
				<NavLink to={'/'}>
					<div className={styles['menu-logo--wrapper']}>
						<img src="/logo.svg" alt="Logo" className={styles['menu-logo-img']}/>
						<h1 className={styles['menu-logo-heading']}>My Films</h1>
						<span className={styles['menu-logo-description']}>Find, explore and save your favorite films.
						</span>
					</div>
					
				</NavLink>
				{!isMobileMenu && <nav className={styles['menu-list']}>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							cl(styles['menu-item'], {
								[styles['menu-item-active']]: isActive
							})
						}
					>
                  Film search
					</NavLink>
					<NavLink
						to={'/favorites'}
						className={({ isActive }) =>
							cl(styles['menu-item'], {
								[styles['menu-item-active']]: isActive
							})
						}
					>
                  Favorite Films
						{isLogined ? (
							<span className={styles['filmNum']}>{filmNum}</span>
						) : null}
					</NavLink>
					{userNameMenu}
					{menuLoginContent}
				</nav>}
				
				{isMobileMenu && (
					<>
						<button onClick={() => setMobileMenuClicked(!mobileMenuClicked)} className={styles.mobileMenuButton}>
							<img src="/mobileMenu.svg" alt="mobileMenu" className={styles.mobileMenu} />
						</button>
					</>
				)}

			</div>
			{mobileMenuClicked && (
				<nav className={styles['menu-list--mobile']}>
					<NavLink to={'/'} className={({ isActive }) => cl(styles['menu-item'], { [styles['menu-item-active']]: isActive })}>
          Film search
					</NavLink>
					<NavLink to={'/favorites'} className={({ isActive }) => cl(styles['menu-item'], { [styles['menu-item-active']]: isActive })}>
          Favorite Films
						{isLogined && <span className={styles['filmNum']}>{filmNum}</span>}
					</NavLink>
					{userNameMenu}
					{menuLoginContent}
				</nav>
			)}
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
