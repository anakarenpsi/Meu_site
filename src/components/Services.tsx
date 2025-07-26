import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Psicoterapia Individual",
      description: "Atendimento personalizado para adultos e adolescentes, focado em suas necessidades específicas e objetivos terapêuticos.",
      features: ["Sessões de 50 minutos", "Abordagem TCC", "Foco no autoconhecimento"]
    },
    {
      title: "Atendimento Online",
      description: "Terapia no conforto da sua casa, mantendo a mesma qualidade e eficácia do atendimento presencial.",
      features: ["Plataforma segura", "Flexibilidade de horários", "Mesma qualidade presencial"]
    },
    {
      title: "Suporte Emocional",
      description: "Apoio especializado para momentos de crise, ansiedade, depressão e outros desafios emocionais.",
      features: ["Técnicas de enfrentamento", "Estratégias personalizadas", "Acompanhamento contínuo"]
    },
    {
      title: "Orientação para Autoconhecimento",
      description: "Processo terapêutico voltado para o desenvolvimento pessoal e descoberta do seu potencial interior.",
      features: ["Exploração de valores", "Definição de objetivos", "Crescimento pessoal"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-therapy-beige to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos diferentes modalidades de atendimento psicológico, 
            adaptadas às suas necessidades e disponibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full shadow-lg border-0 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-medium text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-therapy-blue-gray">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-therapy-rose/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium text-primary mb-4">
              Público Atendido
            </h3>
            <p className="text-lg text-muted-foreground">
              Atendo adolescentes a partir de 16 anos e adultos de todas as idades. 
              Cada sessão tem duração de 50 minutos e é conduzida com total sigilo e ética profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;