const commands = {
  install:
    "composer require samuel-nunes/laravel-ddd-toolkit\nphp artisan ddd:install",
  discover:
    "php artisan list ddd\nphp artisan ddd:check",
  scaffold:
    "php artisan make:module Order\nphp artisan make:port Order OrderRepository --type=out\nphp artisan make:adapter Order EloquentOrderRepository --port=OrderRepository --type=persistence",
};

const sampleCode = `final readonly class IssueInvoice
{
    public function __construct(
        private InvoiceRepository $invoices,
    ) {}

    public function handle(IssueInvoiceData $data): Invoice
    {
        $invoice = Invoice::issue($data->customer, $data->items);
        $this->invoices->save($invoice);

        return $invoice;
    }
}`;

const translations = {
  en: {
    "nav.architecture": "Architecture",
    "nav.docs": "Docs",
    "nav.contribute": "Contribute",
    "nav.start": "Start",
    "nav.language": "Português",
    "hero.eyebrow": "Open source · Ready for real projects",
    "hero.titleA": "Domain-first",
    "hero.titleB": "Laravel systems.",
    "hero.text":
      "Laravel DDD Toolkit helps teams structure large, modular Laravel applications around explicit business domains, clear use cases, ports and adapters.",
    "hero.primary": "Start now",
    "hero.secondary": "Understand the fit",
    "hero.designedFor": "Designed for",
    "visual.isolated": "✓ isolated module",
    "visual.layers": "hexagonal by default",
    "visual.generated": "Generated with",
    "visual.conventions": "Hexagonal",
    "visual.ready": "ports + adapters",
    "architecture.kicker": "01 · Positioning",
    "architecture.titleA": "A structure for",
    "architecture.titleB": "serious Laravel apps.",
    "architecture.text":
      "This is not a replacement for Laravel's default architecture. Laravel remains excellent for simple CRUD and early-stage products. The toolkit shines when a system needs domain boundaries, stronger cohesion and protection against accidental coupling.",
    "architecture.layers.domain": "Entities, value objects and business rules",
    "architecture.layers.application": "Use cases and inbound/outbound ports",
    "architecture.layers.infrastructure": "Persistence adapters, Eloquent and integrations",
    "architecture.layers.http": "Controllers and HTTP delivery concerns",
    "architecture.dependencyNote": "Execution flows inward. Dependencies point inward.",
    "benefits.0.title": "Built for complexity",
    "benefits.0.text":
      "Useful when controllers grow, generic services multiply, rules spread across the app and business modules start depending on each other.",
    "benefits.1.title": "Laravel stays Laravel",
    "benefits.1.text":
      "You still use the service container, Eloquent, events, jobs and testing tools — but from the right architectural edges.",
    "benefits.2.title": "A better team language",
    "benefits.2.text":
      "The structure makes discussions concrete: what is the module, the use case, the business rule, the port and the adapter?",
    "docs.kicker": "02 · Getting started",
    "docs.titleA": "From Composer to your first",
    "docs.titleB": "domain boundary.",
    "docs.text":
      "Install the toolkit, publish its setup and use the Artisan commands to discover and generate the pieces your application actually needs.",
    "docs.terminal": "Terminal",
    "docs.success": "The toolkit adds structure without replacing the native Laravel workflow.",
    "steps.0.title": "Install the package",
    "steps.0.text":
      "Install the package from Packagist and check the GitHub repository for documentation and examples.",
    "steps.1.title": "Prepare the project",
    "steps.1.text":
      "Run the installer to publish configuration and align the initial folders with the selected architecture.",
    "steps.2.title": "Create intentionally",
    "steps.2.text":
      "Generate modules and use cases only when the application has real business boundaries to protect.",
    "commands.head.command": "Command",
    "commands.head.purpose": "Purpose",
    "commands.head.state": "State",
    "commands.install": "Publishes configuration and prepares the Laravel project for domain-oriented structure.",
    "commands.module": "Creates a vertical module with hexagonal structure by default.",
    "commands.port": "Creates an outbound application port such as OrderRepository.",
    "commands.adapter": "Creates an infrastructure adapter that implements a port.",
    "commands.repository": "Generates an infrastructure repository only when enabled in config or forced.",
    "commands.ready": "Ready",
    "commands.optIn": "Opt-in",
    "sample.kicker": "Usage example",
    "sample.title": "A use case that speaks the language of the domain.",
    "sample.text": "Controllers coordinate input. The use case executes the intention. The domain protects the rule.",
    "contribute.kicker": "03 · Community",
    "contribute.titleA": "Help mature the toolkit",
    "contribute.titleB": "with real Laravel pressure.",
    "contribute.text":
      "Contributions are especially valuable around documentation, release readiness, dependency hygiene, architectural checks and examples extracted from long-lived applications.",
    "contribute.docs": "Explore the docs",
    "contribute.repo": "Open repository",
    footer: "Explicit architecture for Laravel applications that need to keep evolving.",
    commandTabs: {
      install: "Install",
      discover: "Discover commands",
      scaffold: "Module workflow",
    },
    copy: "Copy",
    copied: "Copied",
    languageLabel: "Trocar idioma para português",
    flag: "🇧🇷",
  },
  pt: {
    "nav.architecture": "Arquitetura",
    "nav.docs": "Documentação",
    "nav.contribute": "Contribuir",
    "nav.start": "Começar",
    "nav.language": "English",
    "hero.eyebrow": "Open source · Pronta para projetos reais",
    "hero.titleA": "Domínios em primeiro lugar.",
    "hero.titleB": "Laravel de verdade.",
    "hero.text":
      "Laravel DDD Toolkit ajuda times a estruturar aplicações Laravel grandes e modulares em torno de domínios explícitos, casos de uso claros, portas e adapters.",
    "hero.primary": "Começar agora",
    "hero.secondary": "Entender quando usar",
    "hero.designedFor": "Projetado para",
    "visual.isolated": "✓ módulo isolado",
    "visual.layers": "hexagonal por padrão",
    "visual.generated": "Gerado com",
    "visual.conventions": "Hexagonal",
    "visual.ready": "ports + adapters",
    "architecture.kicker": "01 · Posicionamento",
    "architecture.titleA": "Uma estrutura para",
    "architecture.titleB": "Laravel sério.",
    "architecture.text":
      "A biblioteca não substitui a arquitetura padrão do Laravel. Laravel continua excelente para CRUD simples e produtos no começo. O toolkit faz mais sentido quando o sistema precisa de fronteiras de domínio, coesão forte e proteção contra acoplamento acidental.",
    "architecture.layers.domain": "Entidades, value objects e regras de negócio",
    "architecture.layers.application": "Casos de uso e portas inbound/outbound",
    "architecture.layers.infrastructure": "Adapters de persistência, Eloquent e integrações",
    "architecture.layers.http": "Controllers e entrega HTTP",
    "architecture.dependencyNote": "O fluxo entra pela infraestrutura. As dependências apontam para dentro.",
    "benefits.0.title": "Feita para complexidade",
    "benefits.0.text":
      "Útil quando controllers crescem, services genéricos se multiplicam, regras ficam espalhadas e módulos de negócio começam a depender uns dos outros.",
    "benefits.1.title": "Laravel continua Laravel",
    "benefits.1.text":
      "Service container, Eloquent, eventos, jobs e testes continuam no jogo — só entram pelas bordas certas da arquitetura.",
    "benefits.2.title": "Melhor linguagem de time",
    "benefits.2.text":
      "A estrutura deixa a discussão concreta: qual é o módulo, qual é o caso de uso, onde está a regra, qual é a porta e qual é o adapter?",
    "docs.kicker": "02 · Primeiros passos",
    "docs.titleA": "Do Composer à primeira",
    "docs.titleB": "fronteira de domínio.",
    "docs.text":
      "Instale o toolkit, publique a configuração e use os comandos Artisan para descobrir e gerar apenas as peças que a aplicação realmente precisa.",
    "docs.terminal": "Terminal",
    "docs.success": "O toolkit adiciona estrutura sem substituir o fluxo nativo do Laravel.",
    "steps.0.title": "Instale o pacote",
    "steps.0.text":
      "Instale o pacote pelo Packagist e consulte o repositório do GitHub para documentação e exemplos.",
    "steps.1.title": "Prepare o projeto",
    "steps.1.text":
      "Rode o instalador para publicar a configuração e alinhar as pastas iniciais com a arquitetura escolhida.",
    "steps.2.title": "Crie com intenção",
    "steps.2.text":
      "Gere módulos e casos de uso apenas quando a aplicação tiver fronteiras reais de negócio para proteger.",
    "commands.head.command": "Comando",
    "commands.head.purpose": "Finalidade",
    "commands.head.state": "Estado",
    "commands.install": "Publica a configuração e prepara o projeto Laravel para uma estrutura orientada a domínio.",
    "commands.module": "Cria um módulo vertical com estrutura hexagonal por padrão.",
    "commands.port": "Cria uma porta outbound na aplicação, como OrderRepository.",
    "commands.adapter": "Cria um adapter de infraestrutura que implementa uma porta.",
    "commands.repository": "Gera repository em infraestrutura apenas quando habilitado na config ou forçado.",
    "commands.ready": "Pronto",
    "commands.optIn": "Opt-in",
    "sample.kicker": "Exemplo de uso",
    "sample.title": "Um caso de uso que fala a linguagem do domínio.",
    "sample.text": "Controllers coordenam a entrada. O caso de uso executa a intenção. O domínio protege a regra.",
    "contribute.kicker": "03 · Comunidade",
    "contribute.titleA": "Ajude a amadurecer o toolkit",
    "contribute.titleB": "com pressão real de Laravel.",
    "contribute.text":
      "Contribuições são especialmente valiosas em documentação, prontidão de release, higiene de dependências, checks arquiteturais e exemplos extraídos de aplicações longas.",
    "contribute.docs": "Explorar documentação",
    "contribute.repo": "Abrir repositório",
    footer: "Arquitetura explícita para aplicações Laravel que precisam continuar evoluindo.",
    commandTabs: {
      install: "Instalar",
      discover: "Ver comandos",
      scaffold: "Fluxo do módulo",
    },
    copy: "Copiar",
    copied: "Copiado",
    languageLabel: "Switch language to English",
    flag: "🇺🇸",
  },
};

