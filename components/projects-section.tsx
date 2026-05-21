"use client"

import { useState } from 'react'
import { 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Database,
  Workflow,
  Cloud,
  BarChart3,
  Zap,
  Layers
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Tipo para projetos
interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  icon: React.ElementType
  color: 'primary' | 'secondary' | 'accent'
  highlights: string[]
}

// Dados dos projetos
const projects: Project[] = [
  {
    id: 'lakehouse-ecommerce',
    title: 'Data Lakehouse E-commerce Brasileiro',
    subtitle: 'Pipeline Medallion - Processamento de Big Data com PySpark & Databricks',
    description: 'Pipeline end-to-end simulando ambiente produtivo utilizando o dataset de E-commerce do Kaggle. Ingestão de dados brutos para Databricks Volumes (Bronze); ETL distribuído com PySpark para limpeza, tipagem e enriquecimento de dados relacionais de vendas e clientes (Silver); e tabelas de agregados analíticos construídas em Spark SQL (Gold) para consumo imediato e otimizado no Power BI.',
    technologies: ['Databricks', 'PySpark', 'Spark SQL', 'Delta Lake', 'Power BI'],
    icon: Layers,
    color: 'primary',
    highlights: [
      'Arquitetura Medallion completa (Bronze → Silver → Gold)',
      'ETL distribuído processando milhões de registros',
      'Dashboards focados em saúde operacional e logística',
      'Análise de feedback de clientes com métricas de qualidade'
    ]
  },
  {
    id: 'nexus-data',
    title: 'Nexus Data Analytics',
    subtitle: 'Pipeline em Tempo Real - Automação de Business Logic com PostgreSQL & PL/pgSQL',
    description: 'Ecossistema de e-commerce completo com banco de dados relacional robusto. Modelagem e normalização de dados com escrita de Triggers e Procedures nativas em PL/pgSQL para processamento em tempo real a cada inserção de venda. Criação de Views agregadas no banco para otimização de performance.',
    technologies: ['PostgreSQL', 'PL/pgSQL', 'Power BI', 'DAX', 'Modelagem Relacional'],
    icon: Database,
    color: 'secondary',
    highlights: [
      'Triggers e Procedures para processamento em tempo real',
      'Views agregadas otimizadas para performance',
      'Dashboard executivo com medidas DAX avançadas',
      'Média Móvel de 7 dias e formatação monetária unificada'
    ]
  },
  {
    id: 'azure-enterprise',
    title: 'Cloud Data Pipeline Azure Enterprise',
    subtitle: 'Orquestração e Ingestão de Larga Escala via ADF',
    description: 'Engenharia de pipeline voltada à ingestão, processamento e análise corporativa. Orquestração automatizada e agendada via Azure Data Factory integrando consumo de APIs externas. Armazenamento em Data Lake Gen2 estruturado no padrão Medallion.',
    technologies: ['Azure Data Factory', 'Azure Databricks', 'Data Lake Gen2', 'Apache Spark', 'Delta Lake'],
    icon: Cloud,
    color: 'accent',
    highlights: [
      'Orquestração automatizada e agendada',
      'Integração com APIs externas',
      'Data Lake Gen2 no padrão Medallion',
      'Delta Lake para atomicidade e governança'
    ]
  }
]

// Card de projeto expandível
function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = project.icon

  const colorClasses = {
    primary: {
      border: 'hover:border-primary/40',
      icon: 'bg-primary/10 text-primary',
      badge: 'bg-primary/10 text-primary border-primary/20',
      glow: 'shadow-primary/10'
    },
    secondary: {
      border: 'hover:border-secondary/40',
      icon: 'bg-secondary/10 text-secondary',
      badge: 'bg-secondary/10 text-secondary border-secondary/20',
      glow: 'shadow-secondary/10'
    },
    accent: {
      border: 'hover:border-accent/40',
      icon: 'bg-accent/10 text-accent',
      badge: 'bg-accent/10 text-accent border-accent/20',
      glow: 'shadow-accent/10'
    }
  }

  const colors = colorClasses[project.color]

  return (
    <Card className={`bg-card/50 border-border/50 ${colors.border} transition-all duration-300 group hover:shadow-xl ${colors.glow}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-bold text-foreground leading-tight">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`px-2.5 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Descrição curta */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Conteúdo expandível */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-border/50 space-y-4">
            {/* Descrição completa */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Destaques */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Destaques do Projeto
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Botão de expandir */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-muted-foreground hover:text-primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Ver menos
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Ver detalhes
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projetos" className=" relative">
      {/* Grid de fundo */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
            Portfólio de dados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos de <span className="gradient-data-text">Destaque</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Soluções end-to-end demonstrando expertise em arquiteturas de dados modernas
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full gradient-data" />
        </div>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interessado em ver mais projetos ou discutir soluções?
          </p>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/MarquesVitor01" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
