import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import Button from '../Button/Button';
import styles from './InputSearch.module.css';
import searchIcon from '../../assets/images/search.svg';

interface InputSearchProps {
    onSearch: (query: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
	const inputSearchRef = useRef<HTMLButtonElement>(null);

	const [inputValue, setInputValue] = useState<string>('');
    
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onClick = () => {
		onSearch(inputValue);
	};

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
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
					placeholder="Enter the name of the film"
					data-testid="input"
				/>
				<img src={searchIcon} alt="search-icon" />
			</div>
			<Button ref={inputSearchRef} onClick={onClick} data-testid="button" />
		</div>
	);
};

export default InputSearch;
