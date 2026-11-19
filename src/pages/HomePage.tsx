import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  CLIENTS,
  COMPANY_INFO,
  KEY_METRICS,
  PORTFOLIO_PROJECTS,
  SERVICES,
  type RoutePath,
} from '../data/companyData';
import { ClientEmblem } from '../components/ClientEmblem';
import { HeroArchitectureSchematic } from '../components/HeroArchitectureSchematic';

interface HomePageProps {
  onNavigate: (route: RoutePath, serviceId?: string) => void;
}

interface PageGateway {
  number: string;
  route: RoutePath;
  kicker: string;
  title: string;
  summary: string;
  meta: string;
  cta: string;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const pageGateways: PageGateway[] = [
    {
      number: '01',
      route: '/service',
      kicker: 'Produk & Layanan',
      title: `${SERVICES.length} Solusi Sistem Terintegrasi`,
      summary:
        'Mulai dari Middleware RTGS Next G, SKN Gen, API BI-FAST berkeamanan HSM, Go AML, Portal Monitoring IT, e-Procurement, hingga Smart Depo.',
      meta: 'Perbankan · Enterprise · Logistik',
      cta: 'Lihat Daftar Layanan',
    },
    {
      number: '02',
      route: '/portofolio',
      kicker: 'Portofolio Proyek',
      title: 'Implementasi Nyata di Produksi',
      summary:
        'Rekam jejak penerapan gateway Bank Indonesia, 8 modul middleware Bank Kalteng, portal monitoring server, sampai operasional depo kontainer.',
      meta: `${PORTFOLIO_PROJECTS.length} Studi Kasus Utama`,
      cta: 'Buka Portofolio Proyek',
    },
    {
      number: '03',
      route: '/client',
      kicker: 'Klien & Mitra',
      title: `Dipercaya ${CLIENTS.length} Institusi Nasional`,
      summary:
        'Mendukung bank pembangunan daerah, bank syariah, bank swasta dan asing, hingga perusahaan logistik kontainer di berbagai wilayah Indonesia.',
      meta: 'Perbankan · Syariah · Logistik',
      cta: 'Lihat Daftar Klien',
    },
    {
      number: '04',
      route: '/about',
      kicker: 'Tentang Kami',
      title: 'Profil PT. Nesyer Lintas Teknologi',
      summary:
        'Kenali visi, misi, dan cara kerja kami sebagai Independent System Integrator yang merancang solusi teknologi sesuai kebutuhan bisnis Anda.',
      meta: 'Visi · Misi · Metodologi Kerja',
      cta: 'Kenali Kami Lebih Dekat',
    },
  ];

  return (
    <div>
      {/* Section 1: Pure Architectural Executive Hero (Zero Photos) */}
      <section
        className="relative bg-navy-900 text-white overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 82% 20%, rgba(29, 78, 216, 0.16), transparent 48%), linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-22">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Hero Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-blue-300 tracking-wide">
                Independent System Integrator · Mitra Strategis Perbankan & Korporasi
              </p>

              <h1
                className="font-bold tracking-tight text-white leading-[1.12]"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.3rem)' }}
              >
                {COMPANY_INFO.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {COMPANY_INFO.heroSummary}
              </p>

              <p className="text-sm italic text-slate-400">
                “{COMPANY_INFO.motto}”
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Jadwalkan Konsultasi Gratis</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#/portofolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/portofolio');
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Lihat Studi Kasus & Portofolio</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Hero Architectural Integration Blueprint (No Photo) */}
            <div className="lg:col-span-6">
              <HeroArchitectureSchematic onNavigate={onNavigate} />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip Below Hero Split */}
        <div className="border-t border-slate-800 bg-navy-950/75">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {KEY_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium text-slate-200">{metric.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clean Directory Gateway to Dedicated Pages */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-medium text-blue-700">Jelajahi Informasi</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-900">
              Temukan solusi, rekam jejak, dan profil kami secara ringkas
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pilih topik di bawah untuk melihat detail lengkap pada masing-masing halaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pageGateways.map((item) => (
              <a
                key={item.route}
                href={`#${item.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.route);
                }}
                className="group flex flex-col justify-between bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-7 sm:p-8 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono font-medium text-blue-700">{item.number}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-700">{item.kicker}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">{item.meta}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:text-blue-800 whitespace-nowrap shrink-0">
                    <span>{item.cta}</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Lightweight Client Trust Strip */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-blue-700">Dipercaya Institusi Nasional</p>
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                Mitra perbankan dan korporasi kami
              </h2>
            </div>
            <a
              href="#/client"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/client');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
            >
              <span>Lihat semua klien</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {CLIENTS.map((client) => (
              <a
                key={client.id}
                href="#/client"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/client');
                }}
                className="flex flex-col items-center justify-center text-center gap-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 transition-colors"
                title={client.name}
              >
                <ClientEmblem client={client} size="compact" />
                <span className="text-xs font-medium text-slate-700 leading-snug line-clamp-2">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Focused Consultation CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-blue-300">Siap Berdiskusi?</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Konsultasikan kebutuhan integrasi sistem Anda bersama tim kami
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jadwalkan presentasi produk, demo teknis, atau permintaan penawaran resmi bersama
                tim analis bisnis dan engineer PT. Nesyer Lintas Teknologi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

