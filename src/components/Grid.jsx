import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Engaging Hands-on IoT Workshops',
    description:
      'Comprehensive hands-on IoT workshops designed to cater to tech enthusiasts of all ages and skill levels, providing a stimulating and engaging learning environment.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Immersive Project-Based Training',
    description:
      ' Immersive project-based training that goes beyond theoretical knowledge, empowering individuals with practical IoT skills to tackle real-world challenges and contribute meaningfully in the ever-evolving technology landscape.',
    icon: LockClosedIcon,
  },
  {
    name: ' Customized IoT Workshops for Diverse Needs',
    description:
      'Customized IoT workshops meticulously crafted to align with the specific needs and objectives of schools and organizations, ensuring that participants gain the most relevant and valuable knowledge and skills.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Expert Guidance and Support',
    description:
      'Experienced and passionate IoT instructors dedicated to guiding and supporting participants throughout their learning journey, fostering a supportive and collaborative learning environment that fosters creativity, innovation, and problem-solving abilities.',
    icon: FingerPrintIcon,
  },
]

export default function Grid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What we provide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We foster a passion for technology among tech-inclined individuals through engaging project-based training and hands-on workshops.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
