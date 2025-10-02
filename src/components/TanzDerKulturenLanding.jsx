import React, { useState } from 'react'

const TanzDerKulturenLanding = () => {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white font-roboto text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-brand-teal-primary font-tussilago">
              Tanz der Kulturen
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-brand-dark hover:text-brand-teal-primary transition">Über Uns</button>
              <button onClick={() => scrollToSection('organizations')} className="text-brand-dark hover:text-brand-teal-primary transition">Organisationen</button>
              <button onClick={() => scrollToSection('values')} className="text-brand-dark hover:text-brand-teal-primary transition">Leitbild</button>
              <button onClick={() => scrollToSection('contact')} className="text-brand-dark hover:text-brand-teal-primary transition">Kontakt</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-light to-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 font-tussilago">
              Tanz der Kulturen
            </h1>
            <p className="text-xl md:text-2xl text-brand-dark mb-8 font-roboto">
              Ein internationales Performance-, Pädagogik- und Produktionsteam
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('organizations')}
                className="px-8 py-3 bg-brand-teal-primary text-white rounded-lg hover:bg-brand-green-primary transition font-medium"
              >
                Mehr erfahren
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-brand-teal-primary border-2 border-brand-teal-primary rounded-lg hover:bg-brand-light transition font-medium"
              >
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12 font-tussilago">
            Das sind wir
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-brand-green-light to-brand-lime rounded-lg h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎭</div>
                  <p className="text-brand-dark text-lg font-roboto">
                    Kunst, Kultur und Gemeinschaft
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-brand-dark mb-6 leading-relaxed font-roboto">
                Wir gestalten mit Menschen unterschiedlicher soziokultureller Herkunft Tanzworkshops, 
                Tanzreisen und rituelle Performances mit Livemusik.
              </p>
              <p className="text-lg text-brand-dark mb-6 leading-relaxed font-roboto">
                Mitglied im Dachverband für darstellende Künste Hamburg e.V. (DfdK)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12 font-tussilago">
            Unsere Organisationen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Verein */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border-l-4 border-secondary-orange">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-brand-teal-primary mb-4 font-tussilago">
                Tanz der Kulturen e.V.
              </h3>
              <p className="text-brand-dark mb-4 font-roboto">
                Gegründet 2018
              </p>
              <p className="text-brand-dark mb-6 leading-relaxed font-roboto">
                Ein Verbund von Künstler:innen und Pädagog:innen, der tänzerische Bildungs- und 
                Bühnenprojekte mit Livemusik konzipiert und durchführt.
              </p>
              <ul className="space-y-3 font-roboto">
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">Tanzworkshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">Tanzreisen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">Rituelle Performances</span>
                </li>
              </ul>
            </div>

            {/* Institut */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border-l-4 border-secondary-blue">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-brand-teal-primary mb-4 font-tussilago">
                Institut für Rituelle Tanzpädagogik gGmbH
              </h3>
              <p className="text-brand-dark mb-4 font-roboto">
                Gegründet 2021
              </p>
              <p className="text-brand-dark mb-6 leading-relaxed font-roboto">
                Spezialisiert auf die Untersuchung und Vernetzung wissenschaftlicher und indigener 
                Theorien für eine kulturübergreifende Tanzpädagogik.
              </p>
              <ul className="space-y-3 font-roboto">
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">Berufliche Weiterbildung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">Forschung & Entwicklung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-green mr-2">✓</span>
                  <span className="text-brand-dark">UNESCO Dance Council Anerkennung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-4 font-tussilago">
            Leitbild
          </h2>
          <p className="text-center text-xl text-brand-dark mb-12 max-w-3xl mx-auto font-roboto">
            Mit Ritualen zu arbeiten, bedeutet für uns gemeinsam einen geschützten Raum zu kreieren
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              { icon: '🌟', title: 'Einzigartigkeit', desc: 'Verschiedenheit bedeutet Reichtum' },
              { icon: '💎', title: 'Wertschätzung', desc: 'Heilsame Kraft des Zuhörens' },
              { icon: '🦋', title: 'Mut', desc: 'Bereit Neues zu wagen' },
              { icon: '🌺', title: 'Großzügigkeit', desc: 'Fokus auf das große Ganze' },
              { icon: '🌱', title: 'Verantwortung', desc: 'Für eigenes Denken und Handeln' }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-green-light to-brand-lime rounded-lg p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 font-tussilago">
                  {value.title}
                </h3>
                <p className="text-sm text-brand-dark font-roboto">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-brand-light rounded-xl p-8 border-l-4 border-brand-teal-primary">
            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-tussilago">
              Kern-Elemente der Rituellen Tanzpädagogik
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Spirituelle Einbettung des Tanzes',
                'Expressive Emotionalität',
                'Ganzheitliches Körpertraining',
                'Body-Perkussion',
                'Gesangsimprovisation',
                'Live-Musik',
                'Tanzimprovisation',
                'Archetypische Themen'
              ].map((element, index) => (
                <div key={index} className="flex items-center font-roboto">
                  <span className="text-secondary-green mr-2">•</span>
                  <span className="text-brand-dark">{element}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-brand-green-primary to-brand-teal-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-tussilago">
            Kontakt
          </h2>
          <p className="text-xl text-brand-yellow mb-8 font-roboto">
            Werden Sie Teil unserer Gemeinschaft
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-brand-dark mb-6 font-roboto">
              Unabhängig von Herkunft, Geschlecht, sexueller Orientierung, Nationalität, Behinderung, 
              Religion, Kultur, Aufenthaltsstatus, Alter, Klasse, Aussehen oder weiterer Zugehörigkeiten 
              ist jede:r willkommen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-teal-primary text-white rounded-lg hover:bg-brand-green-primary transition font-medium">
                Jetzt anmelden
              </button>
              <button className="px-8 py-3 bg-white text-brand-teal-primary border-2 border-brand-teal-primary rounded-lg hover:bg-brand-light transition font-medium">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-tussilago">
                Tanz der Kulturen e.V.
              </h3>
              <p className="text-brand-yellow font-roboto">
                Sitz: Bendestorf<br />
                Gegründet 2018
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-tussilago">
                Institut für Rituelle Tanzpädagogik
              </h3>
              <p className="text-brand-yellow font-roboto">
                gGmbH<br />
                Gegründet 2021<br />
                HRB 177952 Hamburg
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-tussilago">
                Mitgliedschaft
              </h3>
              <p className="text-brand-yellow font-roboto">
                Dachverband für darstellende<br />
                Künste Hamburg e.V. (DfdK)
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-teal-primary text-center text-brand-yellow">
            <p className="font-roboto">© 2025 Tanz der Kulturen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TanzDerKulturenLanding
