import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jornal1 from "@/assets/jornal-1.png";
import jornal2 from "@/assets/jornal-2.png";
import jornal3 from "@/assets/jornal-3.png";

const images = [
  { src: jornal1, alt: "Alunos da EMEF Maria Aparecida recebem campanha Odontrat" },
  { src: jornal2, alt: "Dentistas doam meia tonelada de alimentos ao Fundo Social de Arujá" },
  { src: jornal3, alt: "Projeto Saúde Bucal percorre os bairros - Jornal da Cidade e Região 1998" },
];

const NewspaperCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-muted rounded-2xl overflow-hidden shadow-lg p-4 md:p-8 flex items-center justify-center min-h-[400px]">
        <img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="max-h-[600px] w-auto object-contain animate-fade-in"
          loading="lazy"
        />
      </div>

      <button
        onClick={prev}
        aria-label="Imagem anterior"
        className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Próxima imagem"
        className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewspaperCarousel;
