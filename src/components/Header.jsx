import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center my-12 px-4">
        <img src={Logo} alt="Logo" />

        <button
          className="block sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={28} /> : <FaBars size={25} />}
        </button>

        <nav className="hidden sm:block">
          <ul className="flex gap-10 items-center text-xl">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/use-cases">Use Cases</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <button className="border px-6 py-4 rounded-xl">
                Request a quote
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 w-full bg-white z-50 px-4 pb-6 shadow-md">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/use-cases" onClick={() => setMenuOpen(false)}>
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <button className="border px-6 py-4 rounded-xl w-full">
                Request a quote
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Header