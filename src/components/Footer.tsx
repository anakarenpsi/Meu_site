const Footer = () => {
  return (
    <footer className="bg-therapy-blue-gray/10 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-light text-primary">Ana Karen</h3>
          <p className="text-muted-foreground">
            Psicóloga CRP 06/148149
          </p>
          <p className="text-sm text-therapy-blue-gray max-w-2xl mx-auto">
            O atendimento psicológico é regido pelo sigilo profissional e código de ética da profissão. 
            Este site tem caráter informativo e não substitui uma consulta presencial.
          </p>
          
          <div className="pt-8 border-t border-therapy-blue-gray/20">
            <p className="text-sm text-therapy-blue-gray">
              © {new Date().getFullYear()} Ana Karen - Psicóloga. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;