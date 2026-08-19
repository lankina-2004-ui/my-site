import gramyNextSound from '../Image22.png'
import gramyDesktopHero from '../Image11.png'
import gramyDesktopAudience from '../Image12.png'
import gramyDesktopDesign01 from '../Image13.png'
import gramyDesktopDesign02 from '../Image14.png'
import gramyDesktopDesign03 from '../Image15.png'
import gramyDesktopDesign04 from '../Image16.png'
import gramyDesktopDesign05 from '../Image17.png'
import gramyDesktopDesign06 from '../Image18.png'
import gramyDesktopDesign07 from '../Image19.png'
import gramyDesktopDesign08 from '../Image20.png'
import gramyDesktopDesign09 from '../Image21.png'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import Footer from './Footer'

const designImages = [
  { src: gramyDesktopDesign01, alt: 'Три экрана приложения Gramy', variant: 'wide' },
  { src: gramyDesktopDesign02, alt: 'Экран продукта и карточка Icon Skin', variant: 'wide' },
  { src: gramyDesktopDesign03, alt: 'Сканирование состава в приложении Gramy', variant: 'wide' },
  { src: gramyDesktopDesign04, alt: 'Экраны анализа состава, рисков и экологии', variant: 'wide' },
  { src: gramyDesktopDesign05, alt: 'Ручной ввод состава и сканирование камерой', variant: 'wide' },
  { src: gramyDesktopDesign06, alt: 'Сравнение составов и фильтр по типу кожи', variant: 'wide' },
  { src: gramyDesktopDesign07, alt: 'Экран профиля приложения Gramy', variant: 'wide' },
  { src: gramyDesktopDesign08, alt: 'Брендовый баннер Gramy', variant: 'wide-short' },
  { src: gramyDesktopDesign09, alt: 'Визуальная система карточек Gramy', variant: 'wide' },
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

function GramyCase() {
  const lastDesignImageRef = useRef<HTMLImageElement | null>(null)
  const [heroCopyOpacity, setHeroCopyOpacity] = useState(1)

  useEffect(() => {
    const fixedCopyTop = 112
    let animationFrame = 0

    const updateOpacity = () => {
      animationFrame = 0
      const lastDesignImage = lastDesignImageRef.current

      if (!lastDesignImage || window.innerWidth <= 600) {
        setHeroCopyOpacity(1)
        return
      }

      const lastImageBottom = lastDesignImage.getBoundingClientRect().bottom
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
    <main className="case-page gramy-case">
      <header className="site-header case-site-header" aria-label="Шапка сайта">
        <div className="intro">
          <h1>
            <a className="intro__home-link" href={import.meta.env.BASE_URL}>
              ЛАНКИНА АННА
            </a>
          </h1>
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

      <section className="case-hero" aria-labelledby="gramy-title">
        <div
          className="case-hero__copy"
          style={{
            opacity: heroCopyOpacity,
            pointerEvents: heroCopyOpacity < 0.05 ? 'none' : 'auto',
          }}
        >
          <h1 id="gramy-title">GRAMY MOBILE APP</h1>
          <p>
            Разработала мобильное приложение, которое помогает анализировать состав косметики
            и оценивать на безопасность
          </p>
          <span>&lt;BEAUTY&gt; &lt;MEDICINE&gt;</span>
        </div>

        <img
          className="case-hero__image"
          src={gramyDesktopHero}
          alt="Мобильное приложение Gramy на двух смартфонах"
        />
      </section>

      <div className="case-content">
        <CaseSection title="КОНТЕКСТ" className="case-section--context">
          <p>
            Gramy — мобильное приложение для анализа и сравнения составов уходовой
            и декоративной косметики.
          </p>
        </CaseSection>

        <CaseSection title="АУДИТОРИЯ" className="case-section--audience">
          <p>
            Люди, которые ухаживают за состоянием кожи лица и тела, но не обладают
            профессиональными знаниями о компонентах и формулах, либо не хотят тратить
            время на проверку составов.
          </p>

          <div className="case-audience">
            <img
              className="case-audience__image"
              src={gramyDesktopAudience}
              alt="Коллаж: уход за кожей, иконка приложения и косметическая текстура"
            />
            <CloseLink mobile />
          </div>
        </CaseSection>

        <CaseSection title="ПРОБЛЕМЫ" className="case-section--problems">
          <p>Основные проблемы людей, заинтересованных в уходе за собой:</p>
          <ul>
            <li>
              Выбор косметики занимает много времени из-за сложных составов, избытка
              информации и нерешимости.
            </li>
            <li>
              Сравнивать несколько средств вручную сложно: приходится искать,
              сопоставлять и запоминать данные.
            </li>
            <li>
              Информация о составах разбросана по разным источникам и оценивается
              по разным критериям.
            </li>
            <li>
              Профессиональный подбор ухода у дерматолога доступен не всем из-за
              высокой стоимости.
            </li>
          </ul>
        </CaseSection>

        <CaseSection title="ГИПОТЕЗЫ" className="case-section--hypotheses">
          <div className="case-hypothesis">
            <h3>Гипотеза 1</h3>
            <p>
              Если упростить ввод данных за счёт сканирования, пользователи будут
              тратить меньше времени на анализ состава.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 2</h3>
            <p>
              Если учитывать тип кожи, аллергены и персональный стоп-лист,
              рекомендации станут релевантнее.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 3</h3>
            <p>
              Если сравнивать два средства на одном экране по единым параметрам,
              пользователи смогут быстрее выбрать подходящий.
            </p>
          </div>
          <div className="case-hypothesis">
            <h3>Гипотеза 4</h3>
            <p>
              Если сохранять проверенные продукты в избранном, пользователи смогут
              возвращаться к ним во время покупки, не проводя повторный анализ.
            </p>
          </div>
        </CaseSection>

        <CaseSection title="ЦЕЛЬ" className="case-section--goal">
          <p>
            Разработать приложение, которое сократит время на выбор средств и поможет
            пользователям разобраться в составе косметики, оценить ее безопасность
            с учетом типов и особенностей кожи.
          </p>
        </CaseSection>

        <CaseSection title="КОНЦЕПЦИЯ" className="case-section--concept">
          <p>Концепцию понятного бьюти-приложения удалось достичь при помощи:</p>
          <ul>
            <li>понятной подачи сложных составов для пользователей</li>
            <li>быстрого сценария ввода состава (скан)</li>
            <li>наглядного сравнения нескольких продуктов между собой</li>
          </ul>
        </CaseSection>

        <section className="case-design" aria-labelledby="case-design-title">
          <h2 id="case-design-title">ДИЗАЙН</h2>
          <div className="case-gallery">
            {designImages.map((image, index) => (
              <img
                className={`case-gallery__item case-gallery__item--${image.variant}`}
                src={image.src}
                alt={image.alt}
                key={image.src}
                ref={index === designImages.length - 1 ? lastDesignImageRef : undefined}
              />
            ))}
          </div>
        </section>

        <section className="case-next" aria-labelledby="case-next-title">
          <a
            className="case-next__link"
            href="#/my-sound"
            aria-label="Открыть проект MY SOUND MOBILE APP"
          >
            <h2 id="case-next-title">СЛЕДУЮЩИЙ ПРОЕКТ</h2>
            <span className="case-next__image-frame">
              <img
                className="case-next__image"
                src={gramyNextSound}
                alt="Проект My Sound Mobile App"
              />
            </span>
            <div className="case-next__meta">
              <div>
                <h3>MY SOUND MOBILE APP</h3>
                <p className="case-next__text case-next__text--desktop">
                  Разработала музыкальный сервис
                  <br />
                  и объединила сильные решения ведущих площадок.
                </p>
                <p className="case-next__text case-next__text--mobile">
                  Объединила сильные решения ведущих площадок
                  <br />
                  и разработала музыкальный сервис
                </p>
              </div>
              <span>&lt;MUSIC&gt;</span>
            </div>
          </a>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default GramyCase
