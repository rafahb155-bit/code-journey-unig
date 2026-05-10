import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Code2, Globe, Server, Layers, Monitor, Cog, Sparkles, Wrench, GitBranch,
  Figma, Bot, Award, DollarSign, Building2, AlertTriangle, CheckCircle2,
  Heart, Factory, Lightbulb, Network, GraduationCap, ShieldCheck, Linkedin,
  Github, ArrowUp, Menu, X, ChevronRight, Zap, Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { id: "inicio", label: "Início" },
  { id: "profissao", label: "Profissão" },
  { id: "tendencias", label: "Tendências" },
  { id: "desafios", label: "Desafios" },
  { id: "ods", label: "ODS 9" },
  { id: "equipe", label: "Equipe" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-primary">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="hidden sm:inline">DevWeb · UNIG</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-md text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground border-b border-border last:border-0">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-light/40 blob" />
        <div aria-hidden className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-success/30 blob" style={{ animationDelay: "-7s" }} />
        <div aria-hidden className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 border border-success/40 text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Tema Integrador 1º Período — UNIG 2026
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Desenvolvimento <span className="text-success">Web</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-primary-foreground/90">
              A carreira que constrói o mundo digital
            </p>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              O Desenvolvimento Web é uma das áreas mais dinâmicas e essenciais da Tecnologia da
              Informação. Profissionais desta área são responsáveis por criar, manter e evoluir os
              sites, aplicativos e sistemas que fazem parte do nosso dia a dia — do internet banking
              ao e-commerce, das plataformas de ensino aos serviços de saúde digital.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#profissao"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-success hover:bg-success/90 text-success-foreground font-semibold shadow-card transition-transform hover:-translate-y-0.5">
                Conheça a Profissão <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#tendencias"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-semibold transition-colors">
                Ver Tendências
              </a>
            </div>
          </div>

          <div className="reveal relative hidden lg:block">
            <div className="relative mx-auto w-[420px] h-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm" />
              <div className="absolute top-6 left-6 right-6 bottom-6 rounded-2xl bg-primary/40 border border-white/10 p-6 font-mono text-sm overflow-hidden">
                <div className="flex gap-1.5 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <pre className="text-primary-foreground/90 leading-relaxed">
{`<html lang="pt-br">
  <head>
    <title>Futuro</title>
  </head>
  <body>
    const dev = {
      front: "React",
      back: "Node.js",
      sonho: "mudar o mundo"
    };
  </body>
</html>`}
                </pre>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-success grid place-items-center shadow-card float-slow">
                <Globe className="w-10 h-10 text-success-foreground" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-primary-light grid place-items-center shadow-card float-slow" style={{ animationDelay: "-3s" }}>
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROFISSÃO */}
      <Section id="profissao" eyebrow="O que é" title="Sobre a Profissão">
        <p className="reveal text-lg text-muted-foreground max-w-3xl">
          O desenvolvedor web é o profissional responsável por criar, manter e otimizar sites e
          aplicações para a internet. Ele planeja, constrói e dá manutenção a tudo que roda em uma
          plataforma web, garantindo que o sistema funcione conforme o esperado.
          <Cite>Mestres da Web, 2025</Cite>
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <SpecCard icon={<Monitor className="w-7 h-7" />} title="Front-End"
            description="Cuida de tudo que o usuário vê e interage — layout, botões, menus e design visual."
            tech="HTML · CSS · JavaScript · React · Vue.js · Angular" source="Remessa Online, 2025" />
          <SpecCard icon={<Server className="w-7 h-7" />} title="Back-End"
            description="Cuida da parte invisível — servidores, banco de dados e lógica de negócio."
            tech="Node.js · Python · PHP · Java · MySQL" source="Remessa Online, 2025" />
          <SpecCard icon={<Layers className="w-7 h-7" />} title="Full Stack"
            description="Domina front e back, desenvolvendo projetos completos de forma autônoma."
            tech="Combina tecnologias das duas áreas" source="Remessa Online, 2025" />
        </div>

        <div className="mt-16 reveal">
          <h3 className="text-2xl font-bold text-primary mb-6">Atividades do dia a dia</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Codificar e estruturar sites e aplicações web",
              "Corrigir erros, ajustar layouts e melhorar a performance",
              "Participar de reuniões com clientes, designers e gestores de projeto",
              "Realizar testes para garantir o funcionamento pleno do sistema",
              "Implementar atualizações de segurança",
              "Manter-se atualizado sobre tendências e novas tecnologias",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Fonte: HubSpot, 2024</p>
        </div>
      </Section>

      {/* SECTION 3 — TENDÊNCIAS */}
      <Section id="tendencias" tone="muted" eyebrow="Mercado" title="Dicas e Tendências do Mercado">
        {/* Bloco 1 */}
        <h3 className="reveal text-2xl font-bold text-primary mb-6">Tecnologias mais usadas</h3>

        <SubHeading>Linguagens de Programação</SubHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["HTML", "Estrutura das páginas web", "Alura, 2026"],
            ["CSS", "Estilização e layout visual", "Alura, 2026"],
            ["JavaScript / TypeScript", "Domina o desenvolvimento web", "Alura, 2026"],
            ["Python", "Back-end e integrações com IA", "Numerando, 2026"],
            ["PHP", "Sistemas web e WordPress", "Remessa Online, 2025"],
            ["Node.js & Java", "Back-end robusto para fintechs", "Numerando, 2026"],
          ].map(([n, d, s]) => (
            <TechCard key={n} name={n} desc={d} source={s} icon={<Code2 className="w-5 h-5" />} />
          ))}
        </div>

        <SubHeading className="mt-12">Frameworks mais valorizados</SubHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["React.js", "Biblioteca mais usada no mundo para front-end", "Alura, 2026"],
            ["Next.js", "Renderização pelo servidor", "Alura, 2026"],
            ["Vue.js & Angular", "Alternativas populares ao React", "Anhanguera, 2024"],
            ["Node.js", "JavaScript no back-end", "Anhanguera, 2024"],
            ["Django & FastAPI", "Frameworks Python modernos", "Alura, 2026"],
          ].map(([n, d, s]) => (
            <TechCard key={n} name={n} desc={d} source={s} icon={<Zap className="w-5 h-5" />} />
          ))}
        </div>

        <SubHeading className="mt-12">Ferramentas do dia a dia</SubHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard name="VS Code" desc="Editor de código mais popular" source="HubSpot, 2024" icon={<Wrench className="w-5 h-5" />} />
          <TechCard name="Git & GitHub" desc="Controle de versão e colaboração" source="HubSpot, 2024" icon={<GitBranch className="w-5 h-5" />} />
          <TechCard name="Figma" desc="Design e prototipagem de interfaces" source="Studio 351, 2025" icon={<Figma className="w-5 h-5" />} />
          <TechCard name="GitHub Copilot" desc="Assistente de IA para código" source="Alura, 2026" icon={<Bot className="w-5 h-5" />} />
        </div>

        {/* Bloco 2 — Certificações */}
        <div className="mt-16">
          <h3 className="reveal text-2xl font-bold text-primary mb-2 flex items-center gap-2">
            <Award className="w-6 h-6" /> Certificações Valorizadas
          </h3>
          <p className="reveal text-sm text-muted-foreground mb-6">
            Fontes: OpServices, 2026; GeekHunter, 2024; Arklok, 2025
          </p>
          <div className="reveal overflow-x-auto rounded-xl border border-border bg-card shadow-soft">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4 font-semibold">Certificação</th>
                  <th className="text-left p-4 font-semibold">Fornecedor</th>
                  <th className="text-left p-4 font-semibold">Para que serve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AWS Certified Developer", "Amazon Web Services", "Aplicações na nuvem AWS"],
                  ["Microsoft Certified Developer", "Microsoft Azure", "Tecnologias Microsoft"],
                  ["Google Associate Cloud Engineer", "Google Cloud", "Aplicações no Google Cloud"],
                  ["Oracle Certified Java Programmer", "Oracle", "Conhecimento avançado em Java"],
                  ["CompTIA IT Fundamentals", "CompTIA", "Base sólida em TI para iniciantes"],
                  ["GitHub Foundations", "GitHub", "Git e controle de versão"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-secondary/60 transition-colors">
                    <td className="p-4 font-medium text-foreground">{row[0]}</td>
                    <td className="p-4 text-muted-foreground">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reveal mt-6 p-5 rounded-xl bg-success-soft border-l-4 border-success">
            <p className="text-success-foreground font-medium" style={{ color: "var(--success)" }}>
              “Profissionais certificados têm até 25% mais chances de serem contratados.”
            </p>
            <p className="text-xs text-muted-foreground mt-1">Fonte: SkillsTecnologias, 2025</p>
          </div>
        </div>

        {/* Bloco 3 — Salários */}
        <div className="mt-16">
          <h3 className="reveal text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6" /> Salários em 2026
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Júnior", "R$ 3.000 – R$ 6.000", "0 a 2 anos"],
              ["Pleno", "R$ 7.000 – R$ 11.000", "3 a 5 anos"],
              ["Sênior", "R$ 12.000 – R$ 20.000", "Acima de 5 anos"],
              ["Full Stack Jr.", "R$ 6.050 – R$ 8.750", "Variável"],
            ].map(([level, salary, exp]) => (
              <div key={level} className="reveal p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-card">
                <p className="text-sm uppercase tracking-wider opacity-80">{level}</p>
                <p className="mt-3 text-2xl font-display font-bold">{salary}</p>
                <p className="mt-2 text-sm opacity-90">{exp}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-xs text-muted-foreground mt-3">
            Fontes: Glassdoor maio/2026; Robert Half Guia Salarial 2026; Numerando, 2026; Meutudo, 2026
          </p>
          <div className="reveal mt-6 p-5 rounded-xl bg-success-soft border-l-4 border-success">
            <p className="font-semibold" style={{ color: "var(--success)" }}>
              “O Brasil enfrenta um déficit de mais de 530 mil profissionais de TI, garantindo altíssima demanda.”
            </p>
            <p className="text-xs text-muted-foreground mt-1">Fonte: Brasscom apud Alura, 2026</p>
          </div>
        </div>

        {/* Bloco 4 — Empresas */}
        <div className="mt-16">
          <h3 className="reveal text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6" /> Principais Empresas que Contratam
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Big Techs", v: "Google · Microsoft · Amazon (AWS) · Meta · IBM · Oracle" },
              { t: "Fintechs Brasileiras", v: "Nubank · Inter · C6 Bank · PicPay · Itaú Digital" },
              { t: "E-commerce", v: "Mercado Livre · Magazine Luiza · VTEX" },
              { t: "Startups", v: "SaaS · EdTech · HealthTech · AgriTech" },
            ].map((c) => (
              <div key={c.t} className="reveal p-5 rounded-xl bg-card border border-border shadow-soft">
                <p className="font-display font-bold text-primary">{c.t}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-xs text-muted-foreground mt-3">Fonte: Numerando, 2026; Quero Bolsa, 2025</p>
        </div>
      </Section>

      {/* SECTION 4 — DESAFIOS E OPORTUNIDADES */}
      <Section id="desafios" eyebrow="Realidade do mercado" title="Desafios e Oportunidades da Carreira">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl p-7 border border-warning-foreground/20" style={{ background: "var(--warning-soft)" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-xl grid place-items-center" style={{ background: "var(--warning-foreground)", color: "white" }}>
                <AlertTriangle className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold" style={{ color: "var(--warning-foreground)" }}>Desafios</h3>
            </div>
            <ul className="space-y-3">
              {[
                ["Mercado competitivo e em constante evolução tecnológica", "Anhanguera, 2024"],
                ["Necessidade de aprendizado contínuo ao longo de toda a carreira", "Alura, 2026"],
                ["Alta carga de trabalho em projetos com prazos curtos", "Anhanguera, 2024"],
                ["Impacto da IA exige que o dev evolua para funções mais estratégicas", "Alura, 2026"],
                ["Necessidade de conhecer diversas linguagens e ferramentas", "Numerando, 2026"],
              ].map(([t, s]) => (
                <li key={t} className="flex gap-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--warning-foreground)" }} />
                  <span><span className="text-foreground">{t}</span> <Cite>{s}</Cite></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-2xl p-7 border border-success/30 bg-success-soft">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-xl grid place-items-center bg-success text-success-foreground">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold" style={{ color: "var(--success)" }}>Oportunidades</h3>
            </div>
            <ul className="space-y-3">
              {[
                ["Déficit de 530 mil profissionais de TI no Brasil garante alta demanda", "Brasscom apud Alura, 2026"],
                ["Trabalho remoto possível, inclusive para empresas internacionais em dólar", "João Victor Vieira, 2025"],
                ["Progressão salarial rápida — dobrar o salário em 2 a 3 anos é comum", "Numerando, 2026"],
                ["Grande variedade de setores contratantes, do público ao privado", "HubSpot, 2024"],
                ["Possibilidade de atuar como freelancer e empreendedor digital", "Quero Bolsa, 2025"],
                ["Crescimento da IA abre novas especializações para devs web", "Alura, 2026"],
              ].map(([t, s]) => (
                <li key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span><span className="text-foreground">{t}</span> <Cite>{s}</Cite></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — ODS 9 */}
      <Section id="ods" tone="muted" eyebrow="Sustentabilidade" title="Contribuição para o ODS 9">
        <div className="reveal rounded-2xl p-7 bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-card">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center shrink-0">
              <Factory className="w-6 h-6" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-80">Indústria, Inovação e Infraestrutura</p>
              <p className="mt-2 leading-relaxed">
                O <strong>ODS 9 da ONU</strong> busca construir infraestruturas resilientes, promover a
                industrialização inclusiva e sustentável, e fomentar a inovação. O Desenvolvimento Web
                contribui diretamente para esse objetivo.
              </p>
              <p className="text-xs opacity-80 mt-3">
                Fontes: ONU Brasil (brasil.un.org/pt-br/sdgs/9) · IPEA (ipea.gov.br/ods/ods9.html)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OdsCard icon={<Heart className="w-6 h-6" />} title="Democratização do Acesso"
            text="Desenvolvedores web criam plataformas que ampliam o acesso a saúde, educação e serviços públicos."
            ex="Portal ConecteSUS — milhões de brasileiros acessando dados de vacinação digitalmente."
            source="IPEA; gov.br/saude" />
          <OdsCard icon={<Factory className="w-6 h-6" />} title="Industrialização Sustentável"
            text="Sistemas de gestão web ajudam empresas a monitorar e reduzir o consumo de recursos."
            ex="Plataformas de e-commerce permitem que pequenas empresas acessem mercados antes impossíveis."
            source="SEBRAE; IPEA" />
          <OdsCard icon={<Lightbulb className="w-6 h-6" />} title="Fomento à Inovação"
            text="Plataformas web conectam pesquisadores, universidades e empresas, acelerando a transferência de tecnologia."
            ex="Nubank e PicPay inovaram o setor financeiro usando dev web, gerando milhares de empregos."
            source="Numerando, 2026; UFMG" />
          <OdsCard icon={<Network className="w-6 h-6" />} title="Infraestrutura Digital"
            text="Sistemas web formam a infraestrutura digital de uma nação. Bancos, hospitais, escolas e órgãos públicos dependem deles."
            source="UFMG — ufmg.br/espacodoconhecimento" />
          <OdsCard icon={<GraduationCap className="w-6 h-6" />} title="Educação a Distância"
            text="Plataformas EAD como Coursera e Khan Academy ampliam o acesso à educação em países em desenvolvimento."
            source="ONU Brasil — brasil.un.org/pt-br/sdgs/9" />
          <OdsCard icon={<ShieldCheck className="w-6 h-6" />} title="Transparência Pública"
            text="Portais de transparência governamental garantem acesso da população a dados públicos, fortalecendo a democracia."
            source="IPEA — ipea.gov.br/ods/ods9.html" />
        </div>
      </Section>

      {/* SECTION 6 — EQUIPE */}
      <Section id="equipe" eyebrow="Conexões" title="Equipe e Perfis Profissionais">
        <p className="reveal text-lg text-muted-foreground max-w-2xl">
          Conecte-se com os integrantes do grupo no LinkedIn e GitHub.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="reveal group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light grid place-items-center text-primary-foreground font-display font-bold text-2xl shadow-card">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">[Nome do Integrante {i}]</h3>
                <p className="text-sm text-muted-foreground">Tecnologia da Informação — UNIG</p>
                <div className="mt-5 flex gap-2 w-full">
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-light transition-colors">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-foreground/90 text-background text-sm font-medium hover:bg-foreground transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-sm text-muted-foreground mt-12">
          Este projeto faz parte do <strong>Tema Integrador do 1º período da UNIG — Gestão de Carreiras</strong> · Professora Denise Moraes · 2026
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-success">
                <Code2 className="w-5 h-5" />
              </span>
              Desenvolvimento Web
            </div>
            <p className="mt-3 text-sm opacity-80">Tema Integrador UNIG 2026</p>
          </div>
          <div className="text-sm space-y-1.5 opacity-90">
            <p><strong>Professora:</strong> Denise Moraes</p>
            <p><strong>Período:</strong> 1º — Gestão de Carreiras</p>
            <p><strong>Universidade:</strong> Iguaçu (UNIG)</p>
          </div>
          <div className="text-sm opacity-80">
            <p>
              Conteúdo baseado em pesquisa acadêmica com fontes citadas. As referências completas
              estão disponíveis no documento de pesquisa entregue na Atividade 1.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-success grid place-items-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-success grid place-items-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs opacity-70 text-center">
            © 2026 Desenvolvimento Web — Tema Integrador UNIG. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-success text-success-foreground shadow-card grid place-items-center hover:scale-110 transition-transform">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* ---------- Helpers ---------- */

function Section({
  id, title, eyebrow, children, tone,
}: { id: string; title: string; eyebrow?: string; children: React.ReactNode; tone?: "muted" }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tone === "muted" ? "bg-secondary" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-success">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-success" />
        </div>
        {children}
      </div>
    </section>
  );
}

function SpecCard({ icon, title, description, tech, source }: {
  icon: React.ReactNode; title: string; description: string; tech: string; source: string;
}) {
  return (
    <div className="reveal group rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
      <span className="inline-grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-card group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs font-semibold uppercase tracking-wider text-success">Tecnologias</p>
        <p className="mt-1.5 text-sm text-foreground">{tech}</p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground italic">Fonte: {source}</p>
    </div>
  );
}

function TechCard({ name, desc, source, icon }: { name: string; desc: string; source: string; icon: React.ReactNode }) {
  return (
    <div className="reveal rounded-xl bg-card border border-border p-5 hover:border-primary-light transition-colors">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <p className="font-display font-bold">{name}</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <p className="mt-3 text-xs text-muted-foreground italic">Fonte: {source}</p>
    </div>
  );
}

function OdsCard({ icon, title, text, ex, source }: {
  icon: React.ReactNode; title: string; text: string; ex?: string; source: string;
}) {
  return (
    <div className="reveal rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
      <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-success-soft text-success">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
      {ex && (
        <p className="mt-3 p-3 rounded-lg bg-secondary text-sm text-foreground border-l-2 border-success">
          <strong className="text-success" style={{ color: "var(--success)" }}>Exemplo real:</strong> {ex}
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground italic">Fonte: {source}</p>
    </div>
  );
}

function SubHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h4 className={`reveal text-base font-semibold text-foreground/80 uppercase tracking-wider mb-4 ${className}`}>{children}</h4>;
}

function Cite({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-muted-foreground italic">(Fonte: {children})</span>;
}
