import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import imgValeMosaic from '../images/projetos/vale-mosaic.jpg'
import imgCitrusJuice from '../images/projetos/citrus-juice.jpg'
import imgBiocom from '../images/projetos/biocom.jpg'
import imgAdm from '../images/projetos/adm.jpg'
import imgGsInima from '../images/projetos/gs-inima.jpg'
import imgMatsa from '../images/projetos/matsa.jpg'
import imgCadasa from '../images/projetos/cadasa.jpg'
import imgCostaRica from '../images/projetos/usina-costa-rica.webp'
import imgRioVermelho from '../images/projetos/rio-vermelho.webp'
import imgValeCarajas from '../images/projetos/vale-carajas.webp'
import imgUfvBelmonte from '../images/projetos/ufv-belmonte.webp'
import imgPedraBuriti from '../images/projetos/pedra-buriti.webp'
import imgFerrari from '../images/projetos/ferrari.webp'
import imgBungeMoema from '../images/projetos/bunge-moema.webp'
import imgSantaHelena from '../images/projetos/santa-helena.webp'
import imgBahiaEtanol from '../images/projetos/bahia-etanol.webp'
import imgUmoe from '../images/projetos/umoe.webp'
import imgSesamm from '../images/projetos/sesamm.webp'
import imgIndemil from '../images/projetos/indemil.webp'
import imgAltoTaquari from '../images/projetos/atvos-alto-taquari.webp'
import imgRioClaro from '../images/projetos/atvos-rio-claro.webp'
import imgMorroVermelho from '../images/projetos/atvos-morro-vermelho.webp'
import imgAlcidia from '../images/projetos/atvos-alcidia.webp'
import imgAguaEmendada from '../images/projetos/atvos-agua-emendada.webp'
import imgSantaLuzia from '../images/projetos/atvos-santa-luzia.webp'
import imgEldorado from '../images/projetos/atvos-eldorado.webp'
import imgConquista from '../images/projetos/atvos-conquista.webp'

type Project = {
  id: string
  title: string
  sector: string
  sectorId: string
  location: string
  flag: string
  description: string
  tags: string[]
  image: string
  scope?: string
  result?: string
}

