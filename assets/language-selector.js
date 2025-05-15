class LanguageSelector {
	setLang(lang)
	{
		var l = lang.toLowerCase();
		localStorage.setItem('lang', l);

		return true;
	}
	getLang()
	{
		var lang = localStorage.getItem('lang');
		if (lang != null) {
			return lang;
		} else {
			return (navigator.language || navigator.userLanguage).toLowerCase();
		}
	}
	removeLang()
	{
		localStorage.removeItem('lang');

		return true;
	}
	loadLang()
	{	
		var l = this.getLang();
		var strs = lang[l];

		return strs !== undefined ? strs : lang['en'];
	}
	parse()
	{
		var rtl = ['ar', 'ur', 'fa', 'he', 'arc', 'az', 'dv', 'arabic', 'aramaic', 'azeri', 'maldivian', 'dhivehi', 'hebrew', 'kurdish', 'persian', 'urdu'
		];
		var lang = this.loadLang();
		var len = lang.length - 1;
		var keys = Object.keys(lang);
		var values = Object.values(lang);

		for (var i = 0; i <= keys.length - 1; i++) {
			$("body").children().each(function () {
		    	$(this).html( $(this).html().replace(keys[i],values[i]) );
			});					
		}
		if (rtl.includes(this.getLang())) {
			document.body.style.direction = 'rtl';
		}
	}
}

class CarrerrLanguage {
	getAmbev(lang){
		var date = '';
		var description = '';

		switch(lang){
			case 'en':
				date = '09/2021 - Now';
				description = 'Responsible for defining and evolving the architecture of a strategic system focused on goal and KPI management across all Ambev factories. Operating in a high-scale environment with an emphasis on performance and efficiency in processing millions of data points. Technical leadership of the team, ensuring the adoption of software engineering best practices, architectural standards definition, code review, and support for developers technical growth. Close collaboration with stakeholders to align technical solutions with business objectives, with a strong focus on scalability, observability, and data governance.';
			break;
			case 'pt':
				date = '09/2021 - Atual';
				description = 'Responsável pela definição e evolução da arquitetura de um sistema estratégico voltado à gestão de metas e KPIs de todas as fábricas da Ambev. Atuação em um ambiente de alta escala, com foco em performance e eficiência no processamento de milhões de dados. Liderança técnica do time, garantindo a adoção de boas práticas de engenharia de software, definição de padrões arquiteturais, revisão de código e suporte à evolução técnica dos desenvolvedores. Colaboração próxima com stakeholders para alinhar soluções técnicas aos objetivos de negócio, com ênfase em escalabilidade, observabilidade e governança de dados.';
			break;
		}

		return {
			date: date,
			description: description
		};
	}
	getPb(lang){
		var date = '03/2021 - 09/2021';
		var description = '';

		switch(lang){
			case 'en':
				description = 'Responsible for microservice and APIs creation in .NET, maintenance of financial systems (bug fixes/features). Working with .NET Core, SqlServer, Rest, Microservices, Azure, ServiceBus, SignalR.';
			break;
			case 'pt':
				description = 'Trabalhei como desenvolvedor .NET no PB, lá cuidavamos do produto que era responsável pelas ações dos usuarios (empréstimo, investimentos, etc).';
			break;
		}

		return {
			date: date,
			description: description
		};
	}
	getBne(lang){
		var date = '06/2018 - 03/2021';
		var description = '';

		switch(lang){
			case 'en':
				description = 'Responsible for microservice and APIs creation in .NET, quality job service maintenance, solving website bugs and implementing features, have analytic vision to decide about technologies that will be used in future projects. Working with .NET Core/Framework, SQLServer, PostgreSQL, MongoDB, REST/GraphQL, Angular, RabbitMq, Azure.';
			break;
			case 'pt':
				description = 'Trabalhei como desenvolvedor .NET no BNE, lá cuidavamos de vários produtos da empresa, principalmente sites de emprego e apps voltados a área de recursos humanos.';
			break;
		}

		return {
			date: date,
			description: description
		};
	}
	getTj(lang){
		var date = '02/2018 - 06/2021';
		var description = '';

		switch(lang){
			case 'en':
				description = 'Responsible for auxiliary in part of computing, helping with excel sheets, maintenance of databases and emission of certificates to public servers.';
			break;
			case 'pt':
				description = 'Trabalhei como Estagiario de TI no TJPR, lá eu era  Responsável pelo auxílio na parte de Informática, ajudando com a elaboração de planilhas no Excel, Inserção de alunos da escola no banco de dados, cadastramento de cursos e emissão de certificados para os servidores.';
			break;
		}

		return {
			date: date,
			description: description
		};
	}
}

