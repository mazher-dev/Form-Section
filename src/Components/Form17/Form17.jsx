import React from 'react'

const Form17 = () => {
  return (
    <div class=" flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
    <div class="relative py-3 sm:max-w-xs sm:mx-auto">
        <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
            <div class="flex flex-col justify-center items-center h-full select-none">
                <div class="flex flex-col items-center justify-center gap-2 mb-8">
                    <a href="https://amethgalarcio.web.app/" target="_blank">
                        <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" class="w-8" />
                    </a>
                    <p class="m-0 text-[16px] font-semibold dark:text-white">Login to your Account</p>
                    <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                    </span>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <label class="font-semibold text-xs text-gray-400 ">Username</label>
                    <input class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="Username" />

                </div>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-semibold text-xs text-gray-400 ">Password</label>
                <input type="password" class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="••••••••" />

            </div>
            <div className="mt-5">
                <button class="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Form17
