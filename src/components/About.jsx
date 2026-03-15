import { User } from 'lucide-react';

function About() {
  return (
    <section className="mb-12 pb-8 border-b border-slate-800 relative group">
      <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
  <User size={20} />
  <span>Про мене</span>
  <span className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
</h2>
      <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
        Відкритий, комунікабельний та відповідальний. Завдяки досвіду роботи у сфері обслуговування маю чудово розвинені навички роботи в команді та вміння швидко приймати рішення в стресових ситуаціях. Активно вивчаю мережеві технології та кібербезпеку, швидко засвоюю нову інформацію та завжди прагну до професійного розвитку.
      </p>
    </section>
  );
}

export default About;