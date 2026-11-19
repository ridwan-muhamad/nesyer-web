import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  Mail,
  RefreshCw,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, type RoutePath } from '../data/companyData';

interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  status: 'open' | 'closed';
  postedAt: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

interface CareerFeed {
  updatedAt: string;
  applicationEmail: string;
  talentPoolNote: string;
  positions: CareerPosition[];
}

interface CareerPageProps {
  onNavigate: (route: RoutePath) => void;
}

function formatIndonesianDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function buildApplicationStrings(positionTitle: string) {
  const subject = `[Lamaran Kerja] ${positionTitle} - [Nama Lengkap]`;
  const body = [
    `Halo Tim Rekrutmen PT. Nesyer Lintas Teknologi,`,
    '',
    `Perkenalkan, saya [Nama Lengkap] bermaksud melamar untuk posisi ${positionTitle}.`,
    '',
    `Ringkasan Singkat:`,
    `- Nama Lengkap: [Isi Nama Anda]`,
    `- Nomor Telepon / WhatsApp: [Isi Nomor Aktif]`,
    `- Domisili Saat Ini: [Isi Kota Domisili]`,
    `- Pengalaman Relevan: [Singkat 1-2 kalimat]`,
    `- Ketersediaan Bergabung: [Segera / Notice Period]`,
    '',
    `Bersama email ini saya lampirkan CV terbaru (format PDF) dan portofolio pendukung apabila tersedia.`,
    '',
    `Terima kasih atas waktu dan kesempatannya.`,
    '',
    `Hormat saya,`,
    `[Nama Lengkap]`,
  ].join('\n');

  return { subject, body };
}

