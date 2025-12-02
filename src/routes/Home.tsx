import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm text-emerald-400">Hi, I'm Saran 👋</p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Software Trainee & Aspiring Developer
        </h1>

        <p className="text-sm text-slate-300 max-w-xl">
          I'm currently working as a Software Trainee at Vimkes Technologies.
          I build UI using React + TypeScript and work on backend basics.
          I enjoy learning full-stack technologies.
        </p>

        <div className="flex gap-3">
          <Button asChild>
            <a href="/projects">Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Contact</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
