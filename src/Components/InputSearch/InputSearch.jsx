import Button from '../Button/Button';
// import cl from 'classnames';
import styles from './InputSearch.module.css';
import { useRef } from 'react';

import searchIcon from '../../assets/images/search.svg';

function InputSearch() {
	const inputSearchRef = useRef(null);

	return (
		<div className={styles['search-wrapper']}>
			<div className={styles['input-wrapper']}>
				<input className={styles['input-search']} type="text" placeholder='Enter the name of the film'/> 
				<img src={searchIcon} alt="search-icon"  />
			</div>
			<Button ref={inputSearchRef}/>
		
		</div>
	
	);
}

export default InputSearch;