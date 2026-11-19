import { COMPANY_INFO, SERVICES, type RoutePath } from '../data/companyData';
import { NesyerLogo } from './NesyerLogo';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent, route: RoutePath) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Motto */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <NesyerLogo variant="dark" className="h-8 w-auto shrink-0" />
              <span>{COMPANY_INFO.name}</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Mitra Independent System Integrator pilihan perbankan dan korporasi nasional untuk
              solusi gateway pembayaran, middleware, serta integrasi TI menyeluruh.
            </p>
            <p className="text-sm italic text-slate-300">“{COMPANY_INFO.motto}”</p>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white">Perusahaan</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', path: '/' as RoutePath },
                { label: 'About Us', path: '/about' as RoutePath },
                { label: 'Service', path: '/service' as RoutePath },
                { label: 'Portofolio', path: '/portofolio' as RoutePath },
                { label: 'Client', path: '/client' as RoutePath },
                { label: 'Contact', path: '/contact' as RoutePath },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={`#${link.path}`}
                    onClick={(e) => handleNav(e, link.path)}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">Aplikasi & Solusi</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#/service"
                    onClick={(e) => handleNav(e, '/service')}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Head Office */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">{COMPANY_INFO.headOffice.label}</h3>
            <address className="not-italic text-sm text-slate-400 space-y-2 leading-relaxed">
              <p className="text-slate-300 font-medium">{COMPANY_INFO.headOffice.building}</p>
              <p>{COMPANY_INFO.headOffice.street}</p>
              <p>{COMPANY_INFO.headOffice.district}</p>
              <div className="pt-2 space-y-1 font-mono text-xs text-slate-300 tabular-nums">
                <p>
                  <a
                    href={COMPANY_INFO.headOffice.phoneHref}
                    className="hover:text-white transition-colors"
                  >
                    Telp: {COMPANY_INFO.headOffice.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${COMPANY_INFO.headOffice.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.headOffice.email}
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Seluruh hak cipta dilindungi.</p>
          <p>Grand Slipi Tower Lt. 42 · Palmerah, Jakarta Barat</p>
        </div>
      </div>
    </footer>
  );
}
