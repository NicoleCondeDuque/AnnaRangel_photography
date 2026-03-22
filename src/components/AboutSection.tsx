const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-[0.1em] uppercase mb-8">The Artist</h2>
          <div className="space-y-5 font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
          <p>
  Hi, I’m Anna a family and children photographer based in Calgary.
</p>

<p>
  I’m drawn to the kind of moments you don’t plan — the giggles, the little hands,
  the way your child looks at you when no one is watching. Those are the memories
  that matter, and the ones I love to capture the most.
</p>

<p>
  My sessions are simple, relaxed, and full of life. I’ll guide you when needed,
  but I’ll also give you space to just be together, so your photos feel natural,
  emotional, and truly yours.
</p>

<p>
  More than anything, I want you to walk away with images that bring you back
  to this season of your life exactly as it felt.
</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm border border-border p-8 text-center">
            <p className="font-display text-6xl md:text-7xl font-light text-foreground">10+</p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-3">Years of Experience</p>
            <div className="w-12 h-px bg-border mx-auto my-6" />
            <p className="font-display text-6xl md:text-7xl font-light text-foreground">500+</p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-3">Sessions Captured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
