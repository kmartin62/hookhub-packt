import { HookGrid } from "@/components/HookGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-50 rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 font-bold text-lg">H</span>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              HookHub
            </h1>
          </div>
          <p className="hidden sm:block text-sm text-zinc-500 dark:text-zinc-400">
            Discover the best Gemini CLI hooks
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="pt-16 pb-8 text-center px-4">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
            Supercharge your Gemini CLI
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Browse our collection of community-built hooks for Gemini CLI. 
            Automate your workflow with event-driven scripts.
          </p>
        </section>

        <HookGrid />
      </main>

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} HookHub. Built for the community.</p>
      </footer>
    </div>
  );
}
