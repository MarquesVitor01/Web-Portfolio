"use client"

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
  Database,
  BarChart3
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Card de link de contato
function ContactLink({ 
  icon: Icon, 
  label, 
  value, 
  href,
  color
}: { 
  icon: React.ElementType
  label: string
  value: string
  href: string
  color: 'primary' | 'secondary' | 'accent'
}) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
    accent: 'bg-accent/10 text-accent hover:bg-accent/20'
  }

  return (
    <a 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className={`p-3 rounded-lg ${colorClasses[color]} transition-colors`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-foreground font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  )
}

// Formulário de contato
function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    
    // Simulação de envio (em produção, integrar com API real)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset após 3 segundos
    setTimeout(() => setFormState('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="p-4 rounded-full bg-accent/10 text-accent mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h3>
        <p className="text-muted-foreground">
          Obrigado pelo contato. Responderei em breve!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Nome
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            value={formData.name}
            onChange={handleChange}
            className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-mail
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mensagem
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <textarea
            id="message"
            name="message"
            placeholder="Sua mensagem..."
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground resize-none transition-all"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full gradient-data text-primary-foreground font-semibold py-6"
        disabled={formState === 'loading'}
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar Mensagem
          </>
        )}
      </Button>
    </form>
  )
}

export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-32 relative">
      {/* Grid de fundo */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Vamos conversar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="gradient-data-text">Contato</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Estou aberto a novas oportunidades e parcerias. Vamos transformar dados em decisões juntos!
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full gradient-data" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Links de contato */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Informações de Contato
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <ContactLink
                icon={Mail}
                label="E-mail"
                value="marque.vitor47@gmail.com"
                href="mailto:marque.vitor47@gmail.com"
                color="primary"
              />
              <ContactLink
                icon={Phone}
                label="Telefone"
                value="(11) 94051-8638"
                href="tel:+5511940518638"
                color="secondary"
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value="/in/vitormarquessilva"
                href="https://linkedin.com/in/vitormarquessilva"
                color="primary"
              />
              <ContactLink
                icon={Github}
                label="GitHub"
                value="/vitormarquessilva"
                href="https://github.com/vitormarquessilva"
                color="accent"
              />
            </div>
          </div>

          {/* Formulário */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer do site
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo e frase */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Database className="w-6 h-6 text-primary" />
              <BarChart3 className="w-4 h-4 text-secondary absolute -bottom-1 -right-1" />
            </div>
            <span className="font-mono text-lg font-bold">
              <span className="text-primary">Vitor</span>
              <span className="text-foreground">Marques</span>
              <span className="text-muted-foreground">.data</span>
            </span>
          </div>
          
          {/* Links sociais */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:marque.vitor47@gmail.com"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/vitormarquessilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/vitormarquessilva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Frase marcante */}
        <div className="text-center mb-8">
          <blockquote className="text-muted-foreground italic text-sm max-w-2xl mx-auto">
            &quot;Dados isolados são apenas registros. Tratados e arquitetados, transformam-se em poder de decisão.&quot;
          </blockquote>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Vitor Marques Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
