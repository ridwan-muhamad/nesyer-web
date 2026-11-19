import { useState, type FormEvent } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  solution: SERVICES[0].name,
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored gracefully if clipboard API unavailable
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Masukkan nama lengkap Anda.';
    }
    if (!form.company.trim()) {
      nextErrors.company = 'Masukkan nama bank, institusi, atau perusahaan Anda.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Masukkan alamat email korporat yang valid.';
    }
    if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Masukkan nomor telepon atau WhatsApp yang aktif.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Ceritakan singkat kebutuhan integrasi atau pertanyaan Anda (min. 10 karakter).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${COMPANY_INFO.headOffice.email}?subject=${encodeURIComponent(
    `[Konsultasi ${form.solution}] ${form.company || 'Perusahaan'}`
  )}&body=${encodeURIComponent(
    `Nama: ${form.name}\nInstitusi/Perusahaan: ${form.company}\nEmail: ${form.email}\nTelepon: ${form.phone}\nSolusi: ${form.solution}\n\nPesan:\n${form.message}`
  )}`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-blue-300">
              Hubungi Kami · PT. Nesyer Lintas Teknologi
            </p>
            <h1
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Mari Wujudkan Integrasi Sistem yang Lebih Cepat & Andal
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Punya rencana implementasi RTGS Next G, SKN-NG, Middleware ISO 8583/JSON, Go AML,
              atau Smart Depo? Tim analis bisnis dan engineer kami siap berdiskusi langsung dengan
              Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Lead Capture Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Head Office Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-medium text-blue-700">{COMPANY_INFO.headOffice.label}</p>
                <h2 className="text-2xl font-bold text-navy-900">
                  {COMPANY_INFO.headOffice.company}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kunjungi atau hubungi kantor pusat kami di Jakarta Barat untuk penjadwalan
                  presentasi produk, demo teknis, maupun permintaan proposal resmi.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-slate-50">
                {/* Address */}
                <div className="p-5 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 space-y-1.5">
                    <p className="text-xs font-semibold text-slate-500">Alamat Kantor Pusat</p>
                    <p className="text-sm font-semibold text-navy-900">
                      {COMPANY_INFO.headOffice.building}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.headOffice.street}
                      <br />
                      {COMPANY_INFO.headOffice.district}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleCopy('address', COMPANY_INFO.headOffice.fullAddress)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-800"
                      >
                        {copiedField === 'address' ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Alamat disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Salin alamat</span>
                          </>
                        )}
                      </button>

                      <a
                        href={COMPANY_INFO.headOffice.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-navy-900"
                      >
                        <span>Buka di Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 flex items-start gap-4">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 space-y-1">
                    <p className="text-xs font-semibold text-slate-500">Telepon Kantor</p>
                    <a
                      href={COMPANY_INFO.headOffice.phoneHref}
                      className="font-mono text-base font-semibold text-navy-900 hover:text-blue-700 tabular-nums"
                    >
                      {COMPANY_INFO.headOffice.phone}
                    </a>
                    <p className="text-xs text-slate-500">{COMPANY_INFO.headOffice.hours}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', COMPANY_INFO.headOffice.phone)}
                    aria-label="Salin nomor telepon"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-200/70 transition-colors"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-blue-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="p-5 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-xs font-semibold text-slate-500">Email Resmi & Dukungan</p>
                    <a
                      href={`mailto:${COMPANY_INFO.headOffice.email}`}
                      className="block font-mono text-sm font-semibold text-navy-900 hover:text-blue-700 truncate"
                    >
                      {COMPANY_INFO.headOffice.email}
                    </a>
                    <p className="text-xs text-slate-500">
                      Permintaan demo, penawaran proyek, dan dukungan teknis
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', COMPANY_INFO.headOffice.email)}
                    aria-label="Salin alamat email"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-200/70 transition-colors"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-blue-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Validated Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-7 sm:p-9">
                {submitted ? (
                  <div className="space-y-6 py-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center">
                      <Check className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-navy-900">
                        Permintaan Konsultasi Siap Dikirim
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Terima kasih, <span className="font-semibold text-navy-900">{form.name}</span>{' '}
                        dari <span className="font-semibold text-navy-900">{form.company}</span>.
                        Klik tombol di bawah untuk langsung mengirim ringkasan kebutuhan{' '}
                        <span className="font-semibold text-navy-900">{form.solution}</span> ke
                        tim resmi kami di{' '}
                        <span className="font-mono text-navy-900">
                          {COMPANY_INFO.headOffice.email}
                        </span>
                        .
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5 text-sm space-y-2">
                      <p>
                        <span className="text-slate-500">Solusi:</span>{' '}
                        <span className="font-medium text-navy-900">{form.solution}</span>
                      </p>
                      <p>
                        <span className="text-slate-500">Email:</span>{' '}
                        <span className="font-mono text-navy-900">{form.email}</span>
                      </p>
                      <p>
                        <span className="text-slate-500">Telepon:</span>{' '}
                        <span className="font-mono text-navy-900">{form.phone}</span>
                      </p>
                      <p className="pt-2 border-t border-slate-100 text-slate-600 whitespace-pre-line">
                        {form.message}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Kirim via Email Resmi</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setForm(INITIAL_FORM);
                          setErrors({});
                          setSubmitted(false);
                        }}
                        className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Buat Pesan Baru
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="space-y-1.5">
                      <h2 className="text-2xl font-bold text-navy-900">
                        Jadwalkan Demo atau Konsultasi
                      </h2>
                      <p className="text-sm text-slate-600">
                        Ceritakan singkat kebutuhan sistem Anda, dan tim kami akan menyiapkan
                        rekomendasi arsitektur beserta jadwal diskusi terbaik.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Contoh: Budi Santoso"
                          aria-invalid={Boolean(errors.name)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-700 font-medium">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-company"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Institusi / Perusahaan
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Contoh: PT Bank Daerah..."
                          aria-invalid={Boolean(errors.company)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                        />
                        {errors.company && (
                          <p className="text-xs text-red-700 font-medium">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Email Korporat
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="nama@perusahaan.co.id"
                          aria-invalid={Boolean(errors.email)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-700 font-medium">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Nomor Telepon / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="021-XXXXXXX / 0812-XXXX-XXXX"
                          aria-invalid={Boolean(errors.phone)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 font-mono"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-700 font-medium">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-solution"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Solusi yang Diminati
                      </label>
                      <select
                        id="contact-solution"
                        value={form.solution}
                        onChange={(e) => setForm({ ...form, solution: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                      >
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name} ({service.category})
                          </option>
                        ))}
                        <option value="Konsultasi System Integration Lainnya">
                          Konsultasi System Integration Lainnya
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Ceritakan Kebutuhan Proyek Anda
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Misalnya: integrasi Core Banking ke BI-RTGS tanpa token, otomasi SKN-NG, atau kebutuhan middleware layanan daerah..."
                        aria-invalid={Boolean(errors.message)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-700 font-medium">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs text-slate-500">
                        Butuh respons cepat? Hubungi{' '}
                        <span className="font-mono text-slate-700">
                          {COMPANY_INFO.headOffice.phone}
                        </span>
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
