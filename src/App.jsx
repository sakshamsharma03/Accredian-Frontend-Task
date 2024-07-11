// import { useState } from 'react'
// import './index.css';
// import Header from './components/header'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <div className='text-red-400'>

//       </div>
//     </>
//   )
// }

// export default App
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Form from "./pages/form";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const navigation = [
  { name: "Resources", href: "#" },
  { name: "About us", href: "#" },
];

function App(){
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  
  return (
    <Router>
      <div className="bg-white">
        <header className="fixed inset-x-0 top-0 z-50 shadow-lg bg-white">
          <div className="flex items-center justify-between bg-blue-200 h-16 md:h-20 px-4 md:px-8">
            <h1 className="font-semibold text-base md:text-xl text-center md:text-left">
              Navigate your ideal career path with tailored expert advice
            </h1>
          </div>
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-4 md:p-6 lg:px-8"
          >
            <div className="flex flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Accredian</span>
                <img
                  alt="Accredian logo"
                  src="src/assets/Accredian_logo.png"
                  className="h-8 md:h-12 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Accredian</span>
                  <img
                    alt="Accredian logo"
                    src="src/assets/Accredian_logo.png"
                    className="h-9 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center flex flex-col gap-7">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Unlock Dream Career with Top Universities
              </h1>
              <img
                className="w-full max-w-xs mx-auto"
                src="src/assets/Accredian_botton_line.png"
                alt="Accredian bottom line"
              />
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Welcome to Accredian, your gateway to premier online programs
                from India's top universities, tailored for career success.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <a href={<Form/>} className="rounded-md cursor-pointer bg-indigo-500 px-8 py-2 text-base sm:text-lg md:text-2xl font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Refer Now
            </a> */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="rounded-md cursor-pointer bg-indigo-500 px-8 py-2 text-base sm:text-lg md:text-2xl font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Refer Now
            </button>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <DialogPanel className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute top-3 right-3 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close form</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <Form />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
       {/* <Form /> */}
      {/* <Routes>
        <Route path="/form" element={<Form/>} />
      </Routes> */}
      </Router>
  );
}


export default App;