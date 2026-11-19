import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, type RoutePath } from '../data/companyData';
import { ResilientImage } from '../components/ResilientImage';

interface ServicePageProps {
  initialServiceId?: string | null;
  onNavigate: (route: RoutePath) => void;
}

export function ServicePage({ initialServiceId, onNavigate }: ServicePageProps) {
  const [selectedId, setSelectedId] = useState<string>(initialServiceId || SERVICES[0].id);

  useEffect(() => {
    if (initialServiceId && SERVICES.some((s) => s.id === initialServiceId)) {
      setSelectedId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Solusi & Layanan · PT. Nesyer Lintas Teknologi
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Aplikasi Teruji untuk Mempercepat Operasional Perbankan & Korporasi
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Pilih solusi yang paling sesuai dengan tantangan bisnis Anda, mulai dari otomasi
              RTGS dan SKN-NG Bank Indonesia, API BI-FAST multi-kanal berkeamanan HSM, integrasi
              JSON/ISO 8583, pelaporan OJK, monitoring aplikasi dan server IT, e-Procurement, hingga
              digitalisasi kargo pelabuhan.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Solution Explorer */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Segmented Tab Selector */}
          <div
            role="tablist"
            aria-label="Pilih Solusi Aplikasi"
            className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 mb-10"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(service.id)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                    isSelected
                      ? 'bg-white text-navy-900 font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <span className="font-mono text-xs text-blue-700 mr-1.5">{service.number}.</span>
                  {service.name}
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail View */}
          <div
            role="tabpanel"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          >
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-blue-700">
                    Solusi {activeService.number}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeService.category}</span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-navy-900">
                  {activeService.name}
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Structural Integration Flow Diagram */}
                <div className="pt-4">
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    Alur Integrasi Sistem
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
                      <div className="bg-white border border-slate-200 rounded-lg px-3 py-3">
                        <p className="text-[11px] font-mono text-slate-500">Sistem Sumber</p>
                        <p className="text-sm font-semibold text-navy-900 mt-0.5">
                          {activeService.flow.source}
                        </p>
                      </div>
                      <div className="bg-navy-900 text-white rounded-lg px-3 py-3">
                        <p className="text-[11px] font-mono text-blue-300">Platform Nesyer</p>
                        <p className="text-sm font-semibold mt-0.5">
                          {activeService.flow.middleware}
                        </p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg px-3 py-3">
                        <p className="text-[11px] font-mono text-slate-500">Sistem Tujuan</p>
                        <p className="text-sm font-semibold text-navy-900 mt-0.5">
                          {activeService.flow.destination}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs font-mono text-slate-600">
                      {activeService.flow.protocolLabel}
                    </p>
                  </div>
                </div>

                {/* Key Functional Highlights */}
                <div className="pt-2 space-y-3">
                  <h3 className="text-base font-bold text-navy-900">Keunggulan & Manfaat Utama</h3>
                  <ul className="space-y-2.5">
                    {activeService.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-blue-700 shrink-0 mt-1" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Standar & Protokol:{' '}
                  <span className="font-mono text-slate-700">
                    {activeService.protocols.join(' · ')}
                  </span>
                </div>
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Minta Demo & Proposal</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column Visual & Deployment Proof */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackLabel={activeService.name}
                />
              </div>

              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-navy-900">
                  Telah Dipercaya & Diimplementasikan di
                </h3>
                <ul className="divide-y divide-slate-200 text-sm">
                  {activeService.deployedAt.map((client) => (
                    <li key={client} className="py-2.5 first:pt-0 last:pb-0 text-slate-700">
                      {client}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    href="#/portofolio"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/portofolio');
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    <span>Lihat detail studi kasus</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 5-Application Reference Directory */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-sm font-medium text-blue-700">Ringkasan Solusi Kami</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Seluruh Lini Aplikasi PT. Nesyer Lintas Teknologi
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white overflow-hidden">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-4 space-y-1">
                  <p className="text-xs font-mono text-blue-700 font-medium">
                    {service.number}. · {service.category}
                  </p>
                  <h3 className="text-xl font-bold text-navy-900">{service.name}</h3>
                </div>
                <div className="lg:col-span-6 space-y-2">
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  <p className="text-xs font-mono text-slate-500">
                    {service.protocols.join(' · ')}
                  </p>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(service.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
                  >
                    Lihat detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
