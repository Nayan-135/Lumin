'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import HomePage from '@/components/pages/home'
import CoreConceptsPage from '@/components/pages/core-concepts'
import GettingStartedPage from '@/components/pages/getting-started'
import APIReferencePage from '@/components/pages/api-reference'
import SSRPage from '@/components/pages/ssr'
import ComparisonPage from '@/components/pages/comparison'
import RoadmapPage from '@/components/pages/roadmap'
import DevToolsPage from '@/components/pages/devtools'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('/')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage onNavigate={setCurrentPage} />
      case '/getting-started':
        return <GettingStartedPage />
      case '/core-concepts':
        return <CoreConceptsPage />
      case '/api':
        return <APIReferencePage />
      case '/ssr':
        return <SSRPage />
      case '/comparison':
        return <ComparisonPage />
      case '/roadmap':
        return <RoadmapPage />
      case '/devtools':
        return <DevToolsPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <div className="flex pt-14">
        {/* Sidebar */}
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 md:py-16">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}
