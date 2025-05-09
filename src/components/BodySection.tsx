function BodySection() {
  return (
    <div className="w-full pt-20 sm:pt-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text sektion */}
        <div className="flex flex-col justify-center">
          <h2 className="text-7xl font-bold mb-4 text-foreground font-cinzel">
            Utforska vår UI-lösning
          </h2>
          <p className="text-2xl text-foreground font-semibold font-cinzel mb-6">
            Här hittar du de bästa verktygen och komponenterna för att skapa
            dynamiska och responsiva användargränssnitt. Låt oss hjälpa dig att
            förverkliga dina idéer.
          </p>
          <a href="/components" className="inline-block">
            <button className="text-2xl font-semibold font-cinzel p-4 bg-gold text-foreground rounded-lg shadow hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300">
              Utforska komponenter
            </button>
          </a>
        </div>

        {/* Exempelbilder sektion */}
        <div className="grid grid-cols-2 gap-4">
          {/* Här kan du lägga in bilder eller placeholders */}
        </div>
      </div>
    </div>
  );
}

export default BodySection;
