import aboutTeamImg from '../assets/images/about_analysts_team_1795080691703.jpg';
import middlewareHubImg from '../assets/images/service_middleware_hub_1795080692364.jpg';
import bankingGatewayImg from '../assets/images/service_banking_gateway_1795079603320.jpg';
import goAmlImg from '../assets/images/service_goaml_compliance_1795080690341.jpg';
import smartDepoOpsImg from '../assets/images/service_port_logistics_ops_1795080692325.jpg';

import logoBoc from '../assets/clients/boc.png';
import logoKalteng from '../assets/clients/kalteng.jpg';
import logoContindo from '../assets/clients/contindo.jpg';
import logoSulselbar from '../assets/clients/sulselbar.png';
import logoSulselbarSyariah from '../assets/clients/sulselbar-syariah.png';
import logoBengkulu from '../assets/clients/bengkulu.png';
import logoIna from '../assets/clients/ina.png';

export type RoutePath = '/' | '/about' | '/service' | '/portofolio' | '/client' | '/contact';

export const IMAGES = {
  aboutTeam: aboutTeamImg,
  middlewareHub: middlewareHubImg,
  bankingGateway: bankingGatewayImg,
  goAml: goAmlImg,
  smartDepoOps: smartDepoOpsImg,
};

export const COMPANY_INFO = {
  name: 'PT. Nesyer Lintas Teknologi',
  shortName: 'Nesyer Lintas Teknologi',
  monogram: 'NLT',
  motto: 'Customer satisfaction is our goal',
  tagline: 'Mitra Integrasi Sistem & Gateway Perbankan Nasional',
  heroHeadline: 'Percepat Integrasi Sistem Perbankan & Operasional Korporasi Tanpa Hambatan',
  heroSummary:
    'PT. Nesyer Lintas Teknologi membantu bank dan perusahaan nasional menghubungkan Core Banking, gerbang pembayaran Bank Indonesia (RTGS Next G & SKN-NG), hingga pelaporan OJK secara otomatis, aman, dan siap beroperasi tanpa jeda.',
  aboutLead:
    'Sebagai Independent System Integrator untuk pasar korporat nasional di Indonesia, kami mengubah kompleksitas teknologi informasi menjadi keunggulan proses bisnis yang nyata.',
  aboutParagraphs: [
    'Di tengah percepatan transformasi digital dan ketatnya standar regulasi keuangan global, PT. Nesyer Lintas Teknologi ("Nesyer") hadir menghadirkan total IT solution yang terintegrasi dari hulu ke hilir. Setiap solusi dirancang bukan sekadar berjalan secara teknis, melainkan langsung menjawab tantangan operasional bisnis Anda.',
    'Kami menerjemahkan setiap target teknologi informasi pelanggan menjadi alur proses bisnis yang praktis, terukur, dan mudah dijalankan oleh tim internal. Bagi kami, kunci keberhasilan investasi TI bukan pada seberapa rumit sistemnya, melainkan pada ketepatan implementasi dalam mendukung produktivitas sehari-hari.',
    'Kekuatan utama Nesyer lahir dari kolaborasi erat antara analis bisnis yang memahami dinamika industri perbankan dan korporasi bersama para profesional IT yang berpengalaman langsung menangani implementasi sistem berskala kritikal.',
  ],
  vision: 'Menjadi Perusahaan Jasa Services & Solution Management yang Terbaik & Terpercaya.',
  mission: 'Memberikan Support dan Services terbaik kepada Customer.',
  headOffice: {
    label: 'Kantor Pusat',
    company: 'PT. Nesyer Lintas Teknologi',
    building: 'Gedung Grand Slipi Tower Lt. 42 Unit G-H',
    street: 'Jl. Letjen S. Parman Kav. 22–24, RT. 001 / RW. 004',
    district: 'Palmerah, Jakarta Barat, DKI Jakarta',
    fullAddress:
      'Gedung Grand Slipi Tower Lt. 42 Unit G-H, Jl. Letjen S. Parman Kav. 22–24, RT. 001 / RW. 004, Palmerah, Jakarta Barat, DKI Jakarta',
    phone: '(021) 29222999',
    phoneHref: 'tel:+622129222999',
    email: 'support@nesyerlintasteknologi.com',
    hours: 'Senin – Jumat, 08.30 – 17.30 WIB',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Grand+Slipi+Tower+Jl.+Letjen+S.+Parman+Kav.+22-24+Palmerah+Jakarta+Barat',
  },
};

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: 'Banking Gateway' | 'Enterprise Integration' | 'Logistics System' | 'Regulatory Compliance';
  shortDescription: string;
  description: string;
  protocols: string[];
  highlights: string[];
  flow: {
    source: string;
    middleware: string;
    destination: string;
    protocolLabel: string;
  };
  image: string;
  imageAlt: string;
  deployedAt: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'rtgs-next-g',
    number: '01',
    name: 'Middleware RTGS Next G',
    category: 'Banking Gateway',
    shortDescription:
      'Kirim transaksi RTGS bernilai besar langsung ke STPG Bank Indonesia tanpa repot token BI manual—lebih cepat, aman, dan terekonsiliasi otomatis.',
    description:
      'Solusi interface perbankan yang menjembatani Core Banking Anda dengan sistem BI-RTGS Gen 2 secara real-time. Dilengkapi fitur unggulan pengiriman pesan langsung ke STPG Bank Indonesia tanpa memakai token BI, sehingga proses setelmen dana bernilai besar berjalan jauh lebih efisien dengan risiko human error yang minimal.',
    protocols: ['BI-RTGS Gen 2', 'STPG BI Direct', 'ISO 20022 / MT', 'Core Banking Host'],
    highlights: [
      'Konektivitas real-time dua arah antara Core Banking dengan aplikasi BI-RTGS Bank Indonesia.',
      'Pengiriman transaksi langsung ke STPG BI tanpa ketergantungan token BI manual.',
      'Rekonsiliasi harian otomatis, audit trail lengkap, dan pemantauan status antrean transaksi.',
      'Terbukti andal di lingkungan produksi BPD, bank swasta nasional, hingga bank asing.',
    ],
    flow: {
      source: 'Core Banking System',
      middleware: 'Nesyer RTGS Next G',
      destination: 'STPG / BI-RTGS Gen 2',
      protocolLabel: 'Direct STPG · Tanpa Token BI Manual',
    },
    image: middlewareHubImg,
    imageAlt: 'Ilustrasi arsitektur middleware dan gateway transaksi perbankan RTGS Next G',
    deployedAt: [
      'Bank Sulselbar (Konvensional & Syariah)',
      'Bank Kalteng',
      'Bank of China Limited (Hong Kong)',
      'Bank Ina Perdana',
      'Bank Bengkulu',
    ],
  },
  {
    id: 'skn-gen',
    number: '02',
    name: 'Middleware SKN Gen',
    category: 'Banking Gateway',
    shortDescription:
      'Otomatisasi penuh operasional kliring SKN-NG: mulai dari pengunduhan incoming kredit, debet, dan Bulk Payment hingga pengiriman outgoing.',
    description:
      'Dirancang khusus untuk menyambungkan Core Banking dengan Sistem Kliring Nasional Bank Indonesia Generasi Baru (SKN-NG). Tim operasional bank tidak lagi direpotkan proses manual—seluruh transaksi incoming kredit, debet, Bulk Payment dari Bank Indonesia maupun outgoing kliring diproses otomatis, cepat, dan tervalidasi.',
    protocols: ['SKN-NG BI', 'Bulk Payment', 'Incoming Kredit & Debet', 'Outgoing Clearing'],
    highlights: [
      'Pengunduhan otomatis transaksi incoming kredit, debet, dan Bulk Payment langsung dari BI.',
      'Pengiriman transaksi outgoing dari Core Banking menuju SKN-NG secara cepat dan terukur.',
      'Validasi format kliring sebelum transmisi untuk menekan tingkat retur dan selisih data.',
      'Siap mendukung operasional bank konvensional maupun unit usaha syariah secara bersamaan.',
    ],
    flow: {
      source: 'Core Banking / CMS',
      middleware: 'Nesyer SKN Gen',
      destination: 'SKN-NG Bank Indonesia',
      protocolLabel: 'Incoming Kredit/Debet · Bulk Payment · Outgoing',
    },
    image: bankingGatewayImg,
    imageAlt: 'Infrastruktur server perbankan untuk otomasi kliring nasional SKN-NG',
    deployedAt: [
      'Bank Sulselbar (Konvensional & Syariah)',
      'Bank Kalteng',
      'Bank of China Limited (Hong Kong)',
      'Bank Bengkulu',
    ],
  },
  {
    id: 'middleware-system',
    number: '03',
    name: 'Middleware System',
    category: 'Enterprise Integration',
    shortDescription:
      'Satu hub integrasi fleksibel berbasis JSON dan ISO 8583 untuk menghubungkan CMS, Core Banking, pajak daerah, e-Samsat, hingga layanan publik.',
    description:
      'Tidak perlu merombak sistem lama untuk meluncurkan layanan baru. Middleware System Nesyer berperan sebagai jembatan cerdas multi-prosedur yang menerjemahkan serta mengarahkan pertukaran data berstandar JSON dan ISO 8583 antar-aplikasi perbankan, kanal korporasi, hingga ekosistem pembayaran pemerintah daerah.',
    protocols: ['JSON / REST', 'ISO 8583', 'Multi-Procedure Routing', 'Core Banking Bridge'],
    highlights: [
      'Translasi dan routing pesan dua arah antara protokol JSON modern dan standar perbankan ISO 8583.',
      'Menghubungkan Cash Management System (CMS) langsung dengan Core Banking, RTGS, dan SKN-NG.',
      'Terbukti mengintegrasikan Samolnas, e-Samsat, Taspen, SP2D ke RTGS & SKN, Pajak, dan Bappenda.',
      'Arsitektur modular yang mempercepat penambahan mitra biller maupun kanal layanan baru.',
    ],
    flow: {
      source: 'CMS / Pajak / e-Samsat / Taspen',
      middleware: 'Nesyer Middleware Hub',
      destination: 'Core Banking · RTGS · SKN',
      protocolLabel: 'Multi-Protocol Bridge: JSON & ISO 8583',
    },
    image: middlewareHubImg,
    imageAlt: 'Visualisasi arsitektur hub integrasi Middleware System JSON dan ISO 8583',
    deployedAt: ['Bank Kalteng (8 Modul Integrasi Terpadu)'],
  },
  {
    id: 'smart-depo',
    number: '04',
    name: 'Smart Depo',
    category: 'Logistics System',
    shortDescription:
      'Kendalikan arus kargo dan kontainer pelabuhan secara real-time—dari gerbang masuk-keluar hingga pelaporan stok depo yang akurat.',
    description:
      'Aplikasi manajemen operasional kargo dan peti kemas yang dirancang khusus untuk kebutuhan pelabuhan dan depo logistik di Indonesia. Smart Depo memangkas pencatatan manual di lapangan, mempercepat layanan gate-in/gate-out, serta menyajikan visibilitas stok kontainer secara real-time bagi manajemen.',
    protocols: ['Cargo Tracking', 'Container Inventory', 'Gate In / Gate Out', 'Operational Reporting'],
    highlights: [
      'Pemantauan posisi, status, dan riwayat pergerakan kontainer kargo pelabuhan secara terpusat.',
      'Mempercepat proses keluar-masuk armada (gate in/out) serta optimalisasi lahan penumpukan.',
      'Laporan operasional harian dan utilitas depo otomatis untuk pengambilan keputusan cepat.',
      'Telah terbukti berjalan nyata mendukung operasional kargo PT. Contindo Raya Padang.',
    ],
    flow: {
      source: 'Gate Pelabuhan & Petugas Lapangan',
      middleware: 'Smart Depo Core Engine',
      destination: 'Inventaris Kontainer & Laporan',
      protocolLabel: 'Digitalisasi Manajemen Kargo & Peti Kemas',
    },
    image: smartDepoOpsImg,
    imageAlt: 'Supervisor logistik pelabuhan memantau inventaris kontainer menggunakan tablet Smart Depo',
    deployedAt: ['PT. Contindo Raya Padang'],
  },
  {
    id: 'go-aml',
    number: '05',
    name: 'Go AML',
    category: 'Regulatory Compliance',
    shortDescription:
      'Penuhi kewajiban pelaporan data transaksi keuangan ke OJK lebih cepat, tepat waktu, dan bebas kendala validasi format.',
    description:
      'Solusi kepatuhan regulasi Anti-Money Laundering (Go AML) yang membantu tim compliance perbankan menyiapkan, memvalidasi, serta mengirimkan laporan transaksi keuangan kepada OJK dan regulator secara sistematis. Hemat waktu tim kepatuhan sekaligus jaga reputasi tata kelola bank Anda.',
    protocols: ['OJK Reporting Standard', 'XML / Structured Schema', 'Auto Validation', 'Audit Trail'],
    highlights: [
      'Ekstraksi dan pemetaan data transaksi otomatis langsung dari sistem inti perbankan.',
      'Validasi skema pelaporan sejak dini guna mencegah penolakan atau revisi berulang.',
      'Pencatatan jejak audit menyeluruh yang siap menghadapi pemeriksaan internal maupun regulator.',
      'Mempercepat siklus pelaporan berkala tanpa mengganggu performa operasional harian bank.',
    ],
    flow: {
      source: 'Core Banking & Data Transaksi',
      middleware: 'Nesyer Go AML Engine',
      destination: 'Pelaporan OJK & Regulator',
      protocolLabel: 'Validasi Skema & Kepatuhan Pelaporan',
    },
    image: goAmlImg,
    imageAlt: 'Tim kepatuhan perbankan menganalisis pelaporan transaksi keuangan Go AML ke OJK',
    deployedAt: ['Solusi Kepatuhan Sektor Perbankan Nasional'],
  },
];

