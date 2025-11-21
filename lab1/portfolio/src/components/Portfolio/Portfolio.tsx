import CardData from "./CardsData";

const Portfolio = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-serif text-gray-900 font-bold">
            My Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
          {CardData.map((card, i) => (
            <div key={i} className={`rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer 
                ${card.colorClass} h-48 md:h-64 flex flex-col justify-center items-center text-center p-6`} >
              <h3 className="text-white text-lg md:text-2xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white/90 text-xs md:text-sm mb-4">
                {card.description}
              </p>

              <button
                onClick={() => window.open(card.link, "_blank")}
                className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">
                View on GitHub
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio