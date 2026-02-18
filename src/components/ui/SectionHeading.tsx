interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  highlight,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) {
      return <>{title}</>;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-red-600">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
