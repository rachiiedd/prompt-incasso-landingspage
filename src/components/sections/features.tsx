import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart, MonitorUp, FileUp, ChartBarStacked } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Stap 1",
    content: "Kvk nummer van de schuldenaar opgeven",
    image: "/dashboard.png",
    icon: <MonitorUp className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Stap 2",
    content: "Factuur uploaden van de schuldenaar",
    image: "/dashboard.png",
    icon: <FileUp className="h-6 w-6 text-primary" />, 
  },
  {
    id: 3,
    title: "Stap 3",
    content: "Volg de factuur op met Prompt Incasso",
    image: "/dashboard.png",
    icon: <ChartBarStacked className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section subtitle="Hoe het werkt" description="Binnen 3 stappen jouw factuur betaald.">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
