
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="navbar"><h2 style={{ marginLeft: '5px'}} > ד"ר יוליה פרנקין  </h2><a href="http://yuliafrenkin.co.il/"><img  src="http://yuliafrenkin.co.il/wp-content/uploads/2018/06/ulia-small-logo.png" /></a></div>
      
      <div className="BA-pic">
        
        <div className="BA-pic-box"><h2>לפני</h2><img  height={150} width={250} src="http://yuliafrenkin.co.il/wp-content/uploads/2022/07/3.jpg"/></div>
        
        <div className="BA-pic-box"><h2>אחרי</h2><img  height={150} width={250} src="http://yuliafrenkin.co.il/wp-content/uploads/2022/07/4.jpg"/></div>
        
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFCFD6" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,48C384,32,480,32,576,80C672,128,768,224,864,261.3C960,299,1056,277,1152,250.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      
      
      <div className="contact">
      <h1 className="desc"><h2 style={{color: 'black'}}>הרמת עפעפיים ללא ניתוח</h2> <br/>מכשיר ה-Plexer Plus, עושה סוף לעפעפיים נפולים, ללא ניתוח.
      אנשים רבים סובלים מתופעת עודפי עור מעל לעפעפיים, מה שמקנה לפנים מראה מבוגר ועייף. רבים נמנעים מביצוע ניתוח בעפעפיים, בעיקר מתוך פחד מהרדמה ומסיבוכים אפשריים, שיכולים להתרחש בניתוח רגיל.
      </h1>
      <div className="inner-contact">
      <div className="contact-background">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.6420761592963!2d34.80800018491138!3d31.88914768124909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7118cb168b1%3A0x45ae702297973fa1!2z16nXkNeV15wg15jXqdeo16DXmdeX15XXkdeh16fXmSA2Nywg16jXl9eV15HXldeq!5e0!3m2!1siw!2sil!4v1658873741712!5m2!1siw!2sil" width={300} height={300} style={{border:"0",width:"100%", height:"100%",padding:"5px",opacity:'0.8',}}  ></iframe>
      </div>
      <div className="contact-details" id='contact'>
        <h1>השאר/י פרטים ונחזור אלייך</h1>
        
        <form >
          <h3 >שם</h3>
          <input/>
          <h3>טלפון</h3>
          <input/>
          <button type="submit" className="submit-button">שלח</button>
        </form>
        
      </div>
      </div>
      </div>
      <div className="contact-options">
        <div className="contact-option fa-2x"><a href="https://wa.me/544854747"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x" id="contact-facebook"><a href="https://www.facebook.com/DrFrenkinYulia"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x"><a href="tel:08-9353339"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></div>
      </div>
      
    </div>
  );
}

export default App;
