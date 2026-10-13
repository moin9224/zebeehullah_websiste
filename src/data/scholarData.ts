import { ScholarProfile, Fatwa, Book, MediaItem, Article, ResourceItem, EventItem } from "@/types";

export const SCHOLAR_PROFILE: ScholarProfile = {
  name: "Mufti Zabeehullah Leghari",
  nameUrdu: "مفتی ذبیح اللہ لغاری",
  titles: ["Islamic Scholar", "Mufti", "Researcher", "Educationist"],
  roleTitle: "Islamic Scholar • Mufti • Researcher • Educationist",
  heroTagline: "Bridging Classical Heritage with Contemporary Thought",
  heroDescription:
    "Engaging the Islamic intellectual tradition with modern legal, economic, educational, and social inquiry to build a contextually relevant and methodologically rigorous scholarly discourse.",
  bio: "Mufti Zabeehullah Leghari is an Islamic scholar, jurist (Mufti), educationist, and researcher. Serving as CEO of Dar ul Ifta Daharki and Director at the Institute of Islamic Sciences (Daharki, Sindh), his work integrates classical Islamic scholarship (Dars-e-Nizami / Shahadat-ul-Almiyah and Takhassus in Fiqh, Ifta & Islamic Economics) with modern academic disciplines (MPhil, MA, BA, B.Ed). He specializes in contemporary jurisprudential reasoning (Nawazil), commercial transaction ethics, and institutional pedagogical reform.",
  contactEmail: "zabeehullahanwer@gmail.com",
  location: "Daharki, Sindh, Pakistan",
  roles: [
    {
      title: "CEO & Head Mufti",
      organization: "Dar ul Ifta Daharki",
      icon: "Scroll",
      description: "Leading juristic consultation, issuing scholarly decrees (Fatawa), and presiding over commercial dispute reconciliations.",
    },
    {
      title: "Director",
      organization: "Institute of Islamic Sciences",
      icon: "Building2",
      description: "Directing higher scholarly curriculum, institutional training programs, and academic research initiatives in Daharki, Sindh.",
    },
    {
      title: "PhD Candidate",
      organization: "Islamic Studies",
      icon: "GraduationCap",
      description: "Doctoral research concentrating on contemporary jurisprudential hermeneutics and legal philosophy.",
    },
    {
      title: "Takhassus (Specialization)",
      organization: "Fiqh, Ifta & Islamic Economics",
      icon: "Award",
      description: "Advanced post-graduate specialization in classical jurisprudence, fatwa methodology, and Islamic commercial contracts.",
    },
  ],
  credentials: [
    { degree: "Takhassus fil-Fiqh wal-Ifta", field: "Islamic Jurisprudence, Fatwa & Economics", level: "classical" },
    { degree: "Shahadat-ul-Almiyah (Dars-e-Nizami)", field: "Islamic Sciences & Classical Arabic (HEC Equivalent MA)", level: "classical" },
    { degree: "PhD (Candidate)", field: "Islamic Studies", level: "modern" },
    { degree: "MPhil", field: "Islamic Studies & Research Methodology", level: "modern" },
    { degree: "Master of Arts (MA)", field: "Islamic Studies & Arabic", level: "modern" },
    { degree: "Bachelor of Education (B.Ed)", field: "Pedagogical Theory & Educational Psychology", level: "modern" },
    { degree: "Bachelor of Arts (BA)", field: "Humanities & Social Sciences", level: "modern" },
  ],
  threePillars: [
    {
      title: "Rooted in Tradition",
      titleArabic: "أصالت (Asalah)",
      description:
        "Deep, uncompromising engagement with the Holy Qur'an, the authentic Sunnah, classical jurisprudence (Fiqh), and the monumental heritage of Islamic legal reasoning.",
      icon: "BookOpen",
      points: [
        "Rigorous adherence to classical Usul al-Fiqh principles",
        "Direct derivation from authoritative classical compendia (Qawa'id Fiqhiyyah)",
        "Preservation of traditional Isnad, academic lineage, and scholarly etiquette",
      ],
    },
    {
      title: "Engaged with Reality",
      titleArabic: "عصريت (Asriyyah)",
      description:
        "Methodological analysis of contemporary legal, economic, educational, and technological shifts without doctrinal dilution.",
      icon: "Compass",
      points: [
        "Critical inquiry into modern financial instruments & digital assets",
        "Empirical appreciation of contemporary societal realities (Tahqiq al-Manat)",
        "Dialogue with modern law, corporate structures, and economic theory",
      ],
    },
    {
      title: "Intellectual Confidence",
      titleArabic: "دعوت و تفہيم (Da'wah & Tafheem)",
      description:
        "Articulating Islamic answers and juristic guidance (Ifta) with persuasive clarity, pedagogical warmth, and academic rigor in universities and seminaries alike.",
      icon: "Sparkles",
      points: [
        "Accessible, clear legal exposition for public and professionals",
        "Modern instructional methodologies (5E Pedagogical Model)",
        "Empowering Muslim youth with principled intellectual clarity",
      ],
    },
  ],
  socials: [
    { name: "Google Scholar", url: "https://scholar.google.com", icon: "BookOpen" },
    { name: "ORCID", url: "https://orcid.org", icon: "ShieldCheck" },
    { name: "ResearchGate", url: "https://www.researchgate.net", icon: "Share2" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
  ],
};

export const SAMPLE_FATAWA: Fatwa[] = [
  {
    id: "fatwa-101",
    fatwaNumber: "DID-2024-892",
    title: "The Shariah Status of Cryptocurrency & Algorithmic Tokens in Modern Commerce",
    titleUrdu: "معاصر معیشت میں کرپٹو کرنسی اور الگورتھمک ٹوکنز کی شرعی حیثیت اور حکم",
    category: "Commercial & Business Fiqh",
    date: "14 Sha'ban 1445 AH / March 2024",
    question:
      "What is the juristic position regarding trading and investing in decentralised cryptocurrencies (such as Bitcoin) and speculative utility tokens? Does it satisfy the legal requirements of Mal (valuable property) and Thamaniyyah (currency function)?",
    questionUrdu: "معاصر دور میں کرپٹو کرنسی (جیسے بٹ کوائن) کی خرید و فروخت اور اس میں سرمایہ کاری کی کیا شرعی حیثیت ہے؟ کیا یہ مالِ متقوم اور ثمنیت کے شرعی شرائط پر پورا اترتی ہے؟",
    answerSummary:
      "Purely speculative tokens that lack legal tender backing, inherent utility, or sovereign guarantee fail the test of stable Thamaniyyah and carry excessive Gharar (uncertainty) and Qimar (gambling elements). However, digital assets tied directly to verifiable underlying assets (Asset-Backed Real World Tokens) operate under distinct contract rules.",
    fullAnswer:
      "بسم الله الرحمن الرحيم\n\nالجواب وبالله التوفيق:\n\nIn classical Islamic jurisprudence, an item qualifies as 'Mal' (property) if it possesses inherent legitimate utility (Intifa' Shar'i) and can be secured and stored (Iddikhar). 'Thamaniyyah' (monetary value) requires widespread acceptance, legal sovereign enforcement, or universal custom (Urf Mu'tabar) to prevent currency manipulation and predatory arbitrage.\n\nMost speculative cryptocurrencies currently function as high-risk digital commodities driven predominantly by speculative frenzy (Mudarabah Mamnū'ah) rather than genuine medium of exchange. The Prophet ﷺ prohibited Gharar transactions (Sahih Muslim). Therefore, general trading solely for arbitrage gains is impermissible until monetary stability and regulatory asset backing are instituted.",
    arabicCitations: [
      "قال الإمام ابن عابدين في رد المحتار: 'المال ما يميل إليه الطبع ويجري فيه البذل والمنع... والمالية تثبت بتمول الناس كافة أو بعضهم'",
      "وفي الحديث الشريف: 'نهى رسول الله ﷺ عن بيع الغرر' (صحيح مسلم)",
      "المجلة، المادة (١٢٦): 'المال هو ما يميل إليه طبع الإنسان ويمكن ادخاره لوقت الحاجة'",
    ],
    mufti: "Mufti Zabeehullah Leghari (دار الافتاء ڈہرکی)",
    darUlIfta: "Dar ul Ifta Daharki (شعبہ الافتاء و البحوث)",
    tags: ["Cryptocurrency", "Islamic Economics", "Gharar", "Digital Assets", "Fiqh al-Muamalat"],
    views: 1420,
  },
  {
    id: "fatwa-102",
    fatwaNumber: "DID-2024-814",
    title: "Compliance Parameters of Commodity Murabaha & Profit Rate Indexing in Islamic Banking",
    titleUrdu: "اسلامی بینکاری میں کموڈٹی مرابحہ اور پرافٹ ریٹ انڈیکسنگ کے شرعی ضوابط",
    category: "Commercial & Business Fiqh",
    date: "28 Jumada al-Thani 1445 AH / January 2024",
    question:
      "Is it permissible for Islamic banks to benchmark their Murabaha profit rates against conventional interest benchmarks (such as KIBOR/LIBOR), and does Commodity Murabaha (Tawarruq) constitute a legitimate sale?",
    questionUrdu: "کیا اسلامی بینکاری میں مرابحہ کے منافع کا تعین مروجہ سودی شرحِ سود (KIBOR وغیرہ) کے ذریعے کرنا جائز ہے، اور کموڈٹی مرابحہ شرعی لحاظ سے درست ہے؟",
    answerSummary:
      "Benchmarking profit margin against an external market index (such as KIBOR) for pricing calculation does not in itself invalidate the sale, provided the contract terms, price, and payment schedule are fixed upon execution without compounding late penalties. Organized Tawarruq must fulfill strict physical or constructive possession (Qabd) to avoid fictitious sales (Bay' al-Inah).",
    fullAnswer:
      "بسم الله الرحمن الرحيم\n\nالجواب وبالله التوفيق:\n\n1. Pricing Index: Using a prevailing index simply provides a market pricing metric. As stated by jurists, if a seller says 'I sell this at wholesale cost plus the market index percentage on this day,' and the ultimate cash price is explicitly agreed upon before signing, the contract is valid because jahalah (uncertainty) is removed.\n\n2. Constructive Possession: The primary danger in contemporary Commodity Murabaha is mechanical paper transactions without actual ownership transfer of the underlying commodity. Possession (Hiyazah) and risk-bearing (Daman) must be genuinely assumed by the bank prior to onward sale to the client.",
    arabicCitations: [
      "في الدر المختار: 'ولا بأس بأن يبيع المرابحة بزيادة معلومة على رأس المال'",
      "قرار مجمع الفقه الإسلامي الدولي رقم ٥١ (٢/٦) بشأن التورق والمصارف الإسلامية",
    ],
    mufti: "Mufti Zabeehullah Leghari",
    darUlIfta: "Dar ul Ifta Daharki",
    tags: ["Islamic Banking", "Murabaha", "KIBOR", "Tawarruq", "Commercial Law"],
    views: 980,
  },
  {
    id: "fatwa-103",
    fatwaNumber: "DID-2024-742",
    title: "Inheritance Distribution of Digital Intellectual Property & Monetized Online Channels",
    titleUrdu: "ڈیجیٹل اثاثوں، مونیٹائزڈ چینلز اور فکری ملکیت کے حقوق کی شرعی تقسیمِ وراثت",
    category: "Family Law",
    date: "12 Rabi al-Awwal 1445 AH / October 2023",
    question:
      "When a deceased individual leaves behind digital assets, such as monetized YouTube channels, software licenses, domain portfolios, and commercial copyright royalties, how should these be distributed among legal heirs?",
    questionUrdu: "اگر کوئی شخص وفات پا جائے اور اس کے ترکہ میں آن لائن مونیٹائزڈ چینلز، سافٹ ویئر لائسنس، ڈومینز اور کاپی رائٹ رائلٹی ہو تو اس کی تقسیمِ وراثت کا کیا طریقہ کار ہوگا؟",
    answerSummary:
      "All legally monetizable digital rights and legitimate intellectual properties are recognized as valuable rights (Huquq Maliyyah) within the deceased's estate (Tirka). They must be evaluated at fair market value and apportioned according to Quranic Shariah shares among all legal heirs.",
    fullAnswer:
      "بسم الله الرحمن الرحيم\n\nالجواب وبالله التوفيق:\n\nContemporary jurisprudential bodies, including the International Islamic Fiqh Academy (OIC), affirm that intellectual property (Haqq al-Ibtikar) and commercial digital rights possess financial value (Qimah Maliyyah). Consequently:\n\n1. The account/channel itself or its continuing revenue streams form an integral part of the deceased's estate.\n2. The heirs cannot monopolize the asset arbitrarily; it must be either jointly administered with proportional revenue sharing, or appraised by unbiased digital valuation experts and bought out by one heir with consent of all heirs.",
    arabicCitations: [
      "قرار مجمع الفقه الإسلامي الدولي رقم ٤٣ (٥/٥): 'حقوق التأليف والاختراع أو الابتكار مصونة شرعاً ولأصحابها حق التصرف فيها'",
      "قال العلامة ابن نجيم في الأشباه والنظائر: 'الحق المالي يورث كالأعيان'",
    ],
    mufti: "Mufti Zabeehullah Leghari",
    darUlIfta: "Dar ul Ifta Daharki",
    tags: ["Inheritance", "Mawarith", "Intellectual Property", "Digital Estate", "Family Law"],
    views: 1250,
  },
  {
    id: "fatwa-104",
    fatwaNumber: "DID-2024-610",
    title: "Validity Criteria of Solemnizing Nikah via Encrypted Video Conferencing with Dispersed Witnesses",
    titleUrdu: "ویڈیو کانفرنسنگ اور ڈیجیٹل ذرائع سے عقدِ نکاح کا شرعی انعقاد اور شرائط",
    category: "Family Law",
    date: "04 Muharram 1445 AH / July 2023",
    question:
      "Can a marriage contract (Ijab and Qabul) be legitimately solemnized through real-time video link when the bride, groom, and witnesses are in different cities or countries due to visa constraints?",
    questionUrdu: "کیا ویزا یا جغرافیائی بعد کی مجبوری کی بنا پر ویڈیو کانفرنس پر ایجاب و قبول کے ذریعے نکاح منعقد ہو سکتا ہے جب کہ گواہان بھی آن لائن شامل ہوں؟",
    answerSummary:
      "For a fully valid Nikah, the foundational requirement of 'Ittihad al-Majlis' (unity of assembly) requires that either the parties be physically present in the same session or that an official proxy/agent (Wakil) be appointed physically in the bride's presence before two competent male Muslim witnesses.",
    fullAnswer:
      "بسم الله الرحمن الرحيم\n\nالجواب وبالله التوفيق:\n\nThe standard rule in Hanafi jurisprudence stipulates Ittihad al-Majlis (the meeting of the parties in a single physical location with two simultaneous witnesses hearing the mutual consent). To eliminate ambiguity, fraud, and legal invalidity:\n\nThe soundest and canonically indisputable method is 'Tawkeel fi an-Nikah' (Agency in Marriage). The groom authorizes a trustworthy person in writing or clear voice proxy to represent him in the physical assembly where the bride and the witnesses reside. The agent then pronounces: 'I marry [Bride's Name] to my principal [Groom's Name] for the agreed Mahr.'",
    arabicCitations: [
      "في رد المحتار: 'ومن شرط صحة النكاح اتحاد المجلس وحضور الشاهدين يسمعان كلامهما معاً'",
      "بدائع الصنائع للكاساني: 'النكاح ينعقد بالوكالة والرسالة'",
    ],
    mufti: "Mufti Zabeehullah Leghari",
    darUlIfta: "Dar ul Ifta Daharki",
    tags: ["Nikah", "Family Law", "Video Conferencing", "Wakalah", "Tawkeel"],
    views: 2100,
  },
  {
    id: "fatwa-105",
    fatwaNumber: "DID-2023-512",
    title: "Rules Governing Fasting & Injections, Inhalers, and Modern Medical Procedures",
    titleUrdu: "روزے کی حالت میں انہیلر، انجیکشن اور جدید طبی طریقہ علاج کے شرعی احکام",
    category: "Fiqh al-Ibadat",
    date: "15 Sha'ban 1444 AH / March 2023",
    question:
      "Does using a salbutamol asthma inhaler, intramuscular/intravenous injections, or undergoing kidney dialysis invalidate the fast according to sound classical jurisprudence?",
    questionUrdu: "کیا دمے کے مریض کے لیے انہیلر کے استعمال، ڈرپ/انجیکشن لگوانے اور ڈائیلاسز کروانے سے روزہ ٹوٹ جاتا ہے؟",
    answerSummary:
      "Injections (intramuscular and intravenous) that are purely medicinal and do not provide nutritional nourishment do not break the fast. However, asthma inhalers spray micro-droplets directly past the pharynx into the gastrointestinal and pulmonary passage, thereby breaking the fast according to the dominant classical standard.",
    fullAnswer:
      "بسم الله الرحمن الرحيم\n\nالجواب وبالله التوفيق:\n\n1. Injections: Intravenous (IV) or intramuscular (IM) pain relievers and insulin do not enter through an open natural orifice (Manfadh Asli) into the core stomach cavity (Jawf); therefore, according to contemporary juristic synthesis, they do not invalidate the fast, although nutritional glucose infusions should be avoided unless medically critical.\n\n2. Asthma Inhalers: Inhalers disperse aerosol medicine mixed with micro-droplets that inevitably enter the throat and stomach. For chronic patients who have no cure, Fidyah applies if fasting remains impossible.",
    arabicCitations: [
      "في الفتاوى الهندية: 'وما يدخل من مسام البدن لا يفسد الصوم'",
      "مجمع الفقه الإسلامي الدولي، القرار رقم ٩٣ (١/١٠) بشأن المفطرات الطبية",
    ],
    mufti: "Mufti Zabeehullah Leghari",
    darUlIfta: "Dar ul Ifta Daharki",
    tags: ["Fasting", "Ibadat", "Medical Fiqh", "Ramadan", "Inhaler"],
    views: 3120,
  },
];

export const BOOKS_DATA: Book[] = [
  {
    id: "book-1",
    title: "Dirasat fi Usul al-Fiqh al-Mu'asir",
    titleUrdu: "دراسات في أصول الفقه المعاصر وتطبيقاته القانونية",
    subtitle: "An Analytical Study of Classical Jurisprudential Principles Applied to Modern Legal & Economic Transactions",
    category: "Islamic Jurisprudence & Law",
    categoryUrdu: "فقہ و قانون",
    description:
      "A landmark treatise bridging the classical Usul works of al-Bazdawi, al-Sarakhsi, and al-Shatibi with contemporary commercial contracts, corporate personality, and institutional legal disputes.",
    pages: 440,
    year: "2023",
    isbn: "978-969-8421-11-2",
    language: "Arabic & Urdu",
    coverAccent: "from-emerald-900 to-teal-950",
    isHardCopyAvailable: true,
    excerpt:
      "الحمد لله الذي جعل أصول الشريعة محكمة البنيان، وجعل فروعها متسعة لنوائب الزمان وحوادث الأوان... إن أعظم ما تفتقر إليه الساحة الأكاديمية والشرعية اليوم هو صياغة منهجية دقيقة تربط بين أصالة القواعد الكلية وضوابط التخريج الفقهي، وبين واقع التحولات الاقتصادية والنظم المعاصرة، تجنباً للجمود الجاف أو التمييع المنفلت.",
    tableOfContents: [
      "الباب الأول: التأصيل المنهجي لتحقيق المناط في النوازل المعاصرة",
      "الباب الثاني: الشخصية الاعتبارية وتطبيقاتها في الشركات المساهمة",
      "الباب الثالث: نظرية العقد والالتزام بين الفقه الإسلامي والقوانين الوضعية",
      "الباب الرابع: التكييف الفقهي للحقوق المعنوية والأصول الرقمية",
      "خاتمة وتوصيات لجهات الإفتاء والتحكيم الشرعي",
    ],
  },
  {
    id: "book-2",
    title: "Ethical Frameworks & Commercial Jurisprudence",
    titleUrdu: "فقہ المعاملات المالية: اخلاقیاتِ معیشت اور معاصر بینکاری نظام",
    subtitle: "Ethical Frameworks and Commercial Jurisprudence in Contemporary Financial & Banking Systems",
    category: "Islamic Economics & Commercial Law",
    categoryUrdu: "اسلامی اقتصاد",
    description:
      "An in-depth inquiry into Islamic commercial contracts (Bay', Musharakah, Mudarabah, Salam, and Istisna), evaluating the integrity of modern Islamic financial products against classic Shariah objectives (Maqasid al-Shariah).",
    pages: 380,
    year: "2024",
    isbn: "978-969-8421-15-0",
    language: "Urdu with Arabic Terminology",
    coverAccent: "from-amber-900 to-stone-900",
    isHardCopyAvailable: true,
    excerpt:
      "اسلامی معاشیات محض سود سے بچنے کے چند روایتی حیلوں کا نام نہیں بلکہ یہ پیداوار، تقسیمِ دولت اور سماجی فلاح کا ایک مکمل عادلانہ نظام ہے۔ اس تصنیف میں ہم نے معاصر فنانشل انجینئرنگ اور بینکنگ پروڈکٹس کا فقہ المعاملات کی روشنی میں مفصل تجزیہ کیا ہے تاکہ سچے اسلامی اصولوں پر مبنی معاشی خود مختاری ممکن ہو سکے۔",
    tableOfContents: [
      "فصل اول: فلسفہ ملکیت اور گردشِ دولت کے قرآنی اصول",
      "فصل دوم: سودی نظام کا تاریخی و معاشی محاکمہ اور شبہات کا ازالہ",
      "فصل سوم: مروجہ اسلامی بینکاری کا تنقیدی جائزہ (مرابحہ، اجارہ، مشارکہ متناقصہ)",
      "فصل چہارم: اسلامی مائیکرو فنانس اور غربت کے خاتمے کے عملی ماڈلز",
      "فصل پنجم: زکوٰۃ، عشر اور اوقاف کے فعال نظام کی تجدید",
    ],
  },
  {
    id: "book-3",
    title: "Pedagogical Reform in Islamic Institutions",
    titleUrdu: "اصلاحِ نظامِ تعلیم: دینی مدارس میں 5E ماڈل اور مثبت نظم و ضبط",
    subtitle: "Implementing the 5E Instructional Model, Formative Assessment, and Positive Discipline in Traditional Madaris",
    category: "Pedagogy & Contemporary Thought",
    categoryUrdu: "تعلیم و تربیت",
    description:
      "Synthesizing cognitive psychology, modern instructional design (Engage, Explore, Explain, Elaborate, Evaluate), and classical Madrassa pedagogical traditions to foster high-order analytical reasoning.",
    pages: 260,
    year: "2024",
    isbn: "978-969-8421-18-1",
    language: "Urdu & English",
    coverAccent: "from-blue-950 to-slate-900",
    isHardCopyAvailable: true,
    excerpt:
      "تعلیم محض معلومات منتقل کرنے کا نام نہیں بلکہ فکری صلاحیتوں کو بیدار کرنے اور کردار سازی کا ہمہ جہت عمل ہے۔ روایتی درسِ نظامی کے طلبا کو جہاں کلاسیکی عربی متون پر کامل دسترس حاصل ہوتی ہے، وہیں عصرِ حاضر کی تدریسی حکمت عملی اور جدید تنقیدی شعور ان کی صلاحیتوں کو عالمی معیار تک لے جا سکتا ہے۔",
    tableOfContents: [
      "مبحث اول: روایتی درسِ نظامی کی تاریخی تدریسی خصوصیات",
      "مبحث دوم: تعمیری تدریس (Constructivist Pedagogy) اور 5E ماڈل کا اطلاق",
      "مبحث سوم: کلاس روم مینجمنٹ اور مثبت نظم و ضبط (Positive Discipline)",
      "مبحث چہارم: امتحانی نظام میں تنقیدی تفہیم کی پیمائش کے اصول",
      "ضمیمہ: اساتذہ کے لیے عملی لیسن پلانز اور ورک شیٹس",
    ],
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "media-1",
    title: "How Islamic Banking Creates Real Asset Value vs. Fiat Debt Cycles",
    titleUrdu: "اسلامی بینکاری اور کاغذی کرنسی کے قرضوں کا فرق: فکری و معاشی جائزہ",
    type: "visual",
    typeLabel: "Visual Explainer",
    duration: "18:45",
    date: "August 2024",
    description:
      "An illustrated whiteboard breakdown of asset-backed Islamic contracts versus fractional reserve fiat debt mechanics, demonstrating how real transactions preserve economic stability.",
    thumbnailUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80",
    youtubeId: "y_8cE4-F6iY",
    tags: ["Islamic Economics", "Asset-Backed", "Visual Explainer", "Banking"],
  },
  {
    id: "media-2",
    title: "Hermeneutics of Classical Legal Maxims (Qawa'id Fiqhiyyah) in Modern Law",
    titleUrdu: "قواعدِ فقہیہ کا معاصر قانون سازی اور نظامِ عدل میں اطلاق",
    type: "lecture",
    typeLabel: "Academic Lecture",
    duration: "52:10",
    date: "June 2024",
    description:
      "Special university lecture delivered to post-graduate legal scholars exploring how maxims such as 'Ad-Dararu Yuzal' (Harm must be eliminated) shape modern environmental and consumer protection jurisprudence.",
    thumbnailUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    youtubeId: "D8Y7tM4Nf6E",
    tags: ["Legal Maxims", "Usul al-Fiqh", "Academic Lecture", "Punjab University"],
  },
  {
    id: "media-3",
    title: "The Intellectual Confidence of the Believer in a Skeptical Age",
    titleUrdu: "موجودہ الحادی و تشکیکی دور میں مسلمان کا فکری و ایمانی وقار",
    type: "sermon",
    typeLabel: "Sermons & Da'wah",
    duration: "34:20",
    date: "May 2024",
    description:
      "Friday sermon and intellectual discourse delivered at the Central Mosque Daharki addressing epistemic doubt, scientism, and the grounded rationality of the Islamic worldview.",
    thumbnailUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    youtubeId: "vF3lB7gE1Nk",
    tags: ["Da'wah", "Epistemology", "Faith & Reason", "Sermon"],
  },
  {
    id: "media-4",
    title: "Podcast: Bridging the Seminary and the Modern University",
    titleUrdu: "پوڈکاسٹ: مدرسہ اور یونیورسٹی کی فکری خلیج کو کیسے پاٹا جائے؟",
    type: "podcast",
    typeLabel: "Podcasts",
    duration: "45:15",
    date: "July 2024",
    description:
      "In-depth podcast episode discussing curriculum reform, dual-qualification scholars, and setting rigorous research agendas for the Muslim world.",
    thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    youtubeId: "_3lYqE1S83c",
    tags: ["Podcast", "Education Reform", "Seminary", "Intellectual Discourse"],
  },
  {
    id: "media-5",
    title: "Deciphering Nawazil: The Methodology of Contemporary Ifta Rulings",
    titleUrdu: "فقہ النوازل: معاصر الجھنوں میں فتویٰ دینے کا شرعی و تحقیقی منہج",
    type: "lecture",
    typeLabel: "Academic Lecture",
    duration: "1:04:12",
    date: "April 2024",
    description:
      "Comprehensive seminar on how muftis research contemporary medical, commercial, and bioethical issues through Tahqiq al-Manat and Takhrij.",
    thumbnailUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    youtubeId: "gXbZf6hM0Xo",
    tags: ["Nawazil", "Ifta Methodology", "Bioethics", "Jurisprudence"],
  },
  {
    id: "media-6",
    title: "Visual Guide to Inheritance (Mawarith): Step-by-Step Distribution",
    titleUrdu: "علم المیراث: وراثت کی شرعی تقسیم کا مکمل عملی و تصویری خاکہ",
    type: "visual",
    typeLabel: "Visual Explainer",
    duration: "24:30",
    date: "February 2024",
    description:
      "Clear, step-by-step visual animation demonstrating primary heirs (Ashab al-Furud), universal legatees (Asabat), and exclusion principles (Hujub).",
    thumbnailUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    youtubeId: "p1K3i6Y-w4o",
    tags: ["Mawarith", "Inheritance", "Visual Explainer", "Family Law"],
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    slug: "reconciling-tradition-and-modernity",
    title: "Reconciling Tradition & Modernity: Frameworks for Navigating Classical Legal Texts in Contemporary Academia",
    titleUrdu: "اصالت و معاصرت کا ربط: معاصر جامعات میں کلاسیکی فقہی متون کے فہم کا منہج",
    category: "Legal Philosophy & Hermeneutics",
    date: "August 15, 2024",
    readingTime: "9 min read",
    excerpt:
      "Navigating between dry literalism that suffocates juristic evolution and reckless modernism that abandons foundational Usul requires a revived mastery of Tahqiq al-Manat.",
    content: [
      "In contemporary Islamic academia, two contrasting and equally hazardous tendencies have emerged. On one flank stands an ossified literalism that treats procedural historical determinations (fatwa 'ala urf al-balad) as eternal immutable dogmas, unable to breathe life into novel societal scenarios. On the opposing flank stands an unmoored modernism that discards classical interpretive methodology (Usul al-Fiqh) under vague banners of public interest (Maslahah Mursalah) disconnected from Quranic roots.",
      "The classical jurists, from Abu Hanifah and al-Shafi'i to al-Qarafi and al-Shatibi, made a sharp and disciplined distinction between the immutable core of revealed law (Thawabit) and the contextually contingent branch rulings (Mutaghayyirat). The vehicle that bridges these two spheres is the meticulous science of Tahqiq al-Manat—the verification of the operative ratio legis in prevailing realities.",
      "When a contemporary jurist addresses a modern financial instrument, algorithmic currency, or bioethical dilemma, the task is neither to replicate medieval examples blindly nor to fabricate rules arbitrarily. Rather, it demands an exhaustive, empirical comprehension of the modern phenomenon followed by a rigorous derivation based on authoritative legal maxims.",
    ],
    citations: [
      "Al-Shatibi, Abu Ishaq. Al-Muwafaqat fi Usul al-Shari'ah. Edited by Mashhur Al Salman. Cairo: Dar Ibn 'Affan, 1997.",
      "Al-Qarafi, Shihab al-Din. Al-Ihkam fi Tamyiz al-Fatawa 'an al-Ahkam. Beirut: Dar al-Basha'ir, 1995.",
      "Ibn Ashur, Muhammad al-Tahir. Treatise on Maqasid al-Shari'ah. Translated by Mohamed El-Tahir El-Mesawi. London: IIIT, 2006.",
    ],
    tags: ["Usul al-Fiqh", "Hermeneutics", "Tradition & Modernity", "Islamic Jurisprudence"],
  },
  {
    id: "art-2",
    slug: "pedagogical-reform-in-islamic-institutions",
    title: "Pedagogical Reform in Islamic Institutions: Implementing the 5E Instructional Model and Positive Discipline",
    titleUrdu: "دینی جامعات میں تدریسی اصلاحات: 5E انسٹرکشنل ماڈل اور مثبت نظم و ضبط کا عملی نفاذ",
    category: "Education & Pedagogy",
    date: "July 02, 2024",
    readingTime: "12 min read",
    excerpt:
      "Traditional Dars-e-Nizami seminaries possess unparalleled textual depth. By infusing the constructivist 5E instructional cycle, institutions can unleash peak critical reasoning.",
    content: [
      "The traditional Dars-e-Nizami curriculum has preserved Islamic intellectual lineage with extraordinary fidelity across South Asia for centuries. However, the pedagogical delivery mechanism in many institutions has inadvertently drifted toward passive rote memorization rather than dialectical intellectual synthesis.",
      "The 5E Instructional Model—comprising Engage, Explore, Explain, Elaborate, and Evaluate—grounded in constructivist cognitive learning theory, provides an optimal vehicle for revitalizing classical text studies. Rather than the instructor lecturing uninterrupted for sixty minutes:",
      "1. Engage: The teacher presents an anomalous contemporary problem or paradox related to the day's text.",
      "2. Explore: Students dissect the Arabic passage collaboratively in small halaqat, identifying syntactical and logical hinges.",
      "3. Explain: The teacher guides synthesis, clarifying nuanced technical terminology and resolving ambiguities.",
      "4. Elaborate: Students apply the deduced legal maxim to three contemporary case studies.",
      "5. Evaluate: Formative rubrics assess conceptual mastery rather than verbatim recall.",
      "Coupled with Positive Discipline—which eliminates punitive humiliation and fosters intrinsic emotional safety—students cultivate both formidable intellectual humility and unyielding scholarly excellence.",
    ],
    citations: [
      "Bybee, Rodger W. The BSCS 5E Instructional Model: Creating Teachable Moments. Arlington: NSTA Press, 2015.",
      "Al-Zarnuji, Burhan al-Din. Ta'lim al-Muta'allim Tariq al-Ta'allum. Damascus: Dar al-Qalam, 1986.",
      "Nelsen, Jane. Positive Discipline in the Classroom. New York: Harmony, 2013.",
    ],
    tags: ["5E Model", "Pedagogy", "Madaris Reform", "Education", "Positive Discipline"],
  },
  {
    id: "art-3",
    slug: "ethical-economics-and-islamic-commercial-law",
    title: "Ethical Economics: Addressing Structural Financial Issues Through Islamic Commercial Law",
    titleUrdu: "اخلاقی معاشیات: اسلامی فقہ المعاملات کے ذریعے سٹرکچرل معاشی بحرانوں کا حل",
    category: "Islamic Economics",
    date: "May 20, 2024",
    readingTime: "11 min read",
    excerpt:
      "Modern finance suffers from systemic instability caused by the infinite expansion of unbacked debt and speculative securitization. Islamic commercial law introduces the crucial stabilizer: risk-sharing and real-asset coupling.",
    content: [
      "The recurrent global crises of modern financial capitalism—from the 2008 subprime collapse to persistent inflationary debasement—are not incidental malfunctions; they are inherent structural features of a system predicated on interest-bearing debt (Riba) and risk transfer without equity risk-sharing.",
      "The genius of Islamic commercial jurisprudence (Fiqh al-Mu'amalat) resides in two non-negotiable architectural anchors: the prohibition of Riba (unearned monetary surplus) and the prohibition of Gharar (deceptive risk and information asymmetry). In their place, the Shariah mandates 'Al-Ghunm bi al-Ghurm' (gain is justified by risk assumption) and 'Al-Kharaj bi al-Daman' (revenue corresponds to liability).",
      "When money ceases to be a speculative commodity bought and sold through debt obligations and returns to its true nature as a measure of value and medium of exchange, capital is compelled to participate in genuine tangible production, ethical enterprise, and equitable wealth distribution.",
    ],
    citations: [
      "Chapra, M. Umer. The Future of Economics: An Islamic Perspective. Leicester: Islamic Foundation, 2000.",
      "Ibn Rushd, Abu al-Walid. Bidayat al-Mujtahid wa Nihayat al-Muqtasid. Cairo: Maktabat Ibn Taymiyyah, 1995.",
      "Stiglitz, Joseph E. Freefall: America, Free Markets, and the Sinking of the World Economy. New York: W. W. Norton, 2010.",
    ],
    tags: ["Ethical Economics", "Riba", "Islamic Banking", "Risk Sharing", "Social Justice"],
  },
];

export const ACADEMIC_RESOURCES: ResourceItem[] = [
  {
    id: "res-1",
    title: "Chicago Manual of Style (CMS) Research & Citation Guide for Islamic Studies",
    titleUrdu: "اسلامک اسٹڈیز ریسرچ کے لیے شکاگو مینوئل آف اسٹائل (CMS) سائیٹیشن گائیڈ",
    category: "Academic Writing",
    format: "PDF",
    fileSize: "2.4 MB",
    description:
      "A comprehensive scholarly guide detailing footnotes, bibliographical entries, transliteration standards, and Arabic manuscript references aligned with the 17th Edition of CMS.",
    downloadUrl: "#",
    dateAdded: "June 2024",
  },
  {
    id: "res-2",
    title: "5E Pedagogy & Positive Discipline Framework for Religious Seminaries",
    titleUrdu: "دینی جامعات اور اسکولز کے لیے 5E تدریسی فریم ورک اور پریکٹیکل ہینڈ بک",
    category: "Education",
    format: "PDF",
    fileSize: "4.1 MB",
    description:
      "Practical handbook and lesson planning templates tailored for Dars-e-Nizami teachers, featuring classroom rubrics, active inquiry cycles, and positive behavioral interventions.",
    downloadUrl: "#",
    dateAdded: "May 2024",
  },
  {
    id: "res-3",
    title: "Comprehensive Glossary of Islamic Economic & Financial Terms (Trilingual)",
    titleUrdu: "اسلامی اقتصادی و بینکاری اصطلاحات کی سہ لسانی فرہنگ (عربی، اردو، انگریزی)",
    category: "Reference",
    format: "Docx",
    fileSize: "1.8 MB",
    description:
      "Over 450 technical terms across classical Fiqh al-Mu'amalat, modern Islamic banking contracts, accounting standards (AAOIFI), and statutory legal terminology.",
    downloadUrl: "#",
    dateAdded: "April 2024",
  },
  {
    id: "res-4",
    title: "Dar ul Ifta Methodology Handbook & Official Fatwa Drafting Template",
    titleUrdu: "دار الافتاء ڈہرکی کا منہجِ فتویٰ اور معیاری فتویٰ نگاری گائیڈ لائنز",
    category: "Curriculum",
    format: "PDF",
    fileSize: "3.2 MB",
    description:
      "The rigorous procedural guidelines adopted by Dar ul Ifta Daharki for investigating questions, verifying questions with field experts, citation rules, and issuing signed decrees.",
    downloadUrl: "#",
    dateAdded: "January 2024",
  },
];

export const SPEAKING_EVENTS: EventItem[] = [
  {
    id: "event-1",
    title: "Research Methodology, Hermeneutics & Citation Standards in Islamic Disciplines",
    organization: "Institute of Islamic Sciences, Daharki",
    location: "Main Auditorium, IIS Daharki & Online Hybrid",
    date: "November 14-16, 2024",
    status: "upcoming",
    type: "Workshop",
    description:
      "A 3-day intensive masterclass for PhD & MPhil researchers, Muftis, and university scholars covering advanced archival research, Chicago Manual formatting, and contemporary Tahqiq al-Manat.",
    registrationOpen: true,
  },
  {
    id: "event-2",
    title: "International Arabic Conference: Classical Text Hermeneutics in Contemporary Academia",
    organization: "University of the Punjab, Lahore",
    location: "Faculty of Islamic & Oriental Learning, PU Lahore",
    date: "March 2024",
    status: "archived",
    type: "International Conference",
    description:
      "Keynote presentation on linguistic and jurisprudential mechanisms for interpreting classical Arabic compendia within modern South Asian and global academic discourse.",
    registrationOpen: false,
  },
  {
    id: "event-3",
    title: "Zia-ul-Seerah National Conference: The Prophet's ﷺ Economic Blueprint for Societal Harmony",
    organization: "University of the Punjab, Lahore",
    location: "Auditorium Complex, New Campus, Lahore",
    date: "February 2024",
    status: "archived",
    type: "National Conference",
    description:
      "Scholarly paper addressing the establishment of the Medinan market, market inspection (Hisbah), and price stabilization during periods of supply scarcity.",
    registrationOpen: false,
  },
  {
    id: "event-4",
    title: "National Colloquium on Islamic FinTech, Digital Sukuk & Shariah Governance",
    organization: "Karachi Islamic Finance Center & IIS",
    location: "Daharki Regional Chapter",
    date: "December 2023",
    status: "archived",
    type: "Workshop",
    description:
      "Roundtable discussion bringing together conventional bankers, Shariah advisors, and software architects to evaluate real-time smart contracts under Islamic law.",
    registrationOpen: false,
  },
];
