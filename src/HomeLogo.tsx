export default function HomeLogo() {
  const goHome = () => {
    try {
      sessionStorage.setItem(`scroll-position:${window.location.pathname}#/`, '0')
    } catch { /* Navigation works when storage is unavailable. */ }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  return <a className="intro__home-link" href="#/" onClick={goHome}>ЛАНКИНА АННА</a>
}
