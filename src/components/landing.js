import { React, useState } from 'react';
import Projects from './projects';
import Sidebar from './sidebar';

export default function Landing() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="Landing">
        <Projects open={open} setOpen={setOpen} />
        <div className="flex">
          <div className="flex w-180 items-end Title">
            Phil Tran
          </div>
        </div>
        <div className="flex justify-end">
          <div className="Tag">
            <p>#devops #fullstack #infra</p>
          </div>
        </div>
      </div>
      <Sidebar openProjects={setOpen}/>
    </>
  )
}
