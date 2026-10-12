import { COMPANY } from '@/data/content';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  // Kan-akhdo ghir "ORALI" hta ila kan COMPANY.name fih "ORALI SYSTEMS"
  const rawName = COMPANY?.name || 'ORALI';
  const brandName = rawName.replace(/SYSTEMS/i, '').trim() || 'ORALI';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* ICÔNE VECTORIELLE SVG (ORALI ICON) */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 120 100"
          className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="oraliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#0033C4" />
            </linearGradient>
          </defs>
          {/* Barre de gauche */}
          <path
            d="M 38,30 L 60,30 L 30,90 L 8,90 Z"
            fill="url(#oraliGrad)"
          />
          {/* Barre de droite */}
          <path
            d="M 68,10 L 98,10 L 52,100 L 22,100 Z"
            fill="url(#oraliGrad)"
          />
        </svg>
      </div>

      {/* TEXTE DU LOGO */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* ORALI GHIR B-NOIR / BLEU FONCÉ */}
          <span className="font-extrabold text-2xl md:text-3xl tracking-wider text-[#03091E]">
            {brandName}
          </span>

          {/* SYSTEMS EN BLEU CIEL */}
          <span className="text-[11px] md:text-[13px] font-bold tracking-[0.35em] text-[#00A3FF] uppercase mt-0.5">
            SYSTEMS
          </span>

          {/* PETITE LIGNE BLEUE (sous "SY") */}
          <div className="h-[2px] w-8 bg-[#00A3FF] my-1 rounded-full" />

          {/* SOUS-TITRE */}
          <span className="text-[7px] md:text-[8px] font-medium tracking-widest text-slate-500 uppercase">
            SOLUTIONS COMMERCE & RESTAURANT
          </span>
        </div>
      )}
    </div>
  );
}