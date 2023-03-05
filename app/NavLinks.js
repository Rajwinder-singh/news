'use client'

import { usePathname } from 'next/navigation';
import { categories } from '../constants';
import NavLink from './NavLink';

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 max-w-6xl mx-auto border-b'>
        {
            categories.map((category) => {
                return <NavLink key={category} category={category} isActive={isActive(category)}/>
            })
        }
    </nav>
  )
}

export default NavLinks;