let currentLocale = "en";
let activeCommand = "install";

function renderCommand() {
  const output = document.querySelector("[data-command-output]");
  output.innerHTML = commands[activeCommand]
    .split("\n")
    .map((line) => `<span><b>$</b> ${escapeHtml(line)}</span>`)
    .join("\n");
}

function renderSampleCode() {
  const output = document.querySelector("[data-sample-code]");
  output.textContent = sampleCode;
}

function applyLocale(locale) {
  currentLocale = locale;
  const dict = translations[locale];

  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelector("[data-language-toggle]").setAttribute("aria-label", dict.languageLabel);
  document.querySelector("[data-flag]").textContent = dict.flag;

  document.querySelectorAll("[data-command-tab]").forEach((button) => {
    const key = button.getAttribute("data-command-tab");
    button.textContent = dict.commandTabs[key];
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
    if (!button.dataset.copied) button.textContent = dict.copy;
  });
}

async function copyText(value, button) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  button.dataset.copied = "true";
  button.textContent = translations[currentLocale].copied;

  window.setTimeout(() => {
    delete button.dataset.copied;
    button.textContent = translations[currentLocale].copy;
  }, 1800);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  applyLocale(currentLocale === "en" ? "pt" : "en");
});

document.querySelectorAll("[data-command-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCommand = button.getAttribute("data-command-tab");
    document.querySelectorAll("[data-command-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCommand();
  });
});

document.querySelector("[data-copy-command]").addEventListener("click", (event) => {
  copyText(commands[activeCommand], event.currentTarget);
});

document.querySelector("[data-copy-sample]").addEventListener("click", (event) => {
  copyText(sampleCode, event.currentTarget);
});

renderCommand();
renderSampleCode();
applyLocale(currentLocale);
