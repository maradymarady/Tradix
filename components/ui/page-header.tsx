export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex items-center justify-between">
      <div>
        <h1 className="font-display text-2xl font-extrabold text-headline">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-body/70">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
