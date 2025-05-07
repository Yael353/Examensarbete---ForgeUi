function BodySection() {
  return (
    <div>
      <div className="w-full py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text sektion */}
          <div className="flex flex-col justify-center">
            <h2 className="text-7xl font-bold mb-4">Utforska vår UI-lösning</h2>
            <p className="text-2xl text-slate-300 mb-6">
              Här hittar du de bästa verktygen och komponenterna för att skapa
              dynamiska och responsiva användargränssnitt. Låt oss hjälpa dig
              att förverkliga dina idéer.
            </p>
            <a href="/components" className="inline-block">
              <button className="w-full md:w-auto py-2 px-6 bg-[#FFD700] text-black rounded-lg shadow hover:ring-2 hover:ring-[#FFD700] transition duration-300">
                Utforska komponenter
              </button>
            </a>
          </div>

          {/* Exempelbilder sektion */}
          <div className="grid grid-cols-2 gap-4">
            {/* <img
              src="/path/to/example1.jpg"
              alt="Exempel 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="/path/to/example2.jpg"
              alt="Exempel 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            /> */}
            {/* Lägg till fler bilder vid behov */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default BodySection;
