const Stats = () => {
  const stats = [
    {
      number: "30+",
      label: "Let praxe",
      description: "Více než tři dekády zkušeností v oboru",
    },
    {
      number: "3000+",
      label: "Spokojených zákazníků",
      description: "Tisíce úspěšně dokončených zakázek",
    },
    {
      number: "100%",
      label: "Spolehlivost",
      description: "Vždy dodržuji termíny a sliby",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-primary-foreground/90 mb-2">
                {stat.label}
              </div>
              <p className="text-primary-foreground/60 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
