import Button from '../Button/Button';
import styles from './InputSearch.module.css';
import { useRef, useState } from 'react';
import searchIcon from '../../assets/images/search.svg';

function InputSearch({onSearch}) {
	const inputSearchRef = useRef(null);

	const [inputValue, setInputValue] = useState();
	
	
	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const onClick = () => {
		onSearch(inputValue);
	};

	const onEnter = (e) => {
		if (e.key === 'Enter') {
			onSearch(inputValue);
		}
	};
	
	return (
		<div className={styles['search-wrapper']}>
			<div className={styles['input-wrapper']}>
				<input
					className={styles['input-search']}
					type="text"
					onChange={onChange}
					onKeyDown={onEnter}
					placeholder='Enter the name of the film' /> 
				<img src={searchIcon} alt="search-icon"  />
			</div>
			<Button ref={inputSearchRef} onClick={onClick}/>
		
		</div>
	
	);
}

export default InputSearch;