import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Experiences', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-bg">
      <header className="absolute inset-x-0 top-0 z-50">

        <nav className="relative flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="transition-color ease-in-out duration-200 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-txt hover:text-head"
              onClick={() => setMobileMenuOpen(true)}
            >

            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="transition-color ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-head">
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div class="h-px bg-ln border-0 dark:bg-ln"> </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-ft px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Welcome</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="transition-color ease-in-out duration-200 -m-2.5 rounded-md p-2.5 text-op hover:text-head"
                onClick={() => setMobileMenuOpen(false)}
              >

              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-bg">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="transition-color ease-in-out duration-200 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-op hover:bg-bg hover:text-head"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
        
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-left">
            <p className="mt-6 text-lg leading-8 text-bk">
              Hi nice to meet you, my name is
            </p>
            <h1 className="text-7xl font-bold tracking-tight text-head sm:text-7xl">
              Shannon Jones
            </h1>
            <p className="mt-6 text-lg leading-8 text-txt">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>

          </div>

          <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>

          <div className="sm:flex sm:justify-left flex mt-4 space-x-5">
            <a href="#" class="transition-color ease-in-out duration-200 text-head dark:hover:text-bk">
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

            <a href="#" class="transition-color ease-in-out duration-200 text-head dark:hover:text-bk ">
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

            <div className="transition-color ease-in-out duration-200 relative rounded-full px-3 py-1 text-sm leading-6 text-txt hover:text-gray-400 ring-1 ring-op hover:ring-bk">
              {' '}
              <a href="/contact" className="transition-color ease-in-out duration-200 font-semibold text-head hover:text-bk">
                <span className="absolute inset-0" aria-hidden="true" />
                Contact me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <footer class="bg-white dark:bg-ft">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-center">

            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-bold text-head uppercase dark:text-head">Resources</h2>
                <ul class="text-op dark:op font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="transition-color ease-in-out duration-200 hover:text-head">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="transition-color ease-in-out duration-200 hover:text-head">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-bold text-head uppercase dark:text-head">Follow us</h2>
                <ul class="text-op dark:op font-medium">
                <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="transition-color ease-in-out duration-200 hover:text-head">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" class="transition-color ease-in-out duration-200 hover:text-head">Discord</a>
                </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-bold text-head uppercase dark:text-head">Legal</h2>
                      <ul class="text-op dark:text-op font-medium">
                          <li class="mb-4">
                              <a href="#" class="transition-color ease-in-out duration-200 hover:text-head">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" class="transition-color ease-in-out duration-200 hover:text-head">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr class="my-6 border-ln sm:mx-auto dark:border-ln lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
          
              <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                  <a href="#" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
                      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                      <span class="sr-only">Facebook page</span>
                  </a>

                  <a href="#" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
                      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                      <span class="sr-only">Discord community</span>
                  </a>

              <a href="#" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                  <path  d="M9.358 2.145a8.209 8.209 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 0 0-.51-.053a1.258 1.258 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.354 3.354 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.34 2.34 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a4.798 4.798 0 0 1-.27-.402l-.057-.093a9.216 9.216 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7.2 7.2 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.563c0-.315-.014-.604-.103-.873c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002a.671.671 0 0 0-.075-.015a1.261 1.261 0 0 0-.158-.013a2.172 2.172 0 0 0-.51.053c-.391.084-.93.283-1.636.716Z"/>
                </svg>

                <span class="sr-only">Github page</span>
              </a>
                  
              <a href="#" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
                <span class="sr-only">Linkedin page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}