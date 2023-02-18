import { useEffect, useState } from "react";

const TextInput = () => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const texts = [
		"priority:           !l = low,          !m = middle,        !h = high",
		"stack:              /t = todo,         /p = progress,      /c = completed",
		"tag:                #tag-name",
		"time:               :d = last day,     :w = last week,     :m = last month",
		"person:             @person-name",
	];
	const currentText = texts[currentTextIndex];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTextIndex((currentTextIndex + 1) % texts.length);
		}, 6000);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentTextIndex, texts.length]);

	return <input type="text" placeholder={currentText} className="buscador" />;
};

export default TextInput;