const projects: Project[] = [
  {
    id: 'usina-costa-rica',
    title: 'Usina Costa Rica — Projeto Turnkey Completo',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield completa de usina sucroenergética em contrato EPC único, integrando automação, elétrica e montagem eletromecânica.',
    tags: ['Greenfield', 'Turnkey', 'EPC', 'SCADA'],
    image: imgCostaRica,
    scope: 'Responsabilidade EPC integral: engenharia de projeto, suprimentos, montagem eletromecânica, automação completa com SCADA e comissionamento.',
    result: 'Planta entregue em 18 meses dentro do prazo como turnkey completo. Contrato único eliminou interfaces entre fornecedores e garantiu rastreabilidade total.',
  },
  {
    id: 'rio-vermelho',
    title: 'Rio Vermelho — Fábrica de Açúcar Turnkey',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Implantação completa de fábrica de açúcar greenfield com coordenação precisa entre múltiplas disciplinas de engenharia.',
    tags: ['Greenfield', 'EPC', 'SCADA', 'CCM'],
    image: imgRioVermelho,
    scope: 'Automação de processo (CLP e SCADA), montagem elétrica (CCMs e QGBTs), montagem mecânica e comissionamento com supervisão técnica até a estabilização da produção.',
    result: 'Fábrica completa entregue em 14 meses. Produção atingida já no primeiro ciclo operacional.',
  },
  {
    id: 'vale-carajas',
    title: 'Vale Carajás — Implantação de Eletrocentro',
    sector: 'Mineração',
    sectorId: 'mineracao',
    location: 'Carajás, Pará, BR',
    flag: '🇧🇷',
    description: 'Implantação de centro de controle elétrico em operação de mineração remota, com logística desafiadora e padrões rigorosos de segurança.',
    tags: ['Mineração', 'CCM', 'NR-10', 'NR-35'],
    image: imgValeCarajas,
    scope: 'Engenharia elétrica e instalação, integração de sistemas de automação e montagem eletromecânica. Mobilização de equipes certificadas NR-10/NR-35 com logística independente.',
    result: 'Eletrocentro completo entregue. Zero acidentes durante a construção. Documentação em conformidade com padrões Vale.',
  },
  {
    id: 'ufv-belmonte',
    title: 'UFV Belmonte I & II — 455 MW Solar',
    sector: 'Energias Renováveis',
    sectorId: 'energia',
    location: 'Bahia, BR',
    flag: '🇧🇷',
    description: 'Montagem elétrica e mecânica de um dos maiores complexos solares do Brasil, em parceria com o Grupo Cobra (Espanha).',
    tags: ['Solar', '455 MW', 'EPC', 'Subestação'],
    image: imgUfvBelmonte,
    scope: 'Instalação de sistemas de rastreamento solar, módulos fotovoltaicos, cabeamento DC/CA, inversores string e centrais, e infraestrutura de subestação com controle de qualidade e rastreabilidade.',
    result: '455 MW de capacidade instalada. Zero incidentes graves de segurança. Entrega dentro do cronograma com garantias de desempenho por 27+ anos.',
  },
  {
    id: 'pedra-buriti',
    title: 'Pedra Buriti — Caldeira e Cogeração Turnkey',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Expansão greenfield de capacidade de cogeração com novo sistema de caldeira, executado em paralelo com a planta em operação.',
    tags: ['Cogeração', 'Caldeira', 'Turnkey', 'CLP'],
    image: imgPedraBuriti,
    scope: 'Montagem completa de caldeira e sistema de cogeração, infraestrutura elétrica, automação com CLPs para controle de combustão e vapor, instrumentação de campo e comissionamento.',
    result: 'Sistema caldeira + cogeração entregue em 12 meses. Zero impacto operacional durante a instalação. Zero acidentes.',
  },
  {
    id: 'ferrari',
    title: 'Usina Ferrari — Eletrificação de Moenda',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Revamp completo para modernizar a moagem com eletrificação total, substituindo acionamentos mecânicos na entressafra.',
    tags: ['Revamp', 'Acionamentos', 'CCM', 'CLP'],
    image: imgFerrari,
    scope: 'Eletrificação completa da moenda com substituição de acionamentos, instalação de novos CCMs, automação com CLPs para controle de velocidade e torque, instrumentação de processo — executado integralmente na entressafra.',
    result: 'Eletrificação completa entregue dentro da janela de ~90 dias. Ganho energético significativo e melhora no controle de processo.',
  },
  {
    id: 'bunge-moema',
    title: 'Bunge Moema — Revamp de Automação',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Modernização completa do sistema de automação da planta, com migração de CLPs e atualização do supervisório SCADA.',
    tags: ['Revamp', 'SCADA', 'Migração CLP'],
    image: imgBungeMoema,
    scope: 'Revamp completo do sistema de automação: migração de CLPs, novo sistema SCADA, substituição de instrumentação de campo, recabeamento e operação paralela dos sistemas legado e novo antes do descomissionamento.',
    result: 'Modernização integral concluída. Transição sem interrupção da produção com operação paralela garantindo validação segura antes da virada.',
  },
  {
    id: 'santa-helena',
    title: 'Santa Helena — Revamp Turnkey Completo',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Goiás, BR',
    flag: '🇧🇷',
    description: 'Modernização integral da planta industrial abrangendo automação, infraestrutura elétrica e instrumentação em contrato único.',
    tags: ['Revamp', 'Turnkey', 'Automação', 'Instrumentação'],
    image: imgSantaHelena,
    scope: 'Automação de todas as áreas da usina (fermentação, destilaria, caldeira), modernização da infraestrutura elétrica e substituição de instrumentação — gerenciamento integrado em contrato único.',
    result: 'Revamp turnkey completo entregue. As três frentes (automação + elétrica + instrumentação) sob um único contrato eliminaram conflitos de interface entre áreas.',
  },
  {
    id: 'bahia-etanol',
    title: 'Bahia Etanol — Modernização Integral',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Bahia, BR',
    flag: '🇧🇷',
    description: 'Modernização integral da planta com substituição de CLPs, SCADA e sistemas elétricos para aumento de eficiência produtiva.',
    tags: ['Revamp', 'SCADA', 'Elétrica', 'Faseado'],
    image: imgBahiaEtanol,
    scope: 'Substituição completa de CLPs e SCADA, atualização do sistema elétrico com novos painéis e proteções, substituição e calibração de instrumentação — execução faseada mantendo continuidade operacional parcial.',
    result: 'Modernização integral concluída com execução por etapas. Eficiência operacional aumentada com planta parcialmente em operação durante a execução.',
  },
  {
    id: 'umoe',
    title: 'UMOE — Ampliação e Revamp Completo',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Ampliação de capacidade produtiva combinada com revamp dos sistemas existentes, sem interrupção das operações.',
    tags: ['Revamp', 'Ampliação', 'Montagem', 'EPC'],
    image: imgUmoe,
    scope: 'Montagem eletromecânica dos novos equipamentos, automação das áreas expandidas com integração à infraestrutura existente, modernização elétrica — coordenação entre expansão e continuidade operacional.',
    result: 'Expansão + modernização entregues com sistemas novo e existente unificados. Produção mantida sem interrupção durante toda a execução.',
  },
  {
    id: 'sesamm',
    title: 'SESAMM — ETA e ETE Greenfield',
    sector: 'Saneamento',
    sectorId: 'saneamento',
    location: 'Mogi Mirim, SP, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield de estação de tratamento de água e esgoto com automação completa e monitoramento remoto 24/7.',
    tags: ['Greenfield', 'ETA', 'ETE', 'SCADA'],
    image: imgSesamm,
    scope: 'Implantação completa das estações de tratamento, automação com CLPs e SCADA, montagem eletromecânica, infraestrutura elétrica e capacidade de operação e monitoramento remoto.',
    result: 'ETA + ETE entregues com operação automatizada 24/7 e monitoramento remoto via SCADA. Conformidade ambiental integral atingida.',
  },
  {
    id: 'indemil',
    title: 'Indemil — Nova Planta de Ácido Cítrico',
    sector: 'Alimentos & Bebidas',
    sectorId: 'alimentos',
    location: 'Paraná, BR',
    flag: '🇧🇷',
    description: 'Montagem eletromecânica completa de nova planta de ácido cítrico com materiais e acabamentos food-grade.',
    tags: ['Greenfield', 'Food-grade', 'Montagem', 'Tubulação'],
    image: imgIndemil,
    scope: 'Montagem eletromecânica completa, instalação de equipamentos de processo, tubulação industrial, infraestrutura elétrica e instrumentação — todos os materiais e acabamentos em conformidade com padrões sanitários da indústria alimentícia.',
    result: 'Montagem eletromecânica completa entregue com planta pronta para operação e conformidade com padrões food-grade.',
  },
  // — PDF cases
  {
    id: 'vale-mosaic',
    title: 'Vale Mosaic — Complexo de Fertilizantes',
    sector: 'Fertilizantes',
    sectorId: 'fertilizantes',
    location: 'Brasil',
    flag: '🇧🇷',
    description: 'Montagem eletromecânica completa do complexo de fertilizantes, incluindo automação industrial, instalações elétricas e painéis de controle.',
    tags: ['Automação', 'Elétrica', 'EPC'],
    image: imgValeMosaic,
  },
{
    id: 'citrus-juice',
    title: 'Citrus Juice — Fábrica de Sucos',
    sector: 'Alimentos & Bebidas',
    sectorId: 'alimentos',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield de planta de suco cítrico com automação de processo, elétrica e montagem eletromecânica.',
    tags: ['Greenfield', 'Automação', 'Elétrica'],
    image: imgCitrusJuice,
  },
  {
    id: 'biocom',
    title: 'Biocom — Planta Sucroenergética',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Angola',
    flag: '🇦🇴',
    description: 'Implementação greenfield completa de planta sucroenergética em Angola, com escopo EPC integral de automação, elétrica e montagem.',
    tags: ['EPC', 'Greenfield', 'Internacional'],
    image: imgBiocom,
  },
  {
    id: 'adm',
    title: 'ADM — Processamento de Soja',
    sector: 'Alimentos & Bebidas',
    sectorId: 'alimentos',
    location: 'Brasil',
    flag: '🇧🇷',
    description: 'Complexo de processamento de soja com sistemas de automação industrial, painéis elétricos e instrumentação de processo.',
    tags: ['Automação', 'Instrumentação', 'Painéis'],
    image: imgAdm,
  },
  {
    id: 'gs-inima',
    title: 'GS Inima — Sistema de Saneamento',
    sector: 'Saneamento',
    sectorId: 'saneamento',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Sistema completo de saneamento com automação de estações de tratamento, telemetria e supervisório SCADA para monitoramento remoto.',
    tags: ['SCADA', 'Telemetria', 'ETA/ETE'],
    image: imgGsInima,
  },
  {
    id: 'matsa',
    title: 'MATSA — Mineração e Tratamento de Água',
    sector: 'Mineração',
    sectorId: 'mineracao',
    location: 'Espanha',
    flag: '🇪🇸',
    description: 'Implantação de sistemas elétricos e de automação subterrâneos nas Minas de Aguas Teñidas, incluindo tratamento de água.',
    tags: ['Mineração', 'Automação', 'Elétrica'],
    image: imgMatsa,
  },
  {
    id: 'cadasa',
    title: 'CADASA — Central Azucarera de Alanje',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Panamá',
    flag: '🇵🇦',
    description: 'Usina de açúcar com escopo completo de automação, sistemas elétricos e montagem eletromecânica em regime EPC.',
    tags: ['EPC', 'Automação', 'Internacional'],
    image: imgCadasa,
  },
  // — Atvos portfolio
  {
    id: 'alto-taquari',
    title: 'Alto Taquari — Usina Greenfield',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso, BR',
    flag: '🇧🇷',
    description: 'Usina sucroenergética greenfield turnkey entregue em 2009, com escopo completo de automação, elétrica e montagem eletromecânica sob contrato único.',
    tags: ['Greenfield', 'Turnkey', 'EPC'],
    image: imgAltoTaquari,
    scope: 'Implantação greenfield completa com automação industrial, infraestrutura elétrica e montagem eletromecânica integradas — entregue dentro da janela da safra 2009.',
  },
  {
    id: 'rio-claro',
    title: 'Rio Claro — Usina Greenfield',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield turnkey de usina sucroenergética em 2010, com integração completa de automação, elétrica e montagem eletromecânica.',
    tags: ['Greenfield', 'Turnkey', 'Integração'],
    image: imgRioClaro,
    scope: 'Implantação greenfield turnkey integrando automação de processo, elétrica industrial e montagem eletromecânica sob responsabilidade única — operacional na safra 2010.',
  },
  {
    id: 'morro-vermelho',
    title: 'Morro Vermelho — Usina Greenfield',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Goiás, BR',
    flag: '🇧🇷',
    description: 'Usina sucroenergética greenfield turnkey entregue em 2011, com automação, elétrica e montagem eletromecânica integradas.',
    tags: ['Greenfield', 'Automação', 'Montagem'],
    image: imgMorroVermelho,
    scope: 'Implantação greenfield completa de usina sucroenergética com automação industrial, infraestrutura elétrica e montagem eletromecânica — entrega na safra 2011.',
  },
  {
    id: 'alcidia',
    title: 'Alcídia — Revamp Integral',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Revamp integral da usina em 2012, abrangendo modernização de automação, elétrica e montagem eletromecânica para aumento de eficiência operacional.',
    tags: ['Revamp', 'Modernização', 'Automação'],
    image: imgAlcidia,
    scope: 'Modernização completa da usina: sistemas de automação, infraestrutura elétrica e montagem eletromecânica — todas as frentes entregues sob contrato único de revamp integral.',
  },
  {
    id: 'agua-emendada',
    title: 'Água Emendada — Usina Greenfield',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield turnkey em 2010, com escopo completo de automação, elétrica e montagem sob contrato único.',
    tags: ['Greenfield', 'Turnkey', 'EPC'],
    image: imgAguaEmendada,
    scope: 'Implantação greenfield com automação de processo, elétrica industrial e montagem eletromecânica integradas — coordenação sob responsabilidade única para entrega na safra 2010.',
  },
  {
    id: 'santa-luzia',
    title: 'Santa Luzia — Usina Greenfield',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Implantação greenfield turnkey de usina sucroenergética em 2011, com automação, elétrica e montagem eletromecânica integradas.',
    tags: ['Greenfield', 'Turnkey', 'Automação'],
    image: imgSantaLuzia,
    scope: 'Implantação greenfield completa com escopo turnkey integrado de automação industrial, infraestrutura elétrica e montagem eletromecânica — operacional na safra 2011.',
  },
  {
    id: 'eldorado',
    title: 'Eldorado — Greenfield & Revamp Ampliação',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'Mato Grosso do Sul, BR',
    flag: '🇧🇷',
    description: 'Combinação de implantação greenfield de novas áreas com revamp de ampliação das instalações existentes em 2012, executados simultaneamente.',
    tags: ['Greenfield', 'Revamp', 'Ampliação'],
    image: imgEldorado,
    scope: 'Execução simultânea de novas áreas greenfield e revamp de ampliação das instalações existentes — automação, elétrica e montagem eletromecânica coordenadas em contrato integrado.',
  },
  {
    id: 'conquista',
    title: 'Conquista do Pontal — Termoelétrica',
    sector: 'Sucroenergético',
    sectorId: 'sucroenergetico',
    location: 'São Paulo, BR',
    flag: '🇧🇷',
    description: 'Termoelétrica com implantação greenfield de nova planta e integração brownfield com infraestrutura existente em 2013.',
    tags: ['Termoelétrica', 'Greenfield', 'Brownfield'],
    image: imgConquista,
    scope: 'Construção de nova planta termoelétrica greenfield com integração simultânea à infraestrutura operacional existente — automação, elétrica e montagem eletromecânica sob gestão EPC única.',
  },
]

