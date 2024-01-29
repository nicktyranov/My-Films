
import './App.css';
import FilmList from './Components/FilmList/FilmList';
import Heading from './Components/Heading/Heading';
import InputSearch from './Components/InputSearch/InputSearch';
import Menu from './Components/Menu/Menu';
import Paragraf from './Components/Paragraf/Paragraf';



function App() {

	

	return (
		<>
			<Menu/>
			<div>
				<Heading />
				<Paragraf />
				<div>
					<InputSearch />
					
				</div>
				
				<FilmList/>
			</div>
		</>
	);
}

export default App;
