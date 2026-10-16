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
      style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", gap: '0.35em' }}
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
          <linearGradient id="oraliLeft" gradientUnits="userSpaceOnUse" x1="90" y1="91" x2="70" y2="362">
            <stop offset="0%" stopColor="#0033B3" />
            <stop offset="50%" stopColor="#0A64E0" />
            <stop offset="100%" stopColor="#00C0F5" />
          </linearGradient>
          <linearGradient id="oraliRight" gradientUnits="userSpaceOnUse" x1="485" y1="0" x2="210" y2="447">
            <stop offset="0%" stopColor="#00EEFF" />
            <stop offset="45%" stopColor="#0072EA" />
            <stop offset="100%" stopColor="#0030AC" />
          </linearGradient>
        </defs>

        <path
          d="M178,91 L315,91 L148,362 L0,362 Z"
          fill="url(#oraliLeft)"
          stroke="url(#oraliLeft)"
          strokeWidth="12"
          strokeLinejoin="round"
        />
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
        <div className="flex flex-col w-fit justify-center">
          {/* LIGNE PRINCIPALE : ORALI + SYSTEMS (même taille) */}
          <div className="flex items-baseline" style={{ gap: '0.25em' }}>
            <span
              className="font-black text-[#051536] whitespace-nowrap"
              style={{ fontSize: '1em', lineHeight: 0.95, letterSpacing: '-0.01em' }}
            >
              {brandName}
            </span>
            <span
              className="font-extrabold text-[#0095FF] uppercase whitespace-nowrap"
              style={{ fontSize: '1em', lineHeight: 0.95, letterSpacing: '-0.01em' }}
            >
              SYSTEMS
            </span>
          </div>

          {/* LIGNE DE SÉPARATION (remontée vers ORALI) */}
          <div
            className="bg-[#0095FF] rounded-full"
            style={{ width: '30%', height: '0.035em', minHeight: '2px', marginTop: '0.08em', marginBottom: '0.1em' }}
          />

          {/* SOUS-TITRE (remonté vers la ligne) */}
          <span
            className="font-medium text-gray-500 whitespace-nowrap tracking-tight"
            style={{ fontSize: '0.32em', lineHeight: 1 }}
          >
            Solution Métier CHR &amp; Rétail
          </span>
        </div>
      )}
    </div>
  );
}