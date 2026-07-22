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
    "nav.learn": "For Laravel Developers",
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
    "hero.secondary": "For Laravel Developers",
    "hero.designedFor": "Designed for",
    "visual.isolated": "✓ isolated module",
    "visual.layers": "hexagonal by default",
    "visual.generated": "Generated with",
    "visual.conventions": "Hexagonal",
    "visual.ready": "ports + adapters",
    "learn.kicker": "01 · For Laravel developers",
    "learn.titleA": "DDD explained for",
    "learn.titleB": "Laravel developers.",
    "learn.text":
      "You do not need to abandon Controllers, Eloquent or Artisan. DDD helps you decide where business rules, use cases and infrastructure details should live when the application stops being a simple CRUD.",
    "learn.intro.kicker": "Start here",
    "learn.intro.title": "DDD is not about creating more folders.",
    "learn.intro.text":
      "It is about making the business language visible in the code. Instead of organizing everything only by technical type, you organize important parts of the system around business capabilities.",
    "learn.comparison.before.label": "Common Laravel structure",
    "learn.comparison.before.text":
      "Works well for simple CRUD, but business rules can spread across controllers, services, models, jobs and observers.",
    "learn.comparison.after.label": "Module-oriented structure",
    "learn.comparison.after.text":
      "Keeps one business capability together and makes the responsibility of each layer explicit.",
    "learn.concepts.module.title": "Module",
    "learn.concepts.module.text":
      "A module represents a business capability, such as Billing, Orders, Inventory or Customers.",
    "learn.concepts.module.note": "Think business area, not just a folder.",
    "learn.concepts.domain.title": "Domain",
    "learn.concepts.domain.text":
      "Where entities, value objects and business rules live. This layer should not know about Laravel or Eloquent.",
    "learn.concepts.domain.note": "Example: an Invoice decides whether it can be issued.",
    "learn.concepts.application.title": "Application",
    "learn.concepts.application.text":
      "Where use cases coordinate the work: validate intention, call the domain, persist changes and return a result.",
    "learn.concepts.application.note": "Example: IssueInvoiceHandler.",
    "learn.concepts.infrastructure.title": "Infrastructure",
    "learn.concepts.infrastructure.text":
      "Where Laravel-specific details live: controllers, requests, Eloquent models, queues, integrations and adapters.",
    "learn.concepts.infrastructure.note": "Laravel stays here, at the edges.",
    "learn.map.kicker": "Laravel translation",
    "learn.map.title": "Where does my usual Laravel code go?",
    "learn.map.text":
      "The toolkit does not remove Laravel concepts. It gives each one a clearer architectural place.",
    "learn.map.head.usual": "What you know",
    "learn.map.head.place": "Where it fits",
    "learn.map.head.reason": "Why",
    "learn.map.controller": "Receives HTTP input and calls a use case.",
    "learn.map.service": "Becomes a specific use case instead of a generic service full of unrelated methods.",
    "learn.map.repository": "Represents what the application needs from persistence without depending on Eloquent.",
    "learn.map.eloquent": "Handles database details at the infrastructure edge.",
    "learn.map.rule": "Rules that define valid business behavior should stay close to the domain model.",
    "learn.whenUse.title": "Use this toolkit when...",
    "learn.whenUse.text":
      "The application has real business rules, multiple modules, long-term maintenance, integrations, or teams that need a shared architectural language.",
    "learn.whenNot.title": "Do not force it when...",
    "learn.whenNot.text":
      "You are building a tiny CRUD, a prototype, or a screen with no meaningful business behavior. Laravel's default structure may be enough.",
    "architecture.kicker": "02 · Architecture",
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
    "docs.kicker": "03 · Getting started",
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
    "contribute.kicker": "04 · Community",
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
    "nav.learn": "Para Laravel Developers",
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
    "hero.secondary": "Para Laravel Developers",
    "hero.designedFor": "Projetado para",
    "visual.isolated": "✓ módulo isolado",
    "visual.layers": "hexagonal por padrão",
    "visual.generated": "Gerado com",
    "visual.conventions": "Hexagonal",
    "visual.ready": "ports + adapters",
    "learn.kicker": "01 · Aprenda DDD",
    "learn.titleA": "DDD explicado para",
    "learn.titleB": "desenvolvedores Laravel.",
    "learn.text":
      "Você não precisa abandonar Controllers, Eloquent ou Artisan. DDD ajuda a decidir onde regras de negócio, casos de uso e detalhes de infraestrutura devem ficar quando a aplicação deixa de ser um CRUD simples.",
    "learn.intro.kicker": "Comece aqui",
    "learn.intro.title": "DDD não é sobre criar mais pastas.",
    "learn.intro.text":
      "É sobre deixar a linguagem do negócio visível no código. Em vez de organizar tudo apenas por tipo técnico, você organiza partes importantes do sistema em torno de capacidades de negócio.",
    "learn.comparison.before.label": "Estrutura Laravel comum",
    "learn.comparison.before.text":
      "Funciona bem para CRUD simples, mas regras de negócio podem se espalhar por controllers, services, models, jobs e observers.",
    "learn.comparison.after.label": "Estrutura orientada a módulos",
    "learn.comparison.after.text":
      "Mantém uma capacidade de negócio junta e deixa explícita a responsabilidade de cada camada.",
    "learn.concepts.module.title": "Módulo",
    "learn.concepts.module.text":
      "Um módulo representa uma capacidade de negócio, como Billing, Orders, Inventory ou Customers.",
    "learn.concepts.module.note": "Pense em área de negócio, não só em pasta.",
    "learn.concepts.domain.title": "Domain",
    "learn.concepts.domain.text":
      "Onde ficam entidades, value objects e regras de negócio. Essa camada não deveria conhecer Laravel nem Eloquent.",
    "learn.concepts.domain.note": "Exemplo: uma Invoice decide se pode ser emitida.",
    "learn.concepts.application.title": "Application",
    "learn.concepts.application.text":
      "Onde os casos de uso coordenam o trabalho: validam a intenção, chamam o domínio, persistem mudanças e retornam resultado.",
    "learn.concepts.application.note": "Exemplo: IssueInvoiceHandler.",
    "learn.concepts.infrastructure.title": "Infrastructure",
    "learn.concepts.infrastructure.text":
      "Onde ficam detalhes específicos do Laravel: controllers, requests, models Eloquent, filas, integrações e adapters.",
    "learn.concepts.infrastructure.note": "Laravel fica aqui, nas bordas.",
    "learn.map.kicker": "Tradução para Laravel",
    "learn.map.title": "Onde fica meu código Laravel de sempre?",
    "learn.map.text":
      "O toolkit não remove conceitos do Laravel. Ele dá a cada um deles um lugar arquitetural mais claro.",
    "learn.map.head.usual": "O que você conhece",
    "learn.map.head.place": "Onde encaixa",
    "learn.map.head.reason": "Por quê",
    "learn.map.controller": "Recebe a entrada HTTP e chama um caso de uso.",
    "learn.map.service": "Vira um caso de uso específico em vez de um service genérico cheio de métodos não relacionados.",
    "learn.map.repository": "Representa o que a aplicação precisa da persistência sem depender diretamente do Eloquent.",
    "learn.map.eloquent": "Cuida dos detalhes de banco na borda de infraestrutura.",
    "learn.map.rule": "Regras que definem comportamento válido do negócio devem ficar próximas do modelo de domínio.",
    "learn.whenUse.title": "Use este toolkit quando...",
    "learn.whenUse.text":
      "A aplicação tem regras de negócio reais, múltiplos módulos, manutenção de longo prazo, integrações ou times que precisam de uma linguagem arquitetural compartilhada.",
    "learn.whenNot.title": "Não force quando...",
    "learn.whenNot.text":
      "Você está criando um CRUD pequeno, um protótipo ou uma tela sem comportamento de negócio relevante. A estrutura padrão do Laravel pode ser suficiente.",
    "architecture.kicker": "02 · Arquitetura",
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
    "docs.kicker": "03 · Primeiros passos",
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
    "contribute.kicker": "04 · Comunidade",
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


