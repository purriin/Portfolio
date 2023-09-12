import React from 'react';
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"


const About = () => {
  return (
    <div>
      <Header />
      <div className='bg-bg'>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-56 sm:py-56 lg:py-56">
            <div className="text-left">
              <h1 class="text-4xl font-bold tracking-tight text-head heading fade_left">
                About
              </h1>

              <div class="h-px my-4 bg-ln border-0 dark:bg-ln fade"> </div>

              <p className="mt-7 text-lg leading-8 text-txt paragraph fade">
                Hi I'm Shannon, a passionate 3rd year Computer Engineering student aspiring to be a Software Engineer.
                I humbly started my coding journey back in high school, playing around with {" "}
                <a href="https://developers.google.com/blockly" target="_blank" rel="noreferrer" class="font-bold transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1">
                  Blockly
                </a>. 
                I had so much fun building programs, I continued taking computer science throughout high school which 
                led me to choose to pursue Computer Engineering at the University of Toronto.
              </p>

              <p className="mt-5 text-lg leading-8 text-txt paragraph fade">
                I have accumulated a diverse and versatile set of skills over my years of learning. 
              </p>

            </div>
          </div>
        </div>
        <Footer />
      </div>

      
    </div>
  )
};
  
export default About;