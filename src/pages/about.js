import React from 'react';
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"

const About = () => {
  return (
    <div className="bg-bg">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-left">
            <h1 class="text-6xl font-bold tracking-tight text-head fade_left title">
              About me
            </h1>

            <p className="mt-5 text-lg leading-8 text-txt fade_left paragraph">
              Hi I'm Shannon, a passionate 3rd year Computer Engineering student aspiring to be a Software Engineer.
              I humbly started my coding journey back in high school, playing around with {" "}
              <a href="https://developers.google.com/blockly" target="_blank" rel="noreferrer" class="font-bold transition-color ease-in-out duration-200 hover:text-head">
                Blockly
              </a>. 
              I had so much fun building programs, I continued taking computer science throughout high school which 
              led me to choose to pursue Computer Engineering at the University of Toronto.
            </p>

            <p className="mt-5 text-lg leading-8 text-txt fade_left paragraph">
              I have accumulated a diverse and versatile set of skills over my years of learning. 
            </p>

            <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>

            <h2 class="text-4xl mt-10 font-bold tracking-tight text-txt fade_left heading">
              Education
            </h2>

            <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>

            <h2 class="text-4xl mt-10 font-bold tracking-tight text-txt fade_left heading">
              Hobbies
            </h2>
            
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  )
};
  
export default About;