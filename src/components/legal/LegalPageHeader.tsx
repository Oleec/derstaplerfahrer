type LegalPageHeaderProps = {
  title: string;
  description: string;
  updatedAt: string;
};

export function LegalPageHeader({ description, title, updatedAt }: LegalPageHeaderProps) {
  return (
    <div className="mb-8 border-b border-slate-200 pb-8">
      <p className="text-sm font-black uppercase text-amber-700">Rechtliche Informationen</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      <p className="mt-4 text-sm font-semibold text-slate-500">Stand: {updatedAt}</p>
    </div>
  );
}
