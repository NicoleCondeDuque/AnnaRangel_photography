import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Portrait photography", category: "Portrait" },
  { src: gallery2, alt: "Holiday photography", category: "Holiday Session" },
  { src: gallery3, alt: "Family Photography", category: "Family Photography" },
  { src: gallery4, alt: "Fine Art Portrait", category: "Fine Art Portrait" },
  { src: gallery5, alt: "Styled Session", category: "Styled Session" },
  { src: gallery6, alt: "Motherhood Photography", category: "Motherhood Photography" },
];

const GallerySection = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">Selected</p>
        <h2 className="font-display text-3xl md:text-5xl font-light tracking-[0.1em] uppercase">Work</h2>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid group cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end p-6">
                <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
