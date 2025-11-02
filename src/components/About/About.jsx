import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import profileImage from '../../assets/profile2.jpg';
import Tilt from 'react-parallax-tilt';

export const About = () => {
  return (
    <section id='about'
      className='py-4 px-[7vx] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap '>
            Sahil Vijay
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight '>
            <span className='text-white '>
              I am a{' '}
            </span>



            <TypewriterComponent
              options={{
                strings: [
                  'Developer',
                  'UI/UX Designer',
                  'Software Developer',
                  'Video Editor',
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 100,
                deleteSpeed: 50,
                delaySpeed: 2000,
                cursor: '|',
                wrapperClassName: 'text-[#8245ec]',
                cursorClassName: 'text-[#8245ec]',
              }}
            />


          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-justify text-gray-400 mb-4 px-4 md:px-0 lg:-0 mt-8 leading-relaxed">
            Passionate developer dedicated to building responsive and user-friendly websites using HTML, CSS, JavaScript, and React. Skilled in designing clean interfaces, working with APIs, and collaborating within Agile teams to deliver high-quality software solutions.
          </p>
          
          {/* Contact Info */}
          <div className="text-sm sm:text-base text-gray-400 mt-4 px-4 md:px-0">
            <p>📍 Alwar, Rajasthan</p>
            <p>📞 +91-6375050369</p>
            <p>✉️ sahilvijay829@gmail.com</p>
          </div>

          {/* <a
            href="https://drive.google.com/file/d/1Zb6-cheOq4N2kyqKHohKw9XSfvxkq7Qk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-md font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>*/}
        </div>
        {/* Right Side  */}

        <div className='md-w-1/2 flex justify-center md:justify-end '>
          <Tilt
            className='w-48 h-48 sm:w-64 md:w-[15rem] md:h-[15rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}


          >
            <img src={profileImage} alt="Sahil Vijay"
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20_px_rgba(130,69,236,0.5)]'
            />
          </Tilt>

        </div>

      </div>

    </section>
  )
}
