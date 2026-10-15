import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Yekaterinburg',
  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
})

export default function EkaterinburgTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()))
  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatter.format(new Date())), 1000)
    return () => window.clearInterval(timer)
  }, [])
  return <p>TIME {time}</p>
}
