import { Card, CardContent } from "../components/ui/card";

export default function About() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">About Me</h2>

      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="pt-4 text-sm text-slate-200 space-y-2">
          <p>I am from Chennai and completed BCA at A.M. Jain College.</p>
          <p>
            I have hands-on experience in Java, React, TypeScript, Tailwind,
            and I am a Software Trainee at Vimkes Technologies.
          </p>
          <p>
            I enjoy learning new tech and building clean front-end screens and
            efficient backend workflows.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
