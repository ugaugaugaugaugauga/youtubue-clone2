import Logo from './logo'
import MobileSearchBar from './mobile-search-bar'
import SearchBar from '@/components/nav/search-bar'
import Settings from './settings'
import Menu from './side-menu'
import UserMenu from './user-menu'
import DesktopSearchBar from './desktop-search-bar'

const Navbar = () => {
  return (
    <nav className='fixed w-full flex justify-between items-center py-3 px-4 h-14'>
      <Menu />
      <Logo />
      <DesktopSearchBar />

      <MobileSearchBar />
      <Settings />
      <UserMenu />
    </nav>
  )
}

export default Navbar
