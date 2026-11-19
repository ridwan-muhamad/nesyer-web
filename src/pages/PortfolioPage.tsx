import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  BANK_KALTENG_MIDDLEWARE_MODULES,
  IMAGES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type RoutePath,
} from '../data/companyData';
import { ResilientImage } from '../components/ResilientImage';

interface PortfolioPageProps {
  onNavigate: (route: RoutePath) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'Semua',
  'SKN-NG',
  'RTGS Gen 2',
  'Middleware',
  'Smart Depo',
  'Portal & Monitoring',
];

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('Semua');

  const filteredProjects =
    activeCategory === 'Semua'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Portofolio & Studi Kasus · Project Implementation
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Rekam Jejak Implementasi Nyata di Perbankan dan Industri Logistik
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Setiap proyek di bawah ini telah melalui pengujian ketat dan beroperasi penuh mendukung
              transaksi perbankan, integrasi layanan daerah, portal monitoring infrastruktur IT,
              hingga operasional depo pelabuhan.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Project Portfolio */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div
              role="group"
              aria-label="Filter kategori portofolio"
              className="inline-flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                      isActive
                        ? 'bg-white text-navy-900 font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-xs font-mono text-slate-500 tabular-nums">
              Menampilkan {filteredProjects.length} dari {PORTFOLIO_PROJECTS.length} program implementasi
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-7 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-semibold text-blue-700">
                        0{idx + 1}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.scope}</span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                      {project.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed">{project.summary}</p>

                    <div className="pt-2 space-y-2.5">
                      <h3 className="text-sm font-bold text-navy-900">Hasil & Ruang Lingkup</h3>
                      <ul className="space-y-2">
                        {project.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                          >
                            <Check
                              className="w-4 h-4 text-blue-700 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-lg p-6 space-y-6">
                    <div className="space-y-3">
                      <p className="text-xs font-mono font-medium text-blue-700">
                        Diimplementasikan di ({project.clients.length} Institusi)
                      </p>
                      <ul className="divide-y divide-slate-100 text-sm">
                        {project.clients.map((clientName) => (
                          <li
                            key={clientName}
                            className="py-2.5 first:pt-0 last:pb-0 font-medium text-navy-900"
                          >
                            {clientName}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                      Standar & Modul:{' '}
                      <span className="font-mono text-slate-700">
                        {project.protocols.join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Spotlight 1: Bank Kalteng 8-Module Middleware Ecosystem */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-3">
            <p className="text-sm font-medium text-blue-700">Sorotan Integrasi Enterprise</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Menyatukan 8 Kanal Strategis dalam Satu Hub Middleware di Bank Kalteng
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Melalui satu platform middleware terpadu, Bank Kalteng berhasil mengintegrasikan
              Core Banking dan Cash Management System dengan seluruh layanan pembayaran daerah,
              perpajakan, dan jaringan Bank Indonesia secara cepat dan terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BANK_KALTENG_MIDDLEWARE_MODULES.map((mod) => (
              <div
                key={mod.code}
                className="bg-white border border-slate-200 rounded-xl p-5 space-y-2"
              >
                <p className="font-mono text-xs font-semibold text-blue-700">{mod.code}.</p>
                <h3 className="text-base font-bold text-navy-900">{mod.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{mod.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Spotlight 2: Portal Informasi & Monitoring System Bank Kalteng */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <p className="text-sm font-medium text-blue-700">
                Studi Kasus Bank Kalteng · Sistem & Infrastruktur IT
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900">
                Portal Informasi & Monitoring System di Bank Kalteng
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Untuk menjaga keandalan operasional perbankan setiap saat, kami membangun Portal
                Informasi dan Monitoring System terpusat di Bank Kalteng. Platform ini menyatukan
                pemantauan sistem, aplikasi bisnis, serta performa infrastruktur server IT dalam
                satu pusat kendali yang mudah dipantau oleh tim teknis maupun manajemen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
                  <p className="text-sm font-bold text-navy-900">Monitoring System & Apps</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pantau status aktif, waktu respons, dan kesehatan konektivitas seluruh sistem
                    serta aplikasi perbankan secara real-time.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
                  <p className="text-sm font-bold text-navy-900">Pemantauan Infrastruktur Server</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deteksi dini beban CPU, memori, kapasitas disk, dan jaringan lengkap dengan
                    riwayat performa serta laporan SLA.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Konsultasikan Portal Monitoring</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="h-72 lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={IMAGES.bankingGateway}
                  alt="Infrastruktur server data center Bank Kalteng yang dipantau melalui Portal Informasi dan Monitoring System"
                  className="w-full h-full object-cover"
                  fallbackLabel="Portal Informasi & Monitoring System · Bank Kalteng"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Spotlight 3: Smart Depo Logistics Case */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="h-72 lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={IMAGES.smartDepoOps}
                  alt="Supervisor pelabuhan memantau inventaris kontainer dan kargo dengan aplikasi Smart Depo"
                  className="w-full h-full object-cover"
                  fallbackLabel="Smart Depo · PT. Contindo Raya Padang"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <p className="text-sm font-medium text-blue-700">
                Transformasi Digital Sektor Logistik & Pelabuhan
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900">
                Smart Depo di PT. Contindo Raya Padang
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Membuktikan fleksibilitas Nesyer di luar sektor finansial, kami menghadirkan Smart
                Depo untuk mendigitalisasi pengelolaan peti kemas dan kargo pelabuhan di PT.
                Contindo Raya Padang. Proses keluar-masuk kontainer, pelacakan posisi blok, hingga
                rekapitulasi laporan operasional kini berjalan lebih cepat dan akurat.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Rencanakan Proyek Anda</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#/client"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/client');
                  }}
                  className="text-sm font-semibold text-navy-900 hover:text-blue-700 transition-colors"
                >
                  Lihat seluruh mitra klien kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
