'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// Enhanced navigation with dropdown menus
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'For Students', 
    href: '/students',
    dropdown: [
      { name: 'Campus Placements', href: '/students/campus-placements' },
      { name: 'Skill Development', href: '/students/skill-development' },
      { name: 'Higher Education', href: '/students/higher-education' },
      { name: 'Career Resources', href: '/students/career-resources' },
      { name: 'Success Stories', href: '/students/success-stories' },
    ] 
  },
  { 
    name: 'For Colleges', 
    href: '/colleges',
    dropdown: [
      { name: 'Placement Management', href: '/colleges/placement-management' },
      { name: 'Student Analytics', href: '/colleges/student-analytics' },
      { name: 'Employer Connections', href: '/colleges/employer-connections' },
      { name: 'Integration Services', href: '/colleges/integration-services' },
      { name: 'Testimonials', href: '/colleges/testimonials' },
    ]
  },
  { 
    name: 'For Employers', 
    href: '/employers',
    dropdown: [
      { name: 'Campus Hiring', href: '/employers/campus-hiring' },
      { name: 'Talent Intelligence', href: '/employers/talent-intelligence' },
      { name: 'Diversity Hiring', href: '/employers/diversity-hiring' },
      { name: 'Internship Programs', href: '/employers/internship-programs' },
      { name: 'Partner Success Stories', href: '/employers/success-stories' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Thryvo</span>
            {/* Replace with actual logo when available */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold mr-2">
                T
              </div>
              <span className="text-xl font-bold text-gray-900">Thryvo</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            item.dropdown ? (
              <Popover key={item.name} className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 ${open ? 'rotate-180' : ''} transition-transform duration-200`} aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 z-10 mt-3 w-60 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm font-medium leading-6 text-gray-900 hover:bg-gray-50"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <Link
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-indigo-600"
                          >
                            View all <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            )
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <button
            type="button"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <Link 
            href="/login" 
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
          >
            Log in
          </Link>
          <Link 
            href="/contact" 
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Search Bar - Hidden by default */}
      <Transition
        show={searchOpen}
        as={Fragment}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-24"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-24"
        leaveTo="opacity-0 max-h-0"
      >
        <div className="bg-white border-t border-gray-200 py-3 px-4 shadow-lg">
          <div className="mx-auto max-w-7xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 bg-gray-50 py-2.5 pl-10 pr-3.5 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                placeholder="Search for resources, guides, and more..."
                autoComplete="off"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 p-1 text-white hover:bg-indigo-700"
                onClick={() => setSearchOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Transition>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Thryvo</span>
              {/* Replace with actual logo when available */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold mr-2">
                  T
                </div>
                <span className="text-xl font-bold text-gray-900">Thryvo</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-1.5 text-sm leading-7 text-gray-600 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
