
import './App.css';
import FilmList from './Components/FilmList/FilmList';
import Heading from './Components/Heading/Heading';
import InputSearch from './Components/InputSearch/InputSearch';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Paragrah from './Components/Paragrah/Paragrah';
import { CurrentUserProvider } from './context/user.context';

const text = (
	<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
);

function App() {
	
	return (
		<>
			<CurrentUserProvider>
				<Menu/>
				<div>
					<Heading headingText='Search' level={1}/>
					<Paragrah text = {text} />
					<div>
						<InputSearch />
					</div>
					<FilmList/>
				</div>
				<div>
					<Login/>
				</div>
			</CurrentUserProvider>
		</>
	);
}

export default App;
