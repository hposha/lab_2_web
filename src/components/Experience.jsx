import { Briefcase } from 'lucide-react';

function Experience() {
  return (
    <section>
     <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
  <Briefcase size={20} />
  <span>Досвід роботи</span>
  <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
</h2>
      <div className="relative pl-6 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors duration-300">
        <div className="absolute w-3 h-3 bg-slate-900 border-2 border-emerald-500 rounded-full -left-[7px] top-1.5"></div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
          <h3 className="text-lg font-bold text-slate-100">McDonald's</h3>
          <span className="text-sm font-mono text-emerald-400 mt-1 md:mt-0">2024 - 2025</span>
        </div>
        <p className="text-slate-300 font-medium text-sm mb-3">Працівник закладу ресторанного господарства</p>
        <p className="text-slate-400 leading-relaxed text-sm">
          1 рік досвіду. Забезпечення високого рівня обслуговування, робота в інтенсивному темпі, дотримання стандартів якості та ефективна комунікація в команді.
        </p>
      </div>
    </section>
  );
}

export default Experience;