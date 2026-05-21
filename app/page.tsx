import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection, Footer } from '@/components/contact-section'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Navegação fixa no topo */}
      <Navbar />
      
      {/* Seção Hero - Apresentação principal */}
      <HeroSection />
      
      {/* Seção Sobre Mim - História e formação */}
      <AboutSection />
      
      {/* Seção Habilidades - Stack técnica */}
      <SkillsSection />
      
      {/* Seção Projetos - Portfólio de dados */}
      <ProjectsSection />
      
      {/* Seção Experiência - Timeline profissional */}
      <ExperienceSection />
      
      {/* Seção Contato - Formulário e links */}
      <ContactSection />
      
      {/* Rodapé */}
      <Footer />
    </main>
  )
}
