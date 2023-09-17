import React from 'react';
import Header from "../navigation/header.js"
import Footer from "../navigation/footer.js"

const Skills = () => {
  return (
    <div className="bg-bg">
      <Header />

        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-36">

                <div className="text-left">
                    <h1 class="text-6xl font-bold tracking-tight text-head fade_left title">
                    Skills
                    </h1>

                    <div class="h-px my-4 bg-ln border-0 dark:bg-ln"> </div>
                    
                </div>
                
                <h2 class="text-4xl mt-10 font-bold tracking-tight text-txt fade heading">
                    Languages
                </h2>

                <div class="mt-10 grid grid-cols-3 gap-10 justify-center items-center text-txt fade">

                    {/* C: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M7.586.102a.75.75 0 0 1 .756 0l6.214 3.625a.75.75 0 0 1 .373.648v7.25a.75.75 0 0 1-.373.648l-6.214 3.625a.75.75 0 0 1-.756 0l-6.214-3.625A.75.75 0 0 1 1 11.625v-7.25a.75.75 0 0 1 .372-.648L7.586.102Zm.378 14.28l5.465-3.188V4.806L7.964 1.618L2.5 4.806v6.388l5.464 3.188Z"/>
                            <path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 1 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 8 5.5Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">C</p>
                    </div>

                    {/* C++: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M7 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 0 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 7 5.5Zm7 .5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1A.5.5 0 0 1 14 6Z"/>
                            <path fill="currentColor" d="M11.5 6a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5Z"/>
                            <path fill="currentColor" d="M6.586.102a.75.75 0 0 1 .756 0l4.715 2.75a.75.75 0 0 1-.756 1.296l-4.337-2.53L1.5 4.806v6.388l5.464 3.188l4.337-2.53a.75.75 0 1 1 .755 1.296l-4.714 2.75a.75.75 0 0 1-.756 0L.372 12.273A.75.75 0 0 1 0 11.625v-7.25a.75.75 0 0 1 .372-.648L6.586.102Z"/>
                        </svg>
                        <p className="text-currentColor font-semibold mt-5 justify-center">C++</p>
                    </div>

                    {/* HTML: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M3 1.5a.25.25 0 0 0-.25.25v9.55c0 .09.048.172.125.217l4.859 2.802a.25.25 0 0 0 .245.003l5.141-2.817a.25.25 0 0 0 .13-.22V1.75A.25.25 0 0 0 13 1.5H3Zm-1.75.25C1.25.784 2.034 0 3 0h10c.966 0 1.75.784 1.75 1.75v9.536a1.75 1.75 0 0 1-.909 1.534L8.7 15.637a1.75 1.75 0 0 1-1.716-.018l-4.858-2.803A1.75 1.75 0 0 1 1.25 11.3V1.75ZM5 4.25a.75.75 0 0 1 .75-.75h4.615a.75.75 0 0 1 0 1.5H6.5v1.712h3.865a.75.75 0 0 1 .75.75v2.884a.75.75 0 0 1-.414.671l-2.308 1.154a.75.75 0 0 1-.67 0l-2.308-1.154a.75.75 0 0 1-.415-.67v-.578a.75.75 0 0 1 1.5 0v.114l1.558.779l1.557-.78v-1.67H5.75a.75.75 0 0 1-.75-.75V4.25Z"/>
                        </svg>
                        <p className="text-currentColor font-semibold mt-5 justify-center">HTML</p>
                    </div>

                    {/* CSS: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M3 1.6a.25.25 0 0 0-.25.25v9.55c0 .09.048.172.125.217l4.859 2.802a.25.25 0 0 0 .245.003l5.141-2.817a.25.25 0 0 0 .13-.22V1.85A.25.25 0 0 0 13 1.6H3Zm-1.75.25C1.25.884 2.034.1 3 .1h10c.966 0 1.75.784 1.75 1.75v9.536a1.75 1.75 0 0 1-.909 1.534L8.7 15.738a1.75 1.75 0 0 1-1.716-.02l-4.858-2.802A1.75 1.75 0 0 1 1.25 11.4V1.85ZM5 4.35a.75.75 0 0 1 .75-.75h4.615a.75.75 0 0 1 .75.75v6.096a.75.75 0 0 1-.414.671l-2.308 1.154a.75.75 0 0 1-.67 0l-2.308-1.154a.75.75 0 0 1-.415-.67v-.578a.75.75 0 1 1 1.5 0v.114l1.558.778l1.557-.778V8.312H7a.75.75 0 1 1 0-1.5h2.615V5.1H5.75A.75.75 0 0 1 5 4.35Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">CSS</p>
                    </div>

                    {/* Assembly: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="m0 388.7l72.881-3.903v34.1L0 414.325v-25.624zM460.02 94.17l-72.88-3.904l-.001 34.1l72.881-4.572V94.17zm-80.905-17.832h-39.392v61.956h39.392V76.337zM0 316.147l72.881 4.573v-34.1L0 290.523v25.625zm460.02-123.8l-72.881-3.904v34.1l72.881-4.572v-25.625zM81.573 432.824h43.946V370.87H81.573v61.956zm0-294.532h43.946V76.337H81.574v61.956zm0 98.177h43.946v-61.955H81.573v61.955zM0 119.793l72.881 4.572v-34.1L.001 94.168v25.625zm0 98.177l72.881 4.573v-34.1l-72.88 3.903v25.624zm81.573 116.678h43.946v-61.956H81.573v61.956zm381.934-56c-19.52-25.619-46.358-29.584-61.607-29.584c-54.898 0-101.256 41.479-101.256 109.186c0 57.032 36.598 110.405 100.646 110.405c14.944 0 40.868-3.355 62.217-28.059v21.654H512V254.554h-48.493v24.094zM408 292.982c30.804 0 58.863 21.655 58.863 67.098c0 43.308-28.364 65.572-58.863 65.572c-35.073 0-57.642-30.499-57.642-66.182c0-36.904 22.569-66.793 57.642-66.488zm-28.884-68.932v-49.535h-39.392v63.134a144.334 144.334 0 0 1 39.392-13.599zm-48.13 19.08V62.916c0-10.808-8.761-19.57-19.57-19.57H152.592c-10.808 0-19.57 8.762-19.57 19.57v386.17c0 10.808 8.762 19.57 19.57 19.57h166.613c-63.524-56.26-64.58-173.069 11.781-225.524z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">ARM Assembly</p>
                    </div>

                    {/* Verilog: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M19.316 346.604V169.833c0-12.03 9.752-21.781 21.781-21.781h429.806c12.03 0 21.78 9.752 21.78 21.781v176.77c0 12.03-9.751 21.782-21.78 21.782H41.097c-12.03 0-21.78-9.752-21.78-21.781zM468.06 192c0-10.686-8.662-19.349-19.349-19.349c-10.686 0-19.348 8.663-19.348 19.35c0 10.685 8.662 19.348 19.348 19.348c10.686 0 19.35-8.663 19.35-19.349zm-12.096-52.298V90.791h-68.957v48.911h68.957zM387.007 378.11v43.843h68.957V378.11h-68.957zm53.455-296.994L436.118 0h-28.52l-5.09 81.116h37.954zM402.51 430.884L407.597 512h28.52l4.345-81.116H402.51zm-55.816-291.182V90.791h-68.957v48.911h68.957zM277.736 378.11v43.843h68.957V378.11h-68.957zm53.455-296.994L326.847 0h-28.52l-5.09 81.116h37.954zm-37.953 349.768L298.326 512h28.52l4.345-81.116h-37.953zm-55.816-291.182V90.791h-68.957v48.91l68.957.001zM168.465 378.11v43.843h68.957V378.11h-68.957zM221.92 81.116L217.576 0h-28.52l-5.089 81.116h37.953zm-37.953 349.768L189.056 512h28.52l4.344-81.116h-37.953zM128.15 139.702V90.791H59.194v48.91l68.957.001zM59.195 378.11v43.843h68.956V378.11H59.195zM112.65 81.116L108.305 0h-28.52l-5.089 81.116h37.954zM74.696 430.884L79.785 512h28.52l4.344-81.116H74.696z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">Verilog</p>
                    </div>

                    {/* MATLAB: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 transition-all ease-in-out duration-200 hover:text-head" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592zm-324.011-51.563c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546zm40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">MATLAB</p>
                    </div>

                    {/* Java: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M4.453.77a.753.753 0 0 1 1.06-.096c.76.634 1.056 1.383.893 2.121c-.14.63-.577 1.078-.918 1.316c-.214.183-.303.326-.34.416a.32.32 0 0 0-.022.202c.031.142.167.31.323.414a.753.753 0 1 1-.836 1.253c-.346-.23-.813-.69-.957-1.342c-.163-.739.132-1.487.893-2.121l.03-.026l.034-.022c.156-.104.291-.273.323-.415a.32.32 0 0 0-.023-.202c-.038-.092-.132-.244-.364-.437a.753.753 0 0 1-.096-1.06Zm4.67 2.008a.753.753 0 0 1-.097 1.06c-.232.194-.326.345-.364.438a.32.32 0 0 0-.023.202c.032.142.167.31.323.414a.753.753 0 1 1-.835 1.253c-.347-.23-.814-.69-.958-1.342c-.163-.739.132-1.487.893-2.121a.753.753 0 0 1 1.06.096ZM.207 7.595a.753.753 0 0 1 .73-.57h11.558a.75.75 0 0 1 .73.57c.11.435.137.99.078 1.612h1.843c.416 0 .753.338.753.753c0 .74-.045 1.936-.797 2.938c-.74.988-2.03 1.622-4.093 1.69c-.27.338-.566.672-.892.999a.753.753 0 0 1-.533.22H3.85c-.2 0-.391-.08-.532-.22c-1.45-1.45-2.317-3.05-2.78-4.472C.084 9.717 0 8.425.208 7.595Zm9.06 6.707c.281-.3.536-.604.764-.91c.933-1.251 1.438-2.534 1.659-3.586c.105-.503.142-.936.137-1.276H1.606c-.008.526.085 1.263.363 2.12a9.755 9.755 0 0 0 2.198 3.652h5.1Zm2.825-1.338c1.004-.195 1.521-.59 1.806-.97c.28-.373.405-.818.459-1.28h-1.34a10.61 10.61 0 0 1-.925 2.25Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">Java</p>
                    </div>

                    {/* Javascript: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8v-.5Zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5v-4Zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">Javascript</p>
                    </div>

                </div>

                <div class="h-px my-10 bg-ln border-0 dark:bg-ln"> </div>

                <h2 class="text-4xl my-10 font-bold tracking-tight text-txt fade heading">
                    Tools
                </h2>

                <div class="mt-10 grid flex grid-cols-3 gap-20 justify-center items-center align-center text-txt fade">
                    {/* VS Code: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                            <path fill="currentColor" fill-rule="evenodd" d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64L1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68l50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z" clip-rule="evenodd"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">VS Code</p>
                    </div>

                    {/* Netbeans: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"/>
                                <path d="M15.5 9.43a1 1 0 0 1 .5.874v3.268a1 1 0 0 1-.515.874l-3 1.917a1 1 0 0 1-.97 0l-3-1.917A1 1 0 0 1 8 13.573v-3.269a1 1 0 0 1 .514-.874l3-1.786c.311-.173.69-.173 1 0l3 1.787H15.5z"/>
                                <path d="M12 21v-9L4.5 7.5M12 12l7.5-4.5M12 3v4.5m7.5 8.5L16 14m-8 0l-3.5 2"/>
                            </g>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5 justify-center">Netbeans</p>
                    </div>

                    {/* Quartus: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M379.115 236.47h-39.392v-61.956h39.392v61.956zM0 414.325l72.881 4.572v-34.1L0 388.701v25.624zM379.115 76.337h-39.392v61.956h39.392V76.337zM460.02 94.17l-72.88-3.904l-.001 34.1l72.881-4.572V94.17zM0 316.148l72.881 4.572v-34.1L0 290.523v25.625zm460.02-123.802l-72.881-3.903v34.1l72.881-4.572v-25.625zM81.573 334.648h43.946v-61.956H81.573v61.956zM0 217.97l72.881 4.573v-34.1l-72.88 3.903v25.624zm81.573 18.5h43.946v-61.955H81.573v61.955zm249.412 12.205V62.915c0-10.808-8.761-19.57-19.57-19.57H152.592c-10.808 0-19.57 8.762-19.57 19.57v386.17c0 10.808 8.762 19.57 19.57 19.57h66.15c-106.501-68.416-42.315-190.648 112.244-219.98zM81.574 138.293h43.945V76.337H81.574v61.956zm0 294.532h43.945V370.87H81.573v61.956zM0 119.793l72.881 4.572v-34.1L.001 94.168v25.625zm296.788 225.581c4.903 0 6.935 2.416 6.935 6.343v46.084h16.659v-46.17c0-9.374-4.985-19.694-19.62-19.694l-34.454-.034V397.8h16.69v-52.426h13.79zm111.806 13.274h-25.675c-.027-18.113 26.075-19.38 25.675 0zm-11.392-27.862c-17.54 0-30.89 12.28-30.89 33.972c0 25.388 15.29 34.099 31.265 34.099c12.202 0 19.127-3.957 25.727-10.472l-10.307-9.842c-10.72 11.424-30.583 7.117-30.078-8.536h42.334c1.509-24.03-8.952-38.866-28.051-39.22zm-35.117 66.932v-13.903h-6.779c-3.975 0-5.783-2.125-5.783-5.953v-32.488h12.562v-13.471h-12.562v-17.954h-16.662v64.957c0 9.348 5.768 18.812 19.364 18.812h9.86zm-110.626-90.883h-16.803v15.961h16.803v-15.961zm.043 25.068h-16.846l-.018 48.942c0 8.807 4.28 16.44 16.864 17.648v-66.59zm200.271-27.34h-16.817v74.896c0 8.795 4.26 16.415 16.817 17.626v-92.522zm11.429 93.18v-17.744c22.774-13.562 35.526-37.156 31.511-59.786c-12-68.438-143.721-68.72-236.597-20.989v-6.248c92.97-56.598 237.208-51.894 252.449 22.41c8.162 39.808-19.951 72.328-47.363 82.356zm-6.239 12.87V435.2c-31.533 17.308-76.892 28.45-111.547 31.833c-87.59 8.512-144.975-17.12-155.698-62.352c-8.402-35.274 6.192-65.127 33.082-88.707v8.703c-14.937 16.275-26.197 42.476-21.618 67.193c9.356 50.139 76.22 59.452 140.384 53.521c39.435-3.651 86.784-17.74 115.397-34.78z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">Quartus</p>
                    </div>

                    {/* Git: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="currentColor" d="M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 0 0 0 2.75l12.063 12.063a1.955 1.955 0 0 0 2.75 0l12.063-12.063a1.947 1.947 0 0 0 0-2.75L17.374 2.562A1.923 1.923 0 0 0 16 2zm0 2.031L27.969 16L16 27.969L4.031 16l8.282-8.281l1.75 1.75A1.98 1.98 0 0 0 14 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 1 0 4 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0 0 22 18a2 2 0 0 0 1.999-2a1.999 1.999 0 0 0-2.5-1.938L17.937 10.5A1.999 1.999 0 0 0 16 8a1.98 1.98 0 0 0-.53.063l-1.75-1.75z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">Git</p>
                    </div>

                    {/* Node.js: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.088 5.083a2.4 2.4 0 0 1-.956.198Zm2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.232c0 .639.296.837 3.12 1.189c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">Node.js</p>
                    </div>

                    {/* React.js: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M14.448 16.24a21.883 21.883 0 0 1-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884c.863-.498.982-2.225.413-4.484c-.853.19-1.779.334-2.757.424Zm-1.31.087a27.48 27.48 0 0 1-2.275 0c.376.492.758.948 1.137 1.363c.38-.415.761-.871 1.138-1.364Zm5.04-7.894c2.665.764 4.406 2.034 4.406 3.567c0 1.533-1.74 2.803-4.405 3.567c.67 2.69.44 4.832-.887 5.598c-1.327.767-3.297-.105-5.292-2.031c-1.994 1.925-3.964 2.798-5.291 2.031c-1.328-.766-1.557-2.908-.887-5.598c-2.665-.764-4.405-2.034-4.405-3.567c0-1.533 1.74-2.803 4.405-3.567c-.67-2.69-.44-4.832.887-5.599c1.327-.766 3.297.106 5.291 2.032c1.995-1.926 3.965-2.798 5.292-2.032c1.327.767 1.557 2.909.887 5.599Zm-.973-.248c.57-2.26.45-3.986-.413-4.485c-.863-.498-2.418.262-4.09 1.885a21.932 21.932 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425Zm-10.41 7.63c-.569 2.26-.45 3.986.414 4.484c.863.498 2.418-.261 4.09-1.884a21.866 21.866 0 0 1-1.746-2.176a21.883 21.883 0 0 1-2.757-.425Zm4.068-8.142a27.507 27.507 0 0 1 2.275 0A20.537 20.537 0 0 0 12 6.31c-.38.416-.76.872-1.137 1.364Zm-1.31.087a21.865 21.865 0 0 1 1.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485c.853-.19 1.779-.334 2.757-.425Zm4.34 7.52A25.373 25.373 0 0 0 15.788 12a25.363 25.363 0 0 0-1.893-3.28a25.37 25.37 0 0 0-3.787 0A25.368 25.368 0 0 0 8.213 12a25.39 25.39 0 0 0 1.894 3.28a25.398 25.398 0 0 0 3.787 0Zm1.285-.132c.615-.08 1.2-.182 1.75-.303a20.512 20.512 0 0 0-.612-1.667a27.546 27.546 0 0 1-1.137 1.97ZM8.822 8.851c-.615.08-1.2.183-1.75.304c.17.536.375 1.094.613 1.667a27.518 27.518 0 0 1 1.137-1.97Zm-1.75 5.994c.55.121 1.135.223 1.75.303a27.528 27.528 0 0 1-1.137-1.97a20.51 20.51 0 0 0-.613 1.667Zm-.978-.245c.262-.834.6-1.708 1.01-2.6a21.88 21.88 0 0 1-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6ZM16.93 9.155a20.479 20.479 0 0 0-1.75-.304a27.541 27.541 0 0 1 1.137 1.97c.238-.572.442-1.13.613-1.666Zm.977.245c-.26.834-.6 1.708-1.01 2.6c.41.892.75 1.766 1.01 2.6c2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6ZM12 13.879a1.88 1.88 0 1 1 0-3.758a1.88 1.88 0 0 1 0 3.758Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">React.js</p>
                    </div>

                    {/* Tailwind CSS: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                            <path fill="currentColor" d="M7.5 2.5c-1.026 0-1.908.277-2.6.87c-.688.59-1.137 1.447-1.387 2.516a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156c-.582-.359-1.305-.6-2.264-.6ZM4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">Tailwind CSS</p>
                    </div>

                    {/* GTK: */}
                    <div class="transition-all ease-in-out duration-200 hover:text-head hover:-translate-y-1 grid grid-cols-2 flex justify-center">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.01 23.773V14.45l-7.584 2.245Zm0-13.87L.91 3.828l.502 12.526l7.597-2.249ZM9.57 24l12.353-5.146l-8.285-5.775l-4.068 1.204ZM23.09 5.815l-9.257 2.849v4.148l8.237 5.741ZM9.57 9.975v3.964l3.932-1.164v-4.01Zm-.228-.52l4.16-1.28V0L1.231 3.37ZM22.715 5.34L13.833.052v8.021Z"/>
                        </svg>

                        <p className="text-currentColor font-semibold mt-5">GTK</p>
                    </div>
                
                </div>

                <div class="h-px my-20 bg-ln border-0 dark:bg-ln"> </div>


            </div>
        </div>
      
      <Footer />
    </div>
  )
};
  
export default Skills;