const docsTranslations = {
  en: {
    "docsPage.kicker": "Documentation",
    "docsPage.titleA": "Laravel DDD Toolkit",
    "docsPage.titleB": "field guide.",
    "docsPage.subtitle": "A practical guide for Laravel developers: what each generated folder means, when a concept is useful, which Artisan command creates it, and how it compares with familiar Laravel patterns.",
    "docsPage.badge1": "Vertical modules",
    "docsPage.badge2": "Hexagonal by default",
    "docsPage.badge3": "Pragmatic tactical DDD",
    "docsNav.overview": "Overview",
    "docsNav.install": "Install",
    "docsNav.structure": "Generated structure",
    "docsNav.module": "Module",
    "docsNav.moduleAiDocs": "Module AI docs",
    "docsNav.entity": "Entity",
    "docsNav.valueObject": "Value Object",
    "docsNav.event": "Domain Event",
    "docsNav.exception": "Domain Exception",
    "docsNav.usecase": "Use Case",
    "docsNav.dto": "DTO",
    "docsNav.portIn": "Port In",
    "docsNav.portOut": "Port Out",
    "docsNav.controller": "Controller",
    "docsNav.request": "Request",
    "docsNav.model": "Eloquent Model",
    "docsNav.adapter": "Adapter",
    "docsNav.integration": "Integration",
    "docsNav.provider": "Provider",
    "docsNav.repository": "Repository",
    "docsNav.checks": "Checks & cache",
    "doc.overview.title": "Mental model",
    "doc.overview.text": "This toolkit is not asking you to stop using Laravel. It gives large Laravel applications a clearer place for each responsibility: HTTP on the edge, application use cases in the middle, business rules in Domain, and framework/persistence details in Infrastructure.",
    "doc.overview.callout": "The main question is not ‘where do I put this class?’. The main question is: is this business behavior, application orchestration, or infrastructure detail?",
    "doc.compare.normalTitle": "Laravel you already know",
    "doc.compare.dddTitle": "With this toolkit",
    "doc.install.title": "Installation",
    "doc.install.text": "Install the Composer package and run the installer. The installer prepares app/Modules, app/Shared, config/ddd.php, the module service provider and the project-level AGENTS.md when allowed.",
    "doc.install.note": "Start from the Getting Started section on the landing page when you only want the shortest path. Use this docs page when you want to understand each generated piece.",
    "doc.structure.title": "Default generated module structure",
    "doc.structure.text": "By default, make:module creates a vertical module with a hexagonal structure. Ports live inside Application. Adapters live inside Infrastructure. Domain/Contracts is not part of the default structure.",
    "doc.module.title": "Module",
    "doc.module.text": "A module is a business capability such as Billing, Orders, Customers or Payments. It groups code that changes together and gives the team a clear boundary for discussions, implementation and tests.",
    "doc.module.why": "In a normal Laravel app, related code is often split across app/Http, app/Models, app/Services and app/Jobs. A module keeps the Billing code close to other Billing code, even when that code uses Laravel controllers, requests, Eloquent and jobs.",
    "doc.moduleAiDocs.title": "README.md and AGENTS.md per module",
    "doc.moduleAiDocs.what": "When a module is created, the toolkit can generate documentation for humans and AI agents. The package does not use AI. It only places the developer-provided context into structured templates.",
    "doc.moduleAiDocs.note": "Use --context or --context-file to explain the module purpose, boundaries, expected use cases, important rules, integrations and what the module must not do. If no context is provided, the files are generated with placeholders.",
    "doc.entity.title": "Domain Entity",
    "doc.entity.what": "An entity has identity and behavior. It is not just a data bag. Put business decisions here when the rule belongs to the object itself.",
    "doc.entity.when": "Use it for concepts that have a lifecycle, identity and rules: Invoice, Order, Customer, Subscription, Contract.",
    "doc.valueObject.title": "Value Object",
    "doc.valueObject.what": "A value object describes a value by its attributes instead of an identity. It validates and protects important values before they spread through the system as loose strings, floats or arrays.",
    "doc.valueObject.when": "Use it for values such as Money, Email, CPF, Address, Period, Quantity or InvoiceNumber.",
    "doc.valueObject.usage": "The add method is useful because the rule stays with Money: you can add BRL to BRL, but adding BRL to USD throws an exception before an invalid total enters your invoice.",
    "doc.event.title": "Domain Event",
    "doc.event.what": "A domain event records something meaningful that already happened in the business. It is different from an Eloquent created/updated/deleted event because it speaks the business language.",
    "doc.exception.title": "Domain Exception",
    "doc.exception.what": "A domain exception represents a business rule violation. It makes invalid business behavior explicit and testable.",
    "doc.usecase.title": "Application Use Case",
    "doc.usecase.what": "A use case coordinates one user or system intention. It receives data, loads or creates domain objects, calls domain behavior, persists through ports and returns a result.",
    "doc.usecase.tip": "Prefer specific use cases such as IssueInvoice or CancelOrder instead of one large InvoiceService with unrelated methods.",
    "doc.dto.title": "Application DTO",
    "doc.dto.what": "A DTO carries data into or out of a use case without coupling the use case to HTTP, FormRequest, Eloquent Model or JSON Resource.",
    "doc.dto.resourceNote": "Laravel Resources are excellent for shaping HTTP responses. DTOs are different: they are application input/output objects that can be used by controllers, jobs, commands, tests or queues. A controller may create a DTO for the use case and still return a Laravel Resource to the client.",
    "doc.portIn.title": "Application Port In",
    "doc.portIn.what": "An inbound port is an interface for entering the application layer. It is useful when more than one entry point should call the same use case or when controllers should depend on a stable application contract.",
    "doc.portIn.why": "Example: an invoice may be issued by an HTTP controller today and by a queue job tomorrow. Both can depend on IssueInvoiceUseCase instead of knowing the concrete handler class.",
    "doc.portOut.title": "Application Port Out",
    "doc.portOut.what": "An outbound port describes something the application needs from outside itself: persistence, cache, file storage, payment gateway, fiscal API, email sender or another external service.",
    "doc.portOut.note": "In this toolkit, repository interfaces in a hexagonal module usually belong here, not in Domain/Contracts. The use case depends on the interface; Infrastructure provides the Eloquent/API implementation through the service container.",
    "doc.controller.title": "Infrastructure HTTP Controller",
    "doc.controller.what": "A controller is an HTTP adapter. It translates the request into application input, calls a use case and returns a response. It should not own business rules.",
    "doc.request.title": "Infrastructure HTTP Request",
    "doc.request.what": "A Form Request validates transport-level input: required fields, formats, primitive constraints and authorization for the HTTP request. Domain invariants still belong in Domain.",
    "doc.model.title": "Infrastructure Eloquent Model",
    "doc.model.what": "Eloquent models are allowed, but they live in Infrastructure because Active Record is a persistence concern. Use them to talk to the database, not as the main place for complex business rules.",
    "doc.model.castNote": "Custom casts are still useful. They are an Infrastructure/Persistence technique. They can serialize simple value objects in an Eloquent model, but they do not replace an adapter when you need to map a full aggregate and keep Application/Domain independent from Eloquent.",
    "doc.adapter.title": "Infrastructure Adapter",
    "doc.adapter.what": "An adapter implements a port. For example, EloquentInvoiceRepository implements the InvoiceRepository outbound port using Eloquent. The application depends on the port; the infrastructure provides the implementation.",
    "doc.adapter.castAnswer": "For simple CRUD, an adapter may be unnecessary. For a rich domain model, the adapter is the boundary that translates between Eloquent persistence shape and domain shape. Custom casts help serialize values; adapters protect the use case from knowing that Eloquent exists.",
    "doc.integration.title": "Infrastructure Integration",
    "doc.integration.what": "An integration keeps vendor-specific APIs, SDK payloads and external concepts away from the domain. When it protects the domain language from the vendor language, it acts as an anti-corruption layer.",
    "doc.integration.args": "The command uses two arguments: Payment is the module name; Stripe is the integration name. The generated integration folder can contain a client, adapter, mapper, DTOs and exceptions for that vendor.",
    "doc.provider.title": "Infrastructure Provider",
    "doc.provider.what": "A module service provider keeps wiring close to the module. It can bind ports to adapters, inbound ports to handlers, external clients to concrete implementations, module-specific services, config-driven factories or gateways.",
    "doc.provider.noRepository": "If there is no repository, the provider is still useful. It may bind an inbound port to a use case handler, a payment/fiscal gateway port to an integration adapter, or a configured HTTP client to a vendor client.",
    "doc.repository.title": "Repository",
    "doc.repository.what": "Repositories are optional. Use them when they hide meaningful persistence complexity or protect the application from query details. Do not create repositories just to wrap every Eloquent call.",
    "doc.repository.args": "The first argument is the module name. The second argument is the repository class name. In hexagonal modules, prefer Application/Ports/Out + Infrastructure Adapter when you need a boundary.",
    "doc.checks.title": "Architecture checks and discovery cache",
    "doc.checks.what": "Use ddd:check to validate layer dependencies. Use ddd:cache in production to cache module discovery, and ddd:clear when the module manifest should be regenerated.",
    "doc.block.path": "Path",
    "doc.block.command": "Generate with",
    "doc.block.example": "Example implementation",
    "doc.block.notes": "Notes",
    "doc.block.output": "Generated files",
    "doc.block.usage": "How to use it",
    "doc.block.whenUse": "Why use it?",
    "doc.next.title": "How to read this documentation",
    "doc.next.text": "Start with the Laravel mental model you already know, then add only the DDD pieces that solve a real problem. The toolkit is strongest when it explains why a boundary exists, not only where a file should be generated."
  },
  pt: {
    "docsPage.kicker": "Documentação",
    "docsPage.titleA": "Laravel DDD Toolkit",
    "docsPage.titleB": "guia prático.",
    "docsPage.subtitle": "Um guia prático para desenvolvedores Laravel: o que cada pasta gerada significa, quando um conceito é útil, qual comando Artisan cria cada peça e como isso se compara aos padrões conhecidos do Laravel.",
    "docsPage.badge1": "Módulos verticais",
    "docsPage.badge2": "Hexagonal por padrão",
    "docsPage.badge3": "DDD tático pragmático",
    "docsNav.overview": "Visão geral",
    "docsNav.install": "Instalação",
    "docsNav.structure": "Estrutura gerada",
    "docsNav.module": "Módulo",
    "docsNav.moduleAiDocs": "Docs IA do módulo",
    "docsNav.entity": "Entidade",
    "docsNav.valueObject": "Value Object",
    "docsNav.event": "Evento de domínio",
    "docsNav.exception": "Exceção de domínio",
    "docsNav.usecase": "Caso de uso",
    "docsNav.dto": "DTO",
    "docsNav.portIn": "Port In",
    "docsNav.portOut": "Port Out",
    "docsNav.controller": "Controller",
    "docsNav.request": "Request",
    "docsNav.model": "Model Eloquent",
    "docsNav.adapter": "Adapter",
    "docsNav.integration": "Integração",
    "docsNav.provider": "Provider",
    "docsNav.repository": "Repository",
    "docsNav.checks": "Checks e cache",
    "doc.overview.title": "Modelo mental",
    "doc.overview.text": "Este toolkit não pede para você parar de usar Laravel. Ele dá a aplicações Laravel grandes um lugar mais claro para cada responsabilidade: HTTP na borda, casos de uso no meio, regras de negócio no Domain e detalhes de framework/persistência na Infrastructure.",
    "doc.overview.callout": "A pergunta principal não é ‘em qual pasta coloco esta classe?’. A pergunta principal é: isto é comportamento de negócio, orquestração da aplicação ou detalhe de infraestrutura?",
    "doc.compare.normalTitle": "Laravel que você já conhece",
    "doc.compare.dddTitle": "Com este toolkit",
    "doc.install.title": "Instalação",
    "doc.install.text": "Instale o pacote pelo Composer e rode o instalador. O instalador prepara app/Modules, app/Shared, config/ddd.php, o provider de módulos e o AGENTS.md global quando permitido.",
    "doc.install.note": "Use a seção Getting Started da landing page quando quiser apenas o caminho mais curto. Use esta página quando quiser entender cada peça gerada.",
    "doc.structure.title": "Estrutura padrão gerada pelo módulo",
    "doc.structure.text": "Por padrão, make:module cria um módulo vertical com estrutura hexagonal. Ports ficam em Application. Adapters ficam em Infrastructure. Domain/Contracts não faz parte da estrutura padrão.",
    "doc.module.title": "Módulo",
    "doc.module.text": "Um módulo é uma capacidade de negócio, como Billing, Orders, Customers ou Payments. Ele agrupa código que muda junto e dá ao time uma fronteira clara para discussão, implementação e testes.",
    "doc.module.why": "Em um Laravel comum, código relacionado costuma ficar espalhado entre app/Http, app/Models, app/Services e app/Jobs. Um módulo mantém o código de Billing perto de outro código de Billing, mesmo quando esse código usa controllers, requests, Eloquent e jobs do Laravel.",
    "doc.moduleAiDocs.title": "README.md e AGENTS.md por módulo",
    "doc.moduleAiDocs.what": "Ao criar um módulo, o toolkit pode gerar documentação para humanos e agentes de IA. O pacote não usa IA. Ele apenas coloca o contexto informado pelo desenvolvedor dentro de templates estruturados.",
    "doc.moduleAiDocs.note": "Use --context ou --context-file para explicar propósito do módulo, fronteiras, casos de uso esperados, regras importantes, integrações e o que o módulo não deve fazer. Sem contexto, os arquivos são gerados com placeholders.",
    "doc.entity.title": "Entidade de domínio",
    "doc.entity.what": "Uma entidade tem identidade e comportamento. Ela não é apenas um pacote de dados. Coloque aqui decisões de negócio quando a regra pertence ao próprio objeto.",
    "doc.entity.when": "Use para conceitos que têm ciclo de vida, identidade e regras: Invoice, Order, Customer, Subscription, Contract.",
    "doc.valueObject.title": "Value Object",
    "doc.valueObject.what": "Um value object descreve um valor pelos seus atributos, não por uma identidade. Ele valida e protege valores importantes antes que eles se espalhem pelo sistema como strings, floats ou arrays soltos.",
    "doc.valueObject.when": "Use para valores como Money, Email, CPF, Address, Period, Quantity ou InvoiceNumber.",
    "doc.valueObject.usage": "O método add é útil porque a regra fica dentro de Money: você pode somar BRL com BRL, mas somar BRL com USD gera exceção antes de um total inválido entrar na invoice.",
    "doc.event.title": "Evento de domínio",
    "doc.event.what": "Um evento de domínio registra algo relevante que já aconteceu no negócio. Ele é diferente de um evento created/updated/deleted do Eloquent porque fala a linguagem do negócio.",
    "doc.exception.title": "Exceção de domínio",
    "doc.exception.what": "Uma exceção de domínio representa violação de regra de negócio. Ela deixa comportamentos inválidos explícitos e testáveis.",
    "doc.usecase.title": "Caso de uso da aplicação",
    "doc.usecase.what": "Um caso de uso coordena uma intenção do usuário ou do sistema. Ele recebe dados, carrega ou cria objetos de domínio, chama comportamento do domínio, persiste por portas e retorna um resultado.",
    "doc.usecase.tip": "Prefira casos de uso específicos como IssueInvoice ou CancelOrder em vez de um InvoiceService grande com métodos não relacionados.",
    "doc.dto.title": "DTO da aplicação",
    "doc.dto.what": "Um DTO carrega dados para dentro ou para fora de um caso de uso sem acoplar o caso de uso a HTTP, FormRequest, Model Eloquent ou JSON Resource.",
    "doc.dto.resourceNote": "Laravel Resources são ótimos para formatar respostas HTTP. DTOs são diferentes: são objetos de entrada/saída da aplicação que podem ser usados por controllers, jobs, commands, testes ou filas. Um controller pode criar um DTO para o caso de uso e ainda retornar um Laravel Resource para o cliente.",
    "doc.portIn.title": "Application Port In",
    "doc.portIn.what": "Uma porta inbound é uma interface de entrada para a camada Application. Ela é útil quando mais de um ponto de entrada deve chamar o mesmo caso de uso ou quando controllers devem depender de um contrato estável da aplicação.",
    "doc.portIn.why": "Exemplo: uma invoice pode ser emitida hoje por um controller HTTP e amanhã por um job. Ambos podem depender de IssueInvoiceUseCase em vez de conhecer a classe concreta do handler.",
    "doc.portOut.title": "Application Port Out",
    "doc.portOut.what": "Uma porta outbound descreve algo que a aplicação precisa de fora dela: persistência, cache, storage, gateway de pagamento, API fiscal, envio de e-mail ou outro serviço externo.",
    "doc.portOut.note": "Neste toolkit, interfaces de repository em um módulo hexagonal normalmente ficam aqui, não em Domain/Contracts. O caso de uso depende da interface; a Infrastructure fornece a implementação Eloquent/API pelo service container.",
    "doc.controller.title": "Controller HTTP de infraestrutura",
    "doc.controller.what": "Um controller é um adapter HTTP. Ele traduz a request em entrada da aplicação, chama um caso de uso e devolve uma resposta. Ele não deve ser dono de regras de negócio.",
    "doc.request.title": "Request HTTP de infraestrutura",
    "doc.request.what": "Um Form Request valida entrada de transporte: campos obrigatórios, formatos, restrições primitivas e autorização da requisição HTTP. Invariantes de domínio continuam no Domain.",
    "doc.model.title": "Model Eloquent de infraestrutura",
    "doc.model.what": "Models Eloquent são permitidos, mas ficam em Infrastructure porque Active Record é uma preocupação de persistência. Use-os para falar com o banco, não como principal lugar de regras complexas de negócio.",
    "doc.model.castNote": "Custom casts continuam úteis. Eles são uma técnica de Infrastructure/Persistence. Podem serializar value objects simples em um model Eloquent, mas não substituem um adapter quando você precisa mapear um aggregate completo e manter Application/Domain independentes do Eloquent.",
    "doc.adapter.title": "Adapter de infraestrutura",
    "doc.adapter.what": "Um adapter implementa uma porta. Por exemplo, EloquentInvoiceRepository implementa a porta outbound InvoiceRepository usando Eloquent. A aplicação depende da porta; a infraestrutura fornece a implementação.",
    "doc.adapter.castAnswer": "Para CRUD simples, um adapter pode ser desnecessário. Para um modelo de domínio rico, o adapter é a fronteira que traduz entre o formato de persistência do Eloquent e o formato do domínio. Custom casts ajudam a serializar valores; adapters impedem que o caso de uso saiba que Eloquent existe.",
    "doc.integration.title": "Integração de infraestrutura",
    "doc.integration.what": "Uma integração mantém APIs de fornecedor, payloads de SDK e conceitos externos longe do domínio. Quando protege a linguagem do domínio da linguagem do fornecedor, ela atua como uma camada anticorrupção.",
    "doc.integration.args": "O comando usa dois argumentos: Payment é o nome do módulo; Stripe é o nome da integração. A pasta gerada pode conter client, adapter, mapper, DTOs e exceptions daquele fornecedor.",
    "doc.provider.title": "Provider de infraestrutura",
    "doc.provider.what": "Um service provider do módulo mantém o wiring perto do módulo. Ele pode registrar bindings entre ports e adapters, inbound ports e handlers, clients externos e implementações concretas, serviços específicos do módulo, factories configuradas ou gateways.",
    "doc.provider.noRepository": "Mesmo sem repository, o provider continua útil. Ele pode vincular uma porta inbound ao handler do caso de uso, uma porta de gateway fiscal/pagamento a um adapter de integração ou um client HTTP configurado a um client de fornecedor.",
    "doc.repository.title": "Repository",
    "doc.repository.what": "Repositories são opcionais. Use quando esconderem complexidade real de persistência ou protegerem a aplicação de detalhes de query. Não crie repositories apenas para encapsular todo Eloquent.",
    "doc.repository.args": "O primeiro argumento é o nome do módulo. O segundo argumento é o nome da classe repository. Em módulos hexagonais, prefira Application/Ports/Out + Infrastructure Adapter quando precisar de uma fronteira.",
    "doc.checks.title": "Checks arquiteturais e cache de descoberta",
    "doc.checks.what": "Use ddd:check para validar dependências entre camadas. Use ddd:cache em produção para cachear a descoberta de módulos e ddd:clear quando o manifesto precisar ser regenerado.",
    "doc.block.path": "Caminho",
    "doc.block.command": "Gerar com",
    "doc.block.example": "Exemplo de implementação",
    "doc.block.notes": "Observações",
    "doc.block.output": "Arquivos gerados",
    "doc.block.usage": "Como usar",
    "doc.block.whenUse": "Por que usar?",
    "doc.next.title": "Como ler esta documentação",
    "doc.next.text": "Comece pelo modelo mental do Laravel que você já conhece, depois adicione apenas as peças de DDD que resolvem um problema real. O toolkit é mais forte quando explica por que uma fronteira existe, não apenas onde um arquivo deve ser gerado."
  }
};

