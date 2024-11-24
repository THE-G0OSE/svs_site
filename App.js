import Header from "./Header.js"
import Footer from "./Footer.js"
import TextBlock from "./Text-block.js"
import React, {useState} from 'react'


function App() {
	const [lang, setLang] = useState("RU");
	const setEN = ()=>{
		const EN = document.getElementById("EN");
		const RU = document.getElementById("RU");
		setLang("EN");
		EN.style.backgroundColor="var(--color-selected)";
		RU.style.backgroundColor="";
	}
	const setRU = ()=>{
		const EN = document.getElementById("EN");
		const RU = document.getElementById("RU");
		setLang("RU");
		RU.style.backgroundColor="var(--color-selected)";
		EN.style.backgroundColor="";
	}
  return (
	  <>
	  <head>
	  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
	  </head>
   		<body>
			<Header lang={lang} setEN={setEN} setRU={setRU}/>
			<TextBlock top="1000px" height="700px" head="Hahahhaahahahaha" text="lorem asdf sadf asdf asd fsad fsad fsadfljkasd fasd j;alsdkjf;askdj askdjsa;d sjd skf sl;kdj fasdkjf;aslkd fasdjfp owihgn;vlasn [oiwjh kascv [owirjg s as[lkdv wjkv [aslnv iwohgpiwh jvnalskdjfnv iowbf isd aks djn pwajh asnfvpas jdf paowufhas odjfn awohf paowif hpaoskdj fpaskdjf powhjf okwj [oaksnv[ oih woieh jsaod  wue fajidbf poaijsdhf wof hw  soadjfh paosj d w fo ads fas poasdjf asodjfasd f asdf jaspdo faspd fasdf asf sad asdo jf powkejf [pwklef niawudh uwh pw  ou poewihf pwodkjf ow  pwof wopi pwodihj apsdkn  eifj -qwo a;slmvn wof wpn asdvn weoh fwpdo pasdf asdnv oajkhv wpqufh asjhv asjdif wklmnf a;slnf asfh pwuofhpwjkf ;asld va;sdj fpwjf ;asldkf ;asdf aspdofp wiojfalskj faskldfjas lfiouhqwp kfnqw;fn " />
	  		<Footer lang={lang}/>
		</body>
	  </>
  );
}

export default App;
