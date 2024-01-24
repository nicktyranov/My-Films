import './Menu.css';

function Menu() {


	return (
		<div className='menu'>
			<img src="../../public/logo.svg" alt="" />
			<nav className='menu-list'>
				<div className="menu-item menu-item-active">Поиск фильмов</div>
				<div className="menu-item">Мои фильмы</div>
				<div className="menu-item">
					Войти <img src="../../public/login.svg" alt="login-icon" />
				</div>
			</nav>

		</div>
	);
}

export default Menu;