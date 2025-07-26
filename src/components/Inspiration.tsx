import { Card } from "@/components/ui/card";

const Inspiration = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-therapy-beige to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            O seu processo de autoconhecimento começa aqui
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="p-8 lg:p-12 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground text-center">
            <p>
              Meu compromisso é contribuir para que você compreenda suas emoções, desenvolva ferramentas 
              para lidar com os desafios da vida e construa uma relação mais saudável consigo mesmo(a) e com os outros.
            </p>
            
            <div className="mt-8 p-6 bg-therapy-lilac/20 rounded-2xl">
              <p className="text-primary font-medium">
                ✨ Se você deseja iniciar ou retomar o cuidado com sua saúde mental, será um prazer caminhar com você nessa jornada.
              </p>
            </div>

            <p className="text-therapy-blue-gray font-medium">
              Entre em contato para mais informações ou para agendar sua consulta. O primeiro passo pode transformar toda sua trajetória.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Inspiration;