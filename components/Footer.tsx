//components/Footer.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-blue-950 text-white px-2">
      <div className="mx-auto max-w-6xl py-4 container-px">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative h-18 w-40 bg-transparent">
              <Image
                src="/logo-placeholder-white.png"
                alt="Inpsyte"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="mt-4 text-sm text-white/80 uppercase">Your source for psychological services in the greater Cincinnati area.</p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide">Useful Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link className="hover:text-white" href="#top">Home</Link></li>
              <li><Link className="hover:text-white" href="#services">Services</Link></li>
              <li><Link className="hover:text-white" href="#faqs">FAQs</Link></li>
              <li><Link className="hover:text-white" href="#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide">Contact & Location</h3>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>1320 Nagel Road PO Box 54864, Cincinnati, OH 45255</p>
              <p><a className="hover:text-white" href="tel:15136044378">(513) 604-4378</a></p>
              <p><a className="hover:text-white" href="mailto:weisman.inpsyte@inpsytellc.org">weisman.inpsyte@inpsytellc.org</a></p>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-white/15 text-center pt-4 text-xs text-white/70">
          Copyright © {new Date().getFullYear()} Inpsyte, LLC.
        </div>
      </div>
    </footer>
  )
}

export default Footer