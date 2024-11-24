function Footer(props){
	return(
			<div className="FooterFlex">
				<div className="FooterCard">
					<p className="CardHead">{props.lang === "RU" ? "НАШ АДРЕС:" : "ADRESS:"}</p>
					<div className="CardDescription">{props.lang === "RU" ? "пока нет" : "we don't have any yet"}</div>
				</div>

				<div className="FooterCard">
					<p className="CardHead">{props.lang ==="RU" ? "ТЕЛЕФОН:" : "PHONE:"}</p>
					<div className="CardDescription">{props.lang === "RU" ? "пока нет" : "we don't have any yet"}</div>
				</div>

				<div className="FooterCard">
					<p className="CardHead">EMAIL:</p>
					<div className="CardDescription">{props.lang === "RU" ? "ну нет пока ничего" : "we don't have this too"}</div>
				</div>

				<div className="FooterCard">
					<p className="CardHead">{props.lang === "RU" ? "МЫ В СОЦИАЛЬНЫХ СЕТЯХ" : "SOCIAL MEDIA"}</p>
					<div className="CardDescription">пока ничего</div>
				</div>
			</div>
	);
}
export default Footer;