Object.assign(translations.en, docsTranslations.en);
Object.assign(translations.pt, docsTranslations.pt);


Object.assign(translations.en, {
  "docsNav.routes": "Routes",
  "docsNav.presets": "Presets",
  "doc.presets.title": "Presets",
  "doc.presets.what": "Hexagonal is the default preset. Minimal creates only the three main layers. Tactical creates DDD tactical folders without explicit Ports and Adapters. Full adds extra infrastructure folders such as jobs, listeners, policies, repositories, integrations and providers.",
  "doc.routes.title": "Infrastructure routes.php",
  "doc.routes.what": "Each module may define its HTTP routes near its HTTP controllers. The generated ModulesServiceProvider discovers these route files automatically, so the root routes file does not need to know every module route."
});

Object.assign(translations.pt, {
  "docsNav.routes": "Rotas",
  "docsNav.presets": "Presets",
  "doc.presets.title": "Presets",
  "doc.presets.what": "Hexagonal é o preset padrão. Minimal cria apenas as três camadas principais. Tactical cria pastas de DDD tático sem Ports e Adapters explícitos. Full adiciona pastas extras de infraestrutura como jobs, listeners, policies, repositories, integrações e providers.",
  "doc.routes.title": "Infrastructure routes.php",
  "doc.routes.what": "Cada módulo pode definir suas rotas HTTP perto dos seus controllers HTTP. O ModulesServiceProvider gerado descobre esses arquivos de rota automaticamente, então o arquivo de rotas raiz não precisa conhecer todas as rotas de todos os módulos."
});


