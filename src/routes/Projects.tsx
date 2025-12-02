import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "../components/ui/card";

const fetchProjects = async () => {
  return [
    {
      id: 1,
      title: "Tic Tac Toe (Java)",
      desc: "Simple console game using Core Java.",
      tech: "Core Java",
    },
    {
      id: 2,
      title: "V Helpdesk App",
      desc: "Ticketing system built using Java & JDBC.",
      tech: "Java, JDBC, SQL",
    },
    {
      id: 3,
      title: "Retail & Supply Chain System",
      desc: "Microservice architecture using Spring Boot & Kafka.",
      tech: "Spring Boot, Microservices",
    },
    {
      id: 4,
      title: "Portfolio Website",
      desc: "This portfolio built using TS, TanStack, Tailwind, shadcn.",
      tech: "React, TS, TanStack",
    },
  ];
};

export default function Projects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <p className="text-slate-300">Loading...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {data?.map((p) => (
          <Card
            key={p.id}
            className="bg-slate-900 border-slate-800 hover:border-emerald-500/60 transition"
          >
            <CardContent className="pt-4 space-y-2">
              <h3 className="text-sm font-semibold">{p.title}</h3>
              <p className="text-xs text-slate-300">{p.desc}</p>
              <p className="text-[11px] text-emerald-300">Tech: {p.tech}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
