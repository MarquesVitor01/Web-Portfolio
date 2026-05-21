import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Vitor Marques Silva | Engenheiro de Dados & Full Stack',
  description: 'Especialista na construção de pipelines de dados modernos, arquiteturas de Big Data (Medallion) e ecossistemas escaláveis de nuvem. Portfólio profissional de Engenharia e Análise de Dados.',
  keywords: ['Engenheiro de Dados', 'Data Engineer', 'Full Stack', 'AWS', 'Azure', 'Databricks', 'PySpark', 'Power BI', 'Python', 'React'],
  authors: [{ name: 'Vitor Marques Silva' }],
  creator: 'Vitor Marques Silva',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Vitor Marques Silva | Engenheiro de Dados & Full Stack',
    description: 'Especialista na construção de pipelines de dados modernos e arquiteturas de Big Data.',
    siteName: 'VitorMarques.data',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitor Marques Silva | Engenheiro de Dados & Full Stack',
    description: 'Especialista na construção de pipelines de dados modernos e arquiteturas de Big Data.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
