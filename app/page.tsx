export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Adorable Donkey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Meet Your New Best Friend
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mb-8">
            Gentle, loyal, and incredibly smart. Discover why donkeys make the perfect companion.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-xl">
            Adopt a Donkey Today
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
              Donkeys Are Incredible
            </h2>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              For thousands of years, donkeys have been humanity's loyal companions. These remarkable 
              animals are known for their intelligence, gentle nature, and unwavering devotion.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              With their distinctive braying call and endearing personalities, donkeys bring joy, 
              companionship, and a sense of peace to anyone lucky enough to know them.
            </p>
            <div className="flex gap-4">
              <div className="bg-red-50 p-6 rounded-xl flex-1">
                <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
                <div className="text-zinc-700">Years Lifespan</div>
              </div>
              <div className="bg-red-100 p-6 rounded-xl flex-1">
                <div className="text-4xl font-bold text-red-700 mb-2">95%</div>
                <div className="text-zinc-700">Memory Recall</div>
              </div>
            </div>
          </div>
          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1590329291028-16aa2eb6fc5e?w=800&q=80"
              alt="Happy donkey in field"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Donkeys Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 text-center mb-20">
            Why We Love Donkeys
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Intelligence */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-red-100">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615719413546-198b25453f43?w=600&q=80"
                  alt="Smart donkey"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Highly Intelligent</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Donkeys have exceptional problem-solving abilities and remarkable memory. 
                  They can remember places and other donkeys for up to 25 years!
                </p>
              </div>
            </div>

            {/* Gentle Nature */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-red-100">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616328180938-2fdd53a1e6cc?w=600&q=80"
                  alt="Gentle donkey"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Gentle & Calm</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Known for their calm demeanor and patient nature, donkeys are incredibly 
                  gentle with children and make wonderful therapy animals.
                </p>
              </div>
            </div>

            {/* Loyal */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-red-100">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597912170302-fe2902b80a61?w=600&q=80"
                  alt="Loyal donkey"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Fiercely Loyal</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Once they bond with you, donkeys form deep, lasting relationships. 
                  They're protective guardians and devoted companions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 text-center mb-20">
          Donkey Fun Facts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
            <div className="text-6xl mb-4">👂</div>
            <h3 className="text-xl font-bold text-red-700 mb-3">Super Hearing</h3>
            <p className="text-zinc-600">
              Their large ears can rotate independently to hear sounds from miles away
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl">
            <div className="text-6xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-red-700 mb-3">Surprisingly Strong</h3>
            <p className="text-zinc-600">
              Can carry up to 20% of their body weight and work in harsh conditions
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-xl font-bold text-red-800 mb-3">Expressive</h3>
            <p className="text-zinc-700">
              Have a wide range of vocalizations and facial expressions to communicate
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-red-300 to-red-400 rounded-2xl">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Natural Guardians</h3>
            <p className="text-zinc-700">
              Often used to protect livestock from predators like coyotes and foxes
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-red-700 text-center mb-20">
            Donkey Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-red-200">
              <img
                src="https://images.unsplash.com/photo-1600339876043-38da066a6e93?w=600&q=80"
                alt="Baby donkey"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-red-200">
              <img
                src="https://images.unsplash.com/photo-1598639797516-17f5c676c7e9?w=600&q=80"
                alt="Donkey portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-red-200">
              <img
                src="https://images.unsplash.com/photo-1562939888-2d8a1a13f93f?w=600&q=80"
                alt="Donkey in nature"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Welcome a Donkey?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            Join thousands of happy donkey owners and discover the joy these amazing animals bring to life
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors shadow-2xl">
              Find Your Donkey
            </button>
            <button className="border-3 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🫏 The Donkey Project</h3>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              Celebrating and protecting donkeys around the world
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-red-200 mb-8">
            <a href="#" className="hover:text-white transition-colors">About Donkeys</a>
            <a href="#" className="hover:text-white transition-colors">Adoption</a>
            <a href="#" className="hover:text-white transition-colors">Care Guide</a>
            <a href="#" className="hover:text-white transition-colors">Sanctuary</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-center text-red-300 text-sm">
            <p>© 2024 The Donkey Project. Made with ❤️ for donkeys everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
