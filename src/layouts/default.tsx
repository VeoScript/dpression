import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-uranus-dark text-white">
      { children }
    </div>
  )
}

export default Layout
