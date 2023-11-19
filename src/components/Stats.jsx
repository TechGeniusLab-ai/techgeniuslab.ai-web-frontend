import React from 'react'


const stats = [
    { id: 1, name: 'Total Schools Onboarded', value: '25+' },
    { id: 2, name: 'Total Students Registered', value: '500+' },
    { id: 3, name: 'Total Workshops', value: '15' },
  ]
const Stats = () => {
  return (
   
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Check Out Our Stats</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 py-1">
          We foster a passion for technology among tech-inclined individuals through engaging project-based training and hands-on workshops.
          </p>
          <br/>
        </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
      
      
  )
}

export default Stats