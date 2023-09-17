import React from 'react';
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"


const About = () => {
  return (
    <div>
      <Header />
      <div className='bg-bg'>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-5xl pt-36">
            <div className="text-left">
              <h1 class="text-4xl font-bold tracking-tight text-head heading fade_left">
                About
              </h1>

              <div class="h-px my-4 bg-ln border-0 dark:bg-ln fade"> </div>

              <p className="mt-7 text-lg leading-8 text-txt paragraph fade">
                Hi I'm Shannon, a passionate 3rd year Computer Engineering student aspiring to be a Software Engineer.
                I humbly started my coding journey back in high school, playing around with {" "}
                <a href="https://developers.google.com/blockly" target="_blank" rel="noreferrer" class="font-bold transition-all ease-in-out duration-200 hover:text-head">
                  Blockly
                </a>. 
                I had so much fun building programs, I continued taking computer science throughout high school which 
                led me to choose to pursue Computer Engineering at the University of Toronto.
              </p>

              <p className="mt-5 text-lg leading-8 text-txt paragraph fade">
                I have accumulated a diverse and versatile set of skills over my years of learning from operating systems to web development.
                I enjoy being challenged with vigorous problem-solving - the thrill of finding a solution or optimizing an algorithm 
                is one of my favourite joys and something I am exceptionally good at.
              </p>

              <p className="mt-5 text-lg leading-8 text-txt paragraph fade">
                Beyond technical skills, I thrive in collaborative environments where interpersonal communication is key.
                In past {" "}
                <a href="https://developers.google.com/blockly" target="_blank" rel="noreferrer" class="font-bold transition-all ease-in-out duration-200 hover:text-head">
                projects
                </a>
                , I was regularly critically thinking about ideas, communicating code, and connecting with team members. 
                I hope to continue being an avid team player in all my future endeavors.
              </p>

              <p className="mt-5 text-lg leading-8 text-txt paragraph fade">
                Within the ever-changing tech industry, I am commited to life-long learning. After my degree I plan to continue staying updated on 
                emerging technologies, attending workshops, and participating in various projects on my own time.
              </p>
             
            </div>
          </div>
        </div>

        <div className="sm:flex sm:justify-center flex space-x-5 py-10">
          <div className="transition-color ease-in-out duration-200 relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-op hover:ring-bk fade_left">
            {' '}
            <a href="/skills" className="transition-color ease-in-out duration-200 font-semibold text-head hover:text-bk paragraph">
              <span className="absolute inset-0" aria-hidden="true" />
              Skills <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
};
  
export default About;