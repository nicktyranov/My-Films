import Button from '../Button/Button';
import './InputSearch.css';


function InputSearch() {


	return (
		<div className='search-wrapper'>
			<div className='input-wrapper'>
				<input className='input-search' type="text" placeholder='Enter the name'/> 
				<img src="../../public/search.svg" alt="search-icon"  />
			</div>
			<Button/>
		
		</div>
	
	);
}

export default InputSearch;