export function CareerPage({ onNavigate }: CareerPageProps) {
  const [data, setData] = useState<CareerFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<'open' | 'all'>('open');
  const [departmentFilter, setDepartmentFilter] = useState<string>('Semua');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadCareers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('./careers.json', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const parsed = (await response.json()) as CareerFeed;
      setData(parsed);

      const initialExpanded: Record<string, boolean> = {};
      parsed.positions.slice(0, 3).forEach((pos) => {
        initialExpanded[pos.id] = true;
      });
      setExpandedIds(initialExpanded);
    } catch {
      setError(
        'Daftar lowongan sedang tidak dapat dimuat saat ini. Silakan muat ulang halaman atau kirimkan CV Anda langsung melalui email resmi kami.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadCareers();
  }, [loadCareers]);

  const handleCopyTemplate = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(key);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Ignore gracefully if clipboard API is unavailable
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const positions = data?.positions ?? [];
  const openCount = useMemo(
    () => positions.filter((pos) => pos.status === 'open').length,
    [positions]
  );
  const hasClosedPositions = useMemo(
    () => positions.some((pos) => pos.status === 'closed'),
    [positions]
  );

  const departments = useMemo(() => {
    const unique = Array.from(new Set(positions.map((pos) => pos.department)));
    return ['Semua', ...unique];
  }, [positions]);

  const filteredPositions = useMemo(() => {
    return positions.filter((pos) => {
      const matchStatus = statusFilter === 'all' ? true : pos.status === 'open';
      const matchDepartment =
        departmentFilter === 'Semua' ? true : pos.department === departmentFilter;
      return matchStatus && matchDepartment;
    });
  }, [positions, statusFilter, departmentFilter]);

  const applicationEmail = data?.applicationEmail || COMPANY_INFO.headOffice.email;

  const talentPoolSubject = '[Talent Pool] Lamaran Terbuka - [Nama Lengkap]';
  const talentPoolBody = [
    `Halo Tim Rekrutmen PT. Nesyer Lintas Teknologi,`,
    '',
    `Saya tertarik untuk bergabung bersama tim PT. Nesyer Lintas Teknologi apabila tersedia posisi yang sesuai dengan keahlian saya.`,
    '',
    `- Nama Lengkap: [Isi Nama Anda]`,
    `- Bidang Minat: [Contoh: Software Engineering / Support / Business Analyst]`,
    `- Nomor Telepon / WhatsApp: [Isi Nomor Aktif]`,
    '',
    `Bersama email ini saya lampirkan CV terbaru saya (PDF). Terima kasih.`,
  ].join('\n');

  const talentPoolGmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    applicationEmail
  )}&su=${encodeURIComponent(talentPoolSubject)}&body=${encodeURIComponent(talentPoolBody)}`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Karier & Rekrutmen · PT. Nesyer Lintas Teknologi
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Bangun Sistem Perbankan & Enterprise Berdampak Bersama Tim Kami
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Kami membuka ruang bagi engineer dan profesional operasional IT yang teliti, senang
              memecahkan tantangan teknis nyata, dan ingin berkontribusi langsung pada proyek
              integrasi sistem nasional.
            </p>
            {data && !loading && (
              <p className="pt-2 text-sm text-slate-300 font-mono tabular-nums">
                Status Rekrutmen:{' '}
                <span className="text-white font-semibold">
                  {openCount > 0 ? `${openCount} Posisi Dibuka` : 'Belum Ada Lowongan Dibuka'}
                </span>
                {' · '}
                <span className="text-slate-400">
                  Diperbarui {formatIndonesianDate(data.updatedAt)}
                </span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Recruitment Listing Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Filters Bar */}
          {!loading && !error && positions.length > 0 && (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-500 mr-1">Divisi:</span>
                <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
                  {departments.map((dept) => {
                    const active = departmentFilter === dept;
                    return (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => setDepartmentFilter(dept)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          active
                            ? 'bg-white text-navy-900 shadow-xs'
                            : 'text-slate-600 hover:text-navy-900'
                        }`}
                      >
                        {dept}
                      </button>
                    );
                  })}
                </div>
              </div>

              {hasClosedPositions && (
                <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
                  <button
                    type="button"
                    onClick={() => setStatusFilter('open')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      statusFilter === 'open'
                        ? 'bg-white text-navy-900 shadow-xs'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    Lowongan Dibuka ({openCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      statusFilter === 'all'
                        ? 'bg-white text-navy-900 shadow-xs'
                        : 'text-slate-600 hover:text-navy-900'
                    }`}
                  >
                    Semua Posisi ({positions.length})
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="space-y-6" aria-busy="true" aria-label="Memuat daftar lowongan">
              {[0, 1].map((item) => (
                <div
                  key={item}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-7 space-y-4 animate-pulse"
                >
                  <div className="h-4 w-48 bg-slate-200 rounded" />
                  <div className="h-7 w-72 bg-slate-200 rounded" />
                  <div className="h-4 w-full max-w-2xl bg-slate-200 rounded" />
                  <div className="h-4 w-5/6 max-w-xl bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-5">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-xl font-bold text-navy-900">Gagal Memuat Daftar Lowongan</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{error}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => void loadCareers()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  <span>Muat Ulang</span>
                </button>
                <a
                  href={talentPoolGmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-navy-900 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Kirim CV via Gmail Web</span>
                </a>
              </div>
            </div>
          )}

          {/* Empty State (No Open Positions) */}
          {!loading && !error && filteredPositions.length === 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-10 space-y-5">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-medium text-blue-700">Status Rekrutmen</p>
                <h2 className="text-2xl font-bold text-navy-900">
                  Saat ini belum ada lowongan terbuka pada kategori ini
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {data?.talentPoolNote ||
                    'Anda tetap dapat mengirimkan CV terbaru agar kami pertimbangkan saat kebutuhan proyek baru dibuka.'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={talentPoolGmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Kirim CV ke Talent Pool</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                </a>
                {departmentFilter !== 'Semua' && (
                  <button
                    type="button"
                    onClick={() => setDepartmentFilter('Semua')}
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Tampilkan Semua Divisi
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Recruitment Role Cards */}
          {!loading && !error && filteredPositions.length > 0 && (
            <div className="space-y-6">
              {filteredPositions.map((position, index) => {
                const isOpen = position.status === 'open';
                const isExpanded = Boolean(expandedIds[position.id]);
                const { subject, body } = buildApplicationStrings(position.title);
                const gmailApplyHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  applicationEmail
                )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                const mailtoApplyHref = `mailto:${applicationEmail}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`;

                return (
                  <article
                    key={position.id}
                    className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                  >
                    {/* Role Header */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="font-mono font-semibold text-blue-700 tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-slate-700">{position.department}</span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={`font-semibold ${
                              isOpen ? 'text-emerald-700' : 'text-slate-500'
                            }`}
                          >
                            Status: {isOpen ? 'Dibuka' : 'Ditutup'}
                          </span>
                        </div>

                        <span className="text-xs font-mono text-slate-500 tabular-nums">
                          Dipublikasikan {formatIndonesianDate(position.postedAt)}
                        </span>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                          <h2 className="text-2xl font-bold text-navy-900">{position.title}</h2>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {position.summary}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleExpand(position.id)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 self-start px-3.5 py-2 text-xs font-semibold text-navy-900 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>{isExpanded ? 'Sembunyikan Detail' : 'Lihat Job Description'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="w-4 h-4" aria-hidden="true" />
                          )}
                        </button>
                      </div>

                      {/* Key Facts Row */}
                      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-sm">
                        <div>
                          <dt className="text-xs text-slate-500">Lokasi Kerja</dt>
                          <dd className="font-medium text-navy-900 mt-0.5">{position.location}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">Tipe Pekerjaan</dt>
                          <dd className="font-medium text-navy-900 mt-0.5">
                            {position.employmentType}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">Pengalaman</dt>
                          <dd className="font-medium text-navy-900 mt-0.5">
                            {position.experience}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Expanded Job Description & Application Actions */}
                    {isExpanded && (
                      <div className="bg-white border-t border-slate-200 p-6 sm:p-8 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h3 className="text-base font-bold text-navy-900">
                              Tanggung Jawab Utama
                            </h3>
                            <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                              {position.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="font-mono text-xs text-blue-700 font-semibold mt-0.5 tabular-nums">
                                    {String(idx + 1).padStart(2, '0')}.
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-base font-bold text-navy-900">
                              Kualifikasi yang Dicari
                            </h3>
                            <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                              {position.qualifications.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="font-mono text-xs text-blue-700 font-semibold mt-0.5 tabular-nums">
                                    {String(idx + 1).padStart(2, '0')}.
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Application Action Bar */}
                        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          {isOpen ? (
                            <>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                Kirim lamaran dan CV (PDF) ke{' '}
                                <span className="font-mono text-navy-900">{applicationEmail}</span>
                              </p>
                              <div className="flex flex-wrap items-center gap-2.5">
                                <a
                                  href={gmailApplyHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                                >
                                  <Send className="w-4 h-4" aria-hidden="true" />
                                  <span>Lamar via Gmail Web</span>
                                  <ExternalLink
                                    className="w-3.5 h-3.5 opacity-80"
                                    aria-hidden="true"
                                  />
                                </a>

                                <a
                                  href={mailtoApplyHref}
                                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-navy-900 bg-slate-50 border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                                >
                                  <Mail className="w-4 h-4 text-blue-700" aria-hidden="true" />
                                  <span>Aplikasi Email</span>
                                </a>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopyTemplate(
                                      position.id,
                                      `Tujuan: ${applicationEmail}\nSubjek: ${subject}\n\n${body}`
                                    )
                                  }
                                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                                >
                                  {copiedId === position.id ? (
                                    <>
                                      <Check className="w-4 h-4 text-blue-700" aria-hidden="true" />
                                      <span>Format Disalin</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-4 h-4" aria-hidden="true" />
                                      <span>Salin Format</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </>
                          ) : (
                            <p className="text-sm text-slate-500">
                              Posisi ini sedang berstatus ditutup dan belum menerima lamaran baru.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Talent Pool & General Inquiry Banner */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-sm font-medium text-blue-300">Talent Pool PT. Nesyer Lintas Teknologi</p>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Punya keahlian di bidang lain? Kirimkan CV terbuka Anda
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {data?.talentPoolNote ||
                  'Kami selalu terbuka untuk berkenalan dengan talenta Business Analyst, QA Engineer, maupun System Integrator berpengalaman.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={talentPoolGmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Kirim CV via Gmail Web</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>Hubungi Kantor Pusat</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
