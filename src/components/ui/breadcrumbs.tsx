import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span className="text-zinc-600">/</span> : null}
            {item.href ? (
              <Link className="hover:text-cyan-300" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-200">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
