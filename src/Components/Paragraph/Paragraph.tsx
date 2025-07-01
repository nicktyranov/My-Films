
import { ParagraphProps } from './Paragraph.props';

function Paragraph({text, className}: ParagraphProps) {
	
	return (
		<p className={className}>{text }</p>
	);
}

export default Paragraph;