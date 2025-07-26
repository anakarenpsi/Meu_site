import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 11) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Por favor, insira seu nome");
      return false;
    }
    
    if (!formData.email.trim()) {
      setError("Por favor, insira seu e-mail");
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Por favor, insira um e-mail válido");
      return false;
    }
    
    if (formData.phone && formData.phone.replace(/\D/g, '').length < 10) {
      setError("Por favor, insira um telefone válido (com DDD)");
      return false;
    }
    
    if (!formData.message.trim()) {
      setError("Por favor, insira sua mensagem");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);

    // Criamos um formulário HTML tradicional para enviar
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/anakaren.psicologa16@gmail.com';
    form.method = 'POST';
    form.style.display = 'none';

    // Adicionamos os campos ocultos do FormSubmit
    const nextInput = document.createElement('input');
    nextInput.type = 'hidden';
    nextInput.name = '_next';
    nextInput.value = window.location.href;
    form.appendChild(nextInput);

    const captchaInput = document.createElement('input');
    captchaInput.type = 'hidden';
    captchaInput.name = '_captcha';
    captchaInput.value = 'false';
    form.appendChild(captchaInput);

    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = 'Novo contato do site!';
    form.appendChild(subjectInput);

    const templateInput = document.createElement('input');
    templateInput.type = 'hidden';
    templateInput.name = '_template';
    templateInput.value = 'table';
    form.appendChild(templateInput);

    // Adicionamos os dados do formulário
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Adicionamos o formulário ao DOM e submetemos
    document.body.appendChild(form);
    form.submit();

    // Mostramos o estado de sucesso (opcional)
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-primary mb-2">Mensagem Enviada!</h3>
        <p className="text-muted-foreground mb-6">
          Obrigada por entrar em contato! Retornarei em breve.
        </p>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          }}
        >
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Nome
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
            disabled={isLoading}
            className="border-therapy-blue-gray/20 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            disabled={isLoading}
            className="border-therapy-blue-gray/20 focus:border-primary"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Telefone (opcional)
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(11) 99999-9999"
          disabled={isLoading}
          className="border-therapy-blue-gray/20 focus:border-primary"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Conte-me como posso ajudá-la..."
          disabled={isLoading}
          className="min-h-32 border-therapy-blue-gray/20 focus:border-primary resize-none"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium rounded-full"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
};

export default ContactForm;