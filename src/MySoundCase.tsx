import { useEffect, useRef, useState, type ReactNode } from 'react'
import Footer from './Footer'
import soundContextImage from './assets/mysound/mysound-context.png'
import soundWave from './assets/mysound/mysound-wave.png'
import soundHero from '../Image39.png'
import soundDesignOverview from '../Image23.png'
import soundPlayerMood from '../Image24.png'
import soundSearch from '../Image25.png'
import soundLibrary from '../Image26.png'
import soundArtist from '../Image27.png'
import soundSearchPlayer from '../Image28.png'
import soundPremium from '../Image29.png'
import japanPreview from '../Image30.png'

const soundDesignImages = [
  { src: soundDesignOverview, alt: 'Три экрана приложения My Sound', variant: 'wide' },
  { src: soundPlayerMood, alt: 'Плеер My Sound и музыкальный визуал', variant: 'wide' },
  { src: soundSearch, alt: 'Поиск музыки и артистов в My Sound', variant: 'wide' },
  { src: soundLibrary, alt: 'Библиотека и сортировка музыки в My Sound', variant: 'wide' },
  { src: soundArtist, alt: 'Карточки артиста и альбома в My Sound', variant: 'wide' },
  { src: soundSearchPlayer, alt: 'Поиск и экран плеера My Sound', variant: 'wide' },
  { src: soundPremium, alt: 'Покупка Premium и успешная активация в My Sound', variant: 'wide' },
  { src: soundWave, alt: 'Звуковая волна My Sound', variant: 'wide' },
]

function CloseLink({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      className={`case-close ${mobile ? 'case-close--mobile' : 'case-close--desktop'}`}
      href={`${import.meta.env.BASE_URL}#portfolio`}
      aria-label="Вернуться к проектам"
    >
      {mobile ? 'НАЗАД [←]' : 'ЗАКРЫТЬ'}
    </a>
  )
}

function CaseSection({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`case-section ${className}`} aria-labelledby={`case-${title}`}>
      <h2 id={`case-${title}`}>{title}</h2>
      {children}
    </section>
  )
}

