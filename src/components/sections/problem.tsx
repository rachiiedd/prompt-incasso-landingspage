import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap, ScrollText, HandCoins, LayoutDashboard, ChartBar, FileCheck } from "lucide-react";

const problems = [
  {
    title: "Snelle betalingen",
    description:
      "Zorg ervoor dat facturen sneller worden voldaan en voorkom cashflowproblemen.",
    icon: HandCoins,
  },
  {
    title: "Minder administratieve lasten",
    description:
      "Automatiseer en vereenvoudig het debiteurenproces om tijd en kosten te besparen.",
    icon: FileCheck,
  },
  {
    title: "Volledig inzicht en controle",
    description:
      "Altijd een helder overzicht van betalingen en klantstatussen in één platform.",
    icon: ChartBar,
  },
];

export default function Component() {
  return (
    <Section
      subtitle="Efficiënt en klantgericht debiteurenbeheer"
      description="Snellere betalingen, minder administratieve lasten en volledige controle over uw debiteurenproces."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
