import './Button.css';

function Button({textButton = 'Search'}) {

	const onClick = () => {

	};

	return (
		<button className='button' onClick={onClick}>{ textButton}</button>
	);
}

export default Button;