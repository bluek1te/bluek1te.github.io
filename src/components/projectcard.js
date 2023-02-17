import Badge from './badge';

export default function ProjectCard({ project }) {

  const handleClick = (loc) => {
    window.location = loc
  };

  return (
    <li key={project.name} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div onClick={() => {handleClick(project.link)}} className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">{project.name}</h3>
            <h4 className="truncate text-sm font-small text-gray-900">
              {project.role}
            </h4>
          </div>
          <div className="space-y-4 space-x-2">
          {project.tags.map((tag) => (
            <Badge key={tag} badgeType={tag} />
          ))}
          </div>
        </div>
      </div>
    </li>
  )
}
