import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Globe2, Mail, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080A] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="MezuStudio home">
              <Image
                src="/Logo.png"
                alt="MezuStudio"
                width={190}
                height={57}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{siteConfig.statement}</p>
            <div className="mt-5 flex gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-400" title="Social placeholder">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cyan-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-cyan-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
              <li className="pt-2">
                <Link href="/privacy-policy" className="hover:text-cyan-300">
                  Privacy Policy
                </Link>
                <span className="mx-2 text-zinc-700">/</span>
                <Link href="/terms" className="hover:text-cyan-300">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} MezuStudio. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-cyan-300">
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
