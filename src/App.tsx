import heroPhoto from '../hero-photo.png'

function App() {
  return (
    <main className="page">
      <header className="intro">
        <h1>ЛАНКИНА АННА</h1>
        <div className="intro__meta" aria-label="Направления и опыт">
          <p>FIELDS: DIGITAL. BEAUTY. FASHION</p>
          <p>EXPERIENCE: 2 YEARS</p>
        </div>
      </header>

      <nav className="navigation" aria-label="Основная навигация">
        <button className="navigation__cv" type="button">
          СМОТРЕТЬ CV
        </button>
        <button className="navigation__contact" type="button">
          НАПИСАТЬ <span aria-hidden="true">[→]</span>
        </button>
      </nav>

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

        <button className="hero__projects" type="button">
          ПРОЕКТЫ <span aria-hidden="true">[↓]</span>
        </button>
      </section>

      <aside className="location" aria-label="Местоположение и время">
        <p>LOC: EKATERINBURG, RUSSIA</p>
        <p>TIME 14:09:46</p>
      </aside>
    </main>
  )
}

export default App
