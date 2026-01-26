'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigationConfig = [
  {
    text: 'Introduction',
    items: [
      { text: 'What is Lumin?', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
    ],
  },
  {
    text: 'Core',
    items: [
      { text: 'Core Concepts', link: '/core-concepts' },
      { text: 'API Reference', link: '/api' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'SSR & Hydration', link: '/ssr' },
      { text: 'DevTools', link: '/devtools' },
    ],
  },
  {
    text: 'About',
    items: [
      { text: 'Why Lumin?', link: '/comparison' },
      { text: 'Roadmap', link: '/roadmap' },
    ],
  },
]

export default function Sidebar({
  currentPage,
  onPageChange,
}: {
  currentPage: string
  onPageChange: (page: string) => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <aside className="hidden lg:block fixed left-0 top-14 h-[calc(100vh-56px)] w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <nav className="p-6 space-y-8">
        {navigationConfig.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3">
              {section.text}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <button
                    onClick={() => onPageChange(item.link)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-md transition-colors ${
                      currentPage === item.link
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
