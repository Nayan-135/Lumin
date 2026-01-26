'use client'

import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">✦</div>
          <span className="text-lg font-semibold">Lumin</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/getting-started" className="hover:text-primary transition-colors">
            Guide
          </Link>
          <Link href="/api" className="hover:text-primary transition-colors">
            API
          </Link>
          <a 
            href="https://github.com/Nayan-135/Lumin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a 
            href="https://www.npmjs.com/package/@nayan-ghate/lumin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            npm
          </a>
        </nav>
      </div>
    </header>
  )
}
