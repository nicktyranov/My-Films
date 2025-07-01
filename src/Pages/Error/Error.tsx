import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragraph from '../../Components/Paragraph/Paragraph';


const text = (
	<>Enter the name of a movie, TV series or cartoon to search <br /> and add to favorites.</>
);

const handleSearch = () => {
	return;
};

export function Error() {
	return <div>
		<Heading headingText='Search' level={1} appearance='big' />
		<Paragraph text={text} />
		<InputSearch onSearch={handleSearch} />
		<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
	</div>;
}