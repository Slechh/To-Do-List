import type { LayoutProps } from "../types/LayoutProps";

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen dark:bg-black transition-all duration-300">
      <div className="max-w-5xl mx-auto py-10 px-4 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
