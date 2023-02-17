import { 
  ImSphere,
  ImGithub,
  ImLinkedin,
  ImInstagram
} from 'react-icons/im';

const navigation = new Map ([
  ['projects', { name: './projects', href: '#', icon: ImSphere, current: false }],
  ['github', { name: './github', href: 'https://github.com/bluek1te', icon: ImGithub, current: false }],
  ['linkedin', { name: './linkedin', href: 'https://www.linkedin.com/in/phil-tr/', icon: ImLinkedin, current: false }],
  ['instagram', { name: './instagram', href: 'https://www.instagram.com/bluek1te/', icon: ImInstagram, current: false }],
])

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({openProjects}) {

  navigation.get('projects').onClick = () => openProjects(true)
  return (
    <>
      <div>
        <div className="md:flex md:w-48 md:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto border border-gray-200 Sidebar-Panel">
            <div className="flex flex-shrink-0 items-center px-4">
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {Array.from(navigation.entries()).map(([key, value]) => (
                  <a
                    key={key}
                    href={value.href}
                    onClick={value.onClick}
                    className={classNames(
                      value.current ? 'bg-white-100 text-white-900' : 'text-white hover:bg-white hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
              
                    <value.icon
                      className={classNames(
                        value.current ? 'text-white-500' : 'text-white group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {value.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}