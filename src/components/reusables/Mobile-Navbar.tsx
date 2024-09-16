import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex flex-row justify-between px-8 pt-10">
    <h1>Book <span className='text-yellow-400 font-black'>Pub</span></h1>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle menu"
        className="p-2 right-0"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
      
      {isOpen && (
        <nav className="absolute right-5 mt-10 w-48 bg-white rounded-md shadow-lg py-1 z-10 visible lg:hidden">
          <ul className="space-y-1">
            {['Home', 'About','Authors', 'Services', 'Contacts'].map((item) => (
              <li key={item}>
                <a
                  href={item.toLowerCase() === 'home' ? '/' : '' || `${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}