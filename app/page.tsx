import { HookGrid } from "@/components/HookGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-lime-400 selection:text-black">
      <header className="w-full border-b-4 border-black bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center rotate-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <h1 className="text-2xl font-black text-black uppercase tracking-tighter">
              HookHub
            </h1>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase border-2 border-black px-3 py-1 bg-purple-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Gemini CLI Hooks
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-lime-400 border-b-4 border-black py-20 px-4 overflow-hidden relative">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600 border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-12 animate-bounce hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              Supercharge <br /> 
              <span className="bg-black text-white px-2">Gemini CLI</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mb-10 leading-snug">
              THE ULTIMATE COLLECTION OF COMMUNITY-BUILT HOOKS. 
              AUTOMATE YOUR WORKFLOW WITH RAW POWER.
            </p>
            <button className="h-16 px-10 text-xl font-black uppercase text-white bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(168,85,247,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Explore Hooks
            </button>
          </div>
        </section>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-black uppercase text-black mb-12 inline-block border-b-8 border-lime-400">
              Featured Hooks
            </h3>
            <HookGrid />
          </div>
        </div>

        <section className="bg-purple-600 border-y-4 border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-5xl font-black uppercase text-white mb-12 tracking-tighter">
              Frequently <br />
              <span className="bg-black text-lime-400 px-2">Asked Questions</span>
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  q: "What is HookHub?",
                  a: "HookHub is the premier marketplace for Gemini CLI hooks. We provide community-driven scripts that extend the capabilities of your AI agent."
                },
                {
                  q: "How do I install a hook?",
                  a: "Installation is simple! Copy the hook URL from GitHub and use the `gemini hook add` command in your terminal."
                },
                {
                  q: "Can I contribute my own hooks?",
                  a: "YES! We encourage all developers to share their creations. Just submit a Pull Request to our main hooks repository."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-xl font-black uppercase text-black mb-2">{faq.q}</h4>
                  <p className="text-black font-bold leading-snug">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t-4 border-black bg-black pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white border-2 border-white flex items-center justify-center -rotate-3 shadow-[4px_4px_0px_0px_rgba(190,242,100,1)]">
                <span className="text-black font-black text-xl">H</span>
              </div>
              <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
                HookHub
              </h1>
            </div>
            <p className="text-zinc-400 font-bold max-w-sm mb-8">
              THE ULTIMATE DESTINATION FOR GEMINI CLI ENTHUSIASTS. 
              EXTEND, AUTOMATE, AND DOMINATE YOUR WORKFLOW.
            </p>
            <div className="flex gap-4">
              {['TW', 'GH', 'DC'].map((social) => (
                <div key={social} className="w-10 h-10 border-2 border-white flex items-center justify-center text-white font-black hover:bg-lime-400 hover:text-black hover:border-lime-400 cursor-pointer transition-colors">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lime-400 font-black uppercase mb-6 tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {['Documentation', 'GitHub Repo', 'Hook Registry', 'Guides'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white font-bold uppercase text-sm hover:underline decoration-lime-400 decoration-4 underline-offset-4">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-purple-500 font-black uppercase mb-6 tracking-widest">Community</h4>
            <ul className="space-y-4">
              {['Discord Server', 'Discussions', 'Showcase', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white font-bold uppercase text-sm hover:underline decoration-purple-500 decoration-4 underline-offset-4">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t-2 border-zinc-800 text-center">
          <p className="text-zinc-500 font-black uppercase tracking-widest text-sm">
            &copy; {new Date().getFullYear()} HookHub // NO RIGHTS RESERVED // BUILT FOR THE AGENTS
          </p>
        </div>
      </footer>
    </div>
  );
}
