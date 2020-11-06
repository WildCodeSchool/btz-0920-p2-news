import {
  wildnewsLogo,
  logoFacebook,
  logoLinkedin,
  logoTwitter,
  logoYoutube,
} from '../images';

import './Footer.css';

function Footer() {
  return (
    <footer className="backgroundFooter">
      <div className="footerMain">
        <div className="leftArea">
          <img className="logo" src={wildnewsLogo} alt="Logo" />
          <p style={{ textAlign: 'justify' }}>
            Retrouvez toute l&apos;actualité en continu sur WildNews.fr
          </p>
        </div>
        <div className="middleArea">
          <p>NOUS CONTACTER</p>
          <p>MENTIONS LEGALES</p>
          <p>POLITIQUE DE CONFIDENTIALITE</p>
          <p>CARRIERES</p>
        </div>
        <div className="rightArea">
          <div>
            <img src={logoFacebook} alt="Logo" />
          </div>
          <div>
            <img src={logoLinkedin} alt="Logo" />
          </div>
          <div>
            <img src={logoTwitter} alt="Logo" />
          </div>
          <div>
            <img src={logoYoutube} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="baselineArea">
        <p> COPYRIGHT © 2020 | WildNews</p>
      </div>
    </footer>
  );
}

export default Footer;
