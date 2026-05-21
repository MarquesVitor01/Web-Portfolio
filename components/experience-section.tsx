"use client"

import { 
  Building2, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  CheckCircle2,
  Briefcase
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Tipo para experiência
interface Experience {
  id: string
  company: string
  role: string
  period: string
  location?: string
  description: string
  achievements: string[]
  technologies?: string[]
}

// Dados da experiência profissional
const experiences: Experience[] = [
  {
    id: 'autonomo',
    company: 'Autônomo',
    role: 'Especialista em Dados (Análise e Engenharia de Dados)',
    period: '10/2025 - Atual',
    location: 'São Paulo, SP',
    description: 'Atuação independente no desenvolvimento, migração e otimização de arquiteturas de dados sob demanda. Engenharia de pipelines para integração de bases descentralizadas, modelagem de bancos de dados relacionais e não-relacionais, automação de rotinas de ETL/ELT e criação de soluções analíticas customizadas de Business Intelligence para empresas e clientes corporativos.',
    achievements: [
      'Desenvolvimento de pipelines de dados escaláveis para clientes corporativos',
      'Migração e otimização de arquiteturas de dados legadas para cloud',
      'Automação de rotinas de ETL/ELT para integração de bases descentralizadas',
      'Criação de dashboards e relatórios analíticos customizados em Power BI'
    ],
    technologies: ['AWS', 'Azure', 'Databricks', 'Python', 'PySpark', 'SQL', 'Power BI', 'Delta Lake']
  },
  {
    id: 'g-maps',
    company: 'G. Maps',
    role: 'Analista de Dados',
    period: '06/2023 - 10/2025',
    location: 'São Paulo, SP',
    description: 'Responsável pela estruturação e análise de bases de dados para identificação de padrões operacionais e oportunidades estratégicas. Desenvolvimento de relatórios gerenciais e dashboards executivos para acompanhamento de KPIs.',
    achievements: [
      'Redesenho de pipelines de dados na GCP, gerando aumento de 35% na eficiência operacional',
      'Implementação de monitoramento e alertas automáticos para detecção de inconsistências',
      'Melhoria drástica na confiabilidade dos dados para suporte à tomada de decisão da liderança',
      'Desenvolvimento de dashboards executivos para acompanhamento de KPIs e OKRs'
    ],
    technologies: ['GCP', 'BigQuery', 'Power BI', 'Python', 'SQL']
  }
]

// Componente de item na timeline
function TimelineItem({ experience, isLast }: { experience: Experience; isLast: boolean }) {
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Linha vertical da timeline */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[15px] top-12 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-primary/50 to-border/30" />
      )}

      {/* Marcador da timeline */}
      <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-primary" />
      </div>

      {/* Card de experiência */}
      <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-bold text-foreground">{experience.company}</h3>
              </div>
              <p className="text-primary font-medium">{experience.role}</p>
            </div>
            
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              {experience.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Descrição */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Conquistas */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              Principais Conquistas
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologias */}
          {experience.technologies && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 md:py-32 relative bg-muted/20">
      {/* Efeito de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            Trajetória profissional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência <span className="gradient-data-text">Profissional</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Jornada de crescimento e entrega de resultados em engenharia e análise de dados
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full gradient-data" />
        </div>

        {/* Timeline de experiências */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={experience.id} 
              experience={experience} 
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Mensagem motivacional */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20 inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground italic">
                &quot;Cada projeto é uma oportunidade de transformar dados brutos em insights que impulsionam decisões estratégicas.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
