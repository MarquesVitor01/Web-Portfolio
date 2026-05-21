"use client"

import { GraduationCap, Award, User, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Card de formação/certificação
function CredentialCard({ 
  icon: Icon, 
  title, 
  institution, 
  period, 
  status 
}: { 
  icon: React.ElementType
  title: string
  institution: string
  period: string
  status?: string
}) {
  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
      <CardContent className="p-4 flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-sm leading-tight">{title}</h4>
          <p className="text-muted-foreground text-xs mt-1">{institution}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-primary">{period}</span>
            {status && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent">
                {status}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 relative">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            Conheça minha trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre <span className="gradient-data-text">Mim</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full gradient-data" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna de texto */}
          <div className="space-y-6">
            {/* Card de destaque */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Visão Sistêmica Ponta a Ponta</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Profissional com perfil analítico e forte habilidade de comunicação, capaz de traduzir demandas complexas 
                  de negócio em arquiteturas de dados otimizadas. Minha experiência combina engenharia de dados com 
                  desenvolvimento full stack, permitindo criar soluções completas desde a aplicação até o insight.
                </p>
              </CardContent>
            </Card>

            {/* Texto principal */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex gap-3">
                <User className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p>
                  Atuo na interseção entre <span className="text-foreground font-medium">tecnologia e negócios</span>, 
                  construindo pipelines robustos que transformam dados brutos em ativos estratégicos. Minha facilidade 
                  em dialogar com equipes técnicas e stakeholders me permite atuar como ponte entre requisitos de 
                  negócio e implementações técnicas.
                </p>
              </div>
              
              <div className="flex gap-3">
                <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                <p>
                  Busco constantemente aprimorar meus conhecimentos em <span className="text-foreground font-medium">
                  arquiteturas de dados modernas</span>, cloud computing e práticas de governança. Acredito que dados 
                  bem organizados e acessíveis são a base para decisões inteligentes e vantagem competitiva.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna de credenciais */}
          <div className="space-y-6">
            {/* Formação Acadêmica */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" />
                Formação Acadêmica
              </h3>
              <div className="space-y-3">
                <CredentialCard
                  icon={GraduationCap}
                  title="Análise e Desenvolvimento de Sistemas"
                  institution="UniFECAF"
                  period="Conclusão: 07/2025"
                />
                <CredentialCard
                  icon={GraduationCap}
                  title="Técnico em Administração"
                  institution="ETEC - Escola Técnica Estadual"
                  period="Concluído em 2021"
                />
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certificações
              </h3>
              <div className="space-y-3">
                <CredentialCard
                  icon={Award}
                  title="Google Advanced Data Analytics"
                  institution="Coursera - Google"
                  period="04/2026"
                />
                <CredentialCard
                  icon={Award}
                  title="AWS/Santander Tech"
                  institution="AWS & Santander"
                  period="2025"
                  status="Em andamento"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
