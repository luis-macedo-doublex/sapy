export type Language = 'pt' | 'es' | 'en'

export const translations = {
  pt: {
    navbar: {
      about: 'Sobre',
      companies: 'Empresas',
      services: 'Serviços',
      differentials: 'Diferenciais',
      contact: 'Contato',
      cta: 'Fale Conosco',
    },
    hero: {
      eyebrow: 'Engenharia de Alta Performance',
      line1: 'SOLUÇÕES',
      line2: 'EM AUTOMAÇÃO',
      line3: 'INDUSTRIAL',
      subtitle:
        'Unindo expertise ibérica e inovação brasileira para transformar processos industriais com tecnologia de ponta.',
      cta1: 'Conheça Nossos Serviços',
      cta2: 'Fale com um Especialista',
      stats: [
        { value: '15+', label: 'Anos de Experiência' },
        { value: '200+', label: 'Projetos Entregues' },
        { value: '3', label: 'Países de Atuação' },
      ],
    },
    about: {
      label: 'Sobre a SAPY',
      heading: 'UMA NOVA\nREFERÊNCIA\nEM AUTOMAÇÃO',
      headingOutline: 'REFERÊNCIA',
      p1: 'A SAPY América Latina nasce da fusão entre a experiência consolidada do Grupo Savilcon — referência ibérica em engenharia — e o dinamismo tecnológico da Authomathika, empresa brasileira de automação industrial.',
      p2: 'Juntas, criam uma plataforma de alta performance para atender às demandas mais exigentes do mercado industrial latino-americano.',
      metric: 'foco em resultados reais e mensuráveis para o cliente',
      pillars: [
        {
          number: '01',
          title: 'Expertise Técnica',
          text: 'Equipe multidisciplinar com décadas de atuação em projetos de automação industrial complexos.',
        },
        {
          number: '02',
          title: 'Presença Global',
          text: 'Joint venture ibero-brasileira com capilaridade na América Latina e conexão direta com o mercado europeu.',
        },
        {
          number: '03',
          title: 'Inovação Contínua',
          text: 'Metodologias ágeis e tecnologias emergentes aplicadas à realidade industrial de cada cliente.',
        },
      ],
    },
    companies: {
      label: 'As Empresas',
      heading: 'DUAS FORÇAS,\nUMA VISÃO',
      description:
        'A SAPY é resultado da união estratégica de duas empresas com perfis complementares — cada uma trazendo sua força para construir uma oferta única no mercado.',
      savilcon: {
        tag: 'Expertise Europeia',
        origin: 'Espanha',
        description:
          'Fundado na Espanha com décadas de história em engenharia de automação, o Grupo Savilcon traz para a América Latina métodos consagrados no exigente mercado europeu.',
        highlights: [
          'Engenharia de processos industriais',
          'Sistemas SCADA e MES',
          'Integração de sistemas legados',
          'Certificações europeias CE',
        ],
        link: null,
      },
      authomathika: {
        tag: 'Inovação Brasileira',
        origin: 'Brasil',
        description:
          'Empresa brasileira especializada em automação industrial e transformação digital, com profundo conhecimento das realidades e regulamentações do mercado latino-americano.',
        highlights: [
          'Automação de manufatura',
          'Indústria 4.0 e IIoT',
          'Projetos de P&D industrial',
          'Suporte e manutenção local',
        ],
        linkLabel: 'Saiba mais',
      },
      bridge: 'Juntas formam a',
    },
    services: {
      label: 'Nossos Serviços',
      headingLine1: 'O QUE',
      headingLine2: 'ENTREGAMOS',
      description:
        'Do projeto básico ao comissionamento, oferecemos soluções completas para cada fase do ciclo de vida dos seus ativos industriais.',
      cta: 'Solicite uma Proposta',
      items: [
        {
          number: '01',
          title: 'Automação Industrial',
          text: 'Projeto, programação e implantação de sistemas de controle para processos industriais contínuos e discretos.',
          tags: ['PLCs', 'DCS', 'SCADA'],
        },
        {
          number: '02',
          title: 'Engenharia Elétrica',
          text: 'Dimensionamento, instalação e comissionamento de painéis elétricos, CCMs e infraestrutura de potência.',
          tags: ['Painéis', 'CCM', 'Comissionamento'],
        },
        {
          number: '03',
          title: 'Sistemas MES/SCADA',
          text: 'Desenvolvimento de interfaces HMI/SCADA e integração com sistemas MES para visibilidade total da produção.',
          tags: ['MES', 'HMI', 'OPC-UA'],
        },
        {
          number: '04',
          title: 'Indústria 4.0 & IIoT',
          text: 'Conectividade de campo, coleta de dados em tempo real e dashboards analíticos para decisão orientada a dados.',
          tags: ['IIoT', 'Analytics', 'Edge'],
        },
        {
          number: '05',
          title: 'Manutenção & Suporte',
          text: 'Atendimento técnico especializado, manutenção preventiva e corretiva de sistemas automatizados.',
          tags: ['24/7', 'Preventiva', 'Corretiva'],
        },
        {
          number: '06',
          title: 'Cybersegurança OT',
          text: 'Avaliação de vulnerabilidades, segmentação de redes industriais e implementação de políticas de segurança OT/ICS.',
          tags: ['OT Security', 'ICS', 'ISA-99'],
        },
      ],
    },
    differentials: {
      label: 'Diferenciais',
      bgText: 'POR\nQUÊ',
      heading: 'ESCOLHER\nA SAPY?',
      description:
        'Porque entregamos mais do que automação — entregamos resultado industrial com suporte real, do primeiro ao último dia de operação.',
      decorLabel: 'Nossos Diferenciais',
      items: [
        {
          title: 'Time Multidisciplinar',
          text: 'Engenheiros de controle, elétrica, software e processo trabalhando de forma integrada em cada projeto.',
        },
        {
          title: 'Presença Local',
          text: 'Atendimento com profissionais locais que conhecem a cultura, normas e realidade do seu negócio.',
        },
        {
          title: 'Padrão Internacional',
          text: 'Metodologias e processos alinhados às melhores práticas europeias e certificações internacionais.',
        },
        {
          title: 'Ciclo Completo',
          text: 'Da concepção ao suporte pós-operação — garantia de continuidade e evolução do seu sistema.',
        },
      ],
    },
    contact: {
      label: 'Contato',
      heading: 'VAMOS CONVERSAR',
      panelHeading: 'Fale com um\nEspecialista',
      panelDesc:
        'Nossa equipe técnica está pronta para entender o seu desafio e propor a solução mais adequada para a sua operação.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      location1: 'São Paulo, Brasil',
      location2: 'Barcelona, Espanha',
      whatsapp: 'Atendimento via WhatsApp',
      form: {
        nameLabel: 'Nome *',
        namePlaceholder: 'Seu nome',
        nameError: 'Campo obrigatório',
        emailLabel: 'E-mail *',
        emailPlaceholder: 'seu@email.com',
        emailRequired: 'Campo obrigatório',
        emailInvalid: 'E-mail inválido',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nome da empresa',
        messageLabel: 'Mensagem *',
        messagePlaceholder: 'Descreva brevemente sua necessidade...',
        messageError: 'Campo obrigatório',
        submit: 'Enviar Mensagem',
        sending: 'Enviando...',
        successTitle: 'Mensagem Enviada!',
        successText: 'Obrigado pelo contato. Retornaremos em breve.',
      },
    },
    footer: {
      description:
        'Joint venture ibero-brasileira especializada em automação industrial e engenharia de alta performance para a América Latina.',
      available: 'Atendimento disponível',
      navLabel: 'Navegação',
      contactLabel: 'Contato',
      location1: 'São Paulo, Brasil',
      location2: 'Barcelona, Espanha',
      rights: 'Todos os direitos reservados.',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Empresas', href: '#empresas' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Diferenciais', href: '#diferenciais' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    floating: {
      tooltip: 'Fale pelo WhatsApp',
      ariaLabel: 'Contato via WhatsApp',
    },
  },

  es: {
    navbar: {
      about: 'Sobre',
      companies: 'Empresas',
      services: 'Servicios',
      differentials: 'Diferenciales',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      eyebrow: 'Ingeniería de Alto Rendimiento',
      line1: 'SOLUCIONES',
      line2: 'EN AUTOMATIZACIÓN',
      line3: 'INDUSTRIAL',
      subtitle:
        'Uniendo experiencia ibérica e innovación brasileña para transformar procesos industriales con tecnología de vanguardia.',
      cta1: 'Conoce Nuestros Servicios',
      cta2: 'Habla con un Especialista',
      stats: [
        { value: '15+', label: 'Años de Experiencia' },
        { value: '200+', label: 'Proyectos Entregados' },
        { value: '3', label: 'Países de Operación' },
      ],
    },
    about: {
      label: 'Sobre SAPY',
      heading: 'UNA NUEVA\nREFERENCIA\nEN AUTOMATIZACIÓN',
      headingOutline: 'REFERENCIA',
      p1: 'SAPY América Latina nace de la fusión entre la experiencia consolidada del Grupo Savilcon — referencia ibérica en ingeniería — y el dinamismo tecnológico de Authomathika, empresa brasileña de automatización industrial.',
      p2: 'Juntas, crean una plataforma de alto rendimiento para atender las demandas más exigentes del mercado industrial latinoamericano.',
      metric: 'enfocado en resultados reales y medibles para el cliente',
      pillars: [
        {
          number: '01',
          title: 'Experiencia Técnica',
          text: 'Equipo multidisciplinario con décadas de actuación en proyectos complejos de automatización industrial.',
        },
        {
          number: '02',
          title: 'Presencia Global',
          text: 'Joint venture ibero-brasileña con alcance en América Latina y conexión directa con el mercado europeo.',
        },
        {
          number: '03',
          title: 'Innovación Continua',
          text: 'Metodologías ágiles y tecnologías emergentes aplicadas a la realidad industrial de cada cliente.',
        },
      ],
    },
    companies: {
      label: 'Las Empresas',
      heading: 'DOS FUERZAS,\nUNA VISIÓN',
      description:
        'SAPY es el resultado de la unión estratégica de dos empresas con perfiles complementarios — cada una aportando su fortaleza para construir una oferta única en el mercado.',
      savilcon: {
        tag: 'Experiencia Europea',
        origin: 'España',
        description:
          'Fundado en España con décadas de historia en ingeniería de automatización, el Grupo Savilcon trae a América Latina los métodos consagrados del exigente mercado europeo.',
        highlights: [
          'Ingeniería de procesos industriales',
          'Sistemas SCADA y MES',
          'Integración de sistemas heredados',
          'Certificaciones europeas CE',
        ],
        link: null,
      },
      authomathika: {
        tag: 'Innovación Brasileña',
        origin: 'Brasil',
        description:
          'Empresa brasileña especializada en automatización industrial y transformación digital, con profundo conocimiento de las realidades y regulaciones del mercado latinoamericano.',
        highlights: [
          'Automatización de manufactura',
          'Industria 4.0 e IIoT',
          'Proyectos de I+D industrial',
          'Soporte y mantenimiento local',
        ],
        linkLabel: 'Saber más',
      },
      bridge: 'Juntas forman la',
    },
    services: {
      label: 'Nuestros Servicios',
      headingLine1: 'LO QUE',
      headingLine2: 'ENTREGAMOS',
      description:
        'Desde el proyecto básico hasta la puesta en marcha, ofrecemos soluciones completas para cada fase del ciclo de vida de sus activos industriales.',
      cta: 'Solicitar una Propuesta',
      items: [
        {
          number: '01',
          title: 'Automatización Industrial',
          text: 'Diseño, programación e implementación de sistemas de control para procesos industriales continuos y discretos.',
          tags: ['PLCs', 'DCS', 'SCADA'],
        },
        {
          number: '02',
          title: 'Ingeniería Eléctrica',
          text: 'Dimensionamiento, instalación y puesta en marcha de tableros eléctricos, CCMs e infraestructura de potencia.',
          tags: ['Tableros', 'CCM', 'Comisionamiento'],
        },
        {
          number: '03',
          title: 'Sistemas MES/SCADA',
          text: 'Desarrollo de interfaces HMI/SCADA e integración con sistemas MES para visibilidad total de la producción.',
          tags: ['MES', 'HMI', 'OPC-UA'],
        },
        {
          number: '04',
          title: 'Industria 4.0 & IIoT',
          text: 'Conectividad de campo, recolección de datos en tiempo real y dashboards analíticos para decisiones basadas en datos.',
          tags: ['IIoT', 'Analytics', 'Edge'],
        },
        {
          number: '05',
          title: 'Mantenimiento & Soporte',
          text: 'Atención técnica especializada, mantenimiento preventivo y correctivo de sistemas automatizados.',
          tags: ['24/7', 'Preventivo', 'Correctivo'],
        },
        {
          number: '06',
          title: 'Ciberseguridad OT',
          text: 'Evaluación de vulnerabilidades, segmentación de redes industriales e implementación de políticas de seguridad OT/ICS.',
          tags: ['OT Security', 'ICS', 'ISA-99'],
        },
      ],
    },
    differentials: {
      label: 'Diferenciales',
      bgText: '¿POR\nQUÉ',
      heading: 'ELEGIR\nSAPY?',
      description:
        'Porque entregamos más que automatización — entregamos resultado industrial con soporte real, desde el primer hasta el último día de operación.',
      decorLabel: 'Nuestros Diferenciales',
      items: [
        {
          title: 'Equipo Multidisciplinario',
          text: 'Ingenieros de control, eléctrica, software y proceso trabajando de forma integrada en cada proyecto.',
        },
        {
          title: 'Presencia Local',
          text: 'Atención con profesionales locales que conocen la cultura, normas y realidad de su negocio.',
        },
        {
          title: 'Estándar Internacional',
          text: 'Metodologías y procesos alineados con las mejores prácticas europeas y certificaciones internacionales.',
        },
        {
          title: 'Ciclo Completo',
          text: 'Desde la concepción hasta el soporte post-operación — garantía de continuidad y evolución de su sistema.',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      heading: 'HABLEMOS',
      panelHeading: 'Habla con un\nEspecialista',
      panelDesc:
        'Nuestro equipo técnico está listo para entender tu desafío y proponer la solución más adecuada para tu operación.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      location1: 'São Paulo, Brasil',
      location2: 'Barcelona, España',
      whatsapp: 'Atención vía WhatsApp',
      form: {
        nameLabel: 'Nombre *',
        namePlaceholder: 'Tu nombre',
        nameError: 'Campo obligatorio',
        emailLabel: 'Correo *',
        emailPlaceholder: 'tu@correo.com',
        emailRequired: 'Campo obligatorio',
        emailInvalid: 'Correo inválido',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nombre de la empresa',
        messageLabel: 'Mensaje *',
        messagePlaceholder: 'Describe brevemente tu necesidad...',
        messageError: 'Campo obligatorio',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        successTitle: '¡Mensaje Enviado!',
        successText: 'Gracias por contactarnos. Te responderemos pronto.',
      },
    },
    footer: {
      description:
        'Joint venture ibero-brasileña especializada en automatización industrial e ingeniería de alto rendimiento para América Latina.',
      available: 'Atención disponible',
      navLabel: 'Navegación',
      contactLabel: 'Contacto',
      location1: 'São Paulo, Brasil',
      location2: 'Barcelona, España',
      rights: 'Todos los derechos reservados.',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Empresas', href: '#empresas' },
        { label: 'Servicios', href: '#servicos' },
        { label: 'Diferenciales', href: '#diferenciais' },
        { label: 'Contacto', href: '#contato' },
      ],
    },
    floating: {
      tooltip: 'Hablar por WhatsApp',
      ariaLabel: 'Contacto vía WhatsApp',
    },
  },

  en: {
    navbar: {
      about: 'About',
      companies: 'Companies',
      services: 'Services',
      differentials: 'Differentials',
      contact: 'Contact',
      cta: 'Talk to Us',
    },
    hero: {
      eyebrow: 'High Performance Engineering',
      line1: 'INDUSTRIAL',
      line2: 'AUTOMATION',
      line3: 'SOLUTIONS',
      subtitle:
        'Combining Iberian expertise and Brazilian innovation to transform industrial processes with cutting-edge technology.',
      cta1: 'Explore Our Services',
      cta2: 'Talk to a Specialist',
      stats: [
        { value: '15+', label: 'Years of Experience' },
        { value: '200+', label: 'Projects Delivered' },
        { value: '3', label: 'Countries of Operation' },
      ],
    },
    about: {
      label: 'About SAPY',
      heading: 'A NEW\nREFERENCE\nIN AUTOMATION',
      headingOutline: 'REFERENCE',
      p1: 'SAPY América Latina is born from the merger of the consolidated experience of Grupo Savilcon — an Iberian reference in engineering — and the technological dynamism of Authomathika, a Brazilian industrial automation company.',
      p2: 'Together, they create a high-performance platform to meet the most demanding requirements of the Latin American industrial market.',
      metric: 'focused on real, measurable results for the client',
      pillars: [
        {
          number: '01',
          title: 'Technical Expertise',
          text: 'Multidisciplinary team with decades of experience in complex industrial automation projects.',
        },
        {
          number: '02',
          title: 'Global Presence',
          text: 'Ibero-Brazilian joint venture with reach across Latin America and direct connection to the European market.',
        },
        {
          number: '03',
          title: 'Continuous Innovation',
          text: 'Agile methodologies and emerging technologies applied to the industrial reality of each client.',
        },
      ],
    },
    companies: {
      label: 'The Companies',
      heading: 'TWO FORCES,\nONE VISION',
      description:
        'SAPY is the result of the strategic union of two companies with complementary profiles — each bringing its strength to build a unique market offer.',
      savilcon: {
        tag: 'European Expertise',
        origin: 'Spain',
        description:
          'Founded in Spain with decades of history in automation engineering, Grupo Savilcon brings to Latin America the proven methods of the demanding European market.',
        highlights: [
          'Industrial process engineering',
          'SCADA and MES systems',
          'Legacy system integration',
          'European CE certifications',
        ],
        link: null,
      },
      authomathika: {
        tag: 'Brazilian Innovation',
        origin: 'Brazil',
        description:
          'Brazilian company specialized in industrial automation and digital transformation, with deep knowledge of the realities and regulations of the Latin American market.',
        highlights: [
          'Manufacturing automation',
          'Industry 4.0 & IIoT',
          'Industrial R&D projects',
          'Local support & maintenance',
        ],
        linkLabel: 'Learn more',
      },
      bridge: 'Together they form',
    },
    services: {
      label: 'Our Services',
      headingLine1: 'WHAT WE',
      headingLine2: 'DELIVER',
      description:
        'From basic engineering to commissioning, we offer complete solutions for every phase of your industrial assets lifecycle.',
      cta: 'Request a Proposal',
      items: [
        {
          number: '01',
          title: 'Industrial Automation',
          text: 'Design, programming and deployment of control systems for continuous and discrete industrial processes.',
          tags: ['PLCs', 'DCS', 'SCADA'],
        },
        {
          number: '02',
          title: 'Electrical Engineering',
          text: 'Sizing, installation and commissioning of electrical panels, MCCs and power infrastructure.',
          tags: ['Panels', 'MCC', 'Commissioning'],
        },
        {
          number: '03',
          title: 'MES/SCADA Systems',
          text: 'Development of HMI/SCADA interfaces and MES integration for full production visibility.',
          tags: ['MES', 'HMI', 'OPC-UA'],
        },
        {
          number: '04',
          title: 'Industry 4.0 & IIoT',
          text: 'Field connectivity, real-time data collection and analytical dashboards for data-driven decisions.',
          tags: ['IIoT', 'Analytics', 'Edge'],
        },
        {
          number: '05',
          title: 'Maintenance & Support',
          text: 'Specialized technical assistance, preventive and corrective maintenance for automated systems.',
          tags: ['24/7', 'Preventive', 'Corrective'],
        },
        {
          number: '06',
          title: 'OT Cybersecurity',
          text: 'Vulnerability assessment, industrial network segmentation and OT/ICS security policy implementation.',
          tags: ['OT Security', 'ICS', 'ISA-99'],
        },
      ],
    },
    differentials: {
      label: 'Differentials',
      bgText: 'WHY\nCHOOSE',
      heading: 'CHOOSE\nSAPY?',
      description:
        'Because we deliver more than automation — we deliver industrial results with real support, from day one to the last day of operation.',
      decorLabel: 'Our Differentials',
      items: [
        {
          title: 'Multidisciplinary Team',
          text: 'Control, electrical, software and process engineers working in an integrated way on every project.',
        },
        {
          title: 'Local Presence',
          text: 'Support from local professionals who know the culture, standards and reality of your business.',
        },
        {
          title: 'International Standards',
          text: 'Methodologies and processes aligned with the best European practices and international certifications.',
        },
        {
          title: 'Full Cycle',
          text: 'From conception to post-operation support — guaranteed continuity and evolution of your system.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      heading: "LET'S TALK",
      panelHeading: 'Talk to a\nSpecialist',
      panelDesc:
        'Our technical team is ready to understand your challenge and propose the most suitable solution for your operation.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location1: 'São Paulo, Brazil',
      location2: 'Barcelona, Spain',
      whatsapp: 'Chat on WhatsApp',
      form: {
        nameLabel: 'Name *',
        namePlaceholder: 'Your name',
        nameError: 'Required field',
        emailLabel: 'Email *',
        emailPlaceholder: 'your@email.com',
        emailRequired: 'Required field',
        emailInvalid: 'Invalid email',
        companyLabel: 'Company',
        companyPlaceholder: 'Company name',
        messageLabel: 'Message *',
        messagePlaceholder: 'Briefly describe your need...',
        messageError: 'Required field',
        submit: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Message Sent!',
        successText: 'Thank you for reaching out. We will get back to you shortly.',
      },
    },
    footer: {
      description:
        'Ibero-Brazilian joint venture specialized in industrial automation and high-performance engineering for Latin America.',
      available: 'Support available',
      navLabel: 'Navigation',
      contactLabel: 'Contact',
      location1: 'São Paulo, Brazil',
      location2: 'Barcelona, Spain',
      rights: 'All rights reserved.',
      links: [
        { label: 'About', href: '#sobre' },
        { label: 'Companies', href: '#empresas' },
        { label: 'Services', href: '#servicos' },
        { label: 'Differentials', href: '#diferenciais' },
        { label: 'Contact', href: '#contato' },
      ],
    },
    floating: {
      tooltip: 'Chat on WhatsApp',
      ariaLabel: 'Contact via WhatsApp',
    },
  },
}
