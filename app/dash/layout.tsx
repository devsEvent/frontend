import { Suspense } from "react";

import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />

      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
