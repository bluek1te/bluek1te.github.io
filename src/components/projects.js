import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ProjectCard from './projectcard';
import { IoClose } from 'react-icons/io5'

const projects = [
  {
    name: 'Amazon Echo',
    role: 'Contributor',
    imageUrl: '',
    tags: ["c++", "private"],
    link: 'https://www.amazon.com/echo-show-10/dp/B07VHZ41L8',
  },
  {
    name: 'Apache Airflow',
    role: 'Contributor',
    imageUrl: '',
    tags: ["python", "open source"],
    link: 'https://github.com/apache/airflow',
  },
  {
    name: 'Argo CD',
    role: 'Contributor',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ["go", "open source", "k8s"],
    link: 'https://github.com/argoproj/argo-cd',
  },
  {
    name: 'Magerage',
    role: 'Maintainer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ["unity", "private"],
  },
  {
    name: 'MXF-504 Firmware',
    role: 'Maintainer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ["c", "private", "defense"],
    link: 'https://www.baesystems.com/en-us/article/u-s--air-force-selects-bae-systems--high-frequency-technology-for-radio-modernization-effort',
  },
  {
    name: 'Paddle',
    role: 'Contributor',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ["fastapi", "mongodb", "hackathon"],
    link: 'https://devpost.com/software/paddle',
  },
  {
    name: 'SmartSDR',
    role: 'Maintainer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ["c", "private"],
    link: 'https://devpost.com/software/paddle',
  },
]


export default function Projects({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-8 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-8 md:p-18">
                <div className="flex absolute top-0 right-0 h-8 w-8 justify-items-end pt-4">
                  <IoClose className="justify-self-end" onClick={() => setOpen(false)}/>
                </div>
                <>
                
                  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                      <ProjectCard key={project.name} project={project}/>
                    ))}
                  </ul>
                </>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}