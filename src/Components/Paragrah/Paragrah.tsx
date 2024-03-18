
import { ParagrahProps } from './Paragrah.props';

function Paragrah({text, className}: ParagrahProps) {
	
	return (
		<p className={className}>{text }</p>
	);
}

export default Paragrah;