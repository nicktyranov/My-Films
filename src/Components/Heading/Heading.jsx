import './Heading.css';

function Heading({headingText = 'Search'}) {


	return (
		<h1 className="heading">{ headingText}</h1>
	);
}

export default Heading;