const sectorIds = ['all', ...Array.from(new Set(projects.map((p) => p.sectorId)))]
const sectorLabels: Record<string, string> = {
  all: 'Todos',
  sucroenergetico: 'Sucroenergético',
  energia: 'Energias Renováveis',
  fertilizantes: 'Fertilizantes',
  saneamento: 'Saneamento',
  mineracao: 'Mineração',
  alimentos: 'Alimentos & Bebidas',
}

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.sectorId === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary dot-grid-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/40" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Portfólio
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight">
            Nossos
            <br />
            <span className="outline-white">Projetos</span>
          </h1>
          <p className="font-body text-base text-white/70 max-w-xl mt-6">
            +251 projetos entregues em 12 setores industriais. Conheça nossa capacidade técnica e alcance internacional.
          </p>
          <div className="flex flex-wrap gap-10 mt-10 pt-10 border-t border-white/20">
            {[
              { value: '251+', label: 'Projetos entregues' },
              { value: '12+', label: 'Setores atendidos' },
              { value: '892 MW', label: 'Solar instalado' },
              { value: '2.000+', label: 'Dias sem acidentes' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold text-white">{value}</div>
                <div className="font-body text-xs text-white/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {sectorIds.map((id) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-all duration-200 ${
                  activeFilter === id
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-200 text-slate-muted hover:border-primary/40 hover:text-primary'
                }`}
              >
                {sectorLabels[id] ?? id}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => {
                const isExpanded = expandedId === project.id
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="bg-white border border-gray-100 hover:border-primary/20 transition-colors duration-300"
                  >
                    {/* Card header */}
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    >
                      <div className="flex items-stretch">
                        {/* Photo */}
                        <div className="hidden sm:block w-48 lg:w-64 shrink-0 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 lg:p-8">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-2.5 py-1 text-xs font-semibold tracking-wide bg-primary/8 text-primary border border-primary/15">
                              {project.sector}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-slate-muted">
                              <span className="text-base leading-none">{project.flag}</span>
                              {project.location}
                            </span>
                          </div>

                          <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-text tracking-tight mb-3">
                            {project.title}
                          </h3>

                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs font-medium border border-gray-200 text-slate-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Expand toggle */}
                        <button className="shrink-0 p-4 text-slate-muted hover:text-primary transition-colors self-start mt-4">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-8 pt-0">
                            <div className="border-t border-gray-100 pt-6 grid md:grid-cols-3 gap-6">
                              {/* Description */}
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-primary/40 rounded-full" />
                                  <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">Projeto</span>
                                </div>
                                <p className="font-body text-sm text-slate-muted leading-relaxed">{project.description}</p>
                              </div>
                              {/* Scope */}
                              {project.scope && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-primary/60 rounded-full" />
                                    <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">Escopo</span>
                                  </div>
                                  <p className="font-body text-sm text-slate-muted leading-relaxed">{project.scope}</p>
                                </div>
                              )}
                              {/* Result */}
                              {project.result && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">Resultado</span>
                                  </div>
                                  <p className="font-body text-sm text-slate-muted leading-relaxed">{project.result}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center border-t border-gray-200 pt-16">
            <p className="font-body text-base text-slate-muted mb-6">
              Quer saber como podemos ajudar no seu projeto?
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors"
            >
              Fale com nossa equipe
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
