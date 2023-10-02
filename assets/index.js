$(document).ready(function () {
    onClickCompanyCarreer();
    onHoverSkillCard();
});

//#region [Carreira]

function onClickCompanyCarreer(){
    $('.company-carreer').on('click', function(event) {
        var id = event.target.id;

        switch(id){
            case 'ambev':
                setCarrerr(id, 'Tech Lead', '09/2021 - Atual', 'Ambev Tech', 'Tech lead da equipe que cuida da aplicação de gerenciamento de insumos nas fabricas globais da ambev.');
                break;
            case 'pb':
                setCarrerr(id, '.NET Developer', '03/2021 - 09/2021', 'Paraná Banco', 'Trabalhei como desenvolvedor .NET no PB, lá cuidavamos do produto que era responsável pelas ações dos usuarios (empréstimo, investimentos, etc).');
                break;
            case 'bne':
                setCarrerr(id, '.NET Developer', '06/2018 - 03/2021', 'Banco nacional de empregos', 'Trabalhei como desenvolvedor .NET no BNE, lá cuidavamos de vários produtos da empresa, principalmente sites de emprego e apps voltados a área de recursos humanos.');
                break;
            case 'tjpr':
                setCarrerr(id, 'Estagiário de TI', '02/2018 - 06/2021', 'Tribunal de Justiça do Paraná', 'Trabalhei como desenvolvedor .NET no TJPR, lá eu era  Responsável pelo auxílio na parte de Informática, ajudando com a elaboração de planilhas no Excel, Inserção de alunos da escola no banco de dados, cadastramento de cursos e emissão de certificados para os servidores.');
                break;
            }
    });
}

function setCarrerr(name, title, date, companyName, description){
    $('.empresas > div.active').removeClass('active');
    $(`#${name}`).addClass('active');

    $('#titulo-carreira').text(title);
    $('#data-carreira').text(date);
    $('#nome-empresa-carreira').text(companyName);
    $('#conteudo-descricao-carreira').text(description);
}

//#endregion

//#region [Skills]

function onHoverSkillCard(){
    $("#skill-cards > article").on({
        mouseenter: function (event) {
            setSkillText(event.target.id);
        },
        mouseleave: function () {
            $('#skill-text').text('...');
        }
    });
}

function setSkillText(id){
    var element = $('#skill-text');

    switch(id){
        case 'c-sharp':
            element.text('C# é uma linguagem de programação orientada a objetos e orientada a componentes. C# fornece construções de linguagem para dar suporte diretamente a esses conceitos, tornando C# uma linguagem natural para criação e uso de componentes de software.');
            break;
        case 'dot-net':
            element.text('O .NET é uma plataforma de desenvolvedor de software livre, criada pela Microsoft, para criar muitos tipos diferentes de aplicativos.');
            break;
        case 'java-script':
            element.text('JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.');
            break;
        case 'sql-server':
            element.text('O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional (SGBD) desenvolvido pela Sybase em parceria com a Microsoft.');
            break;
        case 'pg-sql':
            element.text('PostgreSQL é um gerenciador de banco de dados relacionados que otimiza muito o trabalho de quem precisa administrar informações nesses níveis.');
            break;
        case 'mongo-db':
            element.text('MongoDB é um banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação que você precisa.');
            break;
        case 'azure':
            element.text('Microsoft Azure, muitas vezes referido como Azure, é uma plataforma de computação em nuvem executada pela Microsoft, que oferece acesso, gerenciamento e desenvolvimento de aplicativos e serviços por meio de data centers globais. Ele fornece software como serviço (SaaS), plataforma como serviço (PaaS) e infraestrutura como serviço (IaaS) e suporta muitas linguagens de programação, ferramentas e frameworks diferentes, incluindo software e sistemas específicos da Microsoft e de terceiros.');
            break;
        case 'git':
            element.text('O Git é um sistema de controle de revisão de código aberto maduro e mantido ativo usado por milhares de desenvolvedores em todo o mundo.');
            break;
        case 'html':
            element.text('HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.');
            break;
        case 'css':
            element.text('CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.');
            break;
        case 'type-script':
            element.text('TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática.');
            break;
        case 'redis':
            element.text('Redis (Remote Dictionary Server, em português servidor de dicionário remoto) é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.');
            break;
        default:
            element.text('...');
            break;
    }
}

//#endregion