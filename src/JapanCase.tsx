import { useEffect, useRef, useState, type ReactNode } from 'react'
import gramyPreview from '../Image5.png'
import japanHero from '../Image31.png'
import japanContextImage from '../Image32.png'
import japanConceptImage from '../Image33.png'
import japanMakeupImage from '../Image34.png'
import japanLooksImage from '../Image 34.png'
import japanAccessoriesImage from '../Image36.png'
import japanPlanImage from '../Image37.png'
import japanPosingImage from '../Image38.png'
import japanLocationImage from '../Image40.png'

const japanVisualImages = [
  { src: japanMakeupImage, alt: 'Визуальные референсы макияжа и укладки' },
  { src: japanLooksImage, alt: 'Референсы образов для японского концепта съёмки' },
  { src: japanAccessoriesImage, alt: 'Аксессуары для японского концепта съёмки' },
  { src: japanPlanImage, alt: 'План съёмки японского концепта' },
  { src: japanPosingImage, alt: 'Референсы позирования для съёмки' },
  { src: japanLocationImage, alt: 'Локация и предметы для японского концепта съёмки' },
]

function CloseLink({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      className={`case-close ${mobile ? 'case-close--mobile' : 'case-close--desktop'}`}
      href="#/"
      aria-label="Вернуться на главную"
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

function JapanCase() {
  const lastVisualImageRef = useRef<HTMLImageElement | null>(null)
  const [heroCopyOpacity, setHeroCopyOpacity] = useState(1)

  useEffect(() => {
    const fixedCopyTop = 112
    let animationFrame = 0

    const updateOpacity = () => {
      animationFrame = 0
      const lastVisualImage = lastVisualImageRef.current

      if (!lastVisualImage || window.innerWidth <= 600) {
        setHeroCopyOpacity(1)
        return
      }

      const lastImageBottom = lastVisualImage.getBoundingClientRect().bottom
      const fadeStart = window.innerHeight
      const fadeEnd = fixedCopyTop
      const fadeRange = fadeStart - fadeEnd
      const fadeProgress = (fadeStart - lastImageBottom) / fadeRange
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
    <main className="case-page japan-case">
      <header className="site-header case-site-header" aria-label="Шапка сайта">
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

      <CloseLink />

      <section className="case-hero" aria-labelledby="japan-title">
        <div
          className="case-hero__copy"
          style={{
            opacity: heroCopyOpacity,
            pointerEvents: heroCopyOpacity < 0.05 ? 'none' : 'auto',
          }}
        >
          <h1 id="japan-title">
            ЯПОНСКИЙ КОНЦЕПТ
            <br />
            СЪЕМКИ
          </h1>
          <p>
            Продумала и собрала концепцию съемки для модельного агентства
          </p>
          <span>&lt;MODELING&gt;</span>
        </div>

        <img
          className="case-hero__image"
          src={japanHero}
          alt="Обложка японского концепта фотосъёмки"
        />
      </section>

      <div className="case-content">
        <CaseSection title="КОНТЕКСТ" className="case-section--context japan-section--context">
          <p>
            В модельном агентстве появились новые лица, которым необходим материал
            для портфолио и дальнейшего продвижения. Стандартные тестовые снимки
            часто не раскрывают её характер, пластику и потенциал для fashion-съёмок.
          </p>

          <div className="japan-case__context-visual">
            <img
              className="japan-case__section-image"
              src={japanContextImage}
              alt="Слайд с новыми лицами модельного агентства"
            />
            <CloseLink mobile />
          </div>
        </CaseSection>

        <CaseSection title="ЦЕЛЬ" className="case-section--goal">
          <p>
            Создать продуманную визуальную концепцию съёмки, которая обновит
            портфолио моделей и сформирует агентству проработанный визуальный язык.
          </p>
        </CaseSection>

        <CaseSection title="РЕШЕНИЕ" className="case-section--solution japan-section--solution">
          <p>
            Провести съемку в японской тематике, именно этот концепт поможет
            раскрыть восточную внешность новых моделей и повысит их привлекательность
            для азиатских брендов
          </p>

          <img
            className="japan-case__section-image japan-case__solution-image"
            src={japanConceptImage}
            alt="Слайд с концепцией японской съёмки"
          />
        </CaseSection>

        <section className="case-design japan-visual" aria-labelledby="japan-visual-title">
          <h2 id="japan-visual-title">ВИЗУАЛ</h2>
          <p>
            Оформление презентации строится на минимализме: симбиоз японской
            гармонии и визуала фэшн-журналов. Эти материалы будут использоваться
            как pre-production съемки и презентация партнерам
          </p>

          <div className="case-gallery japan-gallery">
            {japanVisualImages.map((image, index) => (
              <img
                className="case-gallery__item case-gallery__item--wide"
                src={image.src}
                alt={image.alt}
                key={`${image.src}-${index}`}
                ref={index === japanVisualImages.length - 1 ? lastVisualImageRef : undefined}
              />
            ))}
          </div>
        </section>

        <section className="case-next japan-next" aria-labelledby="japan-next-title">
          <a
            className="case-next__link"
            href="#/gramy"
            aria-label="Открыть проект GRAMY MOBILE APP"
          >
            <h2 id="japan-next-title">СЛЕДУЮЩИЙ ПРОЕКТ</h2>
            <img
              className="case-next__image"
              src={gramyPreview}
              alt="Проект GRAMY Mobile App"
            />
            <div className="case-next__meta">
              <div>
                <h3>GRAMY MOBILE APP</h3>
                <p className="case-next__text">
                  Разработала мобильное приложение, которое помогает подбирать
                  и проверять состав косметики
                </p>
              </div>
              <span>&lt;BEAUTY&gt; &lt;MEDICINE&gt;</span>
            </div>
          </a>
        </section>
      </div>
    </main>
  )
}

export default JapanCase
