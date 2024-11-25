import { Navbar, NavbarLink } from "flowbite-react"

const Header = () => {
    return (
        <header class="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div class="container">
          <div class="relative flex items-center justify-between">
            <div class="px-4">
              <a href="#home" class="block py-6 text-lg font-bold text-primary">Muzakki Portfolio</a>
            </div>
            <div class="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" class="absolute right-4 block lg:hidden">
                <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span class="hamburger-line transition duration-300 ease-in-out"></span>
                <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
  
              <nav
                id="nav-menu"
                class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul class="block lg:flex">
                  <li class="group">
                    <a href="#home" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Beranda</a>
                  </li>
                  <li class="group">
                    <a href="#about" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Tentang Saya</a>
                  </li>
                  <li class="group">
                    <a href="#portfolio" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                  </li>
                  <li class="group">
                    <a href="#clients" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Clients</a>
                  </li>
                  <li class="group">
                    <a href="#blog" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Blog</a>
                  </li>
                  <li class="group">
                    <a href="#contact" class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header