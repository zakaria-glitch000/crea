import { COMPANY } from '@/data/content';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* ICÔNE VECTORIELLE SVG (ORALI ICON) */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 120 100"
          className="h-9 w-auto md:h-10 transition-transform hover:scale-105"
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
          <span className="font-extrabold text-xl md:text-2xl tracking-wider text-[#061234]">
            {COMPANY?.name || 'ORALI'}
          </span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#00A3FF] uppercase mt-0.5">
            SYSTEMS
          </span>
          <span className="text-[7px] font-medium tracking-tight text-slate-400 uppercase mt-0.5">
            Solutions Commerce & Restaurant
          </span>
        </div>
      )}
    </div>
  );
}