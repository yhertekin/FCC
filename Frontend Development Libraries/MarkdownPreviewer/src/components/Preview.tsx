import Markdown from "react-markdown";

interface IPreview {
	state: string;
}
const Preview = ({ state }: IPreview) => {
	return (
		<div id="preview">
			<Markdown>{state}</Markdown>
		</div>
	);
};

export default Preview;
