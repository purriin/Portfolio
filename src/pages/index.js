import React from "react";
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"
import '../App.css';


export default function Home() {
  return (

    <div className="bg-bg">
      <Header />
        
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-left">
            <p className="mt-6 text-lg leading-8 text-bk fade_left">
              Nice to meet you, my name is
            </p>
            <h1 class="text-7xl font-bold tracking-tight text-head  fade_left">
              Shannon Jones
            </h1>
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-txt fade_left">
              Software Engineer
            </h2>
            <p className="mt-6 text-lg leading-8 text-op fade_left">
              I'm currently a 3rd year Computer Engineering student studying at the University of Toronto. 
            </p>

          </div>

          <div className="sm:flex sm:justify-left flex mt-4 space-x-5">
            <div className="transition-color ease-in-out duration-200 relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-op hover:ring-bk fade_left">
              {' '}
              <a href="/about" className="transition-color ease-in-out duration-200 font-semibold text-head hover:text-bk">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>

          <div className="sm:flex sm:justify-left flex mt-4 space-x-5">
            <a href="https://www.github.com/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-head hover:text-bk hover:-translate-y-1">
              <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/>
                  </path>
                  <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"/>
                  </path>
                </g>
              </svg>

              <span class="sr-only">Github page</span>
            </a>

            <a href="https://www.linkedin.com/in/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-head hover:text-bk hover:-translate-y-1">
              <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/></circle>
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path>
                  <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path>
                  <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0"/></path>
                </g>
              </svg>
              <span class="sr-only">Linkedin page</span>
            </a>

            <a href="mailto: shan.jones@mail.utoronto.ca" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-head hover:text-bk hover:-translate-y-1">
              <svg class="w-9 h-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                  <rect width="18" height="14" x="3" y="5" stroke-dasharray="64" stroke-dashoffset="64" rx="1">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></rect>
                  <path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5L12 12L21 6.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="24;0"/></path>
                </g>
              </svg>
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}