function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold tracking-wider hover:text-blue-200 transition-all duration-300">
          فروشگاه انتخاب
        </div>
        <nav>
          <ul className="flex space-x-12 items-center">
            {["صفحه اصلی", "محصولات", "سبد خرید"].map((item, index) => (
              <li key={index}>
                <a
                  href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  className="text-2xl font-medium hover:text-blue-200 transition-all duration-300 
                    relative after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:bg-blue-200 after:left-0 after:-bottom-2 hover:after:w-full 
                    after:transition-all after:duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