export type PortfolioCategory = 'Semua' | 'SKN-NG' | 'RTGS Gen 2' | 'Middleware' | 'Smart Depo';

export interface PortfolioProject {
  id: string;
  category: Exclude<PortfolioCategory, 'Semua'>;
  title: string;
  scope: string;
  summary: string;
  clients: string[];
  deliverables: string[];
  protocols: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-skn-ng',
    category: 'SKN-NG',
    title: 'Implementasi Aplikasi Interface SKN-NG',
    scope: 'Sistem Kliring Nasional Bank Indonesia',
    summary:
      'Memodernisasi transaksi kliring antarbank dengan menghubungkan Core Banking langsung ke jaringan SKN-NG Bank Indonesia—otomatisasi incoming kredit, debet, Bulk Payment, serta outgoing kliring dalam satu alur yang presisi.',
    clients: [
      'Bank Sulselbar (Konvensional & Syariah)',
      'Bank Kalteng',
      'Bank of China Limited (Hong Kong)',
      'Bank Bengkulu',
    ],
    deliverables: [
      'Integrasi menyeluruh Core Banking ke gerbang SKN-NG Bank Indonesia',
      'Otomatisasi unduh transaksi incoming kredit, debet, dan Bulk Payment',
      'Validasi otomatis pengiriman transaksi outgoing kliring harian',
      'Pendampingan penuh mulai dari UAT, Go-Live, hingga pemeliharaan produksi',
    ],
    protocols: ['SKN-NG BI', 'Bulk Payment', 'Core Banking Interface'],
  },
  {
    id: 'proj-rtgs-gen2',
    category: 'RTGS Gen 2',
    title: 'Implementasi Aplikasi Interface RTGS Gen 2',
    scope: 'Real-Time Gross Settlement & STPG BI',
    summary:
      'Menghadirkan pemrosesan setelmen transaksi bernilai besar secara real-time di lima institusi perbankan nasional & asing, termasuk fitur pengiriman langsung ke STPG BI tanpa memerlukan token BI manual.',
    clients: [
      'Bank Sulselbar (Konvensional & Syariah)',
      'Bank Kalteng',
      'Bank of China Limited (Hong Kong)',
      'Bank Ina Perdana',
      'Bank Bengkulu',
    ],
    deliverables: [
      'Konektor Core Banking dengan aplikasi BI-RTGS Gen 2 berkeandalan tinggi',
      'Mekanisme kirim langsung ke STPG BI tanpa pemakaian token BI manual',
      'Kesiapan penuh untuk operasional bank konvensional maupun syariah',
      'Monitoring antrean transaksi real-time dan rekonsiliasi otomatis',
    ],
    protocols: ['RTGS Gen 2', 'STPG BI', 'Direct Settlement'],
  },
  {
    id: 'proj-middleware-kalteng',
    category: 'Middleware',
    title: 'Ekosistem Aplikasi Middleware Terpadu Bank Kalteng',
    scope: 'Integrasi Multi-Kanal Perbankan & Layanan Publik Daerah',
    summary:
      'Membangun tulang punggung middleware di Bank Kalteng yang menyatukan Cash Management System (CMS), Core Banking, jaringan RTGS & SKN, serta layanan pajak dan pemerintahan daerah dalam satu platform terpadu.',
    clients: ['Bank Kalteng'],
    deliverables: [
      'Koneksi Cash Management System (CMS) dengan Core Banking secara real-time',
      'Integrasi kanal Samolnas (Samsat Online Nasional) & e-Samsat daerah',
      'Integrasi pembayaran Taspen dan pencairan SP2D ke RTGS & SKN',
      'Integrasi penerimaan Pajak, Bappenda, serta koneksi CMS ke RTGS & SKN',
    ],
    protocols: ['JSON', 'ISO 8583', 'CMS Bridge', 'SP2D & Pajak Daerah'],
  },
  {
    id: 'proj-smart-depo',
    category: 'Smart Depo',
    title: 'Implementasi Aplikasi Smart Depo',
    scope: 'Digitalisasi Operasional Kargo & Peti Kemas Pelabuhan',
    summary:
      'Mendigitalisasi operasional depo kontainer PT. Contindo Raya Padang agar pencatatan arus kargo, tata kelola blok penumpukan, dan pelaporan operasional berjalan lebih cepat, transparan, dan akurat.',
    clients: ['PT. Contindo Raya Padang'],
    deliverables: [
      'Platform terpadu manajemen kargo dan peti kemas di lingkungan pelabuhan',
      'Pencatatan akurat pergerakan gate-in dan gate-out kontainer harian',
      'Pelaporan stok lapangan penumpukan dan utilitas depo secara real-time',
      'Pelatihan operator lapangan serta dukungan pemeliharaan berkelanjutan',
    ],
    protocols: ['Smart Depo Engine', 'Port Cargo Management', 'Inventory Control'],
  },
];

