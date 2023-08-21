import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../App.css';
import '../App.js';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Contact', href: '/contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-bg">
      <header className="absolute inset-x-0 top-0 z-50 fade">

        <nav className="relative flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="transition-color ease-in-out duration-200 text-txt hover:text-head">
              <span className="sr-only">Purriin</span>
              <svg class="w-12 h-12" aria-hidden="true" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M 121 1966 L 123 1041 L 472 578 C 664 323 828 108 837 100 C 851 87 852 124 846 465 C 843 674 838 1070 835 1345 C 824 2420 821 2465 763 2572 C 690 2707 493 2818 247 2865 C 202 2874 155 2883 142 2886 L 119 2891 L 121 1966 Z M 428.475 2265.098 C 617.475 2220.098 240.543 2333.784 339.543 2235.784 C 423.543 2151.784 893.789 2290.67 790 2380 C 375.878 2736.431 -435.498 2011.497 747.46 423.694 C 828.713 314.634 829.273 357.149 698.273 528.149 C 602.273 653.149 533.782 1264.92 459.782 1364.92 L 442.035 1049.042 L 420.824 1949.084 C 420.824 2442.084 439.993 2278.141 443.993 2281.141 C 454.993 2292.141 346.475 2285.098 428.475 2265.098 Z"/>
                  <path d="M 1090 1488 L 1091 85 L 1113 115 C 1125 131 1289 344 1477 587 L 1820 1028 L 1892 1034 C 1932 1037 2037 1042 2125 1045 C 2214 1048 2313 1057 2349 1065 C 2454 1090 2545 1144 2641 1240 C 2801 1398 2886 1601 2835 1701 C 2820 1729 2747 1790 2728 1790 C 2723 1790 2693 1808 2661 1829 C 2565 1895 2516 1962 2491 2065 C 2472 2142 2412 2246 2361 2292 C 2311 2337 2183 2401 2107 2419 C 2010 2442 2001 2457 1969 2635 C 1943 2782 1921 2856 1900 2875 C 1884 2890 1877 2885 1805 2806 C 1733 2727 1577 2537 1537 2480 L 1520 2455 L 1429 2545 C 1379 2595 1286 2692 1223 2763 C 1159 2833 1103 2890 1099 2890 C 1094 2890 1090 2261 1090 1488 Z M 1814.684 2594.029 C 1825.684 2573.029 1879.164 2572.693 1879.164 2542.693 C 1879.164 2497.693 1852.568 1864.484 1878.568 1840.484 C 1894.568 1825.484 2133.869 1750.144 2168.869 1740.144 C 2379.869 1678.144 2059.208 2055.534 2118.208 1860.534 C 2154.208 1742.534 2565 1858 2691 1784 C 2787 1727 2560.665 1903.914 2568.665 1849.914 C 2586.665 1729.914 2625.439 1839.403 2462.767 1871.914 C 2413.378 1881.785 2595.724 2045.754 2271.724 2034.754 C 2173.724 2031.754 1188.062 2635.799 1176.062 2630.799 C 1154.062 2622.799 1122.824 1028.894 1109.975 758.976 C 1097.15 489.568 1329.849 557.083 1140.849 315.083 C 1077.849 235.083 1296.937 436.641 1290.937 439.641 C 1282.937 444.641 1252.961 572.471 1257.961 1492.471 C 1261.961 2213.471 1124 2817 1126 2819 C 1128 2821 1127.048 2542.946 1197.048 2469.946 C 1362.048 2297.946 1380.385 2457.722 1403.385 2451.722 C 1422.385 2446.722 1911.709 1715.911 2060.709 1897.911 C 2148.709 2005.911 1870 2840 1882 2840 C 1886 2840 1808.684 2605.029 1814.684 2594.029 Z"/>
                </g>
              </svg>
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
                <svg class="transition-color ease-in-out duration-200 text-op hover:text-head w-12 h-12" aria-hidden="true" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M 121 1966 L 123 1041 L 472 578 C 664 323 828 108 837 100 C 851 87 852 124 846 465 C 843 674 838 1070 835 1345 C 824 2420 821 2465 763 2572 C 690 2707 493 2818 247 2865 C 202 2874 155 2883 142 2886 L 119 2891 L 121 1966 Z M 428.475 2265.098 C 617.475 2220.098 240.543 2333.784 339.543 2235.784 C 423.543 2151.784 893.789 2290.67 790 2380 C 375.878 2736.431 -435.498 2011.497 747.46 423.694 C 828.713 314.634 829.273 357.149 698.273 528.149 C 602.273 653.149 533.782 1264.92 459.782 1364.92 L 442.035 1049.042 L 420.824 1949.084 C 420.824 2442.084 439.993 2278.141 443.993 2281.141 C 454.993 2292.141 346.475 2285.098 428.475 2265.098 Z"/>
                    <path d="M 1090 1488 L 1091 85 L 1113 115 C 1125 131 1289 344 1477 587 L 1820 1028 L 1892 1034 C 1932 1037 2037 1042 2125 1045 C 2214 1048 2313 1057 2349 1065 C 2454 1090 2545 1144 2641 1240 C 2801 1398 2886 1601 2835 1701 C 2820 1729 2747 1790 2728 1790 C 2723 1790 2693 1808 2661 1829 C 2565 1895 2516 1962 2491 2065 C 2472 2142 2412 2246 2361 2292 C 2311 2337 2183 2401 2107 2419 C 2010 2442 2001 2457 1969 2635 C 1943 2782 1921 2856 1900 2875 C 1884 2890 1877 2885 1805 2806 C 1733 2727 1577 2537 1537 2480 L 1520 2455 L 1429 2545 C 1379 2595 1286 2692 1223 2763 C 1159 2833 1103 2890 1099 2890 C 1094 2890 1090 2261 1090 1488 Z M 1814.684 2594.029 C 1825.684 2573.029 1879.164 2572.693 1879.164 2542.693 C 1879.164 2497.693 1852.568 1864.484 1878.568 1840.484 C 1894.568 1825.484 2133.869 1750.144 2168.869 1740.144 C 2379.869 1678.144 2059.208 2055.534 2118.208 1860.534 C 2154.208 1742.534 2565 1858 2691 1784 C 2787 1727 2560.665 1903.914 2568.665 1849.914 C 2586.665 1729.914 2625.439 1839.403 2462.767 1871.914 C 2413.378 1881.785 2595.724 2045.754 2271.724 2034.754 C 2173.724 2031.754 1188.062 2635.799 1176.062 2630.799 C 1154.062 2622.799 1122.824 1028.894 1109.975 758.976 C 1097.15 489.568 1329.849 557.083 1140.849 315.083 C 1077.849 235.083 1296.937 436.641 1290.937 439.641 C 1282.937 444.641 1252.961 572.471 1257.961 1492.471 C 1261.961 2213.471 1124 2817 1126 2819 C 1128 2821 1127.048 2542.946 1197.048 2469.946 C 1362.048 2297.946 1380.385 2457.722 1403.385 2451.722 C 1422.385 2446.722 1911.709 1715.911 2060.709 1897.911 C 2148.709 2005.911 1870 2840 1882 2840 C 1886 2840 1808.684 2605.029 1814.684 2594.029 Z"/>
                  </g>
                </svg>
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
            <p className="mt-6 text-lg leading-8 text-bk fade_left">
              Hi nice to meet you, my name is
            </p>
            <h1 class="text-7xl font-bold tracking-tight text-head sm:text-7xl fade_left">
              Shannon Jones
            </h1>
            <p className="mt-6 text-lg leading-8 text-txt fade_left">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>

          </div>

          <div class="h-px my-8 bg-ln border-0 dark:bg-ln"> </div>

          <div className="sm:flex sm:justify-left flex mt-4 space-x-5">
            <a href="https://www.github.com/purriin/" target="_blank" rel="noreferrer" class="transition-color ease-in-out duration-200 text-head dark:hover:text-bk">
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

            <a href="https://www.linkedin.com/in/purriin/" target="_blank" rel="noreferrer" class="transition-color ease-in-out duration-200 text-head dark:hover:text-bk">
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

            <a href="mailto: shan.jones@mail.utoronto.ca" target="_blank" rel="noreferrer" class="transition-color ease-in-out duration-200 text-head dark:hover:text-bk">
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

            <div className="transition-color ease-in-out duration-200 relative rounded-full px-3 py-1 text-sm leading-6 text-txt hover:text-gray-400 ring-1 ring-op hover:ring-bk fade_left">
              {' '}
              <a href="/contact" className="align-middle transition-color ease-in-out duration-200 font-semibold text-head hover:text-bk">
                <span className="absolute inset-0" aria-hidden="true" />
                Contact me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-white dark:bg-ft">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 fade">
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
                    <a href="https://discord.gg/4eeurUVvTy" class="transition-color ease-in-out duration-200 hover:text-head">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="transition-color ease-in-out duration-200 hover:text-head">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr class="my-6 border-ln sm:mx-auto dark:border-ln lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
          
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.github.com/purriin/" target="_blank" rel="noreferrer" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                  <path  d="M9.358 2.145a8.209 8.209 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 0 0-.51-.053a1.258 1.258 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.354 3.354 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.34 2.34 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a4.798 4.798 0 0 1-.27-.402l-.057-.093a9.216 9.216 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7.2 7.2 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.563c0-.315-.014-.604-.103-.873c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002a.671.671 0 0 0-.075-.015a1.261 1.261 0 0 0-.158-.013a2.172 2.172 0 0 0-.51.053c-.391.084-.93.283-1.636.716Z"/>
                </svg>
                <span class="sr-only">Github page</span>
              </a>
                  
              <a href="https://www.linkedin.com/in/purriin/" target="_blank" rel="noreferrer" class="transition-color ease-in-out duration-200 text-ic hover:text-head dark:hover:text-head">
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