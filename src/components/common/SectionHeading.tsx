import type { ReactNode } from "react";
export function SectionHeading({
  index,
  title,
  children,
}: {
  index: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{index}</p>
      <h2>{title}</h2>
      {children && <div className="section-intro">{children}</div>}
    </div>
  );
}
