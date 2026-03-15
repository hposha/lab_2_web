import { Mail, Send, Github } from 'lucide-react';

function Header() {
  return (
    <header className="bg-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b-4 border-emerald-500">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0 bg-slate-700">
         <img src="/avatar.jpg" alt="Andrii Andrievsky" className="w-full h-full object-cover" />
      </div>
      
      <div className="text-center md:text-left w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Andrii Andrievsky
        </h1>
        <p className="mt-2 text-xl text-slate-300 font-medium">Студент / ІТ-Спеціаліст(Cybersecurity)</p>
        
        {/* Контакти з іконками */}
        <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-5 text-sm text-slate-400 font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 inline-flex">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hpogta@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300 whitespace-nowrap">
  <Mail size={16} className="text-emerald-500 shrink-0" /> 
  <span>gmail</span>
</a>
          <a href="https://t.me/hposhan" target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
            <Send size={16} className="text-cyan-500" /> telegram
          </a>
          <a href="https://github.com/hposha" target="_blank" className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300">
            <Github size={16} className="text-slate-500" /> github
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;