Object.assign(translations.en, {
  "footer.creditPrefix": "Crafted by",
  "footer.github": "GitHub",
  "docsNav.shared": "Shared",
  "docsNav.mapper": "Mapper",
  "docsNav.dailyCases": "Day-to-day cases",
  "docsNav.philosophy": "Philosophy",
  "doc.shared.title": "Shared folder",
  "doc.shared.what": "app/Shared is for code that is truly reusable across modules without belonging to a specific business capability. It is not a dumping ground for anything used twice.",
  "doc.shared.warning": "If a concept has different meaning in Billing, Sales or Support, keep it inside the module. Shared should contain generic, stable and carefully reviewed concepts.",
  "doc.shared.when": "Use Shared for technical support code or value objects whose meaning is really the same everywhere, such as Email, Cpf, a Clock abstraction or a UUID generator. Do not move domain rules to Shared just to avoid duplication too early.",
  "doc.entity.addItemsNote": "Yes: when the operation is meaningful to Invoice, prefer invoice.addItems(items) and keep the loop inside the entity. The use case says what should happen; the entity controls how its internal state changes.",
  "doc.event.what": "A domain event records something meaningful that already happened in the business, such as InvoiceIssued. It is not the same as an Eloquent observer: observers react to database lifecycle events; domain events speak the business language and can be raised before the persistence detail is even considered.",
  "doc.event.observerNote": "You may dispatch the domain event through Laravel's event dispatcher from the application layer, but the event itself should come from the domain behavior, not from an Eloquent created/updated hook.",
  "doc.exception.what": "A domain exception represents a violated business rule. It is useful when the system attempted an action that the business does not allow, not when a database or HTTP validation failed.",
  "doc.exception.when": "Use domain exceptions to make invalid business behavior explicit: issuing an invoice without items, canceling an already paid order, changing a closed contract, or approving a payment with inconsistent amount.",
  "doc.usecase.what": "A use case coordinates one user or system intention. It should not contain every business detail. When a rule belongs to Invoice, call a method on Invoice and let the entity protect its own state.",
  "doc.portOut.eloquentTitle": "Can I just use Eloquent directly?",
  "doc.portOut.note": "The toolkit does not force repositories. For simple CRUD, direct Eloquent in Infrastructure can be enough. Use a Port Out when Application needs to persist a domain object without importing Eloquent or when persistence involves mapping, legacy tables, APIs, cache or tests.",
  "doc.mapper.title": "Persistence Mapper",
  "doc.mapper.what": "A mapper translates between the persistence model shape and the domain model shape. It is usually called by an adapter, not by controllers or use cases.",
  "doc.mapper.note": "Use a mapper when the database representation is not identical to the domain object: aggregates with children, value objects, status objects, legacy columns, JSON fields or multiple tables. For very simple models, Eloquent casts may be enough.",
  "doc.provider.what": "A module service provider is the module's wiring point. It tells Laravel which concrete class should be used for an interface and keeps that decision close to the module that owns it.",
  "doc.provider.noRepository": "Even without a repository, the provider is useful. It can bind inbound ports to handlers, external service ports to integration adapters, configured clients, factories, module-specific singletons and feature-specific implementations.",
  "doc.repository.args": "The first argument is always the module name. The second argument is the repository/resource class name. In hexagonal modules, prefer Application/Ports/Out + Infrastructure Adapter when you need a boundary; use make:repository only when the repository pattern itself is useful.",
  "doc.daily.title": "Day-to-day cases",
  "doc.daily.what": "The toolkit has many pieces, but you do not need all of them for every task. Pick the smallest set that protects the real complexity of the feature.",
  "doc.daily.simple.title": "Simple CRUD screen",
  "doc.daily.simple.text": "Use normal Laravel. A controller, Form Request, Eloquent model and Resource may be enough. Do not create ports and adapters just for a table maintenance screen.",
  "doc.daily.rule.title": "Feature with business rules",
  "doc.daily.rule.text": "Use Entity, Value Object and Use Case when the object must protect behavior, not just store data. Example: an invoice decides whether it can be issued.",
  "doc.daily.external.title": "External service or vendor API",
  "doc.daily.external.text": "Use a Port Out and an Infrastructure Adapter when the application needs something external, such as payment, fiscal authorization, storage, email or a legacy system.",
  "doc.daily.multipleEntry.title": "Same action from HTTP and queue",
  "doc.daily.multipleEntry.text": "Use a Port In when multiple delivery mechanisms should call the same application contract without depending on a concrete handler class.",
  "doc.daily.response.title": "HTTP response formatting",
  "doc.daily.response.text": "Use DTOs for application input or output and Laravel Resources for HTTP response formatting. They solve different problems and can be used together.",
  "doc.daily.persistence.title": "Complex persistence mapping",
  "doc.daily.persistence.text": "Use Adapter + Mapper when a domain aggregate does not match one Eloquent model directly, or when persistence needs legacy tables, children, cache, projections or external storage.",
  "doc.philosophy.title": "Philosophy and software practices",
  "doc.philosophy.what": "Laravel DDD Toolkit is not about adding ceremony. It is about controlling coupling as the application grows and making business decisions visible in code.",
  "doc.philosophy.callout": "Start simple. Add architectural boundaries when they explain and protect something real.",
  "doc.philosophy.p1": "Domain decides: rules that define valid business behavior should live near the domain model, not hidden in controllers, generic services or observers.",
  "doc.philosophy.p2": "Use cases orchestrate: they express one intention, call the domain, use ports when they need the outside world, and return a result.",
  "doc.philosophy.p3": "Infrastructure adapts: Laravel, Eloquent, queues, HTTP, SDKs and external APIs stay at the edges, where they can change without rewriting the business model.",
  "doc.philosophy.p4": "Pragmatism wins: if a screen is simple CRUD, keep it simple. If a feature has rules, integrations and long-term maintenance risk, make the boundary explicit."
});

