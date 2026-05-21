"use client"

import { 
  Cloud, 
  Database, 
  BarChart2, 
  Layers, 
  Sparkles,
  Server,
  Workflow,
  Table2,
  PieChart,
  LineChart,
  Cog,
  Gauge
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Tipo para as tecnologias
interface Technology {
  name: string
  icon?: React.ElementType
}

// Tipo para as categorias
interface SkillCategory {
  title: string
  description: string
  icon: React.ElementType
  color: 'primary' | 'secondary' | 'accent'
  technologies: Technology[]
}

// Badge de tecnologia com hover
function TechBadge({ name, color }: { name: string; color: 'primary' | 'secondary' | 'accent' }) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40',
    accent: 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:border-accent/40'
  }

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${colorClasses[color]}`}>
      {name}
    </span>
  )
}

// Dados das categorias de habilidades
const skillCategories: SkillCategory[] = [
  {
    title: 'Linguagens & SQL',
    description: 'Domínio de linguagens de programação e consulta para manipulação e transformação de dados',
    icon: Database,
    color: 'primary',
    technologies: [
      { name: 'SQL Avançado' },
      { name: 'PL/pgSQL' },
      { name: 'Spark SQL' },
      { name: 'Python' },
      { name: 'PySpark' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'DAX' },
    ]
  },
  {
    title: 'Engenharia de Dados & Cloud',
    description: 'Construção de pipelines escaláveis e arquiteturas de dados modernas em ambientes cloud',
    icon: Cloud,
    color: 'secondary',
    technologies: [
      { name: 'AWS (EC2, S3, Glue, Athena, Lambda, Redshift, Aurora)' },
      { name: 'Azure (Data Factory, Databricks, Storage)' },
      { name: 'GCP (BigQuery, Cloud Storage)' },
      { name: 'Apache Spark' },
      { name: 'Delta Lake' },
      { name: 'Arquitetura Medalhão' },
      { name: 'ETL/ELT' },
      { name: 'Modelagem Dimensional' },
    ]
  },
  {
    title: 'Data Analytics & BI',
    description: 'Análise de dados, criação de dashboards e storytelling para tomada de decisão',
    icon: BarChart2,
    color: 'accent',
    technologies: [
      { name: 'Microsoft Power BI' },
      { name: 'Análise Exploratória' },
      { name: 'Storytelling com Dados' },
      { name: 'Dashboards Executivos' },
      { name: 'KPIs e OKRs' },
      { name: 'Excel Avançado' },
      { name: 'Governança de Dados' },
      { name: 'Big Data' },
    ]
  }
]

// Card de categoria de habilidades
function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon
  
  const iconColorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent'
  }

  const borderColorClasses = {
    primary: 'hover:border-primary/30',
    secondary: 'hover:border-secondary/30',
    accent: 'hover:border-accent/30'
  }

  return (
    <Card className={`bg-card/50 border-border/50 ${borderColorClasses[category.color]} transition-all duration-300 h-full group hover:shadow-lg hover:shadow-${category.color}/5`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${iconColorClasses[category.color]} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-lg font-bold text-foreground">{category.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} color={category.color} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Cards de destaque com ícones
function HighlightCard({ icon: Icon, title, value, color }: { icon: React.ElementType; title: string; value: string; color: 'primary' | 'secondary' | 'accent' }) {
  const colorClasses = {
    primary: 'from-primary/20 to-primary/5 border-primary/30',
    secondary: 'from-secondary/20 to-secondary/5 border-secondary/30',
    accent: 'from-accent/20 to-accent/5 border-accent/30'
  }

  const iconClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent'
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[color]} border p-4 group hover:scale-105 transition-transform duration-300`}>
      <Icon className={`absolute -right-2 -bottom-2 w-16 h-16 ${iconClasses[color]} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 md:py-32 relative bg-muted/20">
      {/* Efeito de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Stack tecnológica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades <span className="gradient-data-text">Técnicas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Domínio de tecnologias modernas para construir soluções de dados completas, da ingestão ao insight
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full gradient-data" />
        </div>

        {/* Cards de destaque */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <HighlightCard icon={Cloud} title="Clouds" value="AWS & Azure" color="primary" />
          <HighlightCard icon={Database} title="Databases" value="SQL & NoSQL" color="secondary" />
          <HighlightCard icon={Layers} title="Arquitetura" value="Medallion" color="accent" />
          <HighlightCard icon={Sparkles} title="Foco" value="Big Data" color="primary" />
        </div>

        {/* Grid de categorias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Ícones de tecnologias populares */}
        <div className="mt-12 pt-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Ferramentas e plataformas principais
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Server className="w-5 h-5" /> <span className="text-sm">AWS</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Cloud className="w-5 h-5" /> <span className="text-sm">Azure</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
              <Workflow className="w-5 h-5" /> <span className="text-sm">Databricks</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
              <Table2 className="w-5 h-5" /> <span className="text-sm">Spark</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <PieChart className="w-5 h-5" /> <span className="text-sm">Power BI</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <LineChart className="w-5 h-5" /> <span className="text-sm">Python</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Cog className="w-5 h-5" /> <span className="text-sm">Delta Lake</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
              <Database className="w-5 h-5" /> <span className="text-sm">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Gauge className="w-5 h-5" /> <span className="text-sm">DAX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
