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
        text: 'Hallo, wie gehts?'
    })
    
    const aboutEn = useState({
        headline: 'About Me',
        text: 'Hello, whats up?'
    })

    const projectsDe = useState({
        headline: 'Meine Projekte',
        projekte: [
            { headline: 'Verrückte Fakten über Dich', 
              text: 'ist eine Webapplikation, die der Unterhaltung dient. Aus einem eingegebenen Geburtsdatum werden diverse Dinge über den menschlichen Körper berechnet und anschließend in einem Text ausgegeben. Die verwendeten Technologien sind React, Redux und Materialize.', 
              linkHomepage: 'https://verrueckte-fakten.firebaseapp.com',
              linkGithub: 'https://github.com/',
              id: 1 
            },

            { headline: 'Mathe-Nerd', 
              text: 'ist eine Beispiel-Website für einen Online Blog, der sich mit Mathematik beschäftigt. Dabei wurden die Blogartikel in Markdown Files erstellt. Die verwendeten Technologien sind Gatsby und Tailwind CSS.', 
              linkHomepage: 'https://relaxed-hopper-d3fcc6.netlify.app/',
              linkGithub: 'https://github.com/',
              id: 2 
            },
            
              { headline: 'Blankenfelder Hofladen', 
                text: 'ist eine Info-Website für einen Hofladen in Berlin. Zur Zeit befindet sich die Homepage noch im Aufbau, da mir noch Informationen über den Laden fehlen. Die verwendeten Technologien sind React und Materialize.', 
                linkHomepage: 'https://test-hosting-websites.firebaseapp.com',
                linkGithub: 'https://github.com/',
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
              linkGithub: 'https://github.com/',
              id: 1 
            },

            { headline: 'Mathe-Nerd', 
              text: 'is an example website for an online blog wich is about mathmatics. For the blog posts I used Markdown Files and Latex. The homepage was written with Gatsby and Tailwind CSS.', 
              linkHomepage: 'https://relaxed-hopper-d3fcc6.netlify.app/',
              linkGithub: 'https://github.com/',
              id: 2 
            },
            
              { headline: 'Blankenfelder Hofladen', 
                text: 'is an info website for a little grocery store in Berlin. Currently the homepage is still under construction because of missing information about the store. I used the technologies React and Materialize.', 
                linkHomepage: 'https://test-hosting-websites.firebaseapp.com',
                linkGithub: 'https://github.com/',
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