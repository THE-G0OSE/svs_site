function TextBlock(props){
	const Head = <p className="text-head">{props.head}</p>;
	const Text = <p className="text">{props.text}</p>;
	return(
		<div className="Text-block" style={{top: props.top,height: props.height}}>
			{props.head ? Head : "" } 
			{Text}
		</div>
	);

	}	
export default TextBlock;
