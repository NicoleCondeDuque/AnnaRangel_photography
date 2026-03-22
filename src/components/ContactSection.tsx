import { Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">Get in Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-light tracking-[0.1em] uppercase mb-6">
          Let's Create Together
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground font-light max-w-lg mx-auto mb-12">
          Ready to capture your family’s story? I’d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <a href="mailto:anyakataeva@hotmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={16} />
            <span className="font-body text-sm tracking-wide">anyakataeva@hotmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin size={16} />
            <span className="font-body text-sm tracking-wide">Calgary, Alberta</span>
          </div>
          <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={16} />
            <span className="font-body text-sm tracking-wide">@anna_rangel_photography</span>
          </a>
        </div>
      <a
  href="mailto:anyakataeva@hotmail.com?subject=Booking%20a%20Session&body=Hi!%20I%20would%20love%20to%20book%20a%20session."
   className="inline-block border border-foreground px-10 py-4 font-body text-xs tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
>
  Book a Session
</a>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border text-center">
        <p className="font-body text-xs tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Anna Rangel Photography. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
