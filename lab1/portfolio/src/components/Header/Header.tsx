import './Header.css'

const Header = () => {
  return (
    <header className="w-full flex">
      <section className="max-w-2xl w-full px-4 grid grid-cols-1 gap-8">
        <div className="text-center order-2">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Mohamed Ahmed Hassan
          </h1>
          <h2 className="text-xl text-gray-200 mb-8 drop-shadow-md">
            Web Developer & Translator
          </h2>
          
          <a
            href="mailto:m.ahmed141@hotmail.com"
            className="inline-block border border-white bg-white/70 text-sky-800 px-8 
            py-3 hover:bg-white hover:text-blue-900 uppercase text-sm rounded z-10">
            Contact Me
          </a>
        </div>
        <div className="order-1 flex">
        </div>
      </section>
    </header>
  )
}

export default Header
