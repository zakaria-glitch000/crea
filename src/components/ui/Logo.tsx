import { COMPANY } from '@/data/content';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  const rawName = COMPANY?.name || 'ORALI';
  const brandName = rawName.replace(/SYSTEMS/i, '').trim() || 'ORALI';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none -translate-y-1.5 ${className}`}>
      {/* ICÔNE VECTORIELLE SVG */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 220 180"
          className="h-8 w-auto md:h-9 transition-transform hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="oraliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="40%" stopColor="#00A3FF" />
              <stop offset="100%" stopColor="#0031B8" />
            </linearGradient>
          </defs>

          {/* Barre 1 (Gauche) */}
          <path
            d="M 50,45 L 105,45 L 35,160 L 0,160 Z"
            fill="url(#oraliGrad)"
          />
          {/* Barre 2 (Droite) */}
          <path
            d="M 125,20 L 195,20 L 110,180 L 40,180 Z"
            fill="url(#oraliGrad)"
          />
        </svg>
      </div>

      {/* TEXTE DU LOGO */}
      {showText && (
        <div className="flex flex-col justify-center">
          {/* ORALI */}
          <span className="text-xl md:text-2xl font-black tracking-tight text-[#020B26] leading-none">
            {brandName}
          </span>

          {/* SYSTEMS */}
          <span className="text-[8px] md:text-[9px] font-bold tracking-[0.32em] text-[#0092FF] uppercase mt-0.5 leading-none">
            SYSTEMS
          </span>

          {/* LIGNE SEPARATRICE */}
          <div className="w-7 h-[1.5px] bg-[#0092FF] my-0.5" />

          {/* SOUS-TITRE */}
          <span className="text-[7px] md:text-[8px] font-medium tracking-tight text-[#020B26] leading-none whitespace-nowrap">
            Solution Métier CHR &amp; Rétail
          </span>
        </div>
      )}
    </div>
  );
}