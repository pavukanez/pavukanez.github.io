import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grain" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.12),_transparent_55%)]" />

      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-sm">
          <a href="#top" className="font-display text-lg tracking-tight text-paper">
            Daniel Pham
          </a>
          <div className="flex gap-6 text-muted">
            <a href="#experience" className="transition hover:text-brass-hot">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-brass-hot">
              Skills
            </a>
            <a
              href="/NguyenPham_SoftwareEngineer.pdf"
              download="NguyenPham_SoftwareEngineer.pdf"
              className="transition hover:text-brass-hot"
            >
              Résumé
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
