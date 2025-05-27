'use client'

import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { cn } from '@/lib/utils/cn'

type NavItem = {
  name: string
  link: string
  icon?: React.ReactNode
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    const previous = scrollYProgress.getPrevious()

    if (typeof current === 'number' && typeof previous === 'number') {
      const direction = current - previous

      if (current <= 0.05) {
        setVisible(true)
      } else {
        setVisible(direction < 0)
      }
    }
  })

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          'fixed top-4 inset-x-4 sm:inset-x-0 sm:top-6 mx-auto z-[5000] px-4 sm:px-6',
          'rounded-full shadow-md bg-white dark:bg-black border border-transparent dark:border-white/[0.2]',
          'flex items-center justify-between max-w-fit py-2 sm:py-2.5',
          className
        )}
      >
        {/* Desktop Nav */}
        <div className='hidden sm:flex items-center space-x-4 sm:space-x-6'>
          {navItems.map((navItem, idx) => (
            <a
              key={`link-desktop-${navItem.name || idx}`}
              href={navItem.link}
              className={cn(
                'flex items-center space-x-1 text-sm px-3 py-1.5 rounded-full transition-colors',
                'dark:text-neutral-50 text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-300'
              )}
            >
              {navItem.icon && <span>{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className='sm:hidden relative'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-neutral-700 dark:text-neutral-50 focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black border dark:border-white/[0.2] z-50'
              >
                <div className='py-1'>
                  {navItems.map((navItem, idx) => (
                    <a
                      key={`link-mobile-${navItem.name || idx}`}
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className='block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800'
                    >
                      {navItem.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
