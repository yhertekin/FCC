import React from "react";

interface IPreview {
	setState: React.Dispatch<React.SetStateAction<string>>;
	state: string;
}
const Preview = ({ setState, state }: IPreview) => {
	return (
		<div>
			<textarea
				value={state}
				id="editor"
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setState(e.target.value)}
			></textarea>
		</div>
	);
};

export default Preview;