export const BANK_KALTENG_MIDDLEWARE_MODULES = [
  { code: '01', name: 'CMS ↔ Core Banking', detail: 'Sinkronisasi transaksi korporasi Cash Management System langsung ke Core Banking.' },
  { code: '02', name: 'CMS → RTGS & SKN', detail: 'Eksekusi transfer dana bernilai besar dan kliring langsung dari kanal CMS ke BI.' },
  { code: '03', name: 'SP2D → RTGS & SKN', detail: 'Mempercepat pencairan Surat Perintah Pencairan Dana (SP2D) pemerintah daerah.' },
  { code: '04', name: 'Samolnas', detail: 'Konektivitas kanal pembayaran Samsat Online Nasional secara real-time.' },
  { code: '05', name: 'e-Samsat', detail: 'Kemudahan penerimaan pajak kendaraan bermotor daerah langsung melalui bank.' },
  { code: '06', name: 'Taspen', detail: 'Integrasi sistem verifikasi dan penyaluran layanan pembayaran PT Taspen.' },
  { code: '07', name: 'Pajak', detail: 'Otomatisasi penerimaan dan pelaporan transaksi setoran pajak nasabah.' },
  { code: '08', name: 'Bappenda', detail: 'Jembatan penerimaan pendapatan daerah langsung ke Badan Pendapatan Daerah.' },
];

