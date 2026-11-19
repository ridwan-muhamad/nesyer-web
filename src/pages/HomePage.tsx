import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  CLIENTS,
  COMPANY_INFO,
  IMAGES,
  KEY_METRICS,
  PORTFOLIO_PROJECTS,
  SERVICES,
  type RoutePath,
} from '../data/companyData';
import { ResilientImage } from '../components/ResilientImage';
import { ClientEmblem } from '../components/ClientEmblem';
import { HeroArchitectureSchematic } from '../components/HeroArchitectureSchematic';

interface HomePageProps {
  onNavigate: (route: RoutePath, serviceId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
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

      {/* Section 2: Core Applications & Solutions (Asymmetric Bento Grid) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium text-blue-700">Solusi Unggulan Nesyer</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-900">
                Lima platform siap pakai untuk memodernisasi sistem keuangan & logistik Anda
              </h2>
            </div>
            <a
              href="#/service"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/service');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Jelajahi seluruh solusi</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Asymmetric Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Marquee Card 1: RTGS Next G (span 7) */}
            <article className="lg:col-span-7 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-7 hover:border-slate-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-medium text-blue-700">01</span>
                  <span aria-hidden="true">·</span>
                  <span>{SERVICES[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">STPG BI Direct</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{SERVICES[0].name}</h3>
                <p className="text-slate-600 leading-relaxed">{SERVICES[0].description}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-mono text-slate-500">
                  {SERVICES[0].flow.source} → {SERVICES[0].flow.destination}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/service', SERVICES[0].id)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
                >
                  <span>Lihat cara kerjanya</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Marquee Card 2: SKN Gen (span 5) */}
            <article className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-7 hover:border-slate-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-medium text-blue-700">02</span>
                  <span aria-hidden="true">·</span>
                  <span>{SERVICES[1].category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">SKN-NG BI</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{SERVICES[1].name}</h3>
                <p className="text-slate-600 leading-relaxed">{SERVICES[1].shortDescription}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">Incoming Kredit · Debet · Bulk Payment</span>
                <button
                  type="button"
                  onClick={() => onNavigate('/service', SERVICES[1].id)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
                >
                  <span>Pelajari</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Row 2: 3 Complementary Solutions (4 + 4 + 4) */}
            {SERVICES.slice(2).map((service) => (
              <article
                key={service.id}
                className="lg:col-span-4 flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono font-medium text-blue-700">{service.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{service.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-500 truncate">
                    {service.protocols.slice(0, 2).join(' / ')}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/service', service.id)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
                  >
                    <span>Detail</span>
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Adjacent Proof (Project Implementations & Verified Clients) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Featured Implementations */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium text-blue-700">Bukti Nyata di Lapangan</p>
                <h2 className="text-3xl font-bold tracking-tight text-navy-900">
                  Terbukti beroperasi langsung di berbagai bank dan korporasi nasional
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Mulai dari gateway BI-RTGS Gen 2 dan SKN-NG pada bank daerah hingga bank asing,
                  delapan integrasi layanan publik Bank Kalteng, sampai digitalisasi depo kontainer
                  di Padang.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 bg-white rounded-xl overflow-hidden">
                {PORTFOLIO_PROJECTS.map((project, index) => (
                  <div key={project.id} className="p-6 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-slate-500">
                        <span className="font-mono font-medium text-blue-700">
                          0{index + 1}
                        </span>{' '}
                        · {project.scope}
                      </span>
                      <span className="text-xs font-mono text-slate-500 tabular-nums">
                        {project.clients.length} Institusi
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{project.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{project.summary}</p>
                    <p className="text-xs text-slate-500 pt-1">
                      Dipercaya oleh:{' '}
                      <span className="text-slate-700 font-medium">
                        {project.clients.join(' · ')}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#/portofolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/portofolio');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  <span>Eksplorasi detail seluruh studi kasus proyek</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right: Institutional Client Roster with Real Logos */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-7 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-700">Mitra & Klien Kami</p>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Pilihan tepercaya 7 institusi perbankan & korporasi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Setiap proyek didampingi dari tahap analisis bisnis hingga sistem stabil
                    beroperasi penuh di produksi.
                  </p>
                </div>

                <ul className="divide-y divide-slate-100">
                  {CLIENTS.map((client) => (
                    <li
                      key={client.id}
                      className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3.5"
                    >
                      <ClientEmblem client={client} size="compact" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-navy-900 truncate">
                          {client.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {client.sector} · {client.implementations[0]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href="#/client"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/client');
                    }}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Lihat Semua Klien Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Company Philosophy & Conversion CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="h-72 lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={IMAGES.middlewareHub}
                  alt="Ilustrasi arsitektur hub middleware dan sistem gateway terintegrasi PT. Nesyer Lintas Teknologi"
                  className="w-full h-full object-cover"
                  fallbackLabel="Enterprise System Integration"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between bg-navy-900 text-white rounded-xl p-8 sm:p-10">
              <div className="space-y-5">
                <p className="text-sm font-medium text-blue-300">Mengapa PT. Nesyer Lintas Teknologi</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Teknologi yang dirancang mengikuti kebutuhan bisnis Anda, bukan sebaliknya
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.aboutParagraphs[1]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-700/70">
                  <div>
                    <p className="text-xs font-mono text-blue-300 mb-1">Visi Kami</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{COMPANY_INFO.vision}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-blue-300 mb-1">Misi Kami</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{COMPANY_INFO.mission}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Diskusikan Kebutuhan Anda</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Kenali Profil Perusahaan</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
