import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Contact = () => {

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-therapy-lilac/20 to-therapy-beige">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar sua consulta ou esclarecer dúvidas. Estou aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-medium text-primary">
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-primary mb-6">
                  Agendamento
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Para agendar sua primeira consulta ou sessões de retorno, 
                  entre em contato através dos canais abaixo:
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left p-6 h-auto border-primary/20 hover:bg-primary/5"
                    asChild
                  >
                    <a href="https://wa.me/5511991831705" target="_blank" rel="noopener noreferrer">
                      <div>
                        <div className="font-medium text-primary">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">(11) 99183-1705</div>
                      </div>
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left p-6 h-auto border-primary/20 hover:bg-primary/5"
                    asChild
                  >
                    <a href="mailto:anakaren.psicologa16@gmail.com">
                      <div>
                        <div className="font-medium text-primary">E-mail</div>
                        <div className="text-sm text-muted-foreground">anakaren.psicologa16@gmail.com</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-therapy-rose/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-medium text-primary mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábados: 8h às 12h</p>
                  <p className="text-sm text-therapy-blue-gray pt-2">
                    *Atendimento apenas online
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;