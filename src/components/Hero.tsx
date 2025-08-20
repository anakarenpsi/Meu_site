import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-therapy-lilac via-background to-therapy-rose">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light text-foreground leading-tight">
                <span className="font-medium text-primary">Transforme sua vida</span> através da Psicoterapia
              </h1>
              <p className="text-lg lg:text-xl text-therapy-blue-gray font-light leading-relaxed">
                A saúde mental é o alicerce para uma vida plena e equilibrada. Se você busca compreender melhor suas emoções, fortalecer sua autoestima e aprimorar suas relações interpessoais, saiba que está no caminho certo — e não precisa trilhá-lo sozinho(a).
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-therapy-rose to-therapy-lilac p-2">
                <img
                  src="/lovable-uploads/be0e14ff-0678-40af-9659-464189941f1e.png"
                  alt="Ana Karen - Psicóloga"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-therapy-beige opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;