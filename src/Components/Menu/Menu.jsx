import './Menu.css';

function Menu() {
	const filmNum = 2;

	return (
		<div className='menu'>
			<img src="../../public/logo.svg" alt="" />
			<nav className='menu-list'>
				<div className="menu-item menu-item-active">Поиск фильмов</div>
				<div className="menu-item">Мои фильмы <span className='filmNum'>{filmNum }</span></div>
				<div className="menu-item">
					Войти <img src="../../public/login.svg" alt="login-icon" />
				</div>
			</nav>

		</div>
	);
}

export default Menu;