import React, { createContext, useState } from 'react';

export const NavContext = createContext();

const NavContextProvider = (props) => {
    const menuItemsDe = useState([
        {item: 'Startseite', to:'/', id: 1},
        {item: 'Projekte', to:'/projects', id: 2},
        {item: 'Über Mich', to:'/about', id: 3},
        {item: 'Kontakt', to:'/contact', id: 4}
    ]);
    
    const menuItemsEn = useState([
        {item: 'Home', to:'/', id: 1},
        {item: 'Projects', to:'/projects', id: 2},
        {item: 'About Me', to:'/about', id: 3},
        {item: 'Contact', to:'/contact', id: 4}
    ]);

    const [isGerman, toggleIsGerman] = useState(true);

    const aboutDe = useState({
        headline: 'Über mich',
        text1: 'Hallo, es freut mich, dass Du Dich auf meine Homepage verirrt hast. Ich heiße Tobias und beschäftige mich seit 2020 intensiv mit dem Thema Webentwicklung, speziell der Frontend-Entwicklung in React. Meine ersten Erfahrungen im Bereich der Programmierung sammelte ich während meines Mathematikstudiums an der Beuth Hochschule für Technik in Berlin, wo ich die Programmiersprachen C++ und Java erlernte. Nach meinem Studium arbeitete ich eine Zeit lang in der Datenmigration, bis mich mein Weg zur Webentwicklung führte.', 
        text2: 'Zur Zeit arbeite ich an diversen Webprojekten, um meine Programmierkenntnisse im Bereich React zu vertiefen. Langfristig strebe ich eine Position als Webentwickler an und bin momentan auf der Suche nach einem Praktikum in der React-Entwicklung. Falls ich also Dein Interesse geweckt haben sollte und Du ein potenzieller Arbeitgeber bist, kannst Du mir gerne über mein Kontaktformular eine E-mail schreiben.'
    })
    
    const aboutEn = useState({
        headline: 'About Me',
        text1: 'Hello, and welcome to my little homepage. My name is Tobias and since 2020 I am engaged in web development, particularly frontend development in React. I was introduced to programming during my studies in mathematics at Beuth Hochschule für Technik in Berlin, where I learned C++ and Java. After finishing university I worked in data migration for a while, until my interest in web development started to grow.',
        text2: 'Currently I am working on several projects to improve my programming skils in React. Furthermore I am looking for an internship in React develpment to become a web developer in the long run. So if you are interested in my work or simply like my homepage, I would be glad if you would write me an email via my contact form.'
    })

    const projectsDe = useState({
        headline: 'Meine Projekte',
        projekte: [
            { headline: 'Verrückte Fakten über Dich', 
              text: 'ist eine Webapplikation, die der Unterhaltung dient. Aus einem eingegebenen Geburtsdatum werden diverse Dinge über den menschlichen Körper berechnet und anschließend in einem Text ausgegeben. Die verwendeten Technologien sind React, Redux und Materialize.', 
              linkHomepage: 'https://verrueckte-fakten.firebaseapp.com',
              linkGithub: 'https://github.com/TwentySinz/Verrueckte-Fakten',
              id: 1 
            },

            { headline: 'Mathe-Nerd', 
              text: 'ist eine Beispiel-Website für einen Online Blog, der sich mit Mathematik beschäftigt. Dabei wurden die Blogartikel in Markdown Files erstellt. Die verwendeten Technologien sind Gatsby und Tailwind CSS.', 
              linkHomepage: 'https://relaxed-hopper-d3fcc6.netlify.app/',
              linkGithub: 'https://github.com/TwentySinz/Gatsby_Demo_Blog',
              id: 2
            },
            
              { headline: 'Blankenfelder Hofladen', 
                text: 'ist eine Info-Website für einen Hofladen in Berlin. Zur Zeit befindet sich die Homepage noch im Aufbau, da mir noch Informationen über den Laden fehlen. Die verwendeten Technologien sind React und Materialize.', 
                linkHomepage: 'https://test-hosting-websites.firebaseapp.com',
                linkGithub: 'https://github.com/TwentySinz/Blankenfelder-Hofladen',
                id: 3
            }
        ]
    })
    
    const projectsEn = useState({
        headline: 'My Projects',
        projekte: [
            { headline: 'Crazy facts about you', 
              text: "is a Webapplication wich I programmed to entertain the user. Just from the user's date of birth the app calculates a lot of funny stuff about the human body. Currently the app is only available in German. I used the technologies React, Redux and Materialize.", 
              linkHomepage: 'https://verrueckte-fakten.firebaseapp.com',
              linkGithub: 'https://github.com/TwentySinz/Verrueckte-Fakten',
              id: 1
            },

            { headline: 'Mathe-Nerd', 
              text: 'is an example website for an online blog wich is about mathmatics. For the blog posts I used Markdown Files and Latex. The homepage was written with Gatsby and Tailwind CSS.', 
              linkHomepage: 'https://relaxed-hopper-d3fcc6.netlify.app/',
              linkGithub: 'https://github.com/TwentySinz/Gatsby_Demo_Blog',
              id: 2
            },
            
              { headline: 'Blankenfelder Hofladen', 
                text: 'is an info website for a little grocery store in Berlin. Currently the homepage is still under construction because of missing information about the store. I used the technologies React and Materialize.', 
                linkHomepage: 'https://test-hosting-websites.firebaseapp.com',
                linkGithub: 'https://github.com/TwentySinz/Blankenfelder-Hofladen',
                id: 3 
            }
        ]
    })

    const contactDe = useState({
      headline: 'Kontakt',
      name: 'Ihr Name:',
      email: 'Ihre Email Adresse:',
      betreff: 'Betreff:',
      message: 'Ihre Nachricht:',
      send: 'Senden'
    })
    
    const contactEn = useState({
      headline: 'Contact',
      name: 'Your name:',
      email: 'Your email adress:',
      betreff: 'Subject:',
      message: 'Your message:',
      send: 'Send'
    })

    return(
        <NavContext.Provider value={{menuItemsDe, menuItemsEn, isGerman, 
          toggleIsGerman, aboutDe, aboutEn, projectsDe, projectsEn, contactDe, contactEn}}>
            { props.children }
        </NavContext.Provider>
    )

}

export default NavContextProvider;