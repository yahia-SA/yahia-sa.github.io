import bostaimage from "/src/assets/bosta.png"; // Import the image
import fixiezimage from "/src/assets/Fixiez.svg";
import movieAppimage from "/src/assets/movie_app.jpg";
import togetherimage from "/src/assets/together.png";
import phoneimage from "/src/assets/phone.jpeg";
import newsAppimage from "/src/assets/News.jpg";
import uixfyImage from "/src/assets/uixfy.svg";
import elecadiIcon from "/src/assets/elecadi-icon.png";
import rateelTaxiIcon from "/src/assets/rateel-taxi-icon.jpg";
import canSpeechIcon from "/src/assets/can-speech-icon.png";
import rentcarzIcon from "/src/assets/rentcarz-icon.png";
import fahsyPartnersIcon from "/src/assets/fahsy-partners-icon.png";
import egyGymIcon from "/src/assets/egy-gym-icon.png";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Yahia Samir",
      title: "Mobile Software Engineer",
      description:
        "Mobile software engineer building production-ready Android and iOS apps with Flutter, Kotlin, and Swift. I focus on clean architecture, scalable systems, and polished UX—Firebase, REST APIs, and performance you can measure.",
      contactBtn: "Contact Me",
      projectsBtn: "View Projects",
      resumeBtn: "My Resume",
    },
    about: {
      title: "About Me",
      subtitle:
        "A dedicated developer with a passion for creating impactful digital solutions",
      paragraphs: [
        "Mobile software engineer building production-ready Android and iOS apps with Flutter, Kotlin, and Swift. I focus on clean architecture, scalable systems, and polished UX—Firebase, REST APIs, and measurable performance.",
      ],
      details: {
        age: "Age",
        experience: "Experience",
        email: "Email",
        location: "Location",
        languages: "Languages",
        availability: "Availability",
        years: "years",
        locationValue: "Egypt",
        languagesValue: "English, Arabic",
        availabilityValue: "Available",
      },
      contactBtn: "Let's Talk",
    },
    experience: {
      title: "Education & Experience",
      educationTab: "Education",
      workTab: "Work Experience",
      education: [
        {
          degree: "Bachelor of Computer Science",
          institution: "Suez Canal University",
          date: "2018 - 2022",
          description:
            "GPA: 3.15 (Very Good). Graduation project: Excellent.",
        },
      ],
      work: [
        {
          position: "Mobile Developer (Android & iOS)",
          company: "Ebdaa Digital Technology",
          date: "Jan 2026 – Present",
          description:
            "• Developed native Android and iOS apps using Kotlin and Swift with Clean Architecture. • Integrated Firebase (Auth, Firestore, Cloud Functions), push notifications, and REST APIs. • Improved UI responsiveness and navigation, increasing user retention by 15%. • Implemented CI/CD and automated testing, reducing app crashes by 20%. • Delivered 3 production apps with scalable, maintainable codebases.",
        },
        {
          position: "Freelance Flutter Developer",
          company: "Self-Employed",
          date: "Oct 2024 – Present",
          description:
            "• Built cross-platform apps with Flutter using Bloc and Riverpod. • Integrated offline storage (Hive, SQLite) with Firebase backends. • Delivered 2 production apps with optimized performance and polished UI.",
        },
        {
          position: "IT Specialist – Reserve Officer",
          company: "Egyptian Armed Forces",
          date: "Oct 2022 – Oct 2024",
          description:
            "• Managed IT infrastructure and resolved technical issues, maintaining 99% system uptime. • Automated internal workflows, improving operational efficiency by 20%.",
        },
        {
          position: "Flutter & iOS Intern",
          company: "Information Technology Institute (ITI)",
          date: "Jul 2020 – Aug 2021",
          description:
            "• Built mobile features with Flutter and native iOS (Swift/UIKit). • Implemented reusable UI components using MVC and MVVM.",
        },
      ],
    },
    projects: {
      title: "My Projects",
      subtitle:
        "Here are some of the projects I've worked on. Each one has taught me valuable lessons and helped me grow as a developer.",
      items: [
        {
          title: "Egy Gym App",
          description:
            "All-in-one gym management platform for Egyptian fitness centers with workout programming, progressive overload tracking, BMR-based nutrition, and real-time notifications.",
          image: egyGymIcon,
          technologies: ["Flutter", "Supabase", "Firebase FCM", "BLoC/Cubit", "Clean Architecture"],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.egy_gym.app",
          appStoreUrl: "https://apps.apple.com/eg/app/egy-gym-app/id6768382862",
        },
        {
          title: "Elecadi",
          description:
            "Electronics e-commerce app: product browsing, purchasing, and order tracking.",
          image: elecadiIcon,
          technologies: ["Flutter", "E-commerce", "REST APIs", "Clean Architecture"],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.elcadi.app.com",
          appStoreUrl: "https://apps.apple.com/us/app/elecadi/id6468905939",
        },
        {
          title: "Rateel Taxi",
          description:
            "Taxi booking with ride requests, payments, and real-time driver tracking.",
          image: rateelTaxiIcon,
          technologies: ["Flutter", "Real-time tracking", "Maps", "Payments"],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.codeCraft.rateelTaxi",
        },
        {
          title: "CAN — Speech Therapy Platform",
          description:
            "Connects users with speech therapy specialists and centers with a clean, accessible UI.",
          image: canSpeechIcon,
          technologies: [
            "Flutter",
            "Clean Architecture",
            "REST APIs",
            "Mobile Development",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.can.canelmarg",
        },
        {
          title: "Rentcarz.com",
          description:
            "Car rental marketplace: browse vehicles, book rentals, and manage reservations — Android & iOS.",
          image: rentcarzIcon,
          technologies: [
            "Kotlin",
            "Swift",
            "Firebase",
            "REST APIs",
            "Clean Architecture",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.ebdaa.carrent",
          appStoreUrl: "https://apps.apple.com/us/app/rentcarz-com/id6744922629",
        },
        {
          title: "Fahsy Partners",
          description:
            "Partner app for Qatar’s Fahsy vehicle inspection network: assignments, reports, and field workflows.",
          image: fahsyPartnersIcon,
          technologies: [
            "Kotlin",
            "Swift",
            "Firebase",
            "REST APIs",
            "Maps",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.qat.inspector",
          appStoreUrl:
            "https://apps.apple.com/us/app/fahsy-partners-%D8%B4%D8%B1%D9%83%D8%A7%D8%A1-%D9%81%D8%AD%D8%B5%D9%8A/id6741736665",
        },
        {
          title: "Fixiez App",
          description:
            "A comprehensive App for managing maintenance services and technicians.",
          image: fixiezimage,
          technologies: [
            "Flutter",
            "Rest API",
            "Shared Preferences",
            "Dio",
            "Bloc",
          ],
          githubUrl: "https://github.com/yahia-SA/fixiez",
          liveUrl: "https://github.com/yahia-SA/fixiez",
        },
        {
          title: "Together App",
          description:
            "A social App connecting people with shared interests and activities.",
          image: togetherimage,
          technologies: [
            "Flutter",
            "Rest API",
            "Shared Preferences",
            "Dio",
            "Bloc",
          ],
          githubUrl: "https://github.com/yahia-SA/together/tree/yahia",
          liveUrl: "https://github.com/yahia-SA/together/tree/yahia",
        },
        {
          title: "Bosta Task",
          description:
            "A shipment tracking and management system with real-time updates.",
          image: bostaimage,
          technologies: ["Ios", "RxSwift", "Moya"],
          githubUrl: "https://github.com/yahia-SA/BostaTask",
          liveUrl: "https://github.com/yahia-SA/BostaTask",
        },
        {
          title: "Movie App",
          description:
            "A modern movie browsing application with advanced search features.",
          image: movieAppimage,
          technologies: ["Flutter", "API Integration", "Responsive Design"],
          githubUrl: "https://github.com/yahia-SA/api-MovieApp-",
          liveUrl: "https://github.com/yahia-SA/api-MovieApp-",
        },
        {
          title: "Simple Contacts List App",
          description: "A simple contacts list app built with Swift.",
          image: phoneimage,
          technologies: ["Swift", "UIkit"],
          githubUrl: "https://github.com/yahia-SA/ContactsListApp",
          liveUrl: "https://github.com/yahia-SA/ContactsListApp",
        },
        {
          title: "News App",
          description:
            "A news app displaying the latest news from various sources.",
          image: newsAppimage,
          technologies: [
            "Flutter",
            "Bloc",
            "ScreenUtil",
            "EasyLocalization",
            "CachedNetworkImage",
            "Dio",
          ],
          githubUrl: "https://github.com/yahia-SA/news_app",
          liveUrl: "https://github.com/yahia-SA/news_app",
        },
        {
          title: "UIXFY Studio",
          description:
            "A creative UI/UX design studio specializing in building seamless, user-centered digital experiences that combine design excellence with functionality.",
          image: uixfyImage,
          technologies: [
            "Flutter",
            "Bloc",
            "ScreenUtil",
          ],
          githubUrl: "https://uixfy-studio.vercel.app/",
          // githubUrl: "https://github.com/yahia-SA/uixfy_studio",
          liveUrl: "https://uixfy-studio.vercel.app/",
        },

      ],
    },
    skills: {
      title: "Skills & Expertise",
      subtitle:
        "I've gained a wide range of skills throughout my career. Here's a comprehensive overview of my technical and professional capabilities.",
      technicalTitle: "Technical Skills",
      professionalTitle: "Professional Skills",
      languagesTitle: "Languages",
      technical: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
        { name: "Kotlin", level: 88 },
        { name: "Swift", level: 90 },
        { name: "C++", level: 85 },
        { name: "objective-c", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Git", level: 80 },
        { name: "HTML/CSS", level: 50 },
      ],
      professional: [
        { name: "Problem Solving", level: 95 },
        { name: "Project Management", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Agile Methodology", level: 85 },
      ],
      languages: [
        { name: "English", level: 90 },
        { name: "Arabic", level: 100 },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Have a project in mind or just want to say hello? Feel free to reach out!",
      formTitle: "Send Me a Message",
      getInTouchTitle: "Get in Touch",
      getInTouchText:
        "Feel free to contact me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      availabilityTitle: "Work Availability",
      availabilityText:
        "I'm currently available for freelance work or full-time positions. If you have a project that you want to get started or think you need my help with something, then get in touch.",
      viewPortfolioBtn: "View My Portfolio",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        nameError: "Please enter your name",
        emailRequiredError: "Please enter your email",
        emailInvalidError: "Please enter a valid email",
        subjectError: "Please enter a subject",
        messageError: "Please enter your message",
        successMessage:
          "Thank you for your message! I'll get back to you as soon as possible.",
      },
    },
    footer: {
      copyright: "All Rights Reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      experience: "الخبرة",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصل بي",
    },
    hero: {
      greeting: "مرحبًا، أنا",
      name: "يحيى سمير",
      title: "مهندس برمجيات موبايل",
      description:
        "مهندس برمجيات موبايل أبني تطبيقات أندرويد و iOS جاهزة للإنتاج باستخدام Flutter و Kotlin و Swift. أركّز على معمارية نظيفة وأنظمة قابلة للتوسع وتجربة مستخدم متميزة — Firebase وواجهات REST وأداء قابل للقياس.",
      contactBtn: "اتصل بي",
      projectsBtn: "عرض المشاريع",
      resumeBtn: "السيرة الذاتية",
    },
    about: {
      title: "عنّي",
      subtitle: "مطور مكرس له شغف بإنشاء حلول رقمية ذات تأثير",
      paragraphs: [
        "مهندس برمجيات موبايل أبني تطبيقات أندرويد و iOS جاهزة للإنتاج باستخدام Flutter و Kotlin و Swift. أركّز على معمارية نظيفة وأنظمة قابلة للتوسع وتجربة مستخدم متميزة — Firebase وواجهات REST وأداء قابل للقياس.",
      ],
      details: {
        age: "العمر",
        experience: "الخبرة",
        email: "البريد الإلكتروني",
        location: "الموقع",
        languages: "اللغات",
        availability: "التوافر",
        years: "سنة",
        locationValue: "مصر",
        languagesValue: "الإنجليزية، العربية",
        availabilityValue: "متاح",
      },
      contactBtn: "لنلتقي",
    },
    experience: {
      title: "التعليم والخبرة",
      educationTab: "التعليم",
      workTab: "الخبرة العملية",
      education: [
        {
          degree: "بكاليروس في علوم الحاسوب",
          institution: "جامعة قناة السويس",
          date: "2018 - 2022",
          description:
            "المعدل: 3.15 (جيد جدًا). مشروع التخرج: ممتاز.",
        },
      ],
      work: [
        {
          position: "مطوّر موبايل (أندرويد و iOS)",
          company: "إبداع للتكنولوجيا الرقمية (Ebdaa Digital Technology)",
          date: "يناير 2026 – حتى الآن",
          description:
            "• طوّرت تطبيقات أندرويد و iOS أصلية بـ Kotlin و Swift وفق Clean Architecture. • دمجت Firebase (Auth، Firestore، Cloud Functions)، الإشعارات، وواجهات REST. • حسّنت استجابة الواجهة والتنقّل، مما رفع الاحتفاظ بالمستخدمين بنسبة 15%. • نفّذت CI/CD واختبارًا آليًا، وقلّلت الأعطال بنسبة 20%. • سلّمت 3 تطبيقات إنتاج بمعمارية قابلة للتوسع وسهلة الصيانة.",
        },
        {
          position: "مطوّر Flutter مستقل",
          company: "عمل حر",
          date: "أكتوبر 2024 – حتى الآن",
          description:
            "• بنيت تطبيقات متعددة المنصات بـ Flutter باستخدام Bloc و Riverpod. • دمجت تخزينًا محليًا (Hive، SQLite) مع Firebase. • سلّمت تطبيقين إنتاج بأداء محسّن وواجهة سهلة الاستخدام.",
        },
        {
          position: "أخصائي تقنية معلومات — ضابط احتياط",
          company: "القوات المسلحة المصرية",
          date: "أكتوبر 2022 – أكتوبر 2024",
          description:
            "• أدرت البنية التحتية التقنية وحللت المشكلات، مع الحفاظ على تشغيل الأنظمة بنسبة 99%. • أتمتة سير العمل الداخلي ورفع الكفاءة التشغيلية بنسبة 20%.",
        },
        {
          position: "متدرب Flutter و iOS",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          date: "يوليو 2020 – أغسطس 2021",
          description:
            "• طوّرت ميزات موبايل بـ Flutter و iOS الأصلي (Swift/UIKit). • نفّذت مكوّنات واجهة قابلة لإعادة الاستخدام بـ MVC و MVVM.",
        },
      ],
    },
    projects: {
      title: "مشاريعي",
      subtitle:
        "إليك بعض المشاريع التي عملت عليها. كل واحد منها علمني دروسًا قيمة وساعدني على النمو كمطور.",
      items: [
        {
          title: "تطبيق إيجي جيم (Egy Gym App)",
          description:
            "منصة متكاملة لإدارة الصالات الرياضية بمصر، تدعم تتبع التمارين، وحساب الأنظمة الغذائية التلقائي (BMR)، ونظام إشعارات ذكي، مع إدارة 4 أدوار مختلفة للمستخدمين.",
          image: egyGymIcon,
          technologies: [
            "فلاتر",
            "سوبابيس",
            "إشعارات فايربيس",
            "بلوك (BLoC/Cubit)",
            "Clean Architecture",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.egy_gym.app",
          appStoreUrl: "https://apps.apple.com/eg/app/egy-gym-app/id6768382862",
        },
        {
          title: "إليكادي (Elecadi)",
          description:
            "تطبيق تجارة إلكترونية للإلكترونيات: تصفّح المنتجات والشراء وتتبّع الطلبات.",
          image: elecadiIcon,
          technologies: [
            "فلاتر",
            "تجارة إلكترونية",
            "REST APIs",
            "Clean Architecture",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.elcadi.app.com",
          appStoreUrl: "https://apps.apple.com/us/app/elecadi/id6468905939",
        },
        {
          title: "راتيل تاكسي (Rateel Taxi)",
          description:
            "حجز سيارات أجرة مع طلبات الرحلات والدفع وتتبّع السائق لحظيًا.",
          image: rateelTaxiIcon,
          technologies: ["فلاتر", "تتبّع لحظي", "خرائط", "مدفوعات"],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.codeCraft.rateelTaxi",
        },
        {
          title: "CAN — منصة علاج النطق",
          description:
            "يربط المستخدمين بأخصائيي علاج النطق والمراكز بواجهة نظيفة وسهلة الوصول.",
          image: canSpeechIcon,
          technologies: [
            "فلاتر",
            "Clean Architecture",
            "REST APIs",
            "تطوير موبايل",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.can.canelmarg",
        },
        {
          title: "Rentcarz.com",
          description:
            "سوق لتأجير السيارات: تصفّح المركبات، احجز التأجير، وأدر الحجوزات — أندرويد وآيفون.",
          image: rentcarzIcon,
          technologies: [
            "Kotlin",
            "Swift",
            "Firebase",
            "REST APIs",
            "Clean Architecture",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.ebdaa.carrent",
          appStoreUrl: "https://apps.apple.com/us/app/rentcarz-com/id6744922629",
        },
        {
          title: "Fahsy Partners — شركاء فحصي",
          description:
            "تطبيق للشركاء في شبكة فحصي لمركبات قطر: المهام، التقارير، وسير العمل الميداني.",
          image: fahsyPartnersIcon,
          technologies: [
            "Kotlin",
            "Swift",
            "Firebase",
            "REST APIs",
            "خرائط",
          ],
          googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.qat.inspector",
          appStoreUrl:
            "https://apps.apple.com/us/app/fahsy-partners-%D8%B4%D8%B1%D9%83%D8%A7%D8%A1-%D9%81%D8%AD%D8%B5%D9%8A/id6741736665",
        },
        {
          title: "تطبيق Fixiez",
          description: "تطبيق شاملة لإدارة خدمات الصيانة والفنيين.",
          image: fixiezimage,
          technologies: [
            "فلاتر",
            "REST API",
            "Shared Preferences",
            "Dio",
            "Bloc",
          ],
          githubUrl: "https://github.com/yahia-SA/fixiez",
          liveUrl: "https://github.com/yahia-SA/fixiez",
        },
        {
          title: "تطبيق Together",
          description:
            "تطبيق اجتماعية تربط الأشخاص ذوي الاهتمامات والأنشطة المشتركة.",
          image: togetherimage,
          technologies: [
            "فلاتر",
            "REST API",
            "Shared Preferences",
            "Dio",
            "Bloc",
          ],
          githubUrl: "https://github.com/yahia-SA/together/tree/yahia",
          liveUrl: "https://github.com/yahia-SA/together/tree/yahia",
        },
        {
          title: "Bosta Task",
          description: "نظام تتبع وإدارة الشحنات مع تحديثات فورية.",
          image: bostaimage,
          technologies: ["آيفون", "RxSwift", "Moya"],
          githubUrl: "https://github.com/yahia-SA/BostaTask",
          liveUrl: "https://github.com/yahia-SA/BostaTask",
        },
        {
          title: "تطبيق الأفلام",
          description: "تطبيق حديث لاستعراض الأفلام مع ميزات بحث متقدمة.",
          image: movieAppimage,
          technologies: ["فلاتر", "API Integration", "تصميم مرن"],
          githubUrl: "https://github.com/yahia-SA/api-MovieApp-",
          liveUrl: "https://github.com/yahia-SA/api-MovieApp-",
        },
        {
          title: "تطبيق قائمة جهات الاتصال البسيطة",
          description: "تطبيق قائمة جهات اتصال بسيط تم إنشاؤه باستخدام Swift.",
          image: phoneimage,
          technologies: ["Swift", "UIkit"],
          githubUrl: "https://github.com/yahia-SA/ContactsListApp",
          liveUrl: "https://github.com/yahia-SA/ContactsListApp",
        },
        {
          title: "تطبيق الاخبار",
          description: "تطبيق يعرض الاخبار الحديثة من مصادر مختلفة.",
          image: newsAppimage,
          technologies: [
            "فلاتر",
            "API Integration",
            "Bloc",
            "ScreenUtil",
            "EasyLocalization",
            "CachedNetworkImage",
            "Dio",
            "تصميم مرن",
          ],
          githubUrl: "https://github.com/yahia-SA/news_app",
          liveUrl: "https://github.com/yahia-SA/news_app",
        },
        {
          title: "UIXFY Studio",
          description:
            "استوديو تصميم UI/UX إبداعي متخصص في بناء تجارب رقمية سلسة وموجهة للمستخدم تجمع بين التميز في التصميم والوظائف.",
          image: uixfyImage,
          technologies: [
            "فلاتر",
            "Bloc",
            "ScreenUtil",
          ],
          githubUrl: "https://uixfy-studio.vercel.app/",
          // githubUrl: "https://github.com/yahia-SA/uixfy_studio",
          liveUrl: "https://uixfy-studio.vercel.app/",
        },
      ],
    },
    skills: {
      title: "المهارات والخبرة",
      subtitle:
        "لقد اكتسبت مجموعة واسعة من المهارات طوال مسيرتي المهنية. إليك نظرة شاملة على قدراتي التقنية والمهنية.",
      technicalTitle: "المهارات التقنية",
      professionalTitle: "المهارات المهنية",
      languagesTitle: "اللغات",
      technical: [
        { name: "فلاتر", level: 95 },
        { name: "دارت", level: 95 },
        { name: "كوتلين", level: 88 },
        { name: "سويفت", level: 90 },
        { name: "C++", level: 85 },
        { name: "Objective-C", level: 85 },
        { name: "جافا سكربت", level: 80 },
        { name: "Git", level: 80 },
        { name: "HTML/CSS", level: 50 },
      ],
      professional: [
        { name: "حل المشكلات", level: 95 },
        { name: "إدارة المشاريع", level: 85 },
        { name: "التعاون الجماعي", level: 90 },
        { name: "التواصل", level: 90 },
        { name: "منهجية أجايل", level: 85 },
      ],
      languages: [
        { name: "الإنجليزية", level: 90 },
        { name: "العربية", level: 100 },
      ],
    },
    contact: {
      title: "اتصل بي",
      subtitle:
        "هل لديك مشروع في بالك أو ترغب فقط في تحية؟ لا تتردد في التواصل!",
      formTitle: "أرسل لي رسالة",
      getInTouchTitle: "تواصل معي",
      getInTouchText:
        "لا تتردد في التواصل معي عبر أي من هذه المنصات. أنا دائمًا منفتح لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لتكون جزءًا من رؤيتك.",
      availabilityTitle: "توفر العمل",
      availabilityText:
        "أنا حاليًا متاح للعمل الحر أو المناصب بدوام كامل. إذا كان لديك مشروع ترغب في البدء به أو تعتقد أنك بحاجة إلى مساعدتي في شيء ما، فتواصل معي.",
      viewPortfolioBtn: "عرض محفظتي",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        nameError: "يرجى إدخال اسمك",
        emailRequiredError: "يرجى إدخال بريدك الإلكتروني",
        emailInvalidError: "يرجى إدخال بريد إلكتروني صحيح",
        subjectError: "يرجى إدخال الموضوع",
        messageError: "يرجى إدخال رسالتك",
        successMessage: "شكرًا لرسالتك! سأرد عليك في أقرب وقت ممكن.",
      },
    },
    footer: {
      copyright: "جميع الحقوق محفوظة.",
    },
  },
};

export default translations;
