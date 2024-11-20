function Header(props) {
	return(
		<header>
			<img alt="logo_image"></img>
			<div className="flex-box">
				<div className="button">{props.lang === "RU" ? "О КОМПАНИИ" : "ABOUT COMPANY"}</div>
				<div className="button">{props.lang === "RU" ? "ПРОЕКТЫ" : "PROJECTS"}</div>
				<div className="button">{props.lang === "RU" ? "НОВОСТИ" : "NEWS"}</div>
				<div className="button">{props.lang === "RU" ? "КОНТАКТЫ" : "CONTACTS"}</div>
			</div>
			<div className="switch">	
				<div className="switchSection">EN</div>
				<div className="switchSection">RU</div>
			</div>
		</header>
	);
}
export default Header;
