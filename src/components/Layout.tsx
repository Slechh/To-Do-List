import type { LayoutProps } from "../types/LayoutProps";

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto py-10 px-4 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
