"use client"

import { useEffect, useState, useRef } from 'react'
import { ArrowDown, FileText, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Efeito de digitação para o subtítulo
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          // Pausa antes de deletar
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <span className="inline-flex items-center">
      <span className="gradient-data-text">{displayText}</span>
      <span className="w-0.5 h-6 bg-primary animate-pulse ml-1" />
    </span>
  )
}

// Partículas de fundo animadas
function DataParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Ajusta tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Partículas
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    // Animação
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Atualiza posição
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Desenha partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 210, 255, ${particle.opacity})`
        ctx.fill()

        // Conecta partículas próximas
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export function HeroSection() {
  const roles = [
    'Engenheiro de Dados',
    'Analista de Dados',
    'Data Specialist',
    'Cloud Data Architect'
  ]

  const scrollToProjects = () => {
    const element = document.querySelector('#projetos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background">
      {/* Partículas de fundo */}
      <DataParticles />

      {/* Gradiente de overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge de destaque */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Aberto a novas oportunidades</span>
        </div>

        {/* Nome */}
        <h1 
          className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-foreground">Vitor </span>
          <span className="gradient-data-text">Marques Silva</span>
        </h1>

        {/* Subtítulo com efeito de digitação */}
        <div 
          className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl font-medium mb-8 h-10"
          style={{ animationDelay: '0.2s' }}
        >
          <TypewriterText texts={roles} />
        </div>

        {/* Descrição */}
        <p 
          className="animate-fade-in-up max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed mb-10"
          style={{ animationDelay: '0.3s' }}
        >
          Especialista na construção de{' '}
          <span className="text-primary font-medium">pipelines de dados modernos</span>,{' '}
          arquiteturas de{' '}
          <span className="text-secondary font-medium">Big Data (Medallion)</span>{' '}
          e ecossistemas escaláveis de nuvem. Transformo dados brutos em{' '}
          <span className="text-accent font-medium">insights estratégicos</span>, conectando a engenharia de dados ao Business Intelligence para decisões data-driven.
        </p>

        {/* Botões de ação */}
        <div 
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <Button 
            size="lg" 
            className="gradient-data text-primary-foreground font-semibold px-8 py-6 text-base animate-glow-pulse hover:scale-105 transition-transform"
            onClick={scrollToProjects}
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-base hover:scale-105 transition-all"
            onClick={scrollToContact}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contato
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-muted-foreground hover:text-primary font-semibold px-8 py-6 text-base hover:scale-105 transition-all"
            asChild
          >
            <a href="/cv/Vitor-Marques-Silva-Curriculo.pdf" download>
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Indicador de scroll */}
        <div 
          className="animate-fade-in-up absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animationDelay: '0.6s' }}
        >
        </div>
      </div>
    </section>
  )
}