export type ClientSector = 'Semua' | 'Bank Pembangunan Daerah' | 'Bank Nasional & Asing' | 'Logistik & Pelabuhan';

export interface ClientProfile {
  id: string;
  name: string;
  shortCode: string;
  logo: string;
  sector: Exclude<ClientSector, 'Semua'>;
  region: string;
  accentHex: string;
  implementations: string[];
  summary: string;
}

export const CLIENTS: ClientProfile[] = [
  {
    id: 'boc',
    name: 'Bank of China Limited (Hong Kong)',
    shortCode: 'BOC',
    logo: logoBoc,
    sector: 'Bank Nasional & Asing',
    region: 'Jakarta · Perbankan Internasional',
    accentHex: '#991B1B',
    implementations: ['Interface SKN-NG', 'Interface RTGS Gen 2'],
    summary:
      'Mempercayakan implementasi interface SKN-NG dan RTGS Gen 2 untuk memastikan kelancaran transaksi kliring dan setelmen korporasi berstandar internasional.',
  },
  {
    id: 'bank-kalteng',
    name: 'Bank Kalteng',
    shortCode: 'BKT',
    logo: logoKalteng,
    sector: 'Bank Pembangunan Daerah',
    region: 'Kalimantan Tengah',
    accentHex: '#1D4ED8',
    implementations: [
      'Interface SKN-NG',
      'Interface RTGS Gen 2',
      'Enterprise Middleware (CMS, Samolnas, Taspen, SP2D, Pajak, e-Samsat, Bappenda)',
    ],
    summary:
      'Kemitraan jangka panjang mencakup gerbang pembayaran Bank Indonesia serta 8 modul middleware strategis yang menghubungkan Core Banking dengan layanan keuangan daerah.',
  },
  {
    id: 'bank-sulselbar',
    name: 'Bank Sulselbar (Konvensional)',
    shortCode: 'SSB',
    logo: logoSulselbar,
    sector: 'Bank Pembangunan Daerah',
    region: 'Sulawesi Selatan & Barat',
    accentHex: '#0369A1',
    implementations: ['Interface SKN-NG', 'Interface RTGS Gen 2'],
    summary:
      'Implementasi sistem interface SKN-NG dan RTGS Gen 2 guna mempercepat layanan transfer antarbank serta otomasi rekonsiliasi harian.',
  },
  {
    id: 'bank-sulselbar-syariah',
    name: 'Bank Sulselbar Syariah',
    shortCode: 'SBS',
    logo: logoSulselbarSyariah,
    sector: 'Bank Pembangunan Daerah',
    region: 'Sulawesi Selatan & Barat · Unit Syariah',
    accentHex: '#0F766E',
    implementations: ['Interface SKN-NG Syariah', 'Interface RTGS Gen 2 Syariah'],
    summary:
      'Penerapan gerbang pembayaran SKN-NG dan RTGS Gen 2 yang dirancang khusus mendukung operasional unit usaha syariah secara presisi dan patuh regulasi.',
  },
  {
    id: 'bank-bengkulu',
    name: 'Bank Bengkulu',
    shortCode: 'BKL',
    logo: logoBengkulu,
    sector: 'Bank Pembangunan Daerah',
    region: 'Bengkulu',
    accentHex: '#1E40AF',
    implementations: ['Interface SKN-NG', 'Interface RTGS Gen 2'],
    summary:
      'Menghubungkan sistem Core Banking Bank Bengkulu ke jaringan pembayaran nasional SKN-NG dan RTGS Gen 2 untuk layanan transaksi nasabah yang lebih responsif.',
  },
  {
    id: 'bank-ina',
    name: 'Bank Ina Perdana',
    shortCode: 'INA',
    logo: logoIna,
    sector: 'Bank Nasional & Asing',
    region: 'Jakarta · Bank Umum Swasta Nasional',
    accentHex: '#B45309',
    implementations: ['Interface RTGS Gen 2'],
    summary:
      'Implementasi aplikasi interface RTGS Gen 2 yang mendukung pemrosesan transaksi transfer dana bernilai tinggi secara real-time dan terukur.',
  },
  {
    id: 'contindo',
    name: 'PT. Contindo Raya Padang',
    shortCode: 'CRP',
    logo: logoContindo,
    sector: 'Logistik & Pelabuhan',
    region: 'Padang · Sumatera Barat',
    accentHex: '#334155',
    implementations: ['Smart Depo Cargo & Container System'],
    summary:
      'Modernisasi pengelolaan kargo dan peti kemas di pelabuhan melalui implementasi aplikasi Smart Depo untuk efisiensi operasional depo harian.',
  },
];

