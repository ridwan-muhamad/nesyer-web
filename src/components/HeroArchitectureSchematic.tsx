import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NesyerLogo } from './NesyerLogo';
import type { RoutePath } from '../data/companyData';

interface HeroArchitectureSchematicProps {
  onNavigate: (route: RoutePath, serviceId?: string) => void;
}

interface PathwaySpec {
  id: string;
  label: string;
  serviceId: string;
  source: string;
  sourceSub: string;
  protocol: string;
  target: string;
  targetSub: string;
  outcome: string;
}

const PATHWAYS: PathwaySpec[] = [
  {
    id: 'rtgs',
    label: 'RTGS Next G',
    serviceId: 'rtgs-next-g',
    source: 'Core Banking System',
    sourceSub: 'Host Perbankan Konvensional & Syariah',
    protocol: 'STPG BI Direct · ISO 20022',
    target: 'BI-RTGS Gen 2',
    targetSub: 'Kirim langsung ke STPG BI tanpa token manual',
    outcome: 'Setelmen transaksi bernilai besar secara real-time dengan rekonsiliasi otomatis.',
  },
  {
    id: 'skn',
    label: 'SKN Gen',
    serviceId: 'skn-gen',
    source: 'Core Banking & CMS',
    sourceSub: 'Otomatisasi Kliring Nasional',
    protocol: 'SKN-NG BI · Bulk Payment',
    target: 'SKN-NG Bank Indonesia',
    targetSub: 'Incoming Kredit, Debet, Bulk & Outgoing',
    outcome: 'Pengunduhan transaksi masuk dan pengiriman kliring keluar berjalan tanpa proses manual.',
  },
  {
    id: 'bifast',
    label: 'API BI-FAST',
    serviceId: 'api-bi-fast',
    source: 'CMS, Mobile Banking & Teller',
    sourceSub: 'Multi-Channel Delivery Bank',
    protocol: 'BI-FAST API · Keamanan HSM',
    target: 'API BI-FAST Bank Indonesia',
    targetSub: 'Transfer Real-Time 24/7 Berkeamanan HSM',
    outcome: 'Menyambungkan seluruh kanal layanan bank ke jaringan BI-FAST dengan enkripsi Hardware Security Module.',
  },
  {
    id: 'middleware',
    label: 'Middleware Hub',
    serviceId: 'middleware-system',
    source: 'CMS & Core Banking',
    sourceSub: 'Multi-Procedure Routing',
    protocol: 'JSON / REST · ISO 8583',
    target: 'Layanan Publik & Daerah',
    targetSub: 'SP2D · Samolnas · e-Samsat · Taspen · Pajak · Bappenda',
    outcome: 'Menyatukan beragam kanal layanan pemerintah dan korporasi dalam satu gerbang terpadu.',
  },
];

export function HeroArchitectureSchematic({ onNavigate }: HeroArchitectureSchematicProps) {
  const [activeId, setActiveId] = useState<string>('rtgs');
  const active = PATHWAYS.find((p) => p.id === activeId) || PATHWAYS[0];

  return (
    <div className="h-full flex flex-col justify-between bg-[#0F1D33] border border-slate-700/70 rounded-xl p-6 sm:p-7">
      {/* Header & Interactive Pathway Selector */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div className="space-y-0.5">
            <p className="text-xs font-mono text-blue-300">Arsitektur Integrasi Nesyer</p>
            <p className="text-sm font-semibold text-white">
              Alur Konektivitas Sistem Perbankan & Korporasi
            </p>
          </div>
          <NesyerLogo variant="dark" className="h-6 w-auto shrink-0" />
        </div>

        {/* Functional Interactive Filter Tabs */}
        <div
          role="tablist"
          aria-label="Pilih skema jalur integrasi"
          className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-navy-950/80 border border-slate-800 rounded-lg"
        >
          {PATHWAYS.map((pathway) => {
            const isSelected = pathway.id === active.id;
            return (
              <button
                key={pathway.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(pathway.id)}
                className={`px-2.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap truncate focus-visible:outline-2 focus-visible:outline-blue-400 ${
                  isSelected
                    ? 'bg-blue-700 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {pathway.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Crisp Architectural Flow Diagram */}
      <div className="my-6 space-y-3" role="tabpanel">
        {/* Node 1: Source System */}
        <div className="bg-navy-950/70 border border-slate-800 rounded-lg px-4 py-3.5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-mono text-slate-400">01 · Sistem Internal Klien</p>
            <p className="text-sm font-semibold text-white mt-0.5">{active.source}</p>
            <p className="text-xs text-slate-400 mt-0.5">{active.sourceSub}</p>
          </div>
          <span className="font-mono text-[11px] text-slate-400 shrink-0 hidden sm:inline">
            HOST
          </span>
        </div>

        {/* Connector 1 */}
        <div className="flex items-center justify-center gap-3 py-0.5" aria-hidden="true">
          <span className="h-5 w-px bg-blue-500/60" />
          <span className="text-[11px] font-mono text-blue-300">{active.protocol}</span>
        </div>

        {/* Node 2: Central Nesyer Engine */}
        <div className="bg-blue-950/60 border border-blue-500/40 rounded-lg px-4 py-3.5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-mono text-blue-300">02 · Nesyer Middleware Engine</p>
            <p className="text-sm font-bold text-white mt-0.5">
              Gateway, Translasi Protokol & Rekonsiliasi
            </p>
            <p className="text-xs text-slate-300 mt-0.5">{active.outcome}</p>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="flex items-center justify-center gap-3 py-0.5" aria-hidden="true">
          <span className="h-5 w-px bg-teal-400/60" />
          <span className="text-[11px] font-mono text-teal-300">Transmisi Aman & Tervalidasi</span>
        </div>

        {/* Node 3: Destination Network */}
        <div className="bg-navy-950/70 border border-slate-800 rounded-lg px-4 py-3.5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-mono text-teal-300">03 · Jaringan Regulator & Eksternal</p>
            <p className="text-sm font-semibold text-white mt-0.5">{active.target}</p>
            <p className="text-xs text-slate-400 mt-0.5">{active.targetSub}</p>
          </div>
          <span className="font-mono text-[11px] text-teal-300 shrink-0 hidden sm:inline">
            GATEWAY
          </span>
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-400">
          Grand Slipi Tower Lt. 42 · Jakarta Barat
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/service', active.serviceId)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          <span>Lihat detail {active.label}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
