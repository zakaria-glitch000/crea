import { COMPANY } from '@/data/content';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/20">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path d="M5 18V6h3l6 7V6h3v12h-3l-6-7v7H5z" fill="currentColor" />
        </svg>
      </div>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-slate-900">
          {COMPANY.name}
        </span>
      )}
    </div>
  );
}
