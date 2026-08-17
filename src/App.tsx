import { useEffect, useRef, useState } from 'react'
import heroPhoto from '../hero-photo.png'
import aboutCollage from '../Image2.png'
import robotBadge from '../Image3.png'
import portfolioDecoration from '../Image4.png'
import gramyPreview from '../Image5.png'
import aiPreview from '../Image6.png'
import soundPreview from '../Image22.png'
import shootingPreview from '../Image8.png'
import footerDesktopVisual from '../Image9.png'
import footerMobileVisual from '../Image10.png'
import GramyCase from './GramyCase'
import JapanCase from './JapanCase'
import MySoundCase from './MySoundCase'
import useScrollReveal from './useScrollReveal'

function HomePage() {
  const japanProjectRef = useRef<HTMLElement | null>(null)
  const [metaOpacity, setMetaOpacity] = useState(1)

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    const japanProject = japanProjectRef.current

    if (!japanProject) {
      return undefined
    }

    let frameId = 0

    const updateMetaOpacity = () => {
      const { bottom } = japanProject.getBoundingClientRect()
      const fadeStart = 160
      const fadeEnd = 40
      const progress = (fadeStart - bottom) / (fadeStart - fadeEnd)
      const nextOpacity = Math.max(0, Math.min(1, 1 - progress))

      setMetaOpacity(Number(nextOpacity.toFixed(3)))
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateMetaOpacity)
    }

    updateMetaOpacity()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <main className="page">
      <header className="site-header" aria-label="Шапка сайта">
        <div className="intro">
          <h1>ЛАНКИНА АННА</h1>
        </div>

        <nav className="navigation" aria-label="Основная навигация">
          <button className="navigation__cv" type="button">
            СМОТРЕТЬ CV
          </button>
          <a
            className="navigation__contact"
            href="https://t.me/whygb"
            target="_blank"
            rel="noreferrer"
          >
            НАПИСАТЬ <span aria-hidden="true">[→]</span>
          </a>
        </nav>
      </header>

      <aside
        className="intro__meta home-meta"
        aria-label="Направления и опыт"
        style={{ opacity: metaOpacity }}
      >
        <p>FIELDS: DIGITAL. BEAUTY. FASHION</p>
        <p>EXPERIENCE: 2 YEARS</p>
      </aside>

      <aside className="location" aria-label="Местоположение и время">
        <p>LOC: EKATERINBURG, RUSSIA</p>
        <p>TIME 14:09:46</p>
      </aside>

      <section className="home-screen" aria-label="Главный экран">
        <section className="hero" aria-labelledby="hero-description">
          <span className="hero__role">UX/UI DESIGNER</span>
          <img
            className="hero__photo"
            src={heroPhoto}
            alt="Анна Ланкина, UX/UI дизайнер"
          />

          <p className="hero__description" id="hero-description">
            Разрабатываю сайты, приложения,
            <br />
            визуал и креативные концепты
          </p>

          <button
            className="hero__projects"
            type="button"
            onClick={scrollToPortfolio}
            aria-controls="portfolio"
          >
            ПРОЕКТЫ [↓]
          </button>
        </section>
      </section>

      <section className="about" aria-labelledby="about-description">
        <p className="about__description" id="about-description">
          <span className="about__line about__line--first">
            Привет! Меня зовут Аня, я UX/UI дизайнер
          </span>
          <span className="about__line about__line--second">
            с бэкграундом в бьюти- и фэшн-сфере. Создаю
          </span>
          <span className="about__line about__line--third">
            человечные (
            <img
              className="about__captcha"
              src={robotBadge}
              alt="I'm not a robot"
            />
            <span className="about__line-ending">
              ) сайты и приложения, помогаю
            </span>
          </span>
          <span className="about__line about__line--fourth">
            брендам переносить характер в digital
          </span>
        </p>

        <img
          className="about__collage"
          src={aboutCollage}
          alt="Коллаж из ноутбука, бетонных блоков, обуви и сумки"
        />

        <span className="about__tag about__tag--digital">&lt;DIGITAL&gt;</span>
        <span className="about__tag about__tag--beauty">&lt;BEAUTY&gt;</span>
        <span className="about__tag about__tag--fashion">&lt;FASHION&gt;</span>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">
        <img
          className="portfolio__decoration"
          src={portfolioDecoration}
          alt=""
          aria-hidden="true"
        />

        <h2 className="portfolio__heading" id="portfolio-heading">
          <span className="portfolio__heading-desktop">ПРОЕКТЫ</span>
          <span className="portfolio__heading-mobile">&lt;ПРОЕКТЫ&gt;</span>
        </h2>

        <article className="portfolio__project portfolio__project--gramy">
          <a
            className="portfolio__project-link"
            href="#/gramy"
            aria-label="Открыть проект GRAMY MOBILE APP"
          >
            <span className="portfolio__preview-frame">
              <img
                className="portfolio__preview"
                src={gramyPreview}
                alt="Мобильное приложение GRAMY на двух смартфонах"
              />
            </span>
            <h3>GRAMY MOBILE APP</h3>
            <p>
              Разработала мобильное приложение, которое помогает
              <br className="portfolio__desktop-break" />
              <span className="portfolio__mobile-space"> </span>
              анализировать состав косметики и оценивать на безопасность
            </p>
            <span className="portfolio__tags">&lt;BEAUTY&gt; &lt;MEDICINE&gt;</span>
          </a>
        </article>

        <article className="portfolio__project portfolio__project--ai">
          <span className="portfolio__preview-frame">
            <img
              className="portfolio__preview"
              src={aiPreview}
              alt="AI-сервис для подбора музыки к контенту на экране ноутбука"
            />
          </span>
          <h3>AI</h3>
          <p>
            Разработала AI-сервис, который считывает атмосферу
            <br className="portfolio__desktop-break" />
            <span className="portfolio__mobile-space"> </span>
            фото или видео и подбирает музыку к контенту
          </p>
          <span className="portfolio__tags">&lt;CONTENT&gt;</span>
        </article>
      </section>

      <section className="portfolio-more" aria-label="Другие проекты">
        <article className="portfolio__project portfolio__project--sound">
          <a
            className="portfolio__project-link"
            href="#/my-sound"
            aria-label="Открыть проект MY SOUND MOBILE APP"
          >
            <span className="portfolio__preview-frame">
              <img
                className="portfolio__preview"
                src={soundPreview}
                alt="Музыкальное приложение My Sound на смартфоне"
              />
            </span>
            <h3>MY SOUND MOBILE APP</h3>
            <p>
              Объединила сильные решения ведущих площадок
              <br />
              и разработала музыкальный сервис
            </p>
            <span className="portfolio__tags">&lt;MUSIC&gt;</span>
          </a>
        </article>

        <article
          className="portfolio__project portfolio__project--shooting"
          ref={japanProjectRef}
        >
          <a
            className="portfolio__project-link"
            href="#/japan"
            aria-label="Открыть проект ЯПОНСКИЙ КОНЦЕПТ СЪЕМКИ"
          >
            <span className="portfolio__preview-frame">
              <img
                className="portfolio__preview"
                src={shootingPreview}
                alt="Концепция съёмки для модельного агентства"
              />
            </span>
            <h3>ЯПОНСКИЙ КОНЦЕПТ СЪЕМКИ</h3>
            <p>
              Продумала и собрала концепцию съемки
              <br />
              для модельного агентства
            </p>
            <span className="portfolio__tags">&lt;MODELING&gt;</span>
          </a>
        </article>
      </section>

      <footer className="footer" aria-label="Контакты">
        <img
          className="footer__visual footer__visual--desktop"
          src={footerDesktopVisual}
          alt=""
          aria-hidden="true"
        />
        <img
          className="footer__visual footer__visual--mobile"
          src={footerMobileVisual}
          alt=""
          aria-hidden="true"
        />

        <div className="footer__blog">
          <p className="footer__blog-label">ЛИЧНЫЙ БЛОГ :)</p>
          <a
            className="footer__blog-channel"
            href="https://t.me/anlankina"
            target="_blank"
            rel="noreferrer"
          >
            ТЕЛЕГРАМ КАНАЛ
          </a>
        </div>

        <nav className="footer__socials" aria-label="Социальные сети">
          <a
            className="footer__social footer__social--telegram"
            href="https://t.me/whygb"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__social-desktop">Telegram</span>
            <span className="footer__social-mobile">Телеграм</span>
          </a>
          <a
            className="footer__social footer__social--email"
            href="mailto:lankina-2004@mail.ru"
          >
            <span className="footer__social-desktop">Email</span>
            <span className="footer__social-mobile">Почта</span>
          </a>
          <a
            className="footer__social footer__social--instagram"
            href="https://www.instagram.com/gloombabyy?igsh=MXdvb2ZyNjhlcHhsMQ=="
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__social-desktop">Instagram</span>
            <span className="footer__social-mobile">Инстаграм</span>
          </a>
        </nav>
      </footer>

    </main>
  )
}

function App() {
  useScrollReveal()

  const [route, setRoute] = useState(() => window.location.hash)

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  const isGramyCase =
    window.location.pathname === '/gramy' || route === '#/gramy'

  const isMySoundCase =
    window.location.pathname === '/my-sound' ||
    window.location.pathname === '/mysound' ||
    route === '#/my-sound' ||
    route === '#/mysound'

  const isJapanCase =
    window.location.pathname === '/japan' || route === '#/japan'

  if (isGramyCase) {
    return <GramyCase />
  }

  if (isMySoundCase) {
    return <MySoundCase />
  }

  if (isJapanCase) {
    return <JapanCase />
  }

  return <HomePage />
}
export default App
