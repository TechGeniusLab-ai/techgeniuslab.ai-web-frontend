/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PencilIcon } from '@heroicons/react/20/solid'
import { CalendarDaysIcon, HandRaisedIcon, LinkIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">TechGeniusLabs.ai</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Building a Foundation for Technology Success: Early Exposure Workshops to Equip Students with the Essential Skills and Knowledge for Success in the Technology-Driven World.
            </p>
        
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <PencilIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Workshops</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/" >School Workshops</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Workshop Schedule</a></dt>              
              <dt className="mt-4 font-semibold text-white"><a href="/" >Free Courses</a></dt>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Home</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/" >About Us</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Services</a></dt>              
              <dt className="mt-4 font-semibold text-white"><a href="/" >Contact Us</a></dt>
            </div>
        </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
