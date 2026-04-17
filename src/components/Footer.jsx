import linkedin from "../assets/in.png"
import facebook from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import Logo from "../assets/logo-light.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 px-4 sm:px-8 lg:px-15 py-10 sm:py-14 bg-[#191A23] text-white rounded-tl-3xl rounded-tr-3xl sm:rounded-tl-[45px] sm:rounded-tr-[45px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8">
          <img src={Logo} alt="Logo" />

          <nav>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 items-center text-base sm:text-lg lg:text-xl">
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
            </ul>
          </nav>

          <div className="flex gap-4">
            <div>
              <img src={linkedin} alt="LinkedIn" />
            </div>
            <div>
              <img src={facebook} alt="Facebook" />
            </div>
            <div>
              <img src={twitter} alt="Twitter" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 sm:py-12 gap-8 sm:gap-10">
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-xl sm:text-2xl rounded-xl px-2 text-black bg-[#B9FF66] inline-block mb-4">
              Contact us:
            </h2>

            <div className="mb-4">
              <a href="mailto:info@positivus.com">Email: info@positivus.com</a>
            </div>

            <div className="mb-4">
              <a href="tel:555-567-8901">Phone: 555-567-8901</a>
            </div>

            <div>
              <a href="/">
                Address: 1234 Main St <br /> Moonstone City, Stardust State
                12345
              </a>
            </div>
          </div>

          <div className="bg-[#292A32] flex flex-col sm:flex-row items-center px-4 sm:px-8 lg:px-12 py-6 rounded-2xl gap-4 lg:justify-self-end w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="border border-white px-6 sm:px-8 py-4 rounded-2xl bg-transparent w-full sm:flex-1"
            />
            <button className="px-6 sm:px-8 py-4 bg-[#B9FF66] text-black rounded-2xl w-full sm:w-auto">
              Subscribe to news
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-col sm:flex-row gap-4 pt-8 sm:pt-12 text-center sm:text-left">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer