$(document).ready(function () {
    var l = initLang();
    var actualLang = l.getLang();

    onChangeLang(l);
    onScroll();
    onChangeTheme();
    onClickNavMenu();
    onClickCompanyCarreer(actualLang);
    onHoverSkillCard(actualLang);
});

//#region [Lang]
function initLang(){
    var l = new LanguageSelector();
    l.parse();

    var actualLang = l.getLang();

    var langFlag = 'br';
    var cvTitle = 'Visualizar CV';
    var urlTitle = 'assets/files/cv_pt.pdf';

    switch(actualLang){
        case 'en':
            langFlag = 'us';
            cvTitle = 'View CV'
            urlTitle = 'assets/files/cv_en.pdf';
            break;
        case 'pt':
            langFlag = 'br';
            cvTitle = 'Visualizar CV';
            urlTitle = 'assets/files/cv_pt.pdf';
            break;
        default:
            langFlag = 'us';
            cvTitle = 'View CV'
            urlTitle = 'assets/files/cv_en.pdf';
            actualLang = 'en'
            break;
    }

    $('.current_lang .lang-txt').text(actualLang);
    $('.current_lang span.flag').attr('class', `fi fi-${langFlag}`);
    $(`.more_lang .lang[data-value=${actualLang}]`).addClass('selected');
    
    $('#cv-btn').attr('title', cvTitle);
    $('#cv-btn').attr('href', urlTitle);

    l.setLang(actualLang);

    return l;
}

function onChangeLang(l){
    $(document).click( function(e) {
        $('.translate_wrapper, .more_lang').removeClass('active');     
    });
   
   $('.translate_wrapper .current_lang').click(function(e){    
        e.stopPropagation();
        $(this).parent().toggleClass('active');
        
        setTimeout(function(){
            $('.more_lang').toggleClass('active');
        }, 5);
    });

    $('.more_lang .lang').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');  
        
        var flag = $(this).find('span.flag').attr('class');    
        var lang = $(this).attr('data-value');
        
        l.setLang(lang);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang span.flag').attr('class', flag);

        window.location = "index.html";
      });
}

//#endregion

//#region [Scroll Animation]

function onScroll(){
    var sections = document.querySelectorAll('.section');
    var windowHalfSize = window.innerHeight * 0.6

    const animateScroll = () => {
        sections.forEach(item => {
            var sectionTop = item.getBoundingClientRect().top;
            var isSectionVisible = (sectionTop - windowHalfSize) < 0;
      
            if (isSectionVisible) {
              item.classList.add('active')
            } else {
              item.classList.remove('active')
            }
      
          }
    )
    
    }
    
    animateScroll();
    window.addEventListener('scroll', animateScroll)
}

//#endregion

//#region [Ligth theme]

function onChangeTheme(){
    var storageKey = "theme-preference";
    var theme = getColorPreference(storageKey);

    setPreference(storageKey, theme);

    $('#theme-toggle').on('click', function() {
        theme = "light" === theme ? "dark" : "light";
        setPreference(storageKey, theme);
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (({matches: e})=>{
        theme = e ? "dark" : "light";
        setPreference(storageKey, theme);
    }));
}

function getColorPreference(storageKey){
    return localStorage.getItem(storageKey) ? localStorage.getItem(storageKey) : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setPreference(storageKey, theme){
    localStorage.setItem(storageKey, theme);
    reflectPreference(theme);
}

function reflectPreference(theme){
    document.firstElementChild.setAttribute("data-theme", theme);
    document.querySelector("#theme-toggle")?.setAttribute("aria-label", theme);

    if(theme === "dark"){
        $('body').removeClass('light-theme');
    }else{
        $('body').addClass('light-theme');
    }
}

//#endregion

//#region [Nav Mobile]

function onClickNavMenu(){
    $('.mobile-menu').on('click', function() {
        if($('.mobile-menu').hasClass('active')){
            $('.mobile-menu').removeClass('active');
            $('.nav-list').removeClass('active');
        } else {
            $('.mobile-menu').addClass('active');
            $('.nav-list').addClass('active');
        }
    });

    $('.nav-div > nav > ul > li').on('click', function() {
        if($('.mobile-menu').hasClass('active')){
            $('.mobile-menu').removeClass('active');
            $('.nav-list').removeClass('active');
        } else {
            $('.mobile-menu').addClass('active');
            $('.nav-list').addClass('active');
        }
    });
}

//#endregion

//#region [Carreira]

function onClickCompanyCarreer(lang){
    $('.company-carreer').on('click', function(event) {
        var id = event.target.id;
        var cl = new CarrerrLanguage();

        switch(id){
            case 'ambev':
                var data = cl.getAmbev(lang);

                setCarrerr(id, 'Software Architect', data.date, 'Ambev Tech', data.description);
                break;
            case 'pb':
                var data = cl.getPb(lang);

                setCarrerr(id, '.NET Developer', data.date, 'Paraná Banco', data.description);
                break;
            case 'bne':
                var data = cl.getBne(lang);

                setCarrerr(id, '.NET Developer', data.date, 'Banco nacional de empregos', data.description);
                break;
            case 'tjpr':
                var data = cl.getTj(lang);

                setCarrerr(id, 'Estagiário de TI', data.date, 'Tribunal de Justiça do Paraná', data.description);
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

function onHoverSkillCard(lang){
    $("#skill-cards > article").on({
        mouseenter: function (event) {
            setSkillText(event.target.id, lang);
        },
        mouseleave: function () {
            $('#skill-text').text('...');
        }
    });
}

function setSkillText(id, lang){
    var element = $('#skill-text');
    var sl = new SkillLanguage();
    
    element.text(sl.getText(lang, id));
}

//#endregion