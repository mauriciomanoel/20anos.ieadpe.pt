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

    const langSelect = document.getElementById('langSelect');
    langSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        setLanguage(selectedLang);
    });

    function setLanguage(lang) {
        document.getElementById('navHome').textContent = texts[lang].navHome;
        document.getElementById('navSchedule').textContent = texts[lang].navSchedule;
        document.getElementById('navLocation').textContent = texts[lang].navLocation;
        document.getElementById('navContact').textContent = texts[lang].navContact;
        document.getElementById('navSocialMidia').textContent = texts[lang].navSocialMidia;
        document.getElementById('mainTitle').innerHTML = texts[lang].mainTitle;
        document.getElementById('scheduleTitle').textContent = texts[lang].scheduleTitle;
        document.getElementById('locationTitle').textContent = texts[lang].locationTitle;
        document.getElementById('contactTitle').textContent = texts[lang].contactTitle;
        document.getElementById('socialMidiaTitle').textContent = texts[lang].socialMidiaTitle;
        document.getElementById('eventName1').textContent = texts[lang].eventName1;
        document.getElementById('eventName2').textContent = texts[lang].eventName2;
        document.getElementById('eventName3').textContent = texts[lang].eventName3;
        document.getElementById('eventName4').textContent = texts[lang].eventName4;

        translateDates(lang);
        translateLocale(lang);
        translateAddress(lang);
        document.getElementById('pastorPortoTitle').textContent = texts[lang].pastorPortoTitle;
        document.getElementById('pastorLisbonTitle').textContent = texts[lang].pastorLisbonTitle;
        document.getElementById('locationCityLisboa').textContent = texts[lang].locationCityLisboa;
        document.getElementById('locationCityPorto').textContent = texts[lang].locationCityPorto;

    }

    const texts = {
        pt: {
            navHome: "Início",
            navSchedule: "Programação",
            navLocation: "Localização",
            navContact: "Contato",
            navSocialMidia: "Redes Sociais",
            mainTitle: `20 Anos da Igreja Assembléia de Deus <br>Missão Portugal`,

            scheduleTitle: "Programação",
            locationTitle: "Localização",
            contactTitle: "Contato",
            socialMidiaTitle: "Redes Sociais",
            eventName1: "Abertura (Lisboa)",
            eventName2: "20 Anos do Grupo de Jovens e Adolescentes",
            eventName3: "20 Anos do Círculo de Oração",
            eventName4: "Encerramento: 20 Anos da Missão",
            eventDate1: "Data",
            pastorPortoTitle: "Pastor Local do Porto",
            pastorLisbonTitle: "Pastor Local do Lisboa",
            locationCityLisboa: "Lisboa",
            locationCityPorto: "Porto",
        },
        en: {

            navHome: "Home",
            navSchedule: "Schedule",
            navLocation: "Location",
            navContact: "Contact Us",
            navSocialMidia: "Social Media",
            mainTitle: `20 Years of the Assembly of God <br>Mission in Portugal`,
            scheduleTitle: "Schedule",
            locationTitle: "Location",
            contactTitle: "Contact Us",
            socialMidiaTitle: "Social Media",

            eventName1: "Opening (Lisbon)",
            eventName2: "20 Years of the Youth and Teen Group",
            eventName3: "20 Years of the Prayer Circle",
            eventName4: "Closing: 20 Years of the Mission",
            eventDate1: "Date",
            pastorPortoTitle: "Local Pastor of Porto",
            pastorLisbonTitle: "Local Pastor of Lisbon",
            locationCityLisboa: "Lisbon",
            locationCityPorto: "Porto",

        },
        es: {

            navHome: "Início",
            navSchedule: "Programación",
            navLocation: "Localidad",
            navContact: "Contacto",
            navSocialMidia: "Redes Sociales",
            mainTitle: `20 Años de la Iglesia Asamblea de Dios <br>Misión en Portugal`,

            scheduleTitle: "Programación",
            locationTitle: "Localidad",
            contactTitle: "Contacto",
            socialMidiaTitle: "Redes Sociales",
            eventName1: "Apertura (Lisboa)",
            eventName2: "20 Años del Grupo de Jóvenes y Adolescentes",
            eventName3: "20 Años del Circulo de Oración",
            eventName4: "Cierre: 20 Anos de la Misión",
            eventDate1: "Fecha",
            pastorPortoTitle: "Pastor Local en Porto",
            pastorLisbonTitle: "Pastor Local en Lisboa",
            locationCityLisboa: "Lisboa",
            locationCityPorto: "Porto",
        }
    };

    function translateDates(language) {
        const labels = document.querySelectorAll('.event-date-label');
        labels.forEach(
            label => {
                if (language === 'en') {
                    label.textContent = 'Date:';
                } else if (language === 'es') {
                    label.textContent = 'Fecha:';
                } else {
                    label.textContent = 'Data:';
                }
            }
        );
    }

    function translateLocale(language) {
        const labels = document.querySelectorAll('.event-locale-label');
        labels.forEach(
            label => {
                if (language === 'en') {
                    label.textContent = 'Date:';
                } else if (language === 'es') {
                    label.textContent = 'Lugar:';
                } else {
                    label.textContent = 'Local:';
                }
            }
        );
    }

    function translateAddress(language) {
        const labels = document.querySelectorAll('.event-address-label');
        labels.forEach(
            label => {
                if (language === 'en') {
                    label.textContent = 'Address:';
                } else if (language === 'es') {
                    label.textContent = 'Dirección:';
                } else {
                    label.textContent = 'Endereço:';
                }
            }
        );
    }

});
