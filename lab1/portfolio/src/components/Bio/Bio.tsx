const Bio = () => {
  return (
    <section className="bg-white py-20 px-6">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">About me</h2>
        </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
        <div>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
             aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
          </p>
          <a
            href="/CV.pdf"
            download="Mohamed-Ahmed.pdf"
            className="bg-gray-900 text-white px-6 py-2 text-sm font-semibold hover:bg-gray-700 transition-all duration-300 rounded inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bio;