class SkillLanguage {
	getText(lang, skill){
		switch(lang){
			case 'en':
				return this.getTextEnglish(skill);
			case 'pt':
				return this.getTextPortuguese(skill);
		}
	}
	getTextEnglish(skill){
		switch(skill){
			case 'c-sharp':
				return 'C# is an object-oriented and component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language for creating and using software components.';
			case 'dot-net':
				return '.NET is an open source developer platform created by Microsoft for creating many different types of applications.';
			case 'java-script':
				return 'JavaScript is a programming language that allows you to implement dynamic elements on web pages.';
			case 'sql-server':
				return 'Microsoft SQL Server is a relational database management system (DBMS) developed by Sybase in partnership with Microsoft.';
			case 'pg-sql':
				return 'PostgreSQL is a related database manager that greatly optimizes the work of those who need to manage information at these levels.';
			case 'mongo-db':
				return 'MongoDB is a document database with the scalability and flexibility you want along with the querying and indexing you need.';
			case 'azure':
				return 'Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft that provides access, management, and development of applications and services through global data centers. It provides software as a service (SaaS), platform as a service (PaaS), and infrastructure as a service (IaaS), and supports many different programming languages, tools, and frameworks, including Microsoft-specific and third-party software and systems.';
			case 'git':
				return 'Git is a mature and actively maintained open source revision control system used by thousands of developers around the world.';
			case 'html':
				return 'HTML is a markup language, where we mark elements to define what information the page will display.';
			case 'css':
				return 'CSS is a style sheet language made up of “layers”, created for the purpose of styling pages.';
			case 'type-script':
				return 'TypeScript is a superset of JavaScript that includes features that are not natively present in the language, in addition to making it static.';
			case 'redis':
				return 'Redis (Remote Dictionary Server) is an in-memory data structure store, used as a key-value distributed in-memory database, cache and message broker, with optional durability.';
			default:
				return '...';
		}
	}
	getTextPortuguese(skill){
		switch(skill){
			case 'c-sharp':
				return 'C# é uma linguagem de programação orientada a objetos e orientada a componentes. C# fornece construções de linguagem para dar suporte diretamente a esses conceitos, tornando C# uma linguagem natural para criação e uso de componentes de software.';
			case 'dot-net':
				return 'O .NET é uma plataforma de desenvolvedor de software livre, criada pela Microsoft, para criar muitos tipos diferentes de aplicativos.';
			case 'java-script':
				return 'JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.';
			case 'sql-server':
				return 'O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional (SGBD) desenvolvido pela Sybase em parceria com a Microsoft.';
			case 'pg-sql':
				return 'PostgreSQL é um gerenciador de banco de dados relacionados que otimiza muito o trabalho de quem precisa administrar informações nesses níveis.';
			case 'mongo-db':
				return 'MongoDB é um banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação que você precisa.';
			case 'azure':
				return 'Microsoft Azure, muitas vezes referido como Azure, é uma plataforma de computação em nuvem executada pela Microsoft, que oferece acesso, gerenciamento e desenvolvimento de aplicativos e serviços por meio de data centers globais. Ele fornece software como serviço (SaaS), plataforma como serviço (PaaS) e infraestrutura como serviço (IaaS) e suporta muitas linguagens de programação, ferramentas e frameworks diferentes, incluindo software e sistemas específicos da Microsoft e de terceiros.';
			case 'git':
				return 'O Git é um sistema de controle de revisão de código aberto maduro e mantido ativo usado por milhares de desenvolvedores em todo o mundo.';
			case 'html':
				return 'HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.';
			case 'css':
				return 'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.';
			case 'type-script':
				return 'TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática.';
			case 'redis':
				return 'Redis (Remote Dictionary Server, em português servidor de dicionário remoto) é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.';
			default:
				return '...';
		}
	}
}