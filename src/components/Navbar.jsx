import { useEffect, useState } from 'react'

export function Navbar () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY > 0
      setIsScrolled(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>

      <a class='logo' href='#home'>
        <h2> Bee </h2>
      </a>

      <nav class='navbar'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#service'>Service</a>
        <a href='#contact'>Contact</a>
      </nav>

    </header>
  )
}