Object.assign(translations.pt, {
  "footer.creditPrefix": "Criado por",
  "footer.github": "GitHub",
  "docsNav.shared": "Shared",
  "docsNav.mapper": "Mapper",
  "docsNav.dailyCases": "Casos do dia a dia",
  "docsNav.philosophy": "Filosofia",
  "doc.shared.title": "Pasta Shared",
  "doc.shared.what": "app/Shared serve para código realmente reutilizável entre módulos sem pertencer a uma capacidade de negócio específica. Não é uma pasta para jogar qualquer coisa usada duas vezes.",
  "doc.shared.warning": "Se um conceito tem significado diferente em Billing, Sales ou Support, mantenha dentro do módulo. Shared deve conter conceitos genéricos, estáveis e revisados com cuidado.",
  "doc.shared.when": "Use Shared para código técnico de apoio ou value objects cujo significado seja realmente o mesmo em todos os lugares, como Email, Cpf, uma abstração de Clock ou um gerador de UUID. Não mova regras de domínio para Shared cedo demais só para evitar duplicação.",
  "doc.entity.addItemsNote": "Sim: quando a operação é significativa para Invoice, prefira invoice.addItems(items) e mantenha o foreach dentro da entidade. O caso de uso diz o que deve acontecer; a entidade controla como seu estado interno muda.",
  "doc.event.what": "Um evento de domínio registra algo relevante que já aconteceu no negócio, como InvoiceIssued. Não é a mesma coisa que um observer do Eloquent: observers reagem ao ciclo de vida do banco; eventos de domínio falam a linguagem do negócio e podem nascer antes mesmo do detalhe de persistência ser considerado.",
  "doc.event.observerNote": "Você pode despachar o evento de domínio pelo dispatcher de eventos do Laravel a partir da camada de aplicação, mas o evento em si deveria nascer do comportamento do domínio, não de um hook created/updated do Eloquent.",
  "doc.exception.what": "Uma exceção de domínio representa uma regra de negócio violada. Ela é útil quando o sistema tentou executar uma ação que o negócio não permite, não quando uma validação HTTP ou erro de banco falhou.",
  "doc.exception.when": "Use domain exceptions para deixar comportamentos inválidos explícitos: emitir invoice sem itens, cancelar pedido já pago, alterar contrato fechado ou aprovar pagamento com valor inconsistente.",
  "doc.usecase.what": "Um caso de uso coordena uma intenção do usuário ou do sistema. Ele não deve conter todos os detalhes de negócio. Quando uma regra pertence à Invoice, chame um método em Invoice e deixe a entidade proteger o próprio estado.",
  "doc.portOut.eloquentTitle": "Posso usar Eloquent diretamente?",
  "doc.portOut.note": "O toolkit não obriga repositories. Para CRUD simples, Eloquent direto na Infrastructure pode ser suficiente. Use uma Port Out quando a Application precisa persistir um objeto de domínio sem importar Eloquent ou quando a persistência envolve mapeamento, tabelas legadas, APIs, cache ou testes.",
  "doc.mapper.title": "Mapper de persistência",
  "doc.mapper.what": "Um mapper traduz entre o formato do model de persistência e o formato do modelo de domínio. Normalmente ele é chamado por um adapter, não por controllers ou use cases.",
  "doc.mapper.note": "Use mapper quando a representação no banco não é idêntica ao objeto de domínio: aggregates com filhos, value objects, objetos de status, colunas legadas, campos JSON ou múltiplas tabelas. Para models muito simples, casts do Eloquent podem bastar.",
  "doc.provider.what": "Um service provider do módulo é o ponto de wiring do módulo. Ele diz ao Laravel qual classe concreta deve ser usada para uma interface e mantém essa decisão perto do módulo dono dela.",
  "doc.provider.noRepository": "Mesmo sem repository, o provider é útil. Ele pode vincular ports inbound a handlers, ports de serviço externo a adapters de integração, clients configurados, factories, singletons específicos do módulo e implementações específicas de uma feature.",
  "doc.repository.args": "O primeiro argumento é sempre o nome do módulo. O segundo argumento é o nome da classe/recurso repository. Em módulos hexagonais, prefira Application/Ports/Out + Infrastructure Adapter quando precisar de uma fronteira; use make:repository apenas quando o padrão repository em si for útil.",
  "doc.daily.title": "Casos do dia a dia",
  "doc.daily.what": "O toolkit tem muitas peças, mas você não precisa usar todas em toda tarefa. Escolha o menor conjunto que protege a complexidade real da feature.",
  "doc.daily.simple.title": "Tela CRUD simples",
  "doc.daily.simple.text": "Use Laravel normal. Controller, Form Request, Model Eloquent e Resource podem ser suficientes. Não crie ports e adapters só para uma tela de manutenção de tabela.",
  "doc.daily.rule.title": "Feature com regras de negócio",
  "doc.daily.rule.text": "Use Entity, Value Object e Use Case quando o objeto precisa proteger comportamento, não apenas guardar dados. Exemplo: uma invoice decide se pode ser emitida.",
  "doc.daily.external.title": "Serviço externo ou API de fornecedor",
  "doc.daily.external.text": "Use Port Out e Infrastructure Adapter quando a aplicação precisa de algo externo, como pagamento, autorização fiscal, storage, e-mail ou sistema legado.",
  "doc.daily.multipleEntry.title": "Mesma ação por HTTP e fila",
  "doc.daily.multipleEntry.text": "Use Port In quando múltiplos mecanismos de entrega devem chamar o mesmo contrato da aplicação sem depender da classe concreta do handler.",
  "doc.daily.response.title": "Formatação de resposta HTTP",
  "doc.daily.response.text": "Use DTOs para entrada ou saída da aplicação e Laravel Resources para formatar resposta HTTP. Eles resolvem problemas diferentes e podem ser usados juntos.",
  "doc.daily.persistence.title": "Mapeamento de persistência complexo",
  "doc.daily.persistence.text": "Use Adapter + Mapper quando um aggregate de domínio não corresponde diretamente a um único model Eloquent, ou quando a persistência envolve tabelas legadas, filhos, cache, projections ou storage externo.",
  "doc.philosophy.title": "Filosofia e boas práticas de software",
  "doc.philosophy.what": "Laravel DDD Toolkit não é sobre adicionar cerimônia. É sobre controlar acoplamento conforme a aplicação cresce e tornar decisões de negócio visíveis no código.",
  "doc.philosophy.callout": "Comece simples. Adicione fronteiras arquiteturais quando elas explicarem e protegerem algo real.",
  "doc.philosophy.p1": "O domínio decide: regras que definem comportamento válido de negócio devem ficar perto do modelo de domínio, não escondidas em controllers, services genéricos ou observers.",
  "doc.philosophy.p2": "Casos de uso orquestram: eles expressam uma intenção, chamam o domínio, usam ports quando precisam do mundo externo e retornam um resultado.",
  "doc.philosophy.p3": "A infraestrutura adapta: Laravel, Eloquent, filas, HTTP, SDKs e APIs externas ficam nas bordas, onde podem mudar sem reescrever o modelo de negócio.",
  "doc.philosophy.p4": "O pragmatismo vence: se a tela é CRUD simples, mantenha simples. Se a feature tem regras, integrações e risco de manutenção de longo prazo, torne a fronteira explícita."
});

