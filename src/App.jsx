import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen py-10 px-4 font-sans text-slate-300">
      <div className="max-w-5xl mx-auto bg-slate-900 shadow-2xl shadow-emerald-900/10 rounded-2xl overflow-hidden border border-slate-800">
        <Header />
        
        <main className="p-8 md:p-12">
          <About />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-10">
            {/* Ліва колонка для навичок */}
            <aside className="md:col-span-5">
              <Skills />
            </aside>
            
            {/* Права колонка для освіти та досвіду */}
            <section className="md:col-span-7 space-y-12">
              <Education />
              <Experience />
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;