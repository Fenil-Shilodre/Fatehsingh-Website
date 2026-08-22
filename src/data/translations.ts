export type Language = 'en' | 'hi' | 'gu';

export type TranslationKey = 
  | 'nav_home'
  | 'nav_lineage'
  | 'nav_service'
  | 'nav_institutions'
  | 'nav_haveli'
  | 'nav_moments'
  | 'nav_philosophy'
  | 'nav_contact'
  | 'brand_tagline'
  | 'hero_eyebrow'
  | 'hero_title_prefix'
  | 'hero_title_suffix'
  | 'hero_subhead'
  | 'hero_copy'
  | 'hero_btn_explore'
  | 'hero_btn_institutions'
  | 'stat_tag'
  | 'stat_years_label'
  | 'stat_institutions_label'
  | 'stat_students_label'
  | 'stat_roles_label'
  | 'lineage_eyebrow'
  | 'lineage_title'
  | 'lineage_subtitle'
  | 'lineage_card_virsinhji_role'
  | 'lineage_card_virsinhji_title'
  | 'lineage_card_virsinhji_desc'
  | 'lineage_card_mohansinhji_role'
  | 'lineage_card_mohansinhji_title'
  | 'lineage_card_mohansinhji_desc'
  | 'lineage_card_devkiba_role'
  | 'lineage_card_devkiba_title'
  | 'lineage_card_devkiba_desc'
  | 'lineage_line_caption'
  | 'service_eyebrow'
  | 'service_title'
  | 'service_subtitle'
  | 'filter_all'
  | 'filter_apex'
  | 'filter_local'
  | 'standing_roles_title'
  | 'inst_eyebrow'
  | 'inst_title'
  | 'inst_subtitle'
  | 'campus_banner_title'
  | 'campus_banner_loc'
  | 'campus_banner_desc'
  | 'campus_stat_area'
  | 'campus_stat_area_lbl'
  | 'campus_stat_faculty'
  | 'campus_stat_faculty_lbl'
  | 'campus_stat_alumni'
  | 'campus_stat_alumni_lbl'
  | 'inst_quote'
  | 'inst_quote_author'
  | 'inst_les_name'
  | 'inst_les_year'
  | 'inst_les_tag'
  | 'inst_les_affil'
  | 'inst_les_point1'
  | 'inst_les_point2'
  | 'inst_les_contact'
  | 'inst_devkiba_name'
  | 'inst_devkiba_year'
  | 'inst_devkiba_tag'
  | 'inst_devkiba_affil'
  | 'inst_devkiba_point1'
  | 'inst_devkiba_point2'
  | 'inst_devkiba_contact'
  | 'inst_hilsr_name'
  | 'inst_hilsr_year'
  | 'inst_hilsr_tag'
  | 'inst_hilsr_affil'
  | 'inst_hilsr_point1'
  | 'inst_hilsr_point2'
  | 'inst_hilsr_contact'
  | 'haveli_eyebrow'
  | 'haveli_title'
  | 'haveli_subhead'
  | 'haveli_v1_title'
  | 'haveli_v1_desc'
  | 'haveli_v2_title'
  | 'haveli_v2_desc'
  | 'haveli_v3_title'
  | 'haveli_v3_desc'
  | 'haveli_v4_title'
  | 'haveli_v4_desc'
  | 'haveli_cta_text'
  | 'haveli_btn_text'
  | 'moments_eyebrow'
  | 'moments_title'
  | 'moments_subtitle'
  | 'man_eyebrow'
  | 'man_title'
  | 'man_lead_quote'
  | 'man_p1_title'
  | 'man_p1_desc'
  | 'man_p2_title'
  | 'man_p2_desc'
  | 'man_p3_title'
  | 'man_p3_desc'
  | 'contact_eyebrow'
  | 'contact_title'
  | 'contact_subtitle'
  | 'contact_addr_lbl'
  | 'contact_addr_val'
  | 'contact_phone_lbl'
  | 'contact_email_lbl'
  | 'form_name_lbl'
  | 'form_email_lbl'
  | 'form_subject_lbl'
  | 'form_msg_lbl'
  | 'form_btn_submit'
  | 'form_success_msg'
  | 'footer_bio_snippet'
  | 'footer_quick_links'
  | 'footer_trust_links'
  | 'footer_rights'
  | 'footer_designed';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    nav_home: "Home",
    nav_lineage: "Lineage",
    nav_service: "Service",
    nav_institutions: "Institutions",
    nav_haveli: "Haveli",
    nav_moments: "Moments",
    nav_philosophy: "Philosophy",
    nav_contact: "Contact",
    brand_tagline: "Silvassa · Dadra & Nagar Haveli",

    hero_eyebrow: "Born in Silvassa · Servant of Dadra & Nagar Haveli",
    hero_title_prefix: "Fatehsinh",
    hero_title_suffix: "Mohansinh Chauhan",
    hero_subhead: "Agriculturist. Institution Builder. Patriarch.",
    hero_copy: "Hereditary custodian of the Haveli tradition and visionary leader whose four decades of public life are devoted to constitutional governance, grassroots empowerment, and the educational elevation of Dadra & Nagar Haveli.",
    hero_btn_explore: "Explore Public Record",
    hero_btn_institutions: "Educational Legacy",

    stat_tag: "Impact at Scale",
    stat_years_label: "Years of Public Life",
    stat_institutions_label: "Foundational Year",
    stat_students_label: "Students Nurtured",
    stat_roles_label: "Civic & Standing Roles",

    lineage_eyebrow: "Ancestral Heritage",
    lineage_title: "The Legacy of Leadership",
    lineage_subtitle: "An unbroken tradition of agrarian guardianship, community hospitality, and selfless public service spanning generations in Silvassa.",
    lineage_card_virsinhji_role: "Grandfather · Foundation",
    lineage_card_virsinhji_title: "Shri Virsinhji Chauhan",
    lineage_card_virsinhji_desc: "Pioneered the family's deep-rooted agricultural traditions and enduring community standing in the territory.",
    lineage_card_mohansinhji_role: "Father · Agrarian Patriarch",
    lineage_card_mohansinhji_title: "Late Shri Mohansinhji Virsinhji Chauhan",
    lineage_card_mohansinhji_desc: "An esteemed community elder whose legendary hospitality and tribal welfare inspired the 'Haveli' ethos. Commemorated by the Mohansinhji Virsinhji Chauhan Dwar.",
    lineage_card_devkiba_role: "Mother · Matriarch",
    lineage_card_devkiba_title: "Late Smt. Devkiba Mohansinhji Chauhan",
    lineage_card_devkiba_desc: "The spiritual cornerstone of the family. The prestigious Smt. Devkiba Mohansinhji Chauhan College stands as a permanent tribute to her reverence for education.",
    lineage_line_caption: "Shri Fatehsinh Mohansinh Chauhan · 1980s – Present",

    service_eyebrow: "Public Record",
    service_title: "Four Decades of Civic Stewardship",
    service_subtitle: "A continuous chronological journey of constitutional leadership, local self-government, and territorial development.",
    filter_all: "All Milestones",
    filter_apex: "Apex Governance",
    filter_local: "Local Self-Gov",
    standing_roles_title: "Current Standing Roles & Civic Patronage",

    inst_eyebrow: "Nursery to Ph.D. Ecosystem",
    inst_title: "Building Silvassa's Educational Future",
    inst_subtitle: "From a modest 15-student classroom in 1983 to a 17-acre academic campus nurturing over 7,000 minds today.",
    campus_banner_title: "Smt. Devkiba Mohansinhji Chauhan Vidya Sankul",
    campus_banner_loc: "Sayli Road / Sanjibhai Delkar Marg, Silvassa — 396230",
    campus_banner_desc: "A sprawling 17-acre integrated educational sanctuary providing world-class learning infrastructure from kindergarten to doctoral research.",
    campus_stat_area: "17 Acres",
    campus_stat_area_lbl: "Integrated Campus",
    campus_stat_faculty: "200+",
    campus_stat_faculty_lbl: "Educators & Scholars",
    campus_stat_alumni: "25,000+",
    campus_stat_alumni_lbl: "Alumni Worldwide",
    inst_quote: "“We do not just prepare students for the future — we empower them to create it.”",
    inst_quote_author: "Fatehsinh M. Chauhan, Chairman",

    inst_les_name: "Lions English School",
    inst_les_year: "Est. 1983",
    inst_les_tag: "Primary & Secondary Education",
    inst_les_affil: "First CBSE Affiliated School in D&NH",
    inst_les_point1: "Founded in a rented building with 15 students; today ~5,000 students from Nursery to Class XII.",
    inst_les_point2: "Equipped with Atal Tinkering Lab, AI-enabled digital learning, and expansive sports grounds.",
    inst_les_contact: "Tel: 8140611108",

    inst_devkiba_name: "Smt. Devkiba Mohansinhji Chauhan College",
    inst_devkiba_year: "Est. 2014",
    inst_devkiba_tag: "Higher Education & Research",
    inst_devkiba_affil: "Univ of Mumbai · NAAC B+ (CGPA 2.66) · ISO Certified",
    inst_devkiba_point1: "Undergraduate, Postgraduate, and Ph.D. programs across Commerce, Science (IT, CS, Chemistry, Physics).",
    inst_devkiba_point2: "Houses Centre for Distance & Online Education (CDOE) in partnership with University of Mumbai.",
    inst_devkiba_contact: "Tel: +91 9624702500",

    inst_hilsr_name: "Haveli Institute of Legal Studies & Research",
    inst_hilsr_year: "Est. 2017",
    inst_hilsr_tag: "Professional Legal Education",
    inst_hilsr_affil: "Univ of Mumbai · Bar Council of India Recognized",
    inst_hilsr_point1: "3-Year LL.B., 5-Year Integrated B.A. LL.B., and specialized Diplomas in Labour and Taxation Laws.",
    inst_hilsr_point2: "Described as the 'third child of the Trust', hosting eminent jurists and Governors of India.",
    inst_hilsr_contact: "Tel: +91 7434902500",

    haveli_eyebrow: "Enterprise & Heritage",
    haveli_title: "Haveli Group",
    haveli_subhead: "A diversified business portfolio rooted in cultural hospitality, infrastructure, and commercial dynamism.",
    haveli_v1_title: "Hospitality & Resorts",
    haveli_v1_desc: "Haveli Heritage Resorts Pvt. Ltd. — luxury stays, conference retreats, and experiential tourism.",
    haveli_v2_title: "Entertainment & Cinema",
    haveli_v2_desc: "Haveli Entertainments Pvt. Ltd. — premier multiplex screens and cultural performance hubs.",
    haveli_v3_title: "Real Estate & Infra",
    haveli_v3_desc: "Urban planning, commercial hubs, and modern residential developments in Silvassa.",
    haveli_v4_title: "Spirits & Gourmet",
    haveli_v4_desc: "Curated fine dining, retail logistics, and premium hospitality supplies.",
    haveli_cta_text: "Discover commercial ventures, properties, and hospitality projects at the official portal.",
    haveli_btn_text: "Visit haveligroup.biz",

    moments_eyebrow: "Archival Record",
    moments_title: "Moments of Statesmanship & Fellowship",
    moments_subtitle: "Engagements with national leaders, Governors, Union Ministers, and civic dignitaries throughout a lifetime of service.",

    man_eyebrow: "Statesman's Creed",
    man_title: "The Man, The Soil, The Vision",
    man_lead_quote: "“Development without education is incomplete; politics without empathy is hollow. The ultimate measure of leadership is how many families find dignity through your work.”",
    man_p1_title: "The Agriculturist’s Patience",
    man_p1_desc: "Deeply connected to the land of Silvassa, believing that institutions require patient nurturing and fertile values.",
    man_p2_title: "Beti Bachao, Beti Padhao Champion",
    man_p2_desc: "As former State Convenor, pioneered scholarships and safety nets for girl students across tribal areas.",
    man_p3_title: "Guardian of Harmony",
    man_p3_desc: "Trusted equally by tribal elders, industrialists, and civil society as a balanced mediator and statesman.",

    contact_eyebrow: "Office of the Chairman",
    contact_title: "Secretariat & Liaison",
    contact_subtitle: "For institutional correspondence, academic inquiries, trust matters, and official appointments.",
    contact_addr_lbl: "Official Residence & Office",
    contact_addr_val: "“Haveli”, Swaminarayan Marg, Silvassa – 396230, UT of Dadra & Nagar Haveli",
    contact_phone_lbl: "Telephone & Mobile",
    contact_email_lbl: "Official Email",
    form_name_lbl: "Full Name",
    form_email_lbl: "Email Address",
    form_subject_lbl: "Subject / Nature of Inquiry",
    form_msg_lbl: "Your Message",
    form_btn_submit: "Transmit Official Message",
    form_success_msg: "Your communication has been received by the Secretariat. You will be contacted shortly.",

    footer_bio_snippet: "Dedicated to the socio-economic advancement, educational empowerment, and civic dignity of Dadra & Nagar Haveli for over 45 years.",
    footer_quick_links: "Navigation",
    footer_trust_links: "Trust Institutions",
    footer_rights: "© 2026. All Rights Reserved by devphant.",
    footer_designed: "A Life of Dedicated Public Service · Silvassa, Dadra & Nagar Haveli"
  },

  hi: {
    nav_home: "मुख्य",
    nav_lineage: "वंशानुक्रम",
    nav_service: "जनसेवा",
    nav_institutions: "संस्थान",
    nav_haveli: "हवेली",
    nav_moments: "स्मृतियां",
    nav_philosophy: "दर्शन",
    nav_contact: "संपर्क",
    brand_tagline: "सिलवासा · दादरा एवं नगर हवेली",

    hero_eyebrow: "सिलवासा की माटी में जन्मे · दादरा एवं नगर हवेली के अनवरत सेवक",
    hero_title_prefix: "फतेहसिंह",
    hero_title_suffix: "मोहनसिंह चौहान",
    hero_subhead: "कृषक। संस्थान निर्माता। परिवार के संरक्षक।",
    hero_copy: "हवेली परंपरा के वंशानुगत संरक्षक एवं दूरदर्शी जननेता, जिनका चार दशकों का सार्वजनिक जीवन संवैधानिक प्रशासन, जमीनी सशक्तिकरण और दादरा एवं नगर हवेली के शैक्षणिक उत्थान को समर्पित है।",
    hero_btn_explore: "सार्वजनिक जीवन वृत्त",
    hero_btn_institutions: "शैक्षणिक विरासत",

    stat_tag: "प्रभाव एवं विस्तार",
    stat_years_label: "वर्षों का समर्पित जनजीवन",
    stat_institutions_label: "नींव का वर्ष",
    stat_students_label: "अध्ययनरत विद्यार्थी",
    stat_roles_label: "संवैधानिक व सामाजिक पद",

    lineage_eyebrow: "पूर्वजों की विरासत",
    lineage_title: "नेतृत्व की ऐतिहासिक परंपरा",
    lineage_subtitle: "सिलवासा की माटी में पीढ़ियों से चली आ रही कृषि निष्ठा, जन-सत्कार और निस्वार्थ समाज सेवा की अटूट परंपरा।",
    lineage_card_virsinhji_role: "दादाश्री · संस्कारों की नींव",
    lineage_card_virsinhji_title: "श्री वीरसिंहजी चौहान",
    lineage_card_virsinhji_desc: "परिवार की गहरी कृषि परंपरा और दादरा एवं नगर हवेली में सामाजिक प्रतिष्ठा की सुदृढ़ नींव रखी।",
    lineage_card_mohansinhji_role: "पिताश्री · कृषक पितृपुरुष",
    lineage_card_mohansinhji_title: "स्व. श्री मोहनसिंहजी वीरसिंहजी चौहान",
    lineage_card_mohansinhji_desc: "आदरणीय अग्रज जिन्होंने 'हवेली' की आतिथ्य व जनजातीय कल्याण की परंपरा स्थापित की। मोहनसिंहजी वीरसिंहजी चौहान द्वार द्वारा स्मरणीय।",
    lineage_card_devkiba_role: "मातृश्री · शिक्षा की प्रेरणा",
    lineage_card_devkiba_title: "स्व. श्रीमती देवकीबा मोहनसिंहजी चौहान",
    lineage_card_devkiba_desc: "परिवार की आध्यात्मिक धुरी। प्रतिष्ठित श्रीमती देवकीबा कॉलेज उनके विद्या-प्रेम का जीवंत प्रतीक है।",
    lineage_line_caption: "श्री फतेहसिंह मोहनसिंह चौहान · 1980 के दशक से वर्तमान",

    service_eyebrow: "सार्वजनिक जीवन वृत्त",
    service_title: "चार दशकों का संवैधानिक व सामाजिक नेतृत्व",
    service_subtitle: "स्थानीय स्वशासन, संवैधानिक परिषदों और क्षेत्रीय विकास की एक निरंतर ऐतिहासिक यात्रा।",
    filter_all: "समस्त पड़ाव",
    filter_apex: "शीर्ष शासन",
    filter_local: "स्थानीय स्वशासन",
    standing_roles_title: "वर्तमान संस्थागत दायित्व एवं सामाजिक संरक्षण",

    inst_eyebrow: "नर्सरी से पीएच.डी. तक का शिक्षा तंत्र",
    inst_title: "सिलवासा के शैक्षणिक भविष्य का निर्माण",
    inst_subtitle: "1983 में 15 विद्यार्थियों से शुरू होकर आज 17 एकड़ में फैले 7,000+ विद्यार्थियों के भव्य विद्या परिसर तक।",
    campus_banner_title: "श्रीमती देवकीबा मोहनसिंहजी चौहान विद्या संकुल",
    campus_banner_loc: "सायली रोड / संजीभाई डेलकर मार्ग, सिलवासा — 396230",
    campus_banner_desc: "17 एकड़ में फैला एक आधुनिक एकीकृत शैक्षणिक परिसर जहाँ नर्सरी से लेकर डॉक्टरेट (Ph.D.) तक की विश्वस्तरीय शिक्षा उपलब्ध है।",
    campus_stat_area: "17 एकड़",
    campus_stat_area_lbl: "एकीकृत परिसर",
    campus_stat_faculty: "200+",
    campus_stat_faculty_lbl: "प्राध्यापक व शिक्षक",
    campus_stat_alumni: "25,000+",
    campus_stat_alumni_lbl: "पूर्व छात्र",
    inst_quote: "“हम केवल विद्यार्थियों को भविष्य के लिए तैयार नहीं करते — हम उन्हें भविष्य रचने में सक्षम बनाते हैं।”",
    inst_quote_author: "फतेहसिंह एम. चौहान, अध्यक्ष",

    inst_les_name: "लायंस इंग्लिश स्कूल",
    inst_les_year: "स्थापना 1983",
    inst_les_tag: "प्राथमिक व माध्यमिक शिक्षा",
    inst_les_affil: "दादरा एवं नगर हवेली का प्रथम CBSE मान्यता प्राप्त विद्यालय",
    inst_les_point1: "किराए के भवन में 15 छात्रों से शुरुआत; आज नर्सरी से 12वीं तक लगभग 5,000 विद्यार्थी।",
    inst_les_point2: "अटल टिंकरिंग लैब, एआई युक्त डिजिटल शिक्षा और विशाल खेल मैदानों से सुसज्जित।",
    inst_les_contact: "फोन: 8140611108",

    inst_devkiba_name: "श्रीमती देवकीबा मोहनसिंहजी चौहान कॉलेज",
    inst_devkiba_year: "स्थापना 2014",
    inst_devkiba_tag: "उच्च शिक्षा व अनुसंधान",
    inst_devkiba_affil: "मुंबई विश्वविद्यालय संबद्ध · NAAC B+ (CGPA 2.66) · ISO प्रमाणित",
    inst_devkiba_point1: "वाणिज्य और विज्ञान (IT, CS, रसायन विज्ञान) में स्नातक, स्नातकोत्तर और पीएच.डी. पाठ्यक्रम।",
    inst_devkiba_point2: "मुंबई विश्वविद्यालय के दूरस्थ एवं ऑनलाइन शिक्षा केंद्र (CDOE) की सुविधा।",
    inst_devkiba_contact: "फोन: +91 9624702500",

    inst_hilsr_name: "हवेली विधि अध्ययन एवं अनुसंधान संस्थान",
    inst_hilsr_year: "स्थापना 2017",
    inst_hilsr_tag: "व्यावसायिक विधि शिक्षा",
    inst_hilsr_affil: "मुंबई विश्वविद्यालय संबद्ध · बार काउंसिल ऑफ इंडिया द्वारा मान्यता प्राप्त",
    inst_hilsr_point1: "3-वर्षीय LL.B., 5-वर्षीय B.A. LL.B., तथा श्रम और कराधान कानूनों में विशेष डिप्लोमा।",
    inst_hilsr_point2: "ट्रस्ट की 'तीसरी संतान', जहाँ देश के प्रमुख न्यायविदों व राज्यपालों का आगमन हुआ।",
    inst_hilsr_contact: "फोन: +91 7434902500",

    haveli_eyebrow: "उद्योग एवं विरासत",
    haveli_title: "हवेली ग्रुप",
    haveli_subhead: "संस्कृति, आतिथ्य और आधुनिक बुनियादी ढांचे पर आधारित एक अग्रणी व्यावसायिक समूह।",
    haveli_v1_title: "आतिथ्य व रिसॉर्ट्स",
    haveli_v1_desc: "हवेली हेरिटेज रिसॉर्ट्स — प्रीमियम होटल, सम्मेलन स्थल एवं अनुभवात्मक पर्यटन।",
    haveli_v2_title: "मनोरंजन व सिनेमा",
    haveli_v2_desc: "हवेली एंटरटेनमेंट्स — अत्याधुनिक मल्टीप्लेक्स सिनेमा और सांस्कृतिक आयोजन केंद्र।",
    haveli_v3_title: "रियल एस्टेट व इन्फ्रा",
    haveli_v3_desc: "सिलवासा में आधुनिक आवासीय परियोजनाएं और सतत वाणिज्यिक परिसरों का निर्माण।",
    haveli_v4_title: "गोउर्मेट व फूड्स",
    haveli_v4_desc: "उत्कृष्ट खान-पान सेवाएँ और होटल आपूर्ति प्रबंधन।",
    haveli_cta_text: "हवेली समूह के व्यवसाय, संपत्तियों और सेवाओं की विस्तृत जानकारी पोर्टल पर देखें।",
    haveli_btn_text: "वेबसाइट haveligroup.biz देखें",

    moments_eyebrow: "ऐतिहासिक अभिलेखागार",
    moments_title: "राष्ट्र सेवा एवं विशिष्ट सम्मान",
    moments_subtitle: "माननीय प्रधानमंत्रियों, राज्यपालों, केंद्रीय मंत्रियों और विशिष्ट विभूतियों के साथ ऐतिहासिक स्मृतियां।",

    man_eyebrow: "जीवन दर्शन",
    man_title: "व्यक्तित्व, माटी और दृष्टि",
    man_lead_quote: "“शिक्षा के बिना विकास अधूरा है; संवेदना के बिना राजनीति निष्प्राण है। नेतृत्व की वास्तविक कसौटी यह है कि आपके प्रयासों से कितने परिवारों को आत्मसम्मान मिला।”",
    man_p1_title: "कृषक का धैर्य",
    man_p1_desc: "सिलवासा की धरती से गहरा जुड़ाव; यह विश्वास कि संस्थाओं को भी फसलों की तरह धैर्य और खाद-पानी से सींचना होता है।",
    man_p2_title: "बेटी बचाओ, बेटी पढ़ाओ के सूत्रधार",
    man_p2_desc: "पूर्व राज्य संयोजक के रूप में बालिकाओं की शिक्षा और सुरक्षा के लिए छात्रवृत्तियों व संरक्षण की मजबूत व्यवस्था की।",
    man_p3_title: "सामाजिक सौहार्द के संरक्षक",
    man_p3_desc: "जनजातीय समाज, उद्योगपतियों और आम नागरिकों के बीच चार दशकों से एक निष्पक्ष और सर्वमान्य अभिभावक।",

    contact_eyebrow: "कार्यालय अध्यक्ष",
    contact_title: "सचिवालय एवं संपर्क",
    contact_subtitle: "संस्थागत पत्राचार, ट्रस्ट संबंधी विचार-विमर्श और औपचारिक भेंट के लिए संपर्क करें।",
    contact_addr_lbl: "आधिकारिक निवास व कार्यालय",
    contact_addr_val: "“हवेली”, स्वामीनारायण मार्ग, सिलवासा – 396230, दादरा एवं नगर हवेली",
    contact_phone_lbl: "दूरभाष व मोबाइल",
    contact_email_lbl: "ईमेल",
    form_name_lbl: "पूरा नाम",
    form_email_lbl: "ईमेल पता",
    form_subject_lbl: "विषय / पत्राचार का प्रयोजन",
    form_msg_lbl: "संदेश",
    form_btn_submit: "संदेश प्रेषित करें",
    form_success_msg: "आपका संदेश सचिवालय को प्राप्त हो गया है। शीघ्र ही आपसे संपर्क किया जाएगा।",

    footer_bio_snippet: "45 से अधिक वर्षों से दादरा एवं नगर हवेली के सामाजिक, शैक्षणिक और बुनियादी उत्थान हेतु समर्पित।",
    footer_quick_links: "नेविगेशन",
    footer_trust_links: "ट्रस्ट संस्थान",
    footer_rights: "© 2026. All Rights Reserved by devphant.",
    footer_designed: "समर्पित जनसेवा एवं नेतृत्व · सिलवासा, दादरा एवं नगर हवेली"
  },

  gu: {
    nav_home: "હોમ",
    nav_lineage: "વારસો",
    nav_service: "સેવા",
    nav_institutions: "સંસ્થાઓ",
    nav_haveli: "હવેલી",
    nav_moments: "ક્ષણો",
    nav_philosophy: "વિચારધારા",
    nav_contact: "સંપર્ક",
    brand_tagline: "સેલવાસ · દાદરા અને નગર હવેલી",

    hero_eyebrow: "સેલવાસની ધરતીના સપૂત · દાદરા અને નગર હવેલીના સમર્પિત સેવક",
    hero_title_prefix: "ફતેહસિંહ",
    hero_title_suffix: "મોહનસિંહ ચૌહાણ",
    hero_subhead: "ખેડૂત. સંસ્થા નિર્માતા. પરિવારના મોભી.",
    hero_copy: "હવેલી પરંપરાના વારસાગત સંરક્ષક અને દીર્ઘદ્રષ્ટા જનપ્રતિનિધિ, જેમણે ચાર દાયકાથી વધુ સમય બંધારણીય શાસન, જનસશક્તિકરણ અને દાદરા અને નગર હવેલીના શૈક્ષણિક ઉત્કર્ષ માટે સમર્પિત કર્યો છે.",
    hero_btn_explore: "જાહેર જીવનનો ઈતિહાસ",
    hero_btn_institutions: "શૈક્ષણિક વારસો",

    stat_tag: "વિસ્તાર અને સિદ્ધિઓ",
    stat_years_label: "વર્ષોનું જાહેર જીવન",
    stat_institutions_label: "પાયાનું વર્ષ",
    stat_students_label: "અભ્યાસરત વિદ્યાર્થીઓ",
    stat_roles_label: "બંધારણીય અને સામાજિક હોદ્દા",

    lineage_eyebrow: "પૂર્વજોનો વારસો",
    lineage_title: "નેતૃત્વની ગૌરવપૂર્ણ પરંપરા",
    lineage_subtitle: "સેલવાસની ભૂમિમાં પેઢીઓથી ચાલી આવતી કૃષિ નિષ્ઠા, લોક-સત્કાર અને નિઃસ્વાર્થ સમાજસેવાની અખંડ પરંપરા.",
    lineage_card_virsinhji_role: "દાદાશ્રી · સંસ્કારોનો પાયો",
    lineage_card_virsinhji_title: "શ્રી વીરસિંહજી ચૌહાણ",
    lineage_card_virsinhji_desc: "પરિવારની ઊંડી કૃષિ પરંપરા અને દાદરા અને નગર હવેલીમાં સામાજિક પ્રતિષ્ઠાનો પાયો નાખ્યો.",
    lineage_card_mohansinhji_role: "પિતાશ્રી · કૃષિ પિતૃપુરુષ",
    lineage_card_mohansinhji_title: "સ્વ. શ્રી મોહનસિંહજી વીરસિંહજી ચૌહાણ",
    lineage_card_mohansinhji_desc: "આદરણીય વડીલ જેમણે 'હવેલી'ની આતિથ્ય અને આદિવાસી કલ્યાણની પરંપરા સ્થાપી. મોહનસિંહજી વીરસિંહજી ચૌહાણ દ્વાર દ્વારા સ્મરણીય.",
    lineage_card_devkiba_role: "માતુશ્રી · શિક્ષણની પ્રેરણા",
    lineage_card_devkiba_title: "સ્વ. શ્રીમતી દેવકીબા મોહનસિંહજી ચૌહાણ",
    lineage_card_devkiba_desc: "પરિવારનું આધ્યાત્મિક કેન્દ્રબિંદુ. પ્રતિષ્ઠિત શ્રીમતી દેવકીબા કૉલેજ તેમની શિક્ષણ પ્રત્યેની નિષ્ઠાનું પ્રતીક છે.",
    lineage_line_caption: "શ્રી ફતેહસિંહ મોહનસિંહ ચૌહાણ · 1980 થી વર્તમાન",

    service_eyebrow: "જાહેર જીવનનો ઈતિહાસ",
    service_title: "ચાર દાયકાની અવિરત લોકસેવા",
    service_subtitle: "સ્થાનિક સ્વરાજ્ય, બંધારણીય પરિષદો અને પ્રદેશના વિકાસની એક ઐતિહાસિક સફર.",
    filter_all: "તમામ તબક્કા",
    filter_apex: "ઉચ્ચ શાસન",
    filter_local: "સ્થાનિક સ્વરાજ્ય",
    standing_roles_title: "વર્તમાન સંસ્થાકીય હોદ્દા અને સામાજિક સંરક્ષણ",

    inst_eyebrow: "નર્સરીથી પી.એચ.ડી. સુધીનું શિક્ષણ",
    inst_title: "સેલવાસના શૈક્ષણિક ભવિષ્યનું નિર્માણ",
    inst_subtitle: "1983 માં માત્ર 15 વિદ્યાર્થીઓથી શરૂ થઈને આજે 17 એકરમાં વિસ્તરેલા 7,000+ વિદ્યાર્થીઓના ભવ્ય શૈક્ષણિક સંકુલ સુધી.",
    campus_banner_title: "શ્રીમતી દેવકીબા મોહનસિંહજી ચૌહાણ વિદ્યા સંકુલ",
    campus_banner_loc: "સાયલી રોડ / સંજીભાઈ ડેલકર માર્ગ, સેલવાસ — 396230",
    campus_banner_desc: "17 એકરમાં ફેલાયેલું આધુનિક શૈક્ષણિક સંકુલ જ્યાં પૂર્વ-પ્રાથમિકથી માંડીને પીએચ.ડી. સુધીનું વિશ્વસ્તરીય શિક્ષણ ઉપલબ્ધ છે.",
    campus_stat_area: "17 એકર",
    campus_stat_area_lbl: "વિશાળ સંકુલ",
    campus_stat_faculty: "200+",
    campus_stat_faculty_lbl: "અધ્યાપકો અને શિક્ષકો",
    campus_stat_alumni: "25,000+",
    campus_stat_alumni_lbl: "પૂર્વ વિદ્યાર્થીઓ",
    inst_quote: "“અમે માત્ર વિદ્યાર્થીઓને ભવિષ્ય માટે તૈયાર નથી કરતા — અમે તેમને ભવિષ્યનું નિર્માણ કરવા સક્ષમ બનાવીએ છીએ.”",
    inst_quote_author: "ફતેહસિંહ એમ. ચૌહાણ, પ્રમુખ",

    inst_les_name: "લાયન્સ ઇંગ્લિશ સ્કૂલ",
    inst_les_year: "સ્થાપના 1983",
    inst_les_tag: "પ્રાથમિક અને માધ્યમિક શિક્ષણ",
    inst_les_affil: "દાદરા અને નગર હવેલીની પ્રથમ CBSE માન્યતા પ્રાપ્ત શાળા",
    inst_les_point1: "ભાડાના મકાનમાં 15 બાળકોથી શરૂઆત; આજે નર્સરીથી 12મા ધોરણ સુધી આશરે 5,000 વિદ્યાર્થીઓ.",
    inst_les_point2: "અટલ ટિંકરિંગ લેબ, AI ડિજિટલ શિક્ષણ અને વિશાળ રમતગમતના મેદાનોથી સજ્જ.",
    inst_les_contact: "ફોન: 8140611108",

    inst_devkiba_name: "શ્રીમતી દેવકીબા મોહનસિંહજી ચૌહાણ કૉલેજ",
    inst_devkiba_year: "સ્થાપના 2014",
    inst_devkiba_tag: "ઉચ્ચ શિક્ષણ અને સંશોધન",
    inst_devkiba_affil: "મુંબઈ યુનિવર્સિટી સંલગ્ન · NAAC B+ (CGPA 2.66) · ISO પ્રમાણિત",
    inst_devkiba_point1: "વાણિજ્ય અને વિજ્ઞાન (IT, CS, રસાયણશાસ્ત્ર) માં અંડરગ્રેજ્યુએટ, અનુસ્નાતક અને Ph.D. અભ્યાસક્રમો.",
    inst_devkiba_point2: "મુંબઈ યુનિવર્સિટીના દૂરવર્તી શિક્ષણ કેન્દ્ર (CDOE) ની ઉત્કૃષ્ટ સુવિધા.",
    inst_devkiba_contact: "ફોન: +91 9624702500",

    inst_hilsr_name: "હવેલી ઇન્સ્ટિટ્યૂટ ઓફ લીગલ સ્ટડીઝ એન્ડ રિસર્ચ",
    inst_hilsr_year: "સ્થાપના 2017",
    inst_hilsr_tag: "વ્યાવસાયિક કાયદા શિક્ષણ",
    inst_hilsr_affil: "મુંબઈ યુનિવર્સિટી સંલગ્ન · બાર કાઉન્સિલ ઓફ ઈન્ડિયા દ્વારા માન્ય",
    inst_hilsr_point1: "3-વર્ષીય LL.B., 5-વર્ષીય B.A. LL.B., તેમજ શ્રમ અને કરવેરા કાયદાના વિશેષ ડિપ્લોમા.",
    inst_hilsr_point2: "ટ્રસ્ટનું 'ત્રીજું સંતાન', જ્યાં દેશના અગ્રણી ન્યાયવિદો અને રાજ્યપાલોનું આગમન થયું છે.",
    inst_hilsr_contact: "ફોન: +91 7434902500",

    haveli_eyebrow: "ઉદ્યોગ અને વારસો",
    haveli_title: "હવેલી ગ્રૂપ",
    haveli_subhead: "સંસ્કૃતિ, આતિથ્ય અને આધુનિક ઈન્ફ્રાસ્ટ્રક્ચર આધારિત એક અગ્રણી વ્યાવસાયિક જૂથ.",
    haveli_v1_title: "આતિથ્ય અને રિસોર્ટ્સ",
    haveli_v1_desc: "હવેલી હેરિટેજ રિસોર્ટ્સ — પ્રીમિયમ સ્ટે, કૉન્ફરન્સ હબ અને પર્યટન સેવાઓ.",
    haveli_v2_title: "મનોરંજન અને સિનેમા",
    haveli_v2_desc: "હવેલી એન્ટરટેઈનમેન્ટ્સ — મલ્ટિપ્લેક્સ સિનેમા અને સાંસ્કૃતિક કાર્યક્રમ કેન્દ્રો.",
    haveli_v3_title: "રિયલ એસ્ટેટ અને ઇન્ફ્રા",
    haveli_v3_desc: "સેલવાસમાં આધુનિક રહેણાંક સોસાયટીઓ અને વ્યાવસાયિક સંકુલોનું નિર્માણ.",
    haveli_v4_title: "ગૌરમેટ અને ફૂડ્સ",
    haveli_v4_desc: "શ્રેષ્ઠ ડાઇનિંગ સેવાઓ અને હોસ્પિટાલિટી સપ્લાય ચેઇન.",
    haveli_cta_text: "હવેલી જૂથના વ્યવસાયો અને પ્રોજેક્ટ્સની માહિતી સત્તાવાર પોર્ટલ પર મેળવો.",
    haveli_btn_text: "વેબસાઇટ haveligroup.biz ની મુલાકાત લો",

    moments_eyebrow: "ઐતિહાસિક આર્કાઇવ",
    moments_title: "રાષ્ટ્ર સેવા અને ગૌરવપૂર્ણ ક્ષણો",
    moments_subtitle: "માનનીય વડાપ્રધાનો, રાજ્યપાલો, કેન્દ્રીય મંત્રીઓ અને મહાનુભાવો સાથેની યાદગાર ક્ષણો.",

    man_eyebrow: "જીવન દર્શન",
    man_title: "વ્યક્તિત્વ, માટી અને દ્રષ્ટિ",
    man_lead_quote: "“શિક્ષણ વિના વિકાસ અધૂરો છે; સંવેદના વિના રાજકારણ નિષ્પ્રાણ છે. નેતૃત્વની સાચી કસોટી એ છે કે તમારા કાર્યોથી કેટલા પરિવારોને આત્મસન્માન મળ્યું.”",
    man_p1_title: "ખેડૂતની ધીરજ",
    man_p1_desc: "સેલવાસની ધરતી સાથે ઊંડો નાતો; એ માન્યતા કે સંસ્થાઓને પણ પાકની જેમ ધીરજ અને સંસ્કારોથી સીંચવી પડે છે.",
    man_p2_title: "બેટી બચાવો, બેટી પઢાવોના પ્રણેતા",
    man_p2_desc: "ભૂતપૂર્વ રાજ્ય સંયોજક તરીકે દીકરીઓના શિક્ષણ અને સુરક્ષા માટે શિષ્યવૃત્તિઓ અને સહાયક વ્યવસ્થા બનાવી.",
    man_p3_title: "સામાજિક એકતાના રક્ષક",
    man_p3_desc: "આદિવાસી સમાજ, ઉદ્યોગપતિઓ અને નાગરિકો વચ્ચે ચાર દાયકાથી એક નિષ્પક્ષ અને સર્વમાન્ય મોભી.",

    contact_eyebrow: "ચેરમેન કાર્યાલય",
    contact_title: "સચિવાલય અને સંપર્ક",
    contact_subtitle: "સંસ્થાકીય પત્રવ્યવહાર, ટ્રસ્ટ બાબતો અને સત્તાવાર મુલાકાત માટે સંપર્ક કરો.",
    contact_addr_lbl: "સત્તાવાર નિવાસસ્થાન અને કાર્યાલય",
    contact_addr_val: "“હવેલી”, સ્વામિનારાયણ માર્ગ, સેલવાસ – 396230, દાદરા અને નગર હવેલી",
    contact_phone_lbl: "ટેલિફોન અને મોબાઈલ",
    contact_email_lbl: "ઈમેલ",
    form_name_lbl: "પૂરું નામ",
    form_email_lbl: "ઈમેલ એડ્રેસ",
    form_subject_lbl: "વિષય / મુલાકાતનો હેતુ",
    form_msg_lbl: "સંદેશ",
    form_btn_submit: "સંદેશ મોકલો",
    form_success_msg: "આપનો સંદેશ સચિવાલયને મળી ગયો છે. ટૂંક સમયમાં આપનો સંપર્ક કરવામાં આવશે.",

    footer_bio_snippet: "45 થી વધુ વર્ષોથી દાદરા અને નગર હવેલીના સામાજિક, શૈક્ષણિક અને સર્વાંગી ઉત્કર્ષ માટે સમર્પિત.",
    footer_quick_links: "નેવિગેશન",
    footer_trust_links: "ટ્રસ્ટ સંસ્થાઓ",
    footer_rights: "© 2026. All Rights Reserved by devphant.",
    footer_designed: "સમર્પિત લોકસેવા અને નેતૃત્વ · સેલવાસ, દાદરા અને નગર હવેલી"
  }
};
