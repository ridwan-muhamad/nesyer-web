import { ArrowRight } from 'lucide-react';
import {
  COMPANY_INFO,
  IMAGES,
  METHODOLOGY_STEPS,
  type RoutePath,
} from '../data/companyData';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Tentang Kami · PT. Nesyer Lintas Teknologi
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Mitra Independen System Integrator untuk Pertumbuhan Korporat Nasional
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {COMPANY_INFO.aboutLead}
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Profile & Philosophy */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-700">Filosofi & Kekuatan Kami</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900">
                  Total IT Solution yang Dirancang untuk Dampak Bisnis Nyata
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[15.5px]">
                {COMPANY_INFO.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-navy-900">Analis Bisnis yang Paham Industri</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kami berbicara dalam bahasa operasional bisnis dan regulasi keuangan agar setiap
                    fitur benar-benar memudahkan kerja tim Anda di lapangan.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-navy-900">Engineer IT Teruji di Sistem Kritikal</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Berpengalaman langsung membangun koneksi Core Banking, gateway Bank Indonesia,
                    ISO 8583, JSON, hingga sistem kargo pelabuhan.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-80 lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200">
                <ResilientImage
                  src={IMAGES.aboutTeam}
                  alt="Kolaborasi analis bisnis dan engineer IT PT. Nesyer Lintas Teknologi saat merancang integrasi sistem"
                  className="w-full h-full object-cover"
                  fallbackLabel="Tim PT. Nesyer Lintas Teknologi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi, Misi & Motto */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <p className="text-sm font-medium text-blue-700">Komitmen Kami kepada Setiap Mitra</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Visi, Misi & Motto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-slate-200 rounded-xl p-7 space-y-3">
              <p className="text-xs font-mono font-medium text-blue-700">01 · Visi</p>
              <h3 className="text-xl font-bold text-navy-900">Visi Perusahaan</h3>
              <p className="text-slate-600 leading-relaxed">{COMPANY_INFO.vision}</p>
            </article>

            <article className="bg-white border border-slate-200 rounded-xl p-7 space-y-3">
              <p className="text-xs font-mono font-medium text-blue-700">02 · Misi</p>
              <h3 className="text-xl font-bold text-navy-900">Misi Perusahaan</h3>
              <p className="text-slate-600 leading-relaxed">{COMPANY_INFO.mission}</p>
            </article>

            <article className="bg-navy-900 text-white border border-navy-800 rounded-xl p-7 space-y-3">
              <p className="text-xs font-mono font-medium text-blue-300">03 · Motto</p>
              <h3 className="text-xl font-bold text-white">Standar Layanan Kami</h3>
              <p className="text-lg italic text-slate-200 leading-relaxed">
                “{COMPANY_INFO.motto}”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-medium text-blue-700">Cara Kami Bekerja</p>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900">
                Empat langkah terukur dari diskusi awal hingga Go-Live tanpa drama
              </h2>
            </div>
            <a
              href="#/service"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/service');
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
            >
              <span>Lihat solusi yang kami bangun</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3"
              >
                <p className="font-mono text-sm font-semibold text-blue-700">{item.step}.</p>
                <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-navy-900">
                Siap menyederhanakan integrasi sistem di perusahaan Anda?
              </h3>
              <p className="text-sm text-slate-600">
                Tim konsultan kami di Grand Slipi Tower siap membantu memetakan solusi terbaik.
              </p>
            </div>
            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Mulai Diskusi dengan Kami</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