export const KEY_METRICS = [
  { value: '7+', label: 'Institusi Perbankan & Korporasi', detail: 'Dipercaya BPD, bank swasta nasional, bank asing, hingga logistik pelabuhan' },
  { value: '5', label: 'Solusi Aplikasi Siap Pakai', detail: 'RTGS Next G, SKN Gen, Middleware ISO 8583/JSON, Smart Depo & Go AML' },
  { value: '8+', label: 'Kanal Layanan Terintegrasi', detail: 'CMS, SP2D, Samolnas, e-Samsat, Taspen, Pajak & Bappenda dalam satu hub' },
  { value: '0 Token', label: 'Pengiriman Langsung STPG BI', detail: 'Otomatisasi transaksi RTGS langsung ke STPG Bank Indonesia tanpa token manual' },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Pemetaan Kebutuhan & Proses Bisnis',
    description:
      'Analis bisnis kami menggali target operasional, alur transaksi internal, serta ketentuan Bank Indonesia maupun OJK agar solusi tepat sasaran sejak hari pertama.',
  },
  {
    step: '02',
    title: 'Arsitektur Integrasi Tanpa Gangguan',
    description:
      'Merancang jembatan middleware berbasis ISO 8583, JSON, atau gateway STPG yang menyatu mulus dengan Core Banking Anda tanpa mengubah sistem eksisting.',
  },
  {
    step: '03',
    title: 'Implementasi, UAT & Go-Live Terukur',
    description:
      'Pengembangan terstruktur diikuti pengujian menyeluruh bersama tim IT internal Anda hingga sistem siap meluncur mulus di lingkungan produksi.',
  },
  {
    step: '04',
    title: 'Pendampingan & Dukungan Berkelanjutan',
    description:
      'Dukungan teknis responsif, pemeliharaan proaktif, dan penyempurnaan berkala demi menjaga performa sistem serta kepuasan pelanggan jangka panjang.',
  },
];
