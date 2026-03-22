import heroPhoto from "@/assets/hero-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroPhoto}
        alt="Editorial portrait by Anna Rangel Photography"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-[35vh]">
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-light tracking-[0.15em] uppercase text-primary-foreground">
          Anna Rangel
        </h1>
        <p className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase mt-4 text-primary-foreground/80">
          Photography · Calgary, Alberta
        </p>
        <button
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 border border-primary-foreground/50 px-8 py-3 font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/90 hover:bg-primary-foreground/10 transition-colors duration-300"
        >
          View Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
