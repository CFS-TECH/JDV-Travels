export default function SectionHead({ eyebrow, title, id, children }) {
  return (
    <div className="reveal mx-auto mb-6 sm:mb-12 max-w-2xl text-center">
      {eyebrow && <span className="eyebrow text-[10px] sm:text-xs">{eyebrow}</span>}
      <h2 id={id} className="mt-1.5 sm:mt-4 text-xl sm:text-4xl font-bold">{title}</h2>
      {children && (
        <p className="mt-1.5 sm:mt-4 text-xs sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          {children}
        </p>
      )}
    </div>
  );
}
