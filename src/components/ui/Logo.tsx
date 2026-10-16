import { COMPANY } from '@/data/content';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  const rawName = COMPANY?.name || 'ORALI';
  const brandName = rawName.replace(/SYSTEMS/i, '').trim() || 'ORALI';

  return (
    // La taille globale se règle ici (tout est en "em")
    <div
      className={`inline-flex items-center select-none text-[26px] md:text-[34px] ${className}`}
      style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", gap: '0.1em' }}
    >
      {/* ICÔNE : 2 parallélogrammes */}
      <svg
        viewBox="-6 -6 575 459"
        style={{ height: '1.78em', width: 'auto' }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Gauche : bleu foncé (haut) -> cyan (bas) */}
          <linearGradient id="oraliLeft" gradientUnits="userSpaceOnUse" x1="90" y1="91" x2="70" y2="362">
            <stop offset="0%" stopColor="#0033B3" />
            <stop offset="50%" stopColor="#0A64E0" />
            <stop offset="100%" stopColor="#00C0F5" />
          </linearGradient>
          {/* Droite : cyan (haut) -> bleu foncé (bas) */}
          <linearGradient id="oraliRight" gradientUnits="userSpaceOnUse" x1="485" y1="0" x2="210" y2="447">
            <stop offset="0%" stopColor="#00EEFF" />
            <stop offset="45%" stopColor="#0072EA" />
            <stop offset="100%" stopColor="#0030AC" />
          </linearGradient>
        </defs>

        {/* Petite barre (gauche) */}
        <path
          d="M178,91 L315,91 L148,362 L0,362 Z"
          fill="url(#oraliLeft)"
          stroke="url(#oraliLeft)"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        {/* Grande barre (droite) */}
        <path
          d="M408,0 L563,0 L288,447 L131,447 Z"
          fill="url(#oraliRight)"
          stroke="url(#oraliRight)"
          strokeWidth="12"
          strokeLinejoin="round"
        />
      </svg>

      {/* TEXTE */}
      {showText && (
        <div className="flex flex-col w-fit">
          {/* ORALI : ghadi i7ddd l-3ard dyal kol l-bloc */}
          <span
            className="font-black text-[#051536] whitespace-nowrap"
            style={{ fontSize: '1em', lineHeight: 0.72, letterSpacing: '-0.01em' }}
          >
            {brandName}
          </span>

          {/* SYSTEMS : l7rouf mwzzin 3la nafs l-3ard dyal ORALI */}
          <div
            className="flex justify-between w-0 min-w-full font-medium text-[#0A84F5] uppercase"
            style={{ fontSize: '0.378em', lineHeight: 0.72, marginTop: '0.2em' }}
          >
            {'SYSTEMS'.split('').map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>

          {/* Ligne courte */}
          <div
            className="bg-[#0A84F5]"
            style={{ width: '21.7%', height: '0.02em', minHeight: 2, marginTop: '0.15em' }}
          />

          {/* Sous-titre : kaymtedd 3la nafs l-3ard */}
          <div
            className="flex justify-between w-0 min-w-full font-normal text-[#0B1B3F] whitespace-nowrap"
            style={{ fontSize: '0.22em', lineHeight: 0.72, marginTop: '0.14em' }}
          >
            {['Solution', 'Métier', 'CHR', '&', 'Rétail'].map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}