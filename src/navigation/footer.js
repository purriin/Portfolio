import React from "react";

const Footer = () => { 
    return (
    <footer class="bg-white dark:bg-ft">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 fade">
          <div class="flex justify-center">

            <div class="grid grid-cols-2 gap-10">
              <div>
                <h2 class="mb-6 text-sm font-bold text-head uppercase dark:text-head heading">Resources</h2>
                <ul class="text-op dark:op font-medium paragraph">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="transition-color ease-in-out duration-200 hover:text-head">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="transition-color ease-in-out duration-200 hover:text-head">Tailwind CSS</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-sm font-bold text-head uppercase dark:text-head heading">Follow us</h2>
                <ul class="text-op dark:op font-medium paragraph">
                  <li class="mb-4">
                    <a href="https://github.com/themesberg/flowbite" class="transition-color ease-in-out duration-200 hover:text-head">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="transition-color ease-in-out duration-200 hover:text-head">Discord</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

          <hr class="my-6 border-ln sm:mx-auto dark:border-ln lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
          
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.github.com/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-ic hover:text-head hover:-translate-y-1">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                  <path  d="M9.358 2.145a8.209 8.209 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 0 0-.51-.053a1.258 1.258 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.354 3.354 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.34 2.34 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a4.798 4.798 0 0 1-.27-.402l-.057-.093a9.216 9.216 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7.2 7.2 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.563c0-.315-.014-.604-.103-.873c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002a.671.671 0 0 0-.075-.015a1.261 1.261 0 0 0-.158-.013a2.172 2.172 0 0 0-.51.053c-.391.084-.93.283-1.636.716Z"/>
                </svg>
                <span class="sr-only">Github page</span>
              </a>
                  
              <a href="https://www.linkedin.com/in/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-ic hover:text-head hover:-translate-y-1">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
                <span class="sr-only">Linkedin page</span>
              </a>

              <a href="mailto: shan.jones@mail.utoronto.ca" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-ic hover:text-head hover:-translate-y-1 mt-1">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/>
                </svg>
                <span class="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div class="mt-1 sm:mt-6"></div>
        </div>
      </footer>
    )
}

export default Footer;