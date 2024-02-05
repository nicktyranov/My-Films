
import { useState } from 'react';
import './App.css';
import FilmList from './Components/FilmList/FilmList';
import Heading from './Components/Heading/Heading';
import InputSearch from './Components/InputSearch/InputSearch';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Paragraf from './Components/Paragraf/Paragraf';



function App() {
	const [isLogined, setIsLogined] = useState(false);
	
	const text = (
		<>Введите название фильма, сериала или мультфильма для поиска <br /> и добавления в избранное.</>
	);
	return (
		<>
			<Menu isLogined={isLogined} setIsLogined={setIsLogined} />
			<div>
				<Heading />
				<Paragraf text = {text} />
				<div>
					<InputSearch />
					
				</div>
				
				<FilmList/>
			</div>
			<div>
				<Login isLogined={isLogined} setIsLogined={setIsLogined}/>
			</div>
		</>
	);
}

export default App;
