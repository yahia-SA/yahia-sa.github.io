import bostaimage from '/src/assets/bosta.png'; // Import the image
import fixiezimage from '/src/assets/Fixiez.svg';
import movieAppimage from '/src/assets/movie_app.jpg';
import togetherimage from '/src/assets/together.png';

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience", 
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Yahia Samir",
      title: "Mobile  Developer",
      description:         "I'm a mobile developer with a passion for creating exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products that solve real-world problems.",
      contactBtn: "Contact Me",
      projectsBtn: "View Projects"
    },
    about: {
      title: "About Me",
      subtitle: "A dedicated developer with a passion for creating impactful digital solutions",
      paragraphs: [
        "I'm a mobile developer with a passion for creating exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products that solve real-world problems.",],
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
        availabilityValue: "Available"
      },
      contactBtn: "Let's Talk"
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
          description: "Graduated with Very Good grade."
        }
      ],
      work: [
        {
          position: "Flutter Developer",
          company: "Fixiez",
          date: "2025 - Present",
          description: "•	App for residential compounds to request maintenance services and schedule maintenance tasks. Technologies: Flutter, Firebase, REST APIs, Dio, shared_preferences"        },
          {
            position: "Ios Developer",
            company: "Bosta",
            date: "2025",
            description: "Profile & Albums viewer using Moya, RxSwift, and SPM.	Focus on state management and clean code practices."          
          },
  {
          position: "Flutter Developer",
          company: "Together",
          date: "2022",
          description: "	Enables users to share/sell unused items locally. Features Firebase Auth, real-time updates, responsive UI with ScreenUtil.Stack: Flutter, Dio, Firebase"
        },
        {
          position: "Flutter Developer",
          company: "Movie App",
          date: "2022",
          description: "Created a responsive movie application with Flutter and RestFul APIs."
        }
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "Here are some of the projects I've worked on. Each one has taught me valuable lessons and helped me grow as a developer.",
      items: [
        {
          title: "Fixiez App",
          description: "A comprehensive App for managing maintenance services and technicians.",
          image:fixiezimage,
          technologies: ["Flutter", "Rest API", "Shared Preferences", "Dio","Bloc"],
          githubUrl: "https://github.com/yahia-SA/fixiez",
          liveUrl: "https://example.com"
        },
        {
          title: "Together App",
          description: "A social App connecting people with shared interests and activities.",
          image:togetherimage,
          technologies: ["Flutter", "Rest API", "Shared Preferences", "Dio", "Bloc"],
          githubUrl: "https://github.com/yahia-SA/together/tree/yahia",
          liveUrl: "https://example.com"
        },
        {
          title: "Bosta Task",
          description: "A shipment tracking and management system with real-time updates.",
          image:bostaimage,
          technologies: ["Ios", "RxSwift", "Moya"],
          githubUrl: "https://github.com/yahia-SA/BostaTask",
          liveUrl: "https://example.com"
        },
        {
          title: "Movie App",
          description: "A modern movie browsing application with advanced search features.",
          image:movieAppimage,
          technologies: ["Flutter", "API Integration", "Responsive Design"],
          githubUrl: "https://github.com/yahia-SA/api-MovieApp-",
          liveUrl: "https://example.com"
        }
      ]
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "I've gained a wide range of skills throughout my career. Here's a comprehensive overview of my technical and professional capabilities.",
      technicalTitle: "Technical Skills",
      professionalTitle: "Professional Skills",
      languagesTitle: "Languages",
      technical: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
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
        { name: "Agile Methodology", level: 85 }
      ],
      languages: [
        { name: "English", level: 90 },
        { name: "Arabic", level: 100 }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have a project in mind or just want to say hello? Feel free to reach out!",
      formTitle: "Send Me a Message",
      getInTouchTitle: "Get in Touch",
      getInTouchText: "Feel free to contact me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      availabilityTitle: "Work Availability",
      availabilityText: "I'm currently available for freelance work or full-time positions. If you have a project that you want to get started or think you need my help with something, then get in touch.",
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
        successMessage: "Thank you for your message! I'll get back to you as soon as possible."
      }
    },
    footer: {
      copyright: "All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      experience: "التجربة",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصل بي"
    },
    hero: {
      greeting: "مرحبًا، أنا",
      name: "يحيى سمير",
      title: "مطور موبايل",
      description: "أنا مطور موبايل شغوف بإنشاء تجارب رقمية استثنائية. حاليًا، أركز على إنشاء منتجات موجهة للإنسان وقابلة للوصول تحل المشكلات الحقيقية.",
      contactBtn: "اتصل بي",
      projectsBtn: "عرض المشاريع"
    },
    about: {
      title: "عنّي",
      subtitle: "مطور مكرس له شغف بإنشاء حلول رقمية ذات تأثير",
      paragraphs: [
        "أنا مطور موبايل شغوف بإنشاء تجارب رقمية استثنائية. حاليًا، أركز على إنشاء منتجات موجهة للإنسان وقابلة للوصول تحل المشكلات الحقيقية."
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
        availabilityValue: "متاح"
      },
      contactBtn: "لنلتقي"
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
          description: "تخرجت بتقدير جيد جدًا."
        }
      ],
      work: [
        {
          position: "مطور فلاتر",
          company: "Fixiez",
          date: "2025 - الآن",
          description: "• تطبيق للمجمعات السكنية لطلب خدمات الصيانة وجدولة مهام الصيانة. التقنيات: فلاتر، فايربيس، APIs، Dio، Shared Preferences"
        },
        {
          position: "مطور آيفون",
          company: "Bosta",
          date: "2025",
          description: "عارض للملف الشخصي والألبومات باستخدام Moya، RxSwift، و SPM. تركيز على إدارة الحالة والممارسات النظيفة."
        },

        {
          position: "مطور فلاتر",
          company: "Together",
          date: "2022",
          description: "تمكن المستخدمين من مشاركة/بيع الأشياء غير المستخدمة محليًا. الخصائص: Firebase Auth، التحديثات الفورية، واجهة مستخدم مرنة باستخدام ScreenUtil. Stack: فلاتر، Dio، Firebase"
        },
        {
          position: "مطور فلاتر",
          company: "Movie App",
          date: "2022",
          description: "تم إنشاء تطبيق أفلام مرن باستخدام فلاتر و RestFul APIs."
        }
      ]
    },
    projects: {
      title: "مشاريعي",
      subtitle: "إليك بعض المشاريع التي عملت عليها. كل واحد منها علمني دروسًا قيمة وساعدني على النمو كمطور.",
      items: [
        {
          title: "تطبيق Fixiez",
          description: "تطبيق شاملة لإدارة خدمات الصيانة والفنيين.",
          image:fixiezimage,
          technologies: ["فلاتر", "REST API", "Shared Preferences", "Dio", "Bloc"],
          githubUrl: "https://github.com/yahia-SA/fixiez",
          liveUrl: "https://example.com"
        },
        {
          title: "تطبيق Together",
          description: "تطبيق اجتماعية تربط الأشخاص ذوي الاهتمامات والأنشطة المشتركة.",
          image:togetherimage,
          technologies: ["فلاتر", "REST API", "Shared Preferences", "Dio", "Bloc"],
          githubUrl: "https://github.com/yahia-SA/together/tree/yahia",
          liveUrl: "https://example.com"
        },
        {
          title: "Bosta Task",
          description: "نظام تتبع وإدارة الشحنات مع تحديثات فورية.",
          image:bostaimage,
          technologies: ["آيفون", "RxSwift", "Moya"],
          githubUrl: "https://github.com/yahia-SA/BostaTask",
          liveUrl: "https://example.com"
        },
        {
          title: "تطبيق الأفلام",
          description: "تطبيق حديث لاستعراض الأفلام مع ميزات بحث متقدمة.",
          image:movieAppimage,
          technologies: ["فلاتر", "API Integration", "تصميم مرن"],
          githubUrl: "https://github.com/yahia-SA/api-MovieApp-",
          liveUrl: "https://example.com"
        }
      ]
    },
    skills: {
      title: "المهارات والخبرة",
      subtitle: "لقد اكتسبت مجموعة واسعة من المهارات طوال مسيرتي المهنية. إليك نظرة شاملة على قدراتي التقنية والمهنية.",
      technicalTitle: "المهارات التقنية",
      professionalTitle: "المهارات المهنية",
      languagesTitle: "اللغات",
      technical: [
        { name: "فلاتر", level: 95 },
        { name: "دارت", level: 95 },
        { name: "سويفت", level: 90 },
        { name: "C++", level: 85 },
        { name: "Objective-C", level: 85 },
        { name: "جافا سكربت", level: 80 },
        { name: "Git", level: 80 },
        { name: "HTML/CSS", level: 50 }
      ],
      professional: [
        { name: "حل المشكلات", level: 95 },
        { name: "إدارة المشاريع", level: 85 },
        { name: "التعاون الجماعي", level: 90 },
        { name: "التواصل", level: 90 },
        { name: "منهجية أجايل", level: 85 }
      ],
      languages: [
        { name: "الإنجليزية", level: 90 },
        { name: "العربية", level: 100 }
      ]
    },
    contact: {
      title: "اتصل بي",
      subtitle: "هل لديك مشروع في بالك أو ترغب فقط في تحية؟ لا تتردد في التواصل!",
      formTitle: "أرسل لي رسالة",
      getInTouchTitle: "تواصل معي",
      getInTouchText: "لا تتردد في التواصل معي عبر أي من هذه المنصات. أنا دائمًا منفتح لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لتكون جزءًا من رؤيتك.",
      availabilityTitle: "توفر العمل",
      availabilityText: "أنا حاليًا متاح للعمل الحر أو المناصب بدوام كامل. إذا كان لديك مشروع ترغب في البدء به أو تعتقد أنك بحاجة إلى مساعدتي في شيء ما، فتواصل معي.",
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
        successMessage: "شكرًا لرسالتك! سأرد عليك في أقرب وقت ممكن."
      }
    },
    footer: {
      copyright: "جميع الحقوق محفوظة."
    }
  }
  
};

export default translations;