import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A ONG Raio de Sol faz a diferença na prevenção da saúde, seu trabalho é inspirador.",
    author: "Gabriel Gianini",
    role: "Front-end Developer",
  },
  {
    text: "Cada um deve buscar seu trabalho na vida, o meu veio me encontrar... ONG Raio de Sol.",
    author: "Helbert Grund",
    role: "Fundador",
  },
  {
    text: "Raio de Sol, oportunidade de dias melhores.",
    author: "Kelly Prandini e Danilo Grund",
    role: "KD Diagnósticos",
  },
  {
    text: "Há 32 anos realizo trabalhos voluntários levando um pouco dos meus conhecimentos em prol daqueles que precisam. Estou me juntando à ONG Raio de Sol pois acredito em seu potencial, juntos somos mais fortes.",
    author: "Eliana Elias",
    role: "Advogada, Assistente Social e Palestrante",
  },
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-primary-dark text-primary-dark-foreground rounded-2xl p-10 md:p-14 shadow-xl min-h-[280px] flex flex-col justify-center animate-fade-in" key={index}>
        <Quote className="w-10 h-10 opacity-40 mb-4" />
        <p className="text-lg md:text-xl leading-relaxed font-body mb-6">
          {testimonials[index].text}
        </p>
        <div className="border-t border-white/30 pt-4">
          <p className="font-heading font-bold text-white text-lg">{testimonials[index].author}</p>
          <p className="text-white/80 text-sm">{testimonials[index].role}</p>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Depoimento anterior"
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo depoimento"
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
