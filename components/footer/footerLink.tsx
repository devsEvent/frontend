import Link from "next/link";
import React, { ReactNode } from "react";

function FooterLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <Link href={href} className="block mt-4 text-[.75rem] lg:text-[.9rem] text-dim-dark hover:text-primary">
      {children}
    </Link>
  );
}

export default FooterLink;
