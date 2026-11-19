import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicePage } from './pages/ServicePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ClientPage } from './pages/ClientPage';
import { ContactPage } from './pages/ContactPage';
import type { RoutePath } from './data/companyData';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/about',
  '/service',
  '/portofolio',
  '/client',
  '/contact',
];

function parseHashRoute(): RoutePath {
  const rawHash = window.location.hash.replace(/^#/, '').split('?')[0].toLowerCase();
  if (!rawHash || rawHash === '/') return '/';
  const normalized = (rawHash.startsWith('/') ? rawHash : `/${rawHash}`).replace(/\/$/, '') as RoutePath;
  return VALID_ROUTES.includes(normalized) ? normalized : '/';
}

const PAGE_TITLES: Record<RoutePath, string> = {
  '/': 'PT. Nesyer Lintas Teknologi | System Integrator & Solusi Gateway Perbankan',
  '/about': 'About | PT. Nesyer Lintas Teknologi',
  '/service': 'Service & Aplikasi | PT. Nesyer Lintas Teknologi',
  '/portofolio': 'Portofolio Implementasi | PT. Nesyer Lintas Teknologi',
  '/client': 'Klien Institusi | PT. Nesyer Lintas Teknologi',
  '/contact': 'Hubungi Kami | PT. Nesyer Lintas Teknologi',
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() => parseHashRoute());
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentRoute];
  }, [currentRoute]);

  const navigate = useCallback((route: RoutePath, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    } else if (route !== '/service') {
      setSelectedServiceId(null);
    }

    const targetHash = `#${route}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar currentRoute={currentRoute} onNavigate={(route) => navigate(route)} />

      <main className="flex-1">
        {currentRoute === '/' && <HomePage onNavigate={navigate} />}
        {currentRoute === '/about' && <AboutPage onNavigate={navigate} />}
        {currentRoute === '/service' && (
          <ServicePage initialServiceId={selectedServiceId} onNavigate={navigate} />
        )}
        {currentRoute === '/portofolio' && <PortfolioPage onNavigate={navigate} />}
        {currentRoute === '/client' && <ClientPage onNavigate={navigate} />}
        {currentRoute === '/contact' && <ContactPage />}
      </main>

      <Footer onNavigate={(route) => navigate(route)} />
    </div>
  );
}
