const Header = () => {
    return (        
    <header className="flex items-center justify-between bg-red-600 p-4">
        <div className="flex items-center">
        <svg
        className="h-8 w-8 text-indigo-600 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-10m0 0v10m0 0c-1 1-1 2-1 2m0 0"
        />
        </svg>
        <span className="text-xl font-bold text-white">Users List</span>
        </div>
            <nav className="flex items-center justify-center space-x-6 w-full">
            <a href="#" className="text-white hover:text-yellow-300">Home</a>
            <a href="#" className="text-white hover:text-yellow-300">About</a>
            <a href="#" className="text-white hover:text-yellow-300">Contact</a>
            </nav>
    </header>
    ) 
}

export default Header