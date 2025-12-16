export default function Experience() {
  const experiences: never[] = [];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Experience & <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey, projects, and certifications
            </p>
          </div>

          <div className="relative">
            {experiences.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Experience timeline coming soon...
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
