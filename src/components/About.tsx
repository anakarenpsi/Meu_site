import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-therapy-beige">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Sobre Ana Karen
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="p-8 lg:p-12 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sou Psicóloga formada pela Universidade Paulista – UNIP, com pós-graduação em andamento em 
              Neurociência Aplicada à Psicologia pela Universidade Presbiteriana Mackenzie. Atuo há 6 anos 
              com dedicação no acompanhamento psicológico de adolescentes, adultos e idosos.
            </p>
            
            <p>
              Com experiência no atendimento de casos com diagnóstico de TDAH (Transtorno de Déficit de Atenção e Hiperatividade), 
              TOC (Transtorno Obsessivo Compulsivo), transtornos ansiosos e depressivos, distúrbios alimentares e distúrbios de imagem, 
              minha abordagem é centrada na Terapia Cognitivo-Comportamental (TCC), reconhecida por sua eficácia no trabalho emocional e comportamental.
            </p>
            
            <p>
              Desenvolvo intervenções e atividades personalizadas para cada paciente, sempre respeitando suas singularidades e necessidades.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;