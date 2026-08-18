import footerDesktopVisual from '../Image9.png'
import footerMobilePhone from '../ChatGPT Image 17 июл_ 2026 г_, 12_46_54-no-bg-preview (carve.photos) 1.png'

function Footer() {
  return (
    <footer className="footer" aria-label="Контакты">
      <img className="footer__visual footer__visual--desktop" src={footerDesktopVisual} alt="" aria-hidden="true" />
      <img className="footer__mobile-phone" src={footerMobilePhone} alt="" aria-hidden="true" />

      <div className="footer__blog">
        <p className="footer__blog-label">ЛИЧНЫЙ БЛОГ :)</p>
        <a className="footer__blog-channel" href="https://t.me/anlankina" target="_blank" rel="noreferrer">
          ТЕЛЕГРАМ КАНАЛ
        </a>
      </div>

      <nav className="footer__socials" aria-label="Социальные сети">
        <a className="footer__social footer__social--telegram" href="https://t.me/whygb" target="_blank" rel="noreferrer">
          <span className="footer__social-desktop">Telegram</span>
          <span className="footer__social-mobile">Телеграм</span>
        </a>
        <a className="footer__social footer__social--email" href="mailto:lankina-2004@mail.ru">
          <span className="footer__social-desktop">Email</span>
          <span className="footer__social-mobile">Почта</span>
        </a>
        <a className="footer__social footer__social--instagram" href="https://www.instagram.com/gloombabyy?igsh=MXdvb2ZyNjhlcHhsMQ==" target="_blank" rel="noreferrer">
          <span className="footer__social-desktop">Instagram</span>
          <span className="footer__social-mobile">Инстаграм</span>
        </a>
      </nav>
    </footer>
  )
}

export default Footer