let currentLocale = "en";
let activeCommand = "install";

function renderCommand() {
  const output = document.querySelector("[data-command-output]");
  if (!output) return;
  output.innerHTML = commands[activeCommand]
    .split("\n")
    .map((line) => `<span><b>$</b> ${escapeHtml(line)}</span>`)
    .join("\n");
}

function renderSampleCode() {
  const output = document.querySelector("[data-sample-code]");
  if (!output) return;
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

  const languageToggle = document.querySelector("[data-language-toggle]");
  const flag = document.querySelector("[data-flag]");
  if (languageToggle) languageToggle.setAttribute("aria-label", dict.languageLabel);
  if (flag) flag.textContent = dict.flag;

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

const languageToggle = document.querySelector("[data-language-toggle]");
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLocale(currentLocale === "en" ? "pt" : "en");
  });
}

document.querySelectorAll("[data-command-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCommand = button.getAttribute("data-command-tab");
    document.querySelectorAll("[data-command-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCommand();
  });
});

const copyCommandButton = document.querySelector("[data-copy-command]");
if (copyCommandButton) {
  copyCommandButton.addEventListener("click", (event) => {
    copyText(commands[activeCommand], event.currentTarget);
  });
}

const copySampleButton = document.querySelector("[data-copy-sample]");
if (copySampleButton) {
  copySampleButton.addEventListener("click", (event) => {
    copyText(sampleCode, event.currentTarget);
  });
}

renderCommand();
renderSampleCode();
applyLocale(currentLocale);
