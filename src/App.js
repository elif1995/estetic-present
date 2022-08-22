
import {useState} from 'react';

import './App.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faPhone} from '@fortawesome/free-solid-svg-icons';

import logo from './img/ulia-small-logo(1).png';
import befor from './img/befor.jpg';
import after from './img/after.jpg'

function App() {

  const [success, setSuccess] = useState(false)

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_fd9ezvm', 'template_lkkiriq', e.target, 'user_mCywm2gmcbJZQ0pcCu0JY')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
      
      e.target.reset();
      setTimeout(setSuccess(false),4000)
      
  }



  return (
    <div className="App">
      { success && <div className='success-message'><p > הודעה נשלחה בהצלחה <FontAwesomeIcon style={{color: 'green',marginRight: '10px'}}icon={faCircleCheck}></FontAwesomeIcon></p></div>}
      <div className="navbar"><div className="navbar-top-inner"><h2 style={{ marginLeft: '5px'}} > ד"ר יוליה פרנקין  </h2><a href="http://yuliafrenkin.co.il/"><img alt='logo' src={logo} /></a></div><div className="sub-navbar-title"><p> מרכז לרפואה אסתטית</p><p>שאול טשרניחובסקי 67,רחובות</p></div></div>
        <div className='title'>
          <h2  style={{color: 'black'}}>הרמת עפעפיים ללא ניתוח</h2>
        </div>
      <div className="BA-pic" >
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFCFD6" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,48C384,32,480,32,576,80C672,128,768,224,864,261.3C960,299,1056,277,1152,250.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
         
        <div className="BA-pic-box">
          <h3>לפני</h3><img id="imgBefore" alt="befor img" src={befor}/>
        </div>
        
        <div className="BA-pic-box">
          <h3>אחרי</h3><img  id="imgAfter" alt="after img"  src={after}/>
        </div>
        
      </div>

      
      
      <div className="contact">
       
      <h1 className="desc"> <br/>מכשיר ה-Plexer Plus, עושה סוף לעפעפיים נפולים, ללא ניתוח.
      אנשים רבים סובלים מתופעת עודפי עור מעל לעפעפיים, מה שמקנה לפנים מראה מבוגר ועייף. רבים נמנעים מביצוע ניתוח בעפעפיים, בעיקר מתוך פחד מהרדמה ומסיבוכים אפשריים, שיכולים להתרחש בניתוח רגיל.
      </h1>
      
      <div className="inner-contact">
      <div className="contact-background">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.6420761592963!2d34.80800018491138!3d31.88914768124909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7118cb168b1%3A0x45ae702297973fa1!2z16nXkNeV15wg15jXqdeo16DXmdeX15XXkdeh16fXmSA2Nywg16jXl9eV15HXldeq!5e0!3m2!1siw!2sil!4v1658873741712!5m2!1siw!2sil" width={300} height={300} style={{border:"0",width:"100%", height:"100%",padding:"5px",opacity:'0.8',}}  ></iframe>
      </div>
      <div className="contact-details" id='contact'>
        <h1>השאר/י פרטים ונחזור אלייך</h1>
        
        <form onSubmit={sendEmail}>
          <h3 >שם</h3>
          <input type="text" name="name" required/>
          <h3>טלפון</h3>
          <input type="phone" name="phone" required/>
          <button type="submit" className="submit-button">שלח</button>
        </form>
        
      </div>
      </div>
      </div>
      
      <div className="contact-options">
        
        <div className="contact-option fa-2x"><a href="https://wa.me/549353342"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x" id="contact-facebook"><a href="https://www.facebook.com/DrFrenkinYulia"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x"><a href="tel:08-9353339"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></div>
      </div>
      
    </div>
  );
}

export default App;
