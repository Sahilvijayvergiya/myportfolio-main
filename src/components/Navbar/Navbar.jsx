import React, { useEffect, useState } from 'react'
import { FiGift, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import virexMediaLogo from '../../assets/VIREX MEDIA LOGO.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  //smooth scroll function
  const handlemenuItemClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[20vw] h-24 flex items-center
      ${isScrolled ? "bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className='w-full text-white flex justify-between items-center'>
        <div className='text-3xl font-bold cursor-pointer hover:scale-105 transition-transform'>
          <span className='text-[#8245ec]'> &lt;</span>
          <span className='text-white'> Sahil </span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'> Vijay</span>
          <span className='text-[#8245ec]'> &gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 text-xl font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'
              }`}>
              <button onClick={() => handlemenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}

        </ul>

        <div className='hidden md:flex space-x-4 items-center'>
          <a href="https://github.com/Sahilvijayvergiya"
            target='blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/sahil-vijay-152769335/"
            target='blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.virexmedia.info"
            target='blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec] transition-all flex items-center justify-center'
          >
            <img src={virexMediaLogo} alt="VIREX Media" className='h-8 w-auto opacity-70 hover:opacity-100 transition-all' style={{height: '32px', width: 'auto', filter: 'brightness(0) invert(0.7)', objectFit: 'contain'}} />
          </a>

        </div>

        {/* mobile menu item */}

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-4xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            ) :
              (
                <FiMenu className='text-4xl text-[#8245ec] cursor-pointer'
                  onClick={() => setIsOpen(true)} />)


          }
        </div>



      </div>

      {/* Mobile items */}
      {isOpen && (
        <div className='fixed top-24 left-0 right-0 w-full bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 shadow-lg mx-auto px-[7vw] lg:px-[20vw]'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`w-full text-center py-2 text-lg font-medium
                ${activeSection === item.id ? "text-[#8245ec]" : "text-gray-300 hover:text-white"}`}>
                <button 
                  onClick={() => handlemenuItemClick(item.id)}
                  className='w-full h-full py-2'
                >
                  {item.label}
                </button>
              </li>
            )

            )}

            <div className='flex space-x-8 pt-4 border-t border-gray-700 w-full justify-center items-center'>
              <a href="https://github.com/Sahilvijayvergiya"
                target='blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaGithub size={32} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-vijay-152769335/"
                target='blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaLinkedin size={32} />
              </a>
              <a href="https://www.virexmedia.info"
                target='blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-all flex items-center justify-center'
              >
                <img src={virexMediaLogo} alt="VIREX Media" className='h-8 w-auto opacity-70 hover:opacity-100 transition-all' style={{height: '32px', width: 'auto', filter: 'brightness(0) invert(0.7)', objectFit: 'contain'}} />
              </a>

            </div>


          </ul>
        </div>
      )}
    </nav>

  )
}
