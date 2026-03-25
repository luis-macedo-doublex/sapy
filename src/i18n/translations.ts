export type Language = 'pt' | 'es' | 'en'

export const translations = {
  pt: {
    navbar: {
      about: 'Sobre',
      sectors: 'Setores',
      services: 'Serviços',
      cases: 'Projetos',
      credentials: 'Credenciais',
      companies: 'Empresas',
      contact: 'Contato',
      cta: 'Fale Conosco',
    },
    hero: {
      eyebrow: 'Engenharia, Montagem e Projetos EPC',
      line1: 'SOLUÇÕES',
      line2: 'EM ENGENHARIA',
      line3: 'INDUSTRIAL',
      subtitle:
        'Unindo expertise ibérica e inovação brasileira para transformar processos industriais com tecnologia de ponta — do projeto ao comissionamento.',
      cta1: 'Conheça Nossos Projetos',
      cta2: 'Fale com um Especialista',
      stats: [
        { value: '44+', label: 'Anos de Experiência Combinada' },
        { value: '1.480', label: 'Profissionais nos Grupos' },
        { value: '7+', label: 'Países de Atuação' },
        { value: '2.000+', label: 'Dias sem Acidentes' },
      ],
      downloadPdf: 'Baixar Apresentação',
    },
    about: {
      label: 'Sobre a SAPY',
      heading: 'UMA NOVA\nREFERÊNCIA\nEM ENGENHARIA',
      headingOutline: 'REFERÊNCIA',
      p1: 'A SAPY América Latina nasce da fusão entre a experiência consolidada do Grupo Savilcon — referência ibérica em engenharia — e o dinamismo tecnológico da Authomathika, empresa brasileira de automação e montagem industrial.',
      p2: 'Juntas, oferecem soluções completas em engenharia, montagem eletromecânica e projetos EPC para atender às demandas mais exigentes do mercado industrial latino-americano.',
      pillars: [
        {
          number: '01',
          title: 'Expertise Técnica',
          text: 'Equipe multidisciplinar com décadas de atuação em projetos de automação, montagem eletromecânica e engenharia EPC.',
        },
        {
          number: '02',
          title: 'Presença Global',
          text: 'Joint venture ibero-brasileira com operações em 7+ países, escritórios permanentes na América Latina e Europa.',
        },
        {
          number: '03',
          title: 'Inovação Contínua',
          text: 'Metodologias ágeis e tecnologias emergentes aplicadas à realidade industrial de cada cliente, do projeto ao start-up.',
        },
      ],
    },
    sectors: {
      label: 'Setores de Atuação',
      headingLine1: 'INDÚSTRIAS',
      headingLine2: 'QUE ATENDEMOS',
      description:
        'Expertise vertical profunda nos principais segmentos industriais da América Latina — com portfólio de projetos reais em energia, indústria, saneamento e logística.',
      items: [
        {
          id: 'energy',
          name: 'Geração & Cogeração de Energia',
          description:
            'Projetos EPC completos para usinas solares, hidrelétricas, termoelétricas, biogás e cogeração. Instrumentação, automação, painéis elétricos e comissionamento.',
          services: ['Automação Industrial', 'Engenharia Elétrica', 'Montagem EPC'],
          highlight: 'Solar · Hídrica · Biogás · Termoelétrica',
        },
        {
          id: 'chemical',
          name: 'Química, Fertilizantes & Petroquímica',
          description:
            'Controle de processos contínuos, sistemas batch, gestão de utilidades e montagem de plantas industriais completas para indústrias químicas e de fertilizantes.',
          services: ['Automação Industrial', 'Sistemas MES/SCADA', 'Montagem EPC'],
          highlight: 'ISA-88 · Batch · SIL · EPC',
        },
        {
          id: 'food',
          name: 'Alimentos, Bebidas & Sucroenergético',
          description:
            'Automação de linhas de produção, usinas de etanol e açúcar, fábricas de sucos e rações — rastreabilidade, OEE e conformidade com normas alimentares.',
          services: ['Automação Industrial', 'Sistemas MES/SCADA', 'Indústria 4.0 & IIoT'],
          highlight: 'Etanol · Açúcar · FSSC 22000 · OEE',
        },
        {
          id: 'mining',
          name: 'Mineração & Siderurgia',
          description:
            'Supervisão de grandes plantas distribuídas, automação de minerodutos e processos de extração, sistemas de gestão de energia e manutenção preditiva.',
          services: ['Sistemas MES/SCADA', 'Automação Industrial', 'Manutenção & Suporte'],
          highlight: 'SCADA Distribuído · EPC · Grandes Plantas',
        },
        {
          id: 'water',
          name: 'Saneamento & Tratamento de Água',
          description:
            'Plantas modulares compactas de potabilização, EDARs industriais, sistemas de deshidratação de lodos e automação de redes de distribuição.',
          services: ['Automação Industrial', 'Sistemas MES/SCADA', 'Engenharia Elétrica'],
          highlight: 'EDAR · Potabilização · Modular',
        },
        {
          id: 'logistics',
          name: 'Logística, Portos & Infraestrutura',
          description:
            'Automação de terminais portuários, infraestrutura industrial, sistemas de armazenagem e projetos de grande porte com mobilização internacional.',
          services: ['Automação Industrial', 'Engenharia Elétrica', 'Montagem EPC'],
          highlight: 'Portos · Armazenagem · EPC Internacional',
        },
      ],
    },
    services: {
      label: 'Nossos Serviços',
      headingLine1: 'O QUE',
      headingLine2: 'ENTREGAMOS',
      description:
        'Do projeto básico ao comissionamento e start-up, oferecemos soluções EPC completas para cada fase do ciclo de vida dos seus ativos industriais.',
      cta: 'Solicite uma Proposta',
      modal: {
        methodologyLabel: 'Metodologia',
        scopeLabel: 'Escopo Típico',
        ctaLabel: 'Solicitar Proposta',
        closeLabel: 'Fechar',
        caseLabel: 'Caso Relacionado',
      },
      items: [
        {
          number: '01',
          title: 'Automação Industrial',
          text: 'Projeto, programação e implantação de sistemas de controle para processos industriais contínuos e discretos.',
          tags: ['PLCs', 'DCS', 'SCADA'],
          detail: {
            methodology:
              'Seguimos a metodologia SDLC industrial: levantamento de requisitos de processo, projeto de arquitetura de controle, programação e testes em FAT, instalação, comissionamento e SAT com documentação completa.',
            scope: [
              'Especificação funcional e detalhada de sistemas de controle',
              'Programação de PLCs Siemens (parceiro certificado) e Allen-Bradley (Rockwell Partner)',
              'Configuração de DCS (Emerson DeltaV, ABB 800xA, Honeywell)',
              'Configuração de redes industriais (PROFIBUS, PROFINET, EtherNet/IP)',
              'FAT, comissionamento e SAT',
              'Documentação técnica completa (As-Built)',
            ],
          },
        },
        {
          number: '02',
          title: 'Engenharia Elétrica & Painéis',
          text: 'Fabricação própria de painéis elétricos em Sertãozinho/SP, dimensionamento, instalação e comissionamento de CCMs e infraestrutura de potência.',
          tags: ['Painéis', 'CCM', 'Fabricação Própria'],
          detail: {
            methodology:
              'Projeto elétrico segundo normas NR-10, IEC 60204 e ABNT NBR, com fabricação própria de painéis em nossa fábrica de 1.920m² em Sertãozinho, desde a especificação até o comissionamento.',
            scope: [
              'Fabricação de painéis de controle e CCMs (fábrica própria em Sertãozinho/SP)',
              'Laboratório de metrologia móvel (144m²) para calibração em campo',
              'Projeto e detalhamento elétrico completo',
              'Memorial descritivo e lista de materiais',
              'Instalação, cabeamento e comissionamento elétrico',
              'Laudo de conformidade NR-10 e documentação As-Built',
            ],
          },
        },
        {
          number: '03',
          title: 'Sistemas MES/SCADA',
          text: 'Desenvolvimento de interfaces HMI/SCADA e integração com sistemas MES para visibilidade total da produção.',
          tags: ['MES', 'HMI', 'OPC-UA'],
          detail: {
            methodology:
              'Desenvolvimento iterativo com validação contínua com o usuário final: arquitetura de dados, modelagem de objetos, desenvolvimento de telas, integração via OPC-UA/REST e testes de aceitação.',
            scope: [
              'Desenvolvimento de supervisórios SCADA (Ignition, WinCC, iFIX)',
              'Modelagem e configuração de sistemas MES',
              'Integração SCADA-MES-ERP via OPC-UA',
              'Desenvolvimento de dashboards de produção e OEE',
              'Configuração de alarmes e relatórios',
              'Treinamento de operadores',
            ],
          },
        },
        {
          number: '04',
          title: 'Montagem EPC',
          text: 'Engenharia, Procurement e Construction — montagem eletromecânica de plantas industriais completas, grandes paradas e start-up.',
          tags: ['EPC', 'Montagem', 'Start-up'],
          detail: {
            methodology:
              'Execução EPC completa com capacidade de mobilização internacional: equipes multidisciplinares (mecânica, elétrica, instrumentação), gestão de obra e comissionamento final.',
            scope: [
              'Montagem mecânica e eletromecânica de plantas industriais',
              'Grandes paradas programadas (Mecânica, Elétrica e Instrumentação)',
              'Montagem de plantas completas com start-up',
              'Piping, estruturas metálicas e obras civis industriais',
              'Mobilização de equipes internacionais',
              'Gestão de obra e controle de qualidade (ISO 9001)',
            ],
          },
        },
      ],
    },
    cases: {
      label: 'Projetos',
      headingLine1: 'CONFIAM EM',
      headingLine2: 'NOSSO TRABALHO',
      description:
        'Projetos reais executados pelo grupo em Brasil, Angola, México, Panamá e Europa — do projeto básico ao start-up de plantas completas.',
      filterAll: 'Todos',
      viewDetail: 'Solicitar Similar',
      challengeLabel: 'Projeto',
      solutionLabel: 'Escopo Executado',
      resultLabel: 'Resultado',
      items: [
        {
          id: 'case-01',
          sector: 'Fertilizantes',
          sectorId: 'chemical',
          title: 'Vale Mosaic — Complexo de Fertilizantes',
          challenge:
            'Complexo industrial de grande porte para produção de fertilizantes fosfatados. Demanda por infraestrutura elétrica, automação de processo e instrumentação de alta confiabilidade em ambiente crítico.',
          solution:
            'Fornecimento e montagem de painéis elétricos de média e baixa tensão, CCMs, instrumentação de processo e sistemas de controle. Automação de transportadores, britagem e processo de beneficiamento mineral.',
          result:
            'Entrega completa dentro do prazo com todas as etapas de comissionamento aprovadas. Sistemas operando conforme especificações de processo com alta disponibilidade.',
          tags: ['Painéis Elétricos', 'CCM', 'Automação', 'Instrumentação'],
          metric: { value: 'EPC', label: 'Escopo Completo' },
        },
        {
          id: 'case-02',
          sector: 'Energia Solar',
          sectorId: 'energy',
          title: 'UFV São José do Belmonte — 455 MW',
          challenge:
            'Uma das maiores usinas fotovoltaicas do Brasil, exigindo infraestrutura elétrica de grande escala, sistemas de supervisão e comissionamento em prazo agressivo.',
          solution:
            'Fornecimento de painéis elétricos e CCMs fabricados na unidade de Sertãozinho, sistema SCADA de supervisão da geração, instrumentação e comissionamento eletromecânico das subestações.',
          result:
            'Usina em operação comercial no prazo estabelecido. 455 MW de capacidade instalada atendendo à rede nacional de energia.',
          tags: ['Solar', 'SCADA', 'Painéis', 'Comissionamento'],
          metric: { value: '455MW', label: 'Capacidade Instalada' },
        },
        {
          id: 'case-03',
          sector: 'Alimentos & Bebidas',
          sectorId: 'food',
          title: 'Citrus Juice — Fábrica de Sucos',
          challenge:
            'Fábrica de sucos cítricos com necessidade de automação integrada das linhas de extração, pasteurização e envase, com rastreabilidade de produção e conformidade alimentar.',
          solution:
            'Automação completa das linhas de processo com PLCs Siemens, sistema SCADA de supervisão, instrumentação de processo (temperatura, vazão, pressão) e integração com sistema de rastreabilidade.',
          result:
            'Operação automatizada com controle total de parâmetros de processo. Rastreabilidade de lotes implementada. Conformidade com requisitos de qualidade alimentar.',
          tags: ['Automação', 'SCADA', 'Siemens', 'Rastreabilidade'],
          metric: { value: 'EPC', label: 'Automação Completa' },
        },
        {
          id: 'case-04',
          sector: 'Sucroenergético',
          sectorId: 'food',
          title: 'Biocom — Planta Sucroenergética (Angola)',
          challenge:
            'Planta sucroenergética de grande porte em Angola demandando soluções EPC completas com mobilização internacional de equipes, dentro de cronograma exigente e condições locais desafiadoras.',
          solution:
            'Execução EPC com equipes mobilizadas internacionalmente: montagem eletromecânica, fornecimento e instalação de painéis elétricos, automação de processo de moagem e geração de energia, instrumentação e comissionamento.',
          result:
            'Planta entregue e comissionada com capacidade de produção de açúcar e cogeração de energia. Operação iniciada conforme cronograma contratual.',
          tags: ['EPC', 'Angola', 'Montagem', 'Sucroenergético'],
          metric: { value: 'EPC', label: 'Internacional' },
        },
        {
          id: 'case-05',
          sector: 'Processamento de Soja',
          sectorId: 'food',
          title: 'ADM — Complexo de Processamento de Soja',
          challenge:
            'Complexo de processamento de grãos de alta escala exigindo automação de linhas de moagem, extração e expedição, com integração entre sistemas de controle e gestão de utilidades.',
          solution:
            'Automação das linhas de processo com PLCs e sistema SCADA, instrumentação de processo (vazão, temperatura, nível) e integração com sistema MES para rastreabilidade de lotes e controle de OEE.',
          result:
            'Operação integrada com visibilidade total do processo produtivo. Melhoria comprovada no OEE e conformidade com requisitos de qualidade alimentar.',
          tags: ['Automação', 'SCADA', 'MES', 'Soja'],
          metric: { value: 'MES', label: 'Rastreabilidade Completa' },
        },
        {
          id: 'case-06',
          sector: 'Saneamento',
          sectorId: 'water',
          title: 'GS Inima — Sistema de Saneamento',
          challenge:
            'Projeto de saneamento industrial demandando automação de estações de tratamento de água e esgoto, com monitoramento remoto e conformidade com legislação ambiental.',
          solution:
            'Implantação de sistema SCADA para supervisão remota das ETAs/ETEs, automação de dosagem de produtos químicos, monitoramento de qualidade da água e geração de relatórios ambientais.',
          result:
            'Sistema de saneamento automatizado com monitoramento 24/7, conformidade ambiental comprovada e redução de custos operacionais.',
          tags: ['SCADA', 'ETA', 'ETE', 'Monitoramento Ambiental'],
          metric: { value: 'EPC', label: 'Saneamento Integrado' },
        },
        {
          id: 'case-07',
          sector: 'Mineração',
          sectorId: 'mining',
          title: 'MATSA — Mineração e Tratamento de Água (Espanha)',
          challenge:
            'Operação mineira na Espanha necessitando de sistema de tratamento de água de processo e gestão ambiental, com automação de plantas modulares e controle de efluentes.',
          solution:
            'Projeto e implantação de plantas modulares de tratamento de água para mineração, automação de processos de filtragem e controle de qualidade de efluentes com supervisão SCADA.',
          result:
            'Conformidade ambiental atendida com sistema automatizado de tratamento. Plantas modulares operando dentro das especificações regulatórias europeias.',
          tags: ['Mineração', 'Tratamento de Água', 'SCADA', 'Espanha'],
          metric: { value: 'EPC', label: 'Europa' },
        },
        {
          id: 'case-08',
          sector: 'Sucroenergético',
          sectorId: 'food',
          title: 'CADASA — Usina de Açúcar (Panamá)',
          challenge:
            'Usina de produção de açúcar no Panamá demandando automação completa do processo sucroenergético com mobilização de equipe especializada internacional e operação em prazo agressivo.',
          solution:
            'Execução EPC com equipes especializadas mobilizadas internacionalmente, automação de processo de moagem, cozimento e centrifugação, painéis elétricos e sistema de supervisão.',
          result:
            'Usina entregue dentro do cronograma com capacidade produtiva plena. Primeiro ciclo de safra operado com sistemas automatizados conforme contrato.',
          tags: ['EPC', 'Panamá', 'Açúcar', 'Internacional'],
          metric: { value: 'EPC', label: 'Panamá' },
        },
      ],
    },
    clients: {
      label: 'Clientes',
      headingLine1: 'EMPRESAS QUE',
      headingLine2: 'CONFIAM NA SAPY',
      description:
        'Grandes corporações industriais da América Latina, Europa e Oriente Médio confiam na SAPY para seus projetos mais críticos.',
      presenceLabel: 'Presença Internacional',
    },
    credentials: {
      label: 'Credenciais',
      headingLine1: 'AUTORIDADE',
      headingLine2: 'COMPROVADA',
      description:
        'Certificações internacionais em qualidade, meio ambiente, saúde e segurança — e parcerias tecnológicas com os maiores fabricantes do mundo.',
      certs: [
        {
          code: 'ISO 9001',
          name: 'ISO 9001:2015',
          description: 'Sistema de Gestão da Qualidade certificado no Grupo Savilcon (SMI, SVE, SVT), garantindo processos padronizados em todos os projetos.',
        },
        {
          code: 'ISO 14001',
          name: 'ISO 14001:2015',
          description: 'Gestão Ambiental certificada — compromisso com práticas sustentáveis em todas as operações industriais do grupo.',
        },
        {
          code: 'ISO 45001',
          name: 'ISO 45001:2018',
          description: 'Saúde e Segurança Ocupacional certificada, garantindo os mais altos padrões de segurança em obras e montagens industriais.',
        },
        {
          code: 'SIEMENS',
          name: 'Siemens Solution Partner',
          description: 'Parceiro certificado Siemens Industry — acesso direto a suporte técnico, treinamentos e as mais recentes soluções de automação.',
        },
        {
          code: 'ROCKWELL',
          name: 'Rockwell Bronze System Integrator',
          description: 'Integrador de sistemas certificado pela Rockwell Automation — expertise em Allen-Bradley PLCs, drives e soluções FactoryTalk.',
        },
        {
          code: 'ISO 50001',
          name: 'ISO 50001:2018',
          description: 'Gestão de Energia certificada — metodologia para otimização do consumo energético em projetos industriais.',
        },
      ],
      stats: [
        { value: '20+', label: 'Unidades Operacionais' },
        { value: '44+', label: 'Anos de Experiência' },
        { value: '1.480', label: 'Profissionais' },
        { value: '7+', label: 'Países' },
      ],
      ctaLabel: 'Conheça Nossa Metodologia',
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
          'Fundado na Espanha com décadas de história em engenharia industrial, o Grupo Savilcon possui 900 profissionais, 20+ unidades operacionais e fábricas em Espanha e Brasil (Sertãozinho), com certificações ISO 9001, 14001, 45001 e 50001.',
        highlights: [
          '900 profissionais especializados',
          'Fábrica de painéis elétricos em Sertãozinho/SP',
          'Certificações ISO 9001 · 14001 · 45001 · 50001',
          '20+ unidades operacionais na Espanha e Brasil',
        ],
        link: null,
        linkLabel: 'Saiba mais',
      },
      authomathika: {
        tag: 'Inovação Brasileira',
        origin: 'Brasil',
        description:
          'Empresa brasileira com 580 profissionais, especializada em automação industrial e transformação digital, com escritórios em Sertãozinho, Cali (Colômbia) e Santa Rita — e projetos em Brasil, Panamá, Angola, Uruguai, México e Paraguai.',
        highlights: [
          '580 profissionais no Brasil e América Latina',
          'Escritórios em Sertãozinho, Cali e Santa Rita',
          'Projetos em Brasil, Panamá, Angola, México',
          'Parceiro certificado Siemens e Rockwell Automation',
        ],
        linkLabel: 'Saiba mais',
      },
      bridge: 'Juntas formam a',
    },
    differentials: {
      label: 'Diferenciais',
      bgText: 'POR\nQUÊ',
      heading: 'ESCOLHER\nA SAPY?',
      description:
        'Porque entregamos mais do que automação — entregamos projetos EPC completos com padrão internacional, do primeiro desenho ao start-up da planta.',
      decorLabel: 'Nossos Diferenciais',
      items: [
        {
          title: 'Time Multidisciplinar',
          text: 'Engenheiros de controle, elétrica, mecânica e processo com expertise em projetos EPC e automação industrial complexos.',
        },
        {
          title: 'Fábrica Própria',
          text: 'Fábrica de painéis elétricos em Sertãozinho/SP com 1.920m² e laboratório de metrologia móvel — agilidade e controle de qualidade total.',
        },
        {
          title: 'Padrão Internacional',
          text: 'Certificações ISO 9001, 14001, 45001 e 50001. Parceiros Siemens e Rockwell Automation com metodologias europeias aplicadas no Brasil.',
        },
        {
          title: 'Mobilização Global',
          text: 'Capacidade comprovada de mobilização internacional — projetos executados em Brasil, Angola, México, Panamá, Uruguai e Paraguai.',
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
      location1: 'Sertãozinho, Brasil',
      location2: 'Sevilha, Espanha',
      location3: 'Assunção, Paraguai',
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
        'Joint venture ibero-brasileira especializada em engenharia, montagem eletromecânica e projetos EPC para a América Latina.',
      available: 'Atendimento disponível',
      navLabel: 'Navegação',
      contactLabel: 'Contato',
      location1: 'Sertãozinho, Brasil',
      location2: 'Sevilha, Espanha',
      location3: 'Assunção, Paraguai',
      rights: 'Todos os direitos reservados.',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Setores', href: '#setores' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Credenciais', href: '#credenciais' },
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
      sectors: 'Sectores',
      services: 'Servicios',
      cases: 'Proyectos',
      credentials: 'Credenciales',
      companies: 'Empresas',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      eyebrow: 'Ingeniería, Montaje y Proyectos EPC',
      line1: 'SOLUCIONES',
      line2: 'EN INGENIERÍA',
      line3: 'INDUSTRIAL',
      subtitle:
        'Uniendo experiencia ibérica e innovación brasileña para transformar procesos industriales con tecnología de vanguardia — del proyecto al comisionamiento.',
      cta1: 'Conoce Nuestros Proyectos',
      cta2: 'Habla con un Especialista',
      stats: [
        { value: '44+', label: 'Años de Experiencia Combinada' },
        { value: '1.480', label: 'Profesionales en los Grupos' },
        { value: '7+', label: 'Países de Operación' },
        { value: '2.000+', label: 'Días sin Accidentes' },
      ],
      downloadPdf: 'Descargar Presentación',
    },
    about: {
      label: 'Sobre SAPY',
      heading: 'UNA NUEVA\nREFERENCIA\nEN INGENIERÍA',
      headingOutline: 'REFERENCIA',
      p1: 'SAPY América Latina nace de la fusión entre la experiencia consolidada del Grupo Savilcon — referencia ibérica en ingeniería — y el dinamismo tecnológico de Authomathika, empresa brasileña de automatización y montaje industrial.',
      p2: 'Juntas, ofrecen soluciones completas en ingeniería, montaje electromecánico y proyectos EPC para atender las demandas más exigentes del mercado industrial latinoamericano.',
      pillars: [
        {
          number: '01',
          title: 'Experiencia Técnica',
          text: 'Equipo multidisciplinario con décadas en proyectos de automatización, montaje electromecánico e ingeniería EPC.',
        },
        {
          number: '02',
          title: 'Presencia Global',
          text: 'Joint venture ibero-brasileña con operaciones en 7+ países, oficinas permanentes en América Latina y Europa.',
        },
        {
          number: '03',
          title: 'Innovación Continua',
          text: 'Metodologías ágiles y tecnologías emergentes aplicadas a la realidad industrial de cada cliente, del proyecto al start-up.',
        },
      ],
    },
    sectors: {
      label: 'Sectores de Actuación',
      headingLine1: 'INDUSTRIAS',
      headingLine2: 'QUE ATENDEMOS',
      description:
        'Experiencia vertical profunda en los principales segmentos industriales de América Latina — con portafolio de proyectos reales en energía, industria, saneamiento y logística.',
      items: [
        {
          id: 'energy',
          name: 'Generación & Cogeneración de Energía',
          description:
            'Proyectos EPC completos para plantas solares, hidroeléctricas, termoeléctricas, biogás y cogeneración. Instrumentación, automatización, tableros eléctricos y comisionamiento.',
          services: ['Automatización Industrial', 'Ingeniería Eléctrica', 'Montaje EPC'],
          highlight: 'Solar · Hídrica · Biogás · Termoeléctrica',
        },
        {
          id: 'chemical',
          name: 'Química, Fertilizantes & Petroquímica',
          description:
            'Control de procesos continuos, sistemas batch, gestión de utilidades y montaje de plantas industriales completas para industrias químicas y de fertilizantes.',
          services: ['Automatización Industrial', 'Sistemas MES/SCADA', 'Montaje EPC'],
          highlight: 'ISA-88 · Batch · SIL · EPC',
        },
        {
          id: 'food',
          name: 'Alimentos, Bebidas & Sucroenegético',
          description:
            'Automatización de líneas de producción, plantas de etanol y azúcar, fábricas de jugos y piensos — trazabilidad, OEE y cumplimiento de normas alimentarias.',
          services: ['Automatización Industrial', 'Sistemas MES/SCADA', 'Industria 4.0 & IIoT'],
          highlight: 'Etanol · Azúcar · FSSC 22000 · OEE',
        },
        {
          id: 'mining',
          name: 'Minería & Siderurgia',
          description:
            'Supervisión de grandes plantas distribuidas, automatización de mineroductos y procesos de extracción, sistemas de gestión de energía y mantenimiento predictivo.',
          services: ['Sistemas MES/SCADA', 'Automatización Industrial', 'Mantenimiento & Soporte'],
          highlight: 'SCADA Distribuido · EPC · Grandes Plantas',
        },
        {
          id: 'water',
          name: 'Saneamiento & Tratamiento de Agua',
          description:
            'Plantas modulares compactas de potabilización, EDARs industriales, sistemas de deshidratación de lodos y automatización de redes de distribución.',
          services: ['Automatización Industrial', 'Sistemas MES/SCADA', 'Ingeniería Eléctrica'],
          highlight: 'EDAR · Potabilización · Modular',
        },
        {
          id: 'logistics',
          name: 'Logística, Puertos & Infraestructura',
          description:
            'Automatización de terminales portuarios, infraestructura industrial, sistemas de almacenamiento y proyectos de gran escala con movilización internacional.',
          services: ['Automatización Industrial', 'Ingeniería Eléctrica', 'Montaje EPC'],
          highlight: 'Puertos · Almacenaje · EPC Internacional',
        },
      ],
    },
    services: {
      label: 'Nuestros Servicios',
      headingLine1: 'LO QUE',
      headingLine2: 'ENTREGAMOS',
      description:
        'Desde el proyecto básico hasta el comisionamiento y start-up, ofrecemos soluciones EPC completas para cada fase del ciclo de vida de sus activos industriales.',
      cta: 'Solicitar una Propuesta',
      modal: {
        methodologyLabel: 'Metodología',
        scopeLabel: 'Alcance Típico',
        ctaLabel: 'Solicitar Propuesta',
        closeLabel: 'Cerrar',
        caseLabel: 'Caso Relacionado',
      },
      items: [
        {
          number: '01',
          title: 'Automatización Industrial',
          text: 'Diseño, programación e implementación de sistemas de control para procesos industriales continuos y discretos.',
          tags: ['PLCs', 'DCS', 'SCADA'],
          detail: {
            methodology:
              'Seguimos la metodología SDLC industrial: relevamiento de requisitos de proceso, diseño de arquitectura de control, programación y pruebas en FAT, instalación, puesta en marcha y SAT con documentación completa.',
            scope: [
              'Especificación funcional y detallada de sistemas de control',
              'Programación de PLCs Siemens (socio certificado) y Allen-Bradley (Rockwell Partner)',
              'Configuración de DCS (Emerson DeltaV, ABB 800xA, Honeywell)',
              'Configuración de redes industriales (PROFIBUS, PROFINET, EtherNet/IP)',
              'FAT, puesta en marcha y SAT',
              'Documentación técnica completa (As-Built)',
            ],
          },
        },
        {
          number: '02',
          title: 'Ingeniería Eléctrica & Tableros',
          text: 'Fabricación propia de tableros eléctricos en Sertãozinho/SP, dimensionamiento, instalación y comisionamiento de CCMs e infraestructura de potencia.',
          tags: ['Tableros', 'CCM', 'Fabricación Propia'],
          detail: {
            methodology:
              'Diseño eléctrico según normas IEC 60204 y estándares locales, con fabricación propia de tableros en nuestra fábrica de 1.920m² en Sertãozinho, desde la especificación hasta el comisionamiento.',
            scope: [
              'Fabricación de tableros de control y CCMs (fábrica propia en Sertãozinho/SP)',
              'Laboratorio de metrología móvil (144m²) para calibración en campo',
              'Diseño y detallado eléctrico completo',
              'Memoria descriptiva y lista de materiales',
              'Instalación, cableado y comisionamiento eléctrico',
              'Informe de conformidad normativa y documentación As-Built',
            ],
          },
        },
        {
          number: '03',
          title: 'Sistemas MES/SCADA',
          text: 'Desarrollo de interfaces HMI/SCADA e integración con sistemas MES para visibilidad total de la producción.',
          tags: ['MES', 'HMI', 'OPC-UA'],
          detail: {
            methodology:
              'Desarrollo iterativo con validación continua con el usuario final: arquitectura de datos, modelado de objetos, desarrollo de pantallas, integración vía OPC-UA/REST y pruebas de aceptación.',
            scope: [
              'Desarrollo de supervisorios SCADA (Ignition, WinCC, iFIX)',
              'Modelado y configuración de sistemas MES',
              'Integración SCADA-MES-ERP vía OPC-UA',
              'Desarrollo de dashboards de producción y OEE',
              'Configuración de alarmas e informes',
              'Capacitación de operadores',
            ],
          },
        },
        {
          number: '04',
          title: 'Montaje EPC',
          text: 'Ingeniería, Procurement y Construction — montaje electromecánico de plantas industriales completas, grandes paradas y start-up.',
          tags: ['EPC', 'Montaje', 'Start-up'],
          detail: {
            methodology:
              'Ejecución EPC completa con capacidad de movilización internacional: equipos multidisciplinarios (mecánica, eléctrica, instrumentación), gestión de obra y comisionamiento final.',
            scope: [
              'Montaje mecánico y electromecánico de plantas industriales',
              'Grandes paradas programadas (Mecánica, Eléctrica e Instrumentación)',
              'Montaje de plantas completas con start-up',
              'Piping, estructuras metálicas y obras civiles industriales',
              'Movilización de equipos internacionales',
              'Gestión de obra y control de calidad (ISO 9001)',
            ],
          },
        },
      ],
    },
    cases: {
      label: 'Proyectos',
      headingLine1: 'CONFÍAN EN',
      headingLine2: 'NUESTRO TRABAJO',
      description:
        'Proyectos reales ejecutados por el grupo en Brasil, Angola, México, Panamá y Europa — del proyecto básico al start-up de plantas completas.',
      filterAll: 'Todos',
      viewDetail: 'Solicitar Similar',
      challengeLabel: 'Proyecto',
      solutionLabel: 'Alcance Ejecutado',
      resultLabel: 'Resultado',
      items: [
        {
          id: 'case-01',
          sector: 'Fertilizantes',
          sectorId: 'chemical',
          title: 'Vale Mosaic — Complejo de Fertilizantes',
          challenge:
            'Complejo industrial de gran escala para producción de fertilizantes fosfatados. Demanda por infraestructura eléctrica, automatización de proceso e instrumentación de alta confiabilidad en ambiente crítico.',
          solution:
            'Suministro y montaje de tableros eléctricos de media y baja tensión, CCMs, instrumentación de proceso y sistemas de control. Automatización de transportadores, trituración y proceso de beneficiamiento mineral.',
          result:
            'Entrega completa dentro del plazo con todas las etapas de comisionamiento aprobadas. Sistemas operando conforme a especificaciones de proceso con alta disponibilidad.',
          tags: ['Tableros Eléctricos', 'CCM', 'Automatización', 'Instrumentación'],
          metric: { value: 'EPC', label: 'Alcance Completo' },
        },
        {
          id: 'case-02',
          sector: 'Energía Solar',
          sectorId: 'energy',
          title: 'UFV São José do Belmonte — 455 MW',
          challenge:
            'Una de las mayores plantas fotovoltaicas de Brasil, requiriendo infraestructura eléctrica a gran escala, sistemas de supervisión y comisionamiento en plazo agresivo.',
          solution:
            'Suministro de tableros eléctricos y CCMs fabricados en la unidad de Sertãozinho, sistema SCADA de supervisión de la generación, instrumentación y comisionamiento electromecánico de las subestaciones.',
          result:
            'Planta en operación comercial en el plazo establecido. 455 MW de capacidad instalada atendiendo a la red nacional de energía.',
          tags: ['Solar', 'SCADA', 'Tableros', 'Comisionamiento'],
          metric: { value: '455MW', label: 'Capacidad Instalada' },
        },
        {
          id: 'case-03',
          sector: 'Alimentos & Bebidas',
          sectorId: 'food',
          title: 'Citrus Juice — Fábrica de Jugos',
          challenge:
            'Fábrica de jugos cítricos con necesidad de automatización integrada de las líneas de extracción, pasteurización y envasado, con trazabilidad de producción y conformidad alimentaria.',
          solution:
            'Automatización completa de las líneas de proceso con PLCs Siemens, sistema SCADA de supervisión, instrumentación de proceso y integración con sistema de trazabilidad.',
          result:
            'Operación automatizada con control total de parámetros de proceso. Trazabilidad de lotes implementada. Conformidad con requisitos de calidad alimentaria.',
          tags: ['Automatización', 'SCADA', 'Siemens', 'Trazabilidad'],
          metric: { value: 'EPC', label: 'Automatización Completa' },
        },
        {
          id: 'case-04',
          sector: 'Sucroenegético',
          sectorId: 'food',
          title: 'Biocom — Planta Sucroenergética (Angola)',
          challenge:
            'Planta sucroenergética de gran escala en Angola demandando soluciones EPC completas con movilización internacional de equipos, dentro de cronograma exigente y condiciones locales desafiantes.',
          solution:
            'Ejecución EPC con equipos movilizados internacionalmente: montaje electromecánico, suministro e instalación de tableros eléctricos, automatización de proceso de molienda y generación de energía, instrumentación y comisionamiento.',
          result:
            'Planta entregada y comisionada con capacidad de producción de azúcar y cogeneración de energía. Operación iniciada conforme al cronograma contractual.',
          tags: ['EPC', 'Angola', 'Montaje', 'Sucroenegético'],
          metric: { value: 'EPC', label: 'Internacional' },
        },
        {
          id: 'case-05',
          sector: 'Procesamiento de Soja',
          sectorId: 'food',
          title: 'ADM — Complejo de Procesamiento de Soja',
          challenge:
            'Complejo de procesamiento de granos a gran escala requiriendo automatización de líneas de molienda, extracción y despacho, con integración entre sistemas de control y gestión de utilidades.',
          solution:
            'Automatización de líneas de proceso con PLCs y sistema SCADA, instrumentación de proceso y integración con sistema MES para trazabilidad de lotes y control de OEE.',
          result:
            'Operación integrada con visibilidad total del proceso productivo. Mejora comprobada en OEE y conformidad con requisitos de calidad alimentaria.',
          tags: ['Automatización', 'SCADA', 'MES', 'Soja'],
          metric: { value: 'MES', label: 'Trazabilidad Completa' },
        },
        {
          id: 'case-06',
          sector: 'Saneamiento',
          sectorId: 'water',
          title: 'GS Inima — Sistema de Saneamiento',
          challenge:
            'Proyecto de saneamiento industrial requiriendo automatización de plantas de tratamiento de agua y aguas residuales, con monitoreo remoto y conformidad con legislación ambiental.',
          solution:
            'Implementación de sistema SCADA para supervisión remota de las ETPs, automatización de dosificación de químicos, monitoreo de calidad del agua y generación de informes ambientales.',
          result:
            'Sistema de saneamiento automatizado con monitoreo 24/7, conformidad ambiental comprobada y reducción de costos operativos.',
          tags: ['SCADA', 'ETP', 'Monitoreo Ambiental', 'Saneamiento'],
          metric: { value: 'EPC', label: 'Saneamiento Integrado' },
        },
        {
          id: 'case-07',
          sector: 'Minería',
          sectorId: 'mining',
          title: 'MATSA — Minería y Tratamiento de Agua (España)',
          challenge:
            'Operación minera en España requiriendo sistema de tratamiento de agua de proceso y gestión ambiental, con automatización de plantas modulares y control de efluentes.',
          solution:
            'Diseño e implementación de plantas modulares de tratamiento de agua para minería, automatización de procesos de filtración y control de calidad de efluentes con supervisión SCADA.',
          result:
            'Conformidad ambiental garantizada con sistema automatizado de tratamiento. Plantas modulares operando dentro de las especificaciones regulatorias europeas.',
          tags: ['Minería', 'Tratamiento de Agua', 'SCADA', 'España'],
          metric: { value: 'EPC', label: 'Europa' },
        },
        {
          id: 'case-08',
          sector: 'Sucroenegético',
          sectorId: 'food',
          title: 'CADASA — Ingenio Azucarero (Panamá)',
          challenge:
            'Ingenio de producción de azúcar en Panamá requiriendo automatización completa del proceso con movilización de equipo especializado internacional y operación en plazo agresivo.',
          solution:
            'Ejecución EPC con equipos especializados movilizados internacionalmente, automatización de proceso de molienda, cocción y centrifugación, tableros eléctricos y sistema de supervisión.',
          result:
            'Ingenio entregado dentro del cronograma con plena capacidad productiva. Primera zafra operada con sistemas automatizados conforme al contrato.',
          tags: ['EPC', 'Panamá', 'Azúcar', 'Internacional'],
          metric: { value: 'EPC', label: 'Panamá' },
        },
      ],
    },
    clients: {
      label: 'Clientes',
      headingLine1: 'EMPRESAS QUE',
      headingLine2: 'CONFÍAN EN SAPY',
      description:
        'Grandes corporaciones industriales de América Latina, Europa y Oriente Medio confían en SAPY para sus proyectos más críticos.',
      presenceLabel: 'Presencia Internacional',
    },
    credentials: {
      label: 'Credenciales',
      headingLine1: 'AUTORIDAD',
      headingLine2: 'COMPROBADA',
      description:
        'Certificaciones internacionales en calidad, medio ambiente, salud y seguridad — y alianzas tecnológicas con los mayores fabricantes del mundo.',
      certs: [
        {
          code: 'ISO 9001',
          name: 'ISO 9001:2015',
          description: 'Sistema de Gestión de Calidad certificado en el Grupo Savilcon (SMI, SVE, SVT), garantizando procesos estandarizados en todos los proyectos.',
        },
        {
          code: 'ISO 14001',
          name: 'ISO 14001:2015',
          description: 'Gestión Ambiental certificada — compromiso con prácticas sostenibles en todas las operaciones industriales del grupo.',
        },
        {
          code: 'ISO 45001',
          name: 'ISO 45001:2018',
          description: 'Salud y Seguridad Ocupacional certificada, garantizando los más altos estándares de seguridad en obras y montajes industriales.',
        },
        {
          code: 'SIEMENS',
          name: 'Siemens Solution Partner',
          description: 'Socio certificado Siemens Industry — acceso directo a soporte técnico, capacitaciones y las más recientes soluciones de automatización.',
        },
        {
          code: 'ROCKWELL',
          name: 'Rockwell Bronze System Integrator',
          description: 'Integrador de sistemas certificado por Rockwell Automation — expertise en Allen-Bradley PLCs, drives y soluciones FactoryTalk.',
        },
        {
          code: 'ISO 50001',
          name: 'ISO 50001:2018',
          description: 'Gestión de Energía certificada — metodología para optimización del consumo energético en proyectos industriales.',
        },
      ],
      stats: [
        { value: '20+', label: 'Unidades Operacionales' },
        { value: '44+', label: 'Años de Experiencia' },
        { value: '1.480', label: 'Profesionales' },
        { value: '7+', label: 'Países' },
      ],
      ctaLabel: 'Conoce Nuestra Metodología',
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
          'Fundado en España con décadas de historia en ingeniería industrial, el Grupo Savilcon cuenta con 900 profesionales, 20+ unidades operacionales y fábricas en España y Brasil (Sertãozinho), con certificaciones ISO 9001, 14001, 45001 y 50001.',
        highlights: [
          '900 profesionales especializados',
          'Fábrica de tableros eléctricos en Sertãozinho/SP',
          'Certificaciones ISO 9001 · 14001 · 45001 · 50001',
          '20+ unidades operacionales en España y Brasil',
        ],
        link: null,
        linkLabel: 'Saber más',
      },
      authomathika: {
        tag: 'Innovación Brasileña',
        origin: 'Brasil',
        description:
          'Empresa brasileña con 580 profesionales, especializada en automatización industrial y transformación digital, con oficinas en Sertãozinho, Cali (Colombia) y Santa Rita — y proyectos en Brasil, Panamá, Angola, Uruguay, México y Paraguay.',
        highlights: [
          '580 profesionales en Brasil y América Latina',
          'Oficinas en Sertãozinho, Cali y Santa Rita',
          'Proyectos en Brasil, Panamá, Angola, México',
          'Socio certificado Siemens y Rockwell Automation',
        ],
        linkLabel: 'Saber más',
      },
      bridge: 'Juntas forman la',
    },
    differentials: {
      label: 'Diferenciales',
      bgText: '¿POR\nQUÉ',
      heading: 'ELEGIR\nSAPY?',
      description:
        'Porque entregamos más que automatización — entregamos proyectos EPC completos con estándar internacional, desde el primer diseño hasta el start-up de la planta.',
      decorLabel: 'Nuestros Diferenciales',
      items: [
        {
          title: 'Equipo Multidisciplinario',
          text: 'Ingenieros de control, eléctrica, mecánica y proceso con expertise en proyectos EPC y automatización industrial compleja.',
        },
        {
          title: 'Fábrica Propia',
          text: 'Fábrica de tableros eléctricos en Sertãozinho/SP con 1.920m² y laboratorio de metrología móvil — agilidad y control de calidad total.',
        },
        {
          title: 'Estándar Internacional',
          text: 'Certificaciones ISO 9001, 14001, 45001 y 50001. Socios Siemens y Rockwell Automation con metodologías europeas aplicadas en LATAM.',
        },
        {
          title: 'Movilización Global',
          text: 'Capacidad comprobada de movilización internacional — proyectos ejecutados en Brasil, Angola, México, Panamá, Uruguay y Paraguay.',
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
      location1: 'Sertãozinho, Brasil',
      location2: 'Sevilla, España',
      location3: 'Asunción, Paraguay',
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
        'Joint venture ibero-brasileña especializada en ingeniería, montaje electromecánico y proyectos EPC para América Latina.',
      available: 'Atención disponible',
      navLabel: 'Navegación',
      contactLabel: 'Contacto',
      location1: 'Sertãozinho, Brasil',
      location2: 'Sevilla, España',
      location3: 'Asunción, Paraguay',
      rights: 'Todos los derechos reservados.',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Sectores', href: '#setores' },
        { label: 'Servicios', href: '#servicos' },
        { label: 'Proyectos', href: '#projetos' },
        { label: 'Credenciales', href: '#credenciais' },
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
      sectors: 'Sectors',
      services: 'Services',
      cases: 'Projects',
      credentials: 'Credentials',
      companies: 'Companies',
      contact: 'Contact',
      cta: 'Talk to Us',
    },
    hero: {
      eyebrow: 'Engineering, Assembly & EPC Projects',
      line1: 'INDUSTRIAL',
      line2: 'ENGINEERING',
      line3: 'SOLUTIONS',
      subtitle:
        'Combining Iberian expertise and Brazilian innovation to transform industrial processes with cutting-edge technology — from engineering to commissioning.',
      cta1: 'Explore Our Projects',
      cta2: 'Talk to a Specialist',
      stats: [
        { value: '44+', label: 'Years Combined Experience' },
        { value: '1,480', label: 'Professionals in the Groups' },
        { value: '7+', label: 'Countries of Operation' },
        { value: '2,000+', label: 'Days Without Incidents' },
      ],
      downloadPdf: 'Download Presentation',
    },
    about: {
      label: 'About SAPY',
      heading: 'A NEW\nREFERENCE\nIN ENGINEERING',
      headingOutline: 'REFERENCE',
      p1: 'SAPY América Latina is born from the merger of the consolidated experience of Grupo Savilcon — an Iberian reference in engineering — and the technological dynamism of Authomathika, a Brazilian industrial automation and assembly company.',
      p2: 'Together, they offer complete solutions in engineering, electromechanical assembly and EPC projects to meet the most demanding requirements of the Latin American industrial market.',
      pillars: [
        {
          number: '01',
          title: 'Technical Expertise',
          text: 'Multidisciplinary team with decades in automation projects, electromechanical assembly and EPC engineering.',
        },
        {
          number: '02',
          title: 'Global Presence',
          text: 'Ibero-Brazilian joint venture operating in 7+ countries, with permanent offices in Latin America and Europe.',
        },
        {
          number: '03',
          title: 'Continuous Innovation',
          text: 'Agile methodologies and emerging technologies applied to each client\'s industrial reality, from project to start-up.',
        },
      ],
    },
    sectors: {
      label: 'Industry Sectors',
      headingLine1: 'INDUSTRIES',
      headingLine2: 'WE SERVE',
      description:
        'Deep vertical expertise in the main industrial segments of Latin America — with a portfolio of real projects in energy, industry, water treatment and logistics.',
      items: [
        {
          id: 'energy',
          name: 'Energy Generation & Cogeneration',
          description:
            'Complete EPC projects for solar, hydroelectric, thermoelectric, biogas and cogeneration plants. Instrumentation, automation, electrical panels and commissioning.',
          services: ['Industrial Automation', 'Electrical Engineering', 'EPC Assembly'],
          highlight: 'Solar · Hydro · Biogas · Thermoelectric',
        },
        {
          id: 'chemical',
          name: 'Chemical, Fertilizers & Petrochemical',
          description:
            'Continuous process control, batch systems, utility management and full industrial plant assembly for chemical and fertilizer industries.',
          services: ['Industrial Automation', 'MES/SCADA Systems', 'EPC Assembly'],
          highlight: 'ISA-88 · Batch · SIL · EPC',
        },
        {
          id: 'food',
          name: 'Food, Beverage & Agroenergy',
          description:
            'Production line automation, ethanol and sugar plants, juice and feed factories — traceability, OEE and food standards compliance.',
          services: ['Industrial Automation', 'MES/SCADA Systems', 'Industry 4.0 & IIoT'],
          highlight: 'Ethanol · Sugar · FSSC 22000 · OEE',
        },
        {
          id: 'mining',
          name: 'Mining & Steel',
          description:
            'Supervision of large distributed plants, pipeline automation, extraction process systems, energy management and predictive maintenance.',
          services: ['MES/SCADA Systems', 'Industrial Automation', 'Maintenance & Support'],
          highlight: 'Distributed SCADA · EPC · Large Plants',
        },
        {
          id: 'water',
          name: 'Water Treatment & Sanitation',
          description:
            'Compact modular water treatment plants, industrial WWTPs, sludge dewatering systems and distribution network automation.',
          services: ['Industrial Automation', 'MES/SCADA Systems', 'Electrical Engineering'],
          highlight: 'WWTP · Potabilization · Modular',
        },
        {
          id: 'logistics',
          name: 'Logistics, Ports & Infrastructure',
          description:
            'Port terminal automation, industrial infrastructure, storage systems and large-scale projects with international mobilization.',
          services: ['Industrial Automation', 'Electrical Engineering', 'EPC Assembly'],
          highlight: 'Ports · Storage · International EPC',
        },
      ],
    },
    services: {
      label: 'Our Services',
      headingLine1: 'WHAT WE',
      headingLine2: 'DELIVER',
      description:
        'From basic engineering to commissioning and start-up, we offer complete EPC solutions for every phase of your industrial assets lifecycle.',
      cta: 'Request a Proposal',
      modal: {
        methodologyLabel: 'Methodology',
        scopeLabel: 'Typical Scope',
        ctaLabel: 'Request a Proposal',
        closeLabel: 'Close',
        caseLabel: 'Related Case',
      },
      items: [
        {
          number: '01',
          title: 'Industrial Automation',
          text: 'Design, programming and deployment of control systems for continuous and discrete industrial processes.',
          tags: ['PLCs', 'DCS', 'SCADA'],
          detail: {
            methodology:
              'We follow the industrial SDLC methodology: process requirements gathering, control architecture design, programming and FAT testing, installation, commissioning and SAT with full documentation.',
            scope: [
              'Functional and detailed specification of control systems',
              'PLC programming — Siemens (certified partner) and Allen-Bradley (Rockwell Partner)',
              'DCS configuration (Emerson DeltaV, ABB 800xA, Honeywell)',
              'Industrial network configuration (PROFIBUS, PROFINET, EtherNet/IP)',
              'FAT, commissioning and SAT',
              'Complete technical documentation (As-Built)',
            ],
          },
        },
        {
          number: '02',
          title: 'Electrical Engineering & Panels',
          text: 'In-house panel manufacturing in Sertãozinho/SP, sizing, installation and commissioning of MCCs and power infrastructure.',
          tags: ['Panels', 'MCC', 'In-House Manufacturing'],
          detail: {
            methodology:
              'Electrical design per IEC 60204 and local standards, with in-house panel manufacturing at our 1,920m² facility in Sertãozinho, from specification to commissioning.',
            scope: [
              'In-house manufacturing of control panels and MCCs (Sertãozinho/SP factory)',
              'Mobile metrology laboratory (144m²) for field calibration',
              'Complete electrical design and detailing',
              'Technical specifications and bill of materials',
              'Installation, wiring and electrical commissioning',
              'Regulatory compliance report and As-Built documentation',
            ],
          },
        },
        {
          number: '03',
          title: 'MES/SCADA Systems',
          text: 'Development of HMI/SCADA interfaces and MES integration for full production visibility.',
          tags: ['MES', 'HMI', 'OPC-UA'],
          detail: {
            methodology:
              'Iterative development with continuous end-user validation: data architecture, object modeling, screen development, OPC-UA/REST integration and acceptance testing.',
            scope: [
              'SCADA supervisory development (Ignition, WinCC, iFIX)',
              'MES system modeling and configuration',
              'SCADA-MES-ERP integration via OPC-UA',
              'Production and OEE dashboard development',
              'Alarm and reporting configuration',
              'Operator training',
            ],
          },
        },
        {
          number: '04',
          title: 'EPC Assembly',
          text: 'Engineering, Procurement and Construction — electromechanical assembly of complete industrial plants, major turnarounds and start-up.',
          tags: ['EPC', 'Assembly', 'Start-up'],
          detail: {
            methodology:
              'Full EPC execution with international mobilization capability: multidisciplinary teams (mechanical, electrical, instrumentation), construction management and final commissioning.',
            scope: [
              'Mechanical and electromechanical assembly of industrial plants',
              'Scheduled major turnarounds (Mechanical, Electrical and Instrumentation)',
              'Complete plant assembly with start-up',
              'Piping, steel structures and industrial civil works',
              'International team mobilization',
              'Construction management and quality control (ISO 9001)',
            ],
          },
        },
      ],
    },
    cases: {
      label: 'Projects',
      headingLine1: 'THEY TRUST',
      headingLine2: 'OUR WORK',
      description:
        'Real projects executed by the group in Brazil, Angola, Mexico, Panama and Europe — from basic engineering to complete plant start-up.',
      filterAll: 'All',
      viewDetail: 'Request Similar',
      challengeLabel: 'Project',
      solutionLabel: 'Scope Executed',
      resultLabel: 'Result',
      items: [
        {
          id: 'case-01',
          sector: 'Fertilizers',
          sectorId: 'chemical',
          title: 'Vale Mosaic — Fertilizer Complex',
          challenge:
            'Large-scale industrial complex for phosphate fertilizer production. Requiring reliable electrical infrastructure, process automation and instrumentation in a critical environment.',
          solution:
            'Supply and assembly of medium and low voltage electrical panels, MCCs, process instrumentation and control systems. Automation of conveyor systems, crushing and mineral processing.',
          result:
            'Full delivery on schedule with all commissioning stages approved. Systems operating according to process specifications with high availability.',
          tags: ['Electrical Panels', 'MCC', 'Automation', 'Instrumentation'],
          metric: { value: 'EPC', label: 'Full Scope' },
        },
        {
          id: 'case-02',
          sector: 'Solar Energy',
          sectorId: 'energy',
          title: 'UFV São José do Belmonte — 455 MW',
          challenge:
            'One of Brazil\'s largest photovoltaic plants, requiring large-scale electrical infrastructure, supervisory systems and commissioning on an aggressive timeline.',
          solution:
            'Supply of electrical panels and MCCs manufactured at the Sertãozinho facility, generation SCADA supervisory system, instrumentation and electromechanical commissioning of substations.',
          result:
            'Plant in commercial operation on the established deadline. 455 MW of installed capacity feeding the national energy grid.',
          tags: ['Solar', 'SCADA', 'Panels', 'Commissioning'],
          metric: { value: '455MW', label: 'Installed Capacity' },
        },
        {
          id: 'case-03',
          sector: 'Food & Beverage',
          sectorId: 'food',
          title: 'Citrus Juice — Juice Factory',
          challenge:
            'Citrus juice factory requiring integrated automation of extraction, pasteurization and bottling lines, with production traceability and food compliance.',
          solution:
            'Complete process line automation with Siemens PLCs, SCADA supervisory system, process instrumentation (temperature, flow, pressure) and traceability system integration.',
          result:
            'Automated operation with full process parameter control. Batch traceability implemented. Compliance with food quality requirements.',
          tags: ['Automation', 'SCADA', 'Siemens', 'Traceability'],
          metric: { value: 'EPC', label: 'Full Automation' },
        },
        {
          id: 'case-04',
          sector: 'Agroenergy',
          sectorId: 'food',
          title: 'Biocom — Agroenergy Plant (Angola)',
          challenge:
            'Large-scale agroenergy plant in Angola requiring complete EPC solutions with international team mobilization, within a demanding schedule and challenging local conditions.',
          solution:
            'EPC execution with internationally mobilized teams: electromechanical assembly, supply and installation of electrical panels, milling process and energy generation automation, instrumentation and commissioning.',
          result:
            'Plant delivered and commissioned with sugar production and energy cogeneration capacity. Operations started in accordance with contractual schedule.',
          tags: ['EPC', 'Angola', 'Assembly', 'Agroenergy'],
          metric: { value: 'EPC', label: 'International' },
        },
        {
          id: 'case-05',
          sector: 'Soy Processing',
          sectorId: 'food',
          title: 'ADM — Soy Processing Complex',
          challenge:
            'Large-scale grain processing complex requiring automation of milling, extraction and dispatch lines, with integration between control systems and utilities management.',
          solution:
            'Process line automation with PLCs and SCADA system, process instrumentation and MES integration for batch traceability and OEE control.',
          result:
            'Integrated operation with full process visibility. Proven OEE improvement and compliance with food quality requirements.',
          tags: ['Automation', 'SCADA', 'MES', 'Soy'],
          metric: { value: 'MES', label: 'Full Traceability' },
        },
        {
          id: 'case-06',
          sector: 'Water Treatment',
          sectorId: 'water',
          title: 'GS Inima — Sanitation System',
          challenge:
            'Industrial sanitation project requiring automation of water and wastewater treatment plants, with remote monitoring and environmental regulatory compliance.',
          solution:
            'SCADA system deployment for remote WTP supervision, chemical dosing automation, water quality monitoring and environmental reporting.',
          result:
            'Automated sanitation system with 24/7 monitoring, proven environmental compliance and reduced operational costs.',
          tags: ['SCADA', 'WTP', 'Environmental Monitoring', 'Sanitation'],
          metric: { value: 'EPC', label: 'Integrated Sanitation' },
        },
        {
          id: 'case-07',
          sector: 'Mining',
          sectorId: 'mining',
          title: 'MATSA — Mining & Water Treatment (Spain)',
          challenge:
            'Mining operation in Spain requiring process water treatment system and environmental management, with modular plant automation and effluent control.',
          solution:
            'Design and deployment of modular water treatment plants for mining, filtration process automation and effluent quality control with SCADA supervision.',
          result:
            'Environmental compliance met with automated treatment system. Modular plants operating within European regulatory specifications.',
          tags: ['Mining', 'Water Treatment', 'SCADA', 'Spain'],
          metric: { value: 'EPC', label: 'Europe' },
        },
        {
          id: 'case-08',
          sector: 'Agroenergy',
          sectorId: 'food',
          title: 'CADASA — Sugar Mill (Panama)',
          challenge:
            'Sugar production mill in Panama requiring full process automation with international specialist team mobilization and delivery on an aggressive timeline.',
          solution:
            'EPC execution with internationally mobilized specialist teams, milling, cooking and centrifugation process automation, electrical panels and supervisory system.',
          result:
            'Mill delivered on schedule with full production capacity. First harvest season operated with automated systems per contract.',
          tags: ['EPC', 'Panama', 'Sugar', 'International'],
          metric: { value: 'EPC', label: 'Panama' },
        },
      ],
    },
    clients: {
      label: 'Clients',
      headingLine1: 'COMPANIES THAT',
      headingLine2: 'TRUST SAPY',
      description:
        'Major industrial corporations from Latin America, Europe and the Middle East trust SAPY for their most critical projects.',
      presenceLabel: 'International Presence',
    },
    credentials: {
      label: 'Credentials',
      headingLine1: 'PROVEN',
      headingLine2: 'AUTHORITY',
      description:
        'International certifications in quality, environment, health and safety — and technology partnerships with the world\'s leading manufacturers.',
      certs: [
        {
          code: 'ISO 9001',
          name: 'ISO 9001:2015',
          description: 'Certified Quality Management System across Grupo Savilcon (SMI, SVE, SVT), ensuring standardized processes on every project.',
        },
        {
          code: 'ISO 14001',
          name: 'ISO 14001:2015',
          description: 'Certified Environmental Management — commitment to sustainable practices across all group industrial operations.',
        },
        {
          code: 'ISO 45001',
          name: 'ISO 45001:2018',
          description: 'Certified Occupational Health & Safety — ensuring the highest safety standards on industrial construction and assembly sites.',
        },
        {
          code: 'SIEMENS',
          name: 'Siemens Solution Partner',
          description: 'Certified Siemens Industry partner — direct access to technical support, training and the latest automation solutions.',
        },
        {
          code: 'ROCKWELL',
          name: 'Rockwell Bronze System Integrator',
          description: 'Certified system integrator for Rockwell Automation — expertise in Allen-Bradley PLCs, drives and FactoryTalk solutions.',
        },
        {
          code: 'ISO 50001',
          name: 'ISO 50001:2018',
          description: 'Certified Energy Management — methodology for optimizing energy consumption across industrial projects.',
        },
      ],
      stats: [
        { value: '20+', label: 'Operational Units' },
        { value: '44+', label: 'Years of Experience' },
        { value: '1,480', label: 'Professionals' },
        { value: '7+', label: 'Countries' },
      ],
      ctaLabel: 'Learn About Our Methodology',
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
          'Founded in Spain with decades of history in industrial engineering, Grupo Savilcon has 900 professionals, 20+ operational units and factories in Spain and Brazil (Sertãozinho), with ISO 9001, 14001, 45001 and 50001 certifications.',
        highlights: [
          '900 specialized professionals',
          'Electrical panel factory in Sertãozinho/SP',
          'ISO 9001 · 14001 · 45001 · 50001 certified',
          '20+ operational units in Spain and Brazil',
        ],
        link: null,
        linkLabel: 'Learn more',
      },
      authomathika: {
        tag: 'Brazilian Innovation',
        origin: 'Brazil',
        description:
          'Brazilian company with 580 professionals, specialized in industrial automation and digital transformation, with offices in Sertãozinho, Cali (Colombia) and Santa Rita — and projects in Brazil, Panama, Angola, Uruguay, Mexico and Paraguay.',
        highlights: [
          '580 professionals in Brazil and Latin America',
          'Offices in Sertãozinho, Cali and Santa Rita',
          'Projects in Brazil, Panama, Angola, Mexico',
          'Certified Siemens and Rockwell Automation partner',
        ],
        linkLabel: 'Learn more',
      },
      bridge: 'Together they form',
    },
    differentials: {
      label: 'Differentials',
      bgText: 'WHY\nCHOOSE',
      heading: 'CHOOSE\nSAPY?',
      description:
        'Because we deliver more than automation — we deliver complete EPC projects with international standards, from the first drawing to plant start-up.',
      decorLabel: 'Our Differentials',
      items: [
        {
          title: 'Multidisciplinary Team',
          text: 'Control, electrical, mechanical and process engineers with expertise in EPC projects and complex industrial automation.',
        },
        {
          title: 'In-House Factory',
          text: 'Electrical panel factory in Sertãozinho/SP with 1,920m² and mobile metrology lab — full agility and quality control.',
        },
        {
          title: 'International Standards',
          text: 'ISO 9001, 14001, 45001 and 50001 certifications. Siemens and Rockwell Automation partners with European methodologies applied in LATAM.',
        },
        {
          title: 'Global Mobilization',
          text: 'Proven international mobilization capability — projects executed in Brazil, Angola, Mexico, Panama, Uruguay and Paraguay.',
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
      location1: 'Sertãozinho, Brazil',
      location2: 'Seville, Spain',
      location3: 'Asunción, Paraguay',
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
        'Ibero-Brazilian joint venture specialized in engineering, electromechanical assembly and EPC projects for Latin America.',
      available: 'Support available',
      navLabel: 'Navigation',
      contactLabel: 'Contact',
      location1: 'Sertãozinho, Brazil',
      location2: 'Seville, Spain',
      location3: 'Asunción, Paraguay',
      rights: 'All rights reserved.',
      links: [
        { label: 'About', href: '#sobre' },
        { label: 'Sectors', href: '#setores' },
        { label: 'Services', href: '#servicos' },
        { label: 'Projects', href: '#projetos' },
        { label: 'Credentials', href: '#credenciais' },
        { label: 'Contact', href: '#contato' },
      ],
    },
    floating: {
      tooltip: 'Chat on WhatsApp',
      ariaLabel: 'Contact via WhatsApp',
    },
  },
}
