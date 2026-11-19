import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CLIENTS, type ClientSector, type RoutePath } from '../data/companyData';
import { ClientEmblem } from '../components/ClientEmblem';

interface ClientPageProps {
  onNavigate: (route: RoutePath) => void;
}

const SECTORS: ClientSector[] = [
  'Semua',
  'Bank Pembangunan Daerah',
  'Bank Nasional & Asing',
  'Logistik & Pelabuhan',
];

export function ClientPage({ onNavigate }: ClientPageProps) {
  const [selectedSector, setSelectedSector] = useState<ClientSector>('Semua');

  const filteredClients =
    selectedSector === 'Semua'
      ? CLIENTS
      : CLIENTS.filter((c) => c.sector === selectedSector);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Klien & Mitra Kepercayaan · PT. Nesyer Lintas Teknologi
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Dipercaya Institusi Perbankan dan Korporasi Terkemuka di Indonesia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Dari bank pembangunan daerah, bank swasta nasional, bank internasional, hingga
              operator logistik pelabuhan—setiap mitra membuktikan keandalan solusi integrasi dan
              dukungan penuh dari tim Nesyer.
            </p>
          </div>
        </div>
      </section>

      {/* Client Directory with Official Client Logos */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Sector Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div
              role="group"
              aria-label="Filter sektor klien"
              className="inline-flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200"
            >
              {SECTORS.map((sector) => {
                const isActive = selectedSector === sector;
                return (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => setSelectedSector(sector)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                      isActive
                        ? 'bg-white text-navy-900 font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    {sector}
                  </button>
                );
              })}
            </div>

            <p className="text-xs font-mono text-slate-500 tabular-nums">
              Menampilkan {filteredClients.length} mitra institusi
            </p>
          </div>

          {/* Client Cards Grid with Official Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <article
                key={client.id}
                className="flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-5">
                  <ClientEmblem client={client} size="card" />

                  <div className="space-y-1.5">
                    <p className="text-xs text-slate-500">
                      {client.sector} · {client.region}
                    </p>
                    <h2 className="text-lg font-bold text-navy-900 leading-snug">
                      {client.name}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{client.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5">
                  <p className="text-xs font-medium text-slate-500">Solusi yang Diimplementasikan</p>
                  <p className="text-xs font-mono text-navy-900 leading-relaxed">
                    {client.implementations.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA Band */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-sm font-medium text-blue-300">Kemitraan Jangka Panjang</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ingin menghadirkan keandalan integrasi serupa di institusi Anda?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jadwalkan sesi diskusi bersama analis bisnis dan engineer kami untuk memetakan
                solusi RTGS, SKN-NG, Middleware, Go AML, atau Smart Depo yang paling tepat.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Jadwalkan Konsultasi</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#/portofolio"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/portofolio');
                }}
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
