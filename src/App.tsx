import { useEffect, useRef, useState } from 'react'
import heroPhoto from '../hero-photo.png'
import heroPhotoDesktop from '../image.png'
import aboutCollage from '../Image2.png'
import robotBadge from '../Image3.png'
import portfolioDecoration from '../Image4.png'
import gramyPreview from '../Image5.png'
import aiPreview from '../Image6.png'
import soundPreview from '../Image22.png'
import shootingPreview from '../Image8.png'
import Footer from './Footer'
import GramyCase from './GramyCase'
import JapanCase from './JapanCase'
import MySoundCase from './MySoundCase'
import useScrollReveal from './useScrollReveal'

function HomePage() {
  const japanProjectRef = useRef<HTMLElement | null>(null)
  const [metaOpacity, setMetaOpacity] = useState(1)
  const formatEkaterinburgTime = () =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Yekaterinburg',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }).format(new Date())
  const [ekaterinburgTime, setEkaterinburgTime] = useState(formatEkaterinburgTime)

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    const japanProject = japanProjectRef.current
    const footer = document.querySelector<HTMLElement>('.page > .footer')

    if (!japanProject || !footer) {
      return undefined
    }

    let frameId = 0

    const updateMetaOpacity = () => {
      const { bottom } = japanProject.getBoundingClientRect()
      const fadeStart = 160
      const fadeEnd = 40
      const progress = (fadeStart - bottom) / (fadeStart - fadeEnd)
      const projectOpacity = Math.max(0, Math.min(1, 1 - progress))
      const footerTop = footer.getBoundingClientRect().top
      const footerProgress = (window.innerHeight - footerTop) / 120
      const footerOpacity = Math.max(0, Math.min(1, 1 - footerProgress))
      const nextOpacity = Math.min(projectOpacity, footerOpacity)

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

  useEffect(() => {
    const updateTime = () => setEkaterinburgTime(formatEkaterinburgTime())
    const timerId = window.setInterval(updateTime, 1000)

    updateTime()
    return () => window.clearInterval(timerId)
  }, [])

  return (
    <main className="page">
      <header className="site-header" aria-label="Шапка сайта">
        <div className="intro">
          <h1>ЛАНКИНА АННА</h1>
        </div>

        <nav className="navigation" aria-label="Основная навигация">
          <a
            className="navigation__cv"
            href="https://drive.google.com/file/d/1t8FkucEL94e0LH5vWGMPiHpCCUb58wzG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            СМОТРЕТЬ CV
          </a>
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
        <p>TIME {ekaterinburgTime}</p>
      </aside>

      <section className="home-screen" aria-label="Главный экран">
        <section className="hero" aria-labelledby="hero-description">
          <span className="hero__role">UX/UI DESIGNER</span>
          <picture>
            <source media="(max-width: 600px)" srcSet={heroPhoto} />
            <img
              className="hero__photo"
              src={heroPhotoDesktop}
              alt="Анна Ланкина, UX/UI дизайнер"
            />
          </picture>

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
          <span className="about__desktop-copy">
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
          </span>

          <span className="about__mobile-copy">
            <span className="about__mobile-line">Привет! Меня зовут Аня, я UX/UI</span>
            <span className="about__mobile-line">дизайнер с&nbsp;бэкграундом в&nbsp;бьюти- и</span>
            <span className="about__mobile-line">
              фэшн-сфере. Создаю человечные (
              <img className="about__captcha" src={robotBadge} alt="I'm not a robot" />
              )
            </span>
            <span className="about__mobile-line">сайты и&nbsp;приложения, помогаю брендам</span>
            <span className="about__mobile-line">переносить характер в&nbsp;digital</span>
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
          <span
            className="portfolio__preview-frame"
            tabIndex={0}
            role="button"
            aria-label="Показать статус проекта AI"
          >
            <img
              className="portfolio__preview"
              src={aiPreview}
              alt="AI-сервис для подбора музыки к контенту на экране ноутбука"
            />
            <span className="portfolio__coming-soon">СКОРО ПОЯВИТСЯ</span>
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

      <Footer />

    </main>
  )
}

function App() {
  useScrollReveal()

  const [route, setRoute] = useState(() => window.location.hash)

  useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.hash)

    window.addEventListener('hashchange', handleRouteChange)

    return () => window.removeEventListener('hashchange', handleRouteChange)
  }, [])

  useEffect(() => {
    if (route === '#portfolio') {
      const frameId = window.requestAnimationFrame(() => {
        document.getElementById('portfolio')?.scrollIntoView({ block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo(0, 0)
    return undefined
  }, [route])

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
