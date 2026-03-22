import { Mail, Send, Github } from 'lucide-react';

function Header() {
  return (
    <header className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b-4 border-emerald-500 transition-colors duration-300">
      
      <div className="relative shrink-0 group">
        {/* Анімований ефект світіння (glow) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
        
        <div className="relative w-32 h-32 p-1 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 transition-transform duration-500 group-hover:scale-105">
          
          {/* ТУТ ФІКС: Додано dark:border-slate-900, dark:bg-slate-800 та кольори для тексту (якщо картинки нема) */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner text-slate-500 dark:text-slate-400 font-bold text-sm">
             <img src="/avatar.jpg" alt="TEST" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
      
      <div className="text-center md:text-left w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
          Andrii Andrievsky
        </h1>
        
        <p className="mt-2 text-xl font-medium opacity-90">Студент / ІТ-Intern(Cybersecurity)</p>
        
        <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-5 text-sm font-mono bg-slate-500/10 p-3 rounded-lg border border-slate-500/20 inline-flex transition-colors duration-300 opacity-80 hover:opacity-100">
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hpogta@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300 whitespace-nowrap">
            <Mail size={16} className="text-emerald-500 shrink-0" /> 
            <span>gmail</span>
          </a>
          
          <a href="https://t.me/hposhan" target="_blank" className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-300">
            <Send size={16} className="text-cyan-500" /> telegram
          </a>
          
          <a href="https://github.com/hposha" target="_blank" className="flex items-center gap-2 hover:text-emerald-600 transition-colors duration-300">
            <Github size={16} className="opacity-70" /> github
          </a>
          
        </div>
      </div>
      
    </header>
  );
}

export default Header;