function MySoundCase() {
  const fadeAnchorRef = useRef<HTMLImageElement | null>(null)
  const [heroCopyOpacity, setHeroCopyOpacity] = useState(1)

  useEffect(() => {
    const fixedCopyTop = 112
    let animationFrame = 0

    const updateOpacity = () => {
      animationFrame = 0
      const fadeAnchor = fadeAnchorRef.current

      if (!fadeAnchor || window.innerWidth <= 600) {
        setHeroCopyOpacity(1)
        return
      }

      const anchorBottom = fadeAnchor.getBoundingClientRect().bottom
      const fadeStart = window.innerHeight
      const fadeEnd = fixedCopyTop
      const fadeRange = fadeStart - fadeEnd
      const fadeProgress = (fadeStart - anchorBottom) / fadeRange
      const nextOpacity = Math.max(0, Math.min(1, 1 - fadeProgress))

      setHeroCopyOpacity((currentOpacity) =>
        Math.abs(currentOpacity - nextOpacity) > 0.01 ? nextOpacity : currentOpacity,
      )
    }

    const requestOpacityUpdate = () => {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(updateOpacity)
    }

    requestOpacityUpdate()
    window.addEventListener('scroll', requestOpacityUpdate, { passive: true })
    window.addEventListener('resize', requestOpacityUpdate)

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', requestOpacityUpdate)
      window.removeEventListener('resize', requestOpacityUpdate)
    }
  }, [])

  return (
    <main className="case-page sound-case">
      <header className="site-header case-site-header" aria-label="Шапка сайта">
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

      <CloseLink />

      <section className="case-hero" aria-labelledby="mysound-title">
        <div
          className="case-hero__copy"
          style={{
            opacity: heroCopyOpacity,
            pointerEvents: heroCopyOpacity < 0.05 ? 'none' : 'auto',
          }}
        >
          <h1 id="mysound-title">MY SOUND MOBILE APP</h1>
          <p>
            Объединила сильные решения ведущих площадок и разработала музыкальный сервис
          </p>
          <span>&lt;MUSIC&gt;</span>
        </div>

        <img
          className="case-hero__image sound-case__hero-image"
          src={soundHero}
          alt="Мобильное приложение My Sound на смартфоне"
        />
      </section>

      <div className="case-content">
        <CaseSection title="КОНТЕКСТ" className="case-section--context">
          <p>
            My Sound — мобильное приложение
            <br className="sound-case__mobile-break" />
            для прослушивания музыки
            и подкастов.
          </p>

          <div className="sound-case__context-visual">
            <img
              className="sound-case__context-image"
              src={soundContextImage}
              alt="Главный экран приложения My Sound"
            />
            <CloseLink mobile />
          </div>
        </CaseSection>

        <CaseSection title="ПРОБЛЕМЫ" className="case-section--problems">
          <p>Основные проблемы, с которыми сталкиваются пользователи музыкальных сервисов:</p>
          <ul>
            <li>Разделы перегружены контентом, нарушена логика.</li>
            <li>
              Управление сохранённой музыкой, плейлистами и переход на карточку
              артиста требуют лишних действий.
            </li>
            <li>
              Важные функции и элементы управления могут теряться из-за сложной
              навигации.
            </li>
            <li>
              Функциональность разных сервисов разрознена: сильные решения одного
              приложения отсутствуют в другом.
            </li>
          </ul>
        </CaseSection>

        <CaseSection title="ЦЕЛЬ" className="case-section--goal">
          <p>
            Создать удобное музыкальное приложение, добавить сильные решения
            конкурентов и сделать взаимодействие пользователя с приложением более
            предсказуемым и комфортным.
          </p>
        </CaseSection>

        <CaseSection title="ГИПОТЕЗЫ" className="case-section--hypotheses">
          <div className="case-hypothesis">
            <h3>Гипотеза 1</h3>
            <p>
              Если вынести основные действия на видимые и привычные позиции,
              количество ошибок и лишних переходов в навигации снизится.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 2</h3>
            <p>
              Если разделить результаты поиска фильтрами, пользователи будут быстрее
              находить нужный контент.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 3</h3>
            <p>
              Если добавить гибкую сортировку библиотеки, управлять сохранённой
              музыкой станет проще.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 4</h3>
            <p>
              Если собрать сильные решения разных музыкальных сервисов в едином
              интерфейсе, у пользователя будет удобный доступ ко всем основным
              сценариям.
            </p>
          </div>
        </CaseSection>

        <CaseSection title="КОНЦЕПЦИЯ" className="case-section--concept">
          <p>Создать удобное и целостное музыкальное пространство удалось с помощью:</p>
          <ul>
            <li>фильтрации результатов поиска.</li>
            <li>продуманной логики размещения контента в разделах.</li>
            <li>гибкого управления медиатекой.</li>
            <li>быстрого доступа к недавно прослушанному контенту.</li>
            <li>
              цельной визуальной системы, поддерживающей музыкальный характер
              продукта.
            </li>
          </ul>
        </CaseSection>

        <section className="case-design sound-design" aria-labelledby="mysound-design-title">
          <h2 id="mysound-design-title">ДИЗАЙН</h2>
          <div className="case-gallery sound-gallery">
            {soundDesignImages.map((image, index) => (
              <img
                className={`case-gallery__item case-gallery__item--${image.variant}`}
                src={image.src}
                alt={image.alt}
                key={image.src}
                ref={index === soundDesignImages.length - 1 ? fadeAnchorRef : undefined}
              />
            ))}
          </div>
        </section>

        <section className="case-next sound-next" aria-labelledby="sound-next-title">
          <a
            className="case-next__link"
            href="#/japan"
            aria-label="Открыть проект ЯПОНСКИЙ КОНЦЕПТ СЪЕМКИ"
          >
            <h2 id="sound-next-title">СЛЕДУЮЩИЙ ПРОЕКТ</h2>
            <span className="case-next__image-frame">
              <img
                className="case-next__image"
                src={japanPreview}
                alt="Японский концепт съёмки для модельного агентства"
              />
            </span>
            <div className="case-next__meta">
              <div>
                <h3>ЯПОНСКИЙ КОНЦЕПТ СЪЕМКИ</h3>
                <p className="case-next__text case-next__text--desktop">
                  Собрала и продумала концепцию съемки
                  <br />
                  для модельного агентства
                </p>
                <p className="case-next__text case-next__text--mobile">
                  Продумала и собрала концепцию съемки
                  <br />
                  для модельного агентства
                </p>
              </div>
              <span className="sound-next__tag sound-next__tag--desktop">&lt;MODELING&gt;</span>
              <span className="sound-next__tag sound-next__tag--mobile">&lt;MODELING&gt;</span>
            </div>
          </a>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default MySoundCase
