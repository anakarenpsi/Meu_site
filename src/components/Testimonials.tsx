import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Quando iniciei meu tratamento com a doutora estava em um momento instável, me sentindo perdida em muitos momentos e com a ansiedade nas alturas. A Ana foi uma bênção em minha vida, sempre atenciosa, amorosa e com esse jeitinho todo especial me levando a pensar e refletir sobre tudo. Posso dizer com toda certeza que sou uma pessoa melhor hoje pela ajuda que obtive. Só tenho que agradecer imensamente por essa excelente profissional, que me ajudou, me ajuda e continuará me ajudando.",
      author: "Paciente",
      role: "Depoimento Real"
    },
    {
      text: "Eu estou há um ano na terapia e, no início, para mim as sessões seriam um lugar em que eu não me via me sentindo confortável em expor os meus sentimentos e medos, mas com o tempo vi que estava totalmente enganada com isso. Com o tempo, me senti acolhida e muito confortável para realmente ser eu mesma. E graças a essas sessões, eu me tornei uma pessoa melhor comigo mesma, tanto mentalmente como fisicamente, e a cada sessão muitas outras questões melhoram com o acolhimento incrível que a Ana me dá.",
      author: "Paciente",
      role: "Depoimento Real"
    },
    {
      text: "Hoje, com o coração leve e grato, quero agradecer por tudo que fez por mim. Mesmo que a nossa jornada tenha chegado ao fim, carrego comigo os aprendizados, as palavras e até os silêncios que compartilhamos. Você fez parte de uma transformação que jamais esquecerei. Às vezes, na vida, encontramos pessoas que não apenas nos escutam, mas nos enxergam. Você foi essa presença para mim. Em meio às turbulências internas, suas palavras foram como farol. Em cada sessão, me ensinou a respirar com mais leveza, a sentir com menos culpa, a existir com mais gentileza. Por me ouvir sem pressa, por me ensinar a me escutar, por me acolher nas minhas verdades e contradições. A terapia pode ter terminado, mas a sua presença segue comigo em cada novo passo que dou com mais leveza. Gratidão, fé e esperança.",
      author: "Paciente",
      role: "Depoimento Real"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-therapy-lilac/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que encontraram na terapia um caminho para o bem-estar emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl text-primary/30 mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  <p className="text-sm text-therapy-blue-gray">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            *Os depoimentos apresentados são baseados em experiências reais, 
            com nomes alterados para preservar a privacidade e confidencialidade dos pacientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;