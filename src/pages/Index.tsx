import { MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-raio-de-sol.jpeg";
import arrecadacao from "@/assets/arrecadacao-alimentos.png";
import parceiros from "@/assets/parceiros.png";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NewspaperCarousel from "@/components/NewspaperCarousel";

const WHATSAPP_URL = "https://wa.me/5511964181997";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="w-full py-6 md:py-8 flex justify-center bg-background border-b border-border/50">
        <img src={logo} alt="ONG Raio de Sol" className="h-28 md:h-36 w-auto" />
      </header>

      {/* Hero - História da ONG */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base font-heading font-semibold tracking-widest text-primary uppercase mb-3">
            História da ONG Raio de Sol
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-10">
            Sobre nós
          </h1>

          <div className="space-y-5 text-foreground text-base md:text-lg font-body leading-relaxed text-left md:text-center">
            <p>
              Sejam bem-vindos à <strong>ONG Raio de Sol</strong>, nossa ONG é dedicada à saúde comunitária.
            </p>
            <p>
              Nossa missão é promover uma comunidade mais saudável, através da prevenção e manutenção da saúde e construindo o bem estar à população.
            </p>
            <p>
              Nossa equipe de profissionais comprometidos está aqui para orientar, educar e fornecer recursos que capacitam você e sua comunidade a tomar medidas proativas para uma vida mais saudável.
            </p>
            <p>
              Junte-se a nós nessa jornada em direção a uma vida mais saudável, estamos localizados na cidade de Arujá, onde participamos de vários eventos visando a prevenção de sua saúde, aproveite e entre em contato conosco agora mesmo.
            </p>
          </div>
        </div>

        {/* Foto arrecadação + CTA */}
        <div className="max-w-4xl mx-auto mt-14">
          <img
            src={arrecadacao}
            alt="Voluntários da ONG Raio de Sol em arrecadação de alimentos"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
            loading="lazy"
          />

          <div className="flex justify-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-primary-foreground font-heading font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Texto extra com espaçamento */}
        <div className="max-w-4xl mx-auto mt-20 space-y-5 text-foreground text-base md:text-lg font-body leading-relaxed text-left md:text-center">
          <p>
            A ONG existe desde <strong>2012</strong>, tendo como objetivo a prevenção e manutenção da saúde em todas as áreas.
          </p>
          <p>
            Apesar de ter sido consolidada em 2012, os responsáveis pela ONG atuam desde <strong>1997</strong>, ajudando não somente na prevenção da saúde, como também ajudam entidades carentes e outras instituições.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-secondary/40 py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-12">
            Depoimentos
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Parceiros */}
      <section className="container py-20">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-12">
          Nossos Parceiros
        </h2>
        <div className="max-w-3xl mx-auto">
          <img
            src={parceiros}
            alt="Parceiros da ONG Raio de Sol: ABLM, Rotary International, Lions International, Sunrise FS, Sanches & Melhorança, KD"
            className="w-full h-auto rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Jornais Históricos */}
      <section className="bg-secondary/40 py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-12">
            Jornais Históricos
          </h2>
          <NewspaperCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Onde Estamos
            </h3>
            <div className="flex items-start gap-3 text-white font-body">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <p>
                Avenida Antonio Afonso de Lima, 448<br />
                Centro, Arujá - SP
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Nos siga nas redes sociais
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/org.raiodesol?igsh=Nm1tbGR1Mmlodmow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da ONG Raio de Sol"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://m.facebook.com/raiodesolong/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da ONG Raio de Sol"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-sm font-body">
          © {new Date().getFullYear()} ONG Raio de Sol. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
