import React from 'react';
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"

const Experiences = () => {
  return (
    <div className="bg-bg">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-left">
            <h1 class="text-6xl font-bold tracking-tight text-head fade_left title">
              Experiences
            </h1>

            <p className="mt-5 text-lg leading-8 text-txt fade_left paragraph">
              p
            </p>

            <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>
            
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  )
};
  
export default Experiences;