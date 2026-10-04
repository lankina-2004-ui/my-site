import type { ReactNode } from 'react'
import useProjectCopyVisibility from './useProjectCopyVisibility'
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
import gramyPreview from '../Image5.png'

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
  const { nextProjectRef, heroCopyVisible } = useProjectCopyVisibility()

  return (
    <main className="case-page sound-case">
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

      <section className="case-hero" aria-labelledby="mysound-title">
        <div
          className="case-hero__copy"
          style={{
            opacity: heroCopyVisible ? 1 : 0,
            pointerEvents: heroCopyVisible ? 'auto' : 'none',
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
            {soundDesignImages.map((image) => (
              <img
                className={`case-gallery__item case-gallery__item--${image.variant}`}
                src={image.src}
                alt={image.alt}
                key={image.src}
              />
            ))}
          </div>
        </section>

        <section ref={nextProjectRef} className="case-next sound-next" aria-labelledby="sound-next-title">
          <a
            className="case-next__link"
            href={`${import.meta.env.BASE_URL}#/gramy`}
            aria-label="Открыть проект GRAMY MOBILE APP"
          >
            <h2 id="sound-next-title">СЛЕДУЮЩИЙ ПРОЕКТ</h2>
            <span className="case-next__image-frame">
              <img
                className="case-next__image"
                src={gramyPreview}
                alt="Мобильное приложение GRAMY на двух смартфонах"
              />
            </span>
            <div className="case-next__meta">
              <div>
                <h3>GRAMY MOBILE APP</h3>
                <p className="case-next__text">
                  Разработала мобильное приложение, которое помогает анализировать
                  состав косметики и оценивать на безопасность
                </p>
              </div>
              <span>&lt;BEAUTY&gt; &lt;MEDICINE&gt;</span>
            </div>
          </a>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default MySoundCase
