/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const langItems = document.querySelectorAll('.dropdown-item[data-lang]');

    langItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // evita que o link recarregue a página

            const selectedLang = item.getAttribute('data-lang');
            console.log('Idioma selecionado:', selectedLang);

            const flagImg = document.getElementById('flag-img');
            if (flagImg) {
                if (selectedLang === 'pt') {
                    flagImg.src = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/pt.svg';
                    flagImg.alt = 'PT';
                } else if (selectedLang === 'en') {
                    flagImg.src = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/gb.svg';
                    flagImg.alt = 'EN';
                } else if (selectedLang === 'es') {
                    flagImg.src = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/es.svg';
                    flagImg.alt = 'ES';
                }
            }
            setLanguage(selectedLang);
        });
    });

    function setLanguage(lang) {
            document.getElementById('navHome').textContent = texts[lang].navHome;
            document.getElementById('navSchedule').textContent = texts[lang].navSchedule;
            document.getElementById('navLocation').textContent = texts[lang].navLocation;
            document.getElementById('navContact').textContent = texts[lang].navContact;
            document.getElementById('navSocialMidia').textContent = texts[lang].navSocialMidia;
            document.getElementById('mainTitle').textContent = texts[lang].mainTitle;
            document.getElementById('scheduleTitle').textContent = texts[lang].scheduleTitle;
            document.getElementById('locationTitle').textContent = texts[lang].locationTitle;
            document.getElementById('contactTitle').textContent = texts[lang].contactTitle;
            document.getElementById('socialMidiaTitle').textContent = texts[lang].socialMidiaTitle;

            // document.getElementById('nav-site').textContent = texts[lang].navSite;
            // document.getElementById('schedule-title').textContent = texts[lang].scheduleTitle;
            // document.getElementById('th-date').textContent = texts[lang].thDate;
            // document.getElementById('th-time').textContent = texts[lang].thTime;
            // document.getElementById('th-event').textContent = texts[lang].thEvent;
            // document.getElementById('th-location').textContent = texts[lang].thLocation;
            // document.getElementById('th-add').textContent = texts[lang].thAdd;
            // document.getElementById('contact-title').textContent = texts[lang].contactTitle || (lang === 'pt' ? 'Entre em Contato' : 'Contact Us');
            // // atualizar blocos de texto fixos
            // document.getElementById('contact-text').innerHTML = texts[lang].contactText;
            // document.getElementById('location-title').textContent = texts[lang].locationTitle || (lang === 'pt' ? 'Localizações' : 'Locations');
            // document.getElementById('location-text').textContent = texts[lang].locationText;
            // document.getElementById('lisboa-location-city').textContent = texts[lang].lisboalocationcity;
            // document.getElementById('porto-location-info').innerHTML = texts[lang].portoLocationInfo;
            // document.getElementById('lisboa-location-info').innerHTML = texts[lang].lisboaLocationInfo;

            // // Troca a bandeira no seletor
            // const selectedOption = document.querySelector('#lang-select option:checked');
            // const flagUrl = selectedOption ? selectedOption.dataset.flag : (lang === 'en' ? "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/gb.svg" : "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/pt.svg");
            // document.getElementById('flag-img').src = flagUrl;
            // document.getElementById('flag-img').alt = lang.toUpperCase();

            // // Atualiza a tabela
            // updateScheduleTable(lang);
        }

    const texts = {
                pt: {
                    navHome: "Início",
                    navSchedule: "Programação",
                    navLocation: "Localização",
                    navContact: "Contato",
                    navSocialMidia: "Redes Sociais",
                    mainTitle: "20 Anos da Igreja Assembléia de Deus Missão Portugal",

                    scheduleTitle: "Programação",
                    locationTitle: "Localização",
                    contactTitle: "Contato",
                    socialMidiaTitle: "Redes Sociais",
                    eventName1: "Abertura (Lisboa)",
                    eventName2: "Festividade dos Jovens",
                    eventName3: "20 Anos do Círculo de Oração",
                    eventName3: "Encerramento: 20 Anos da Missão",




                    thDate: "Data",
                    thTime: "Horário",
                    thEvent: "Evento",
                    thLocation: "Local",
                    thAdd: "Adicionar",
                    scheduleText: `<strong>Dia 1: Abertura:</strong> 19 de Novembro 2025, 19h00, LISBOA<br>
                        <strong>Dia 2: Festividade dos Jovens:</strong> 21 de Novembro 2025, 19h00, PORTO<br>
                        <strong>Dia 3: 20 Anos do Círculo de Oração:</strong> 22 de Novembro 2025, 18h00, PORTO<br>
                        <strong>Dia 4: 20 Anos da Missão:</strong> 23 de Novembro 2025, 10h00 e 18h00, PORTO<br>`,
                    contactTitle: "Entre em Contato",
                    contactText: `<strong>Pastor Local do Porto: Pr Gilberto Diniz:</strong> tlm: 123 456 789<br>
                        <strong>Pastor Local de Lisboa: Ev. Sameque Oliveira:</strong> tlm: 123 456 789<br>`,
                    locationTitle: "Localizações",
                    locationCity: "Porto",
                    lisboalocationcity: "Lisboa",
                    locationText: "Veja abaixo o mapa para local do evento:",
                    portoLocationInfo: `<strong>Local:</strong> Multiusos de Gondomar<br><strong>Endereço:</strong> Rua de São Pedro, 4420-000 Gondomar, Portugal<br>`,
                    lisboaLocationInfo: `<strong>Local:</strong> Feira Internacional de Lisboa<br><strong>Endereço:</strong> R. do Bojador, 1998-010 Lisboa, Portugal<br>`
                },
                en: {

 navHome: "Home",
    navSchedule: "Schedule",
    navLocation: "Location",
    navContact: "Contact Us",
    navSocialMidia: "Social Media",
                    mainTitle: "20 Years of the Assembly of God Mission in Portugal",


                    scheduleTitle: "Schedule",
                    locationTitle: "Location",
                    contactTitle: "Contact Us",
                    socialMidiaTitle: "Social Media",




                    thDate: "Date",
                    thTime: "Time",
                    thEvent: "Event",
                    thLocation: "Location",
                    thAdd: "Add to your Calendar",
                    scheduleText: `<strong>Day 1: Opening:</strong> November 19, 2025, 7:30 PM, LISBON<br>
                        <strong>Day 2: Youth Celebration:</strong> November 21, 2025, 7:30 PM, PORTO<br>
                        <strong>Day 3: 20th Anniversary of the Prayer Circle:</strong> November 22, 2025, 6:00 PM, PORTO<br>
                        <strong>Day 4: 20th Anniversary of the Mission:</strong> November 23, 2025, 10:00 AM and 6:00 PM, PORTO<br>`,
                    contactText: `<strong>Local Pastor of the Porto church: Pr Gilberto Diniz:</strong> Phone: 123 456 789<br>
                        <strong>Local Pastor of the Lisbon church: Ev. Sameque Oliveira:</strong> Phone: 123 456 789<br>`,
                    locationTitle: "Locations",
                    locationCity: "Porto",
                    lisboalocationcity: "Lisbon",
                    locationText: "See the map for the event location below:",
                    portoLocationInfo: `<strong>Event site:</strong> Multiusos de Gondomar<br><strong>Address:</strong> Rua de São Pedro, 4420-000 Gondomar, Portugal<br>`,
                    lisboaLocationInfo: `<strong>Event site:</strong> Feira Internacional de Lisboa<br><strong>Address:</strong> R. do Bojador, 1998-010 Lisboa, Portugal<br>`
                },
                es: {

                    navHome: "Inicio",
    navSchedule: "Programación",
    navLocation: "Ubicación",
    navContact: "Contacto",
    navSocialMidia: "Redes Sociales",
mainTitle: "20 Años de la Iglesia Asamblea de Dios Misión Portugal",



                    scheduleTitle: "Programación",
                    locationTitle: "Ubicación",
                    contactTitle: "Contacto",
                                        socialMidiaTitle: "Redes Sociales",





                    
                }
            };

});
