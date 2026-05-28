import { Monitor, LayoutTemplate, CalendarDays, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const nombre = e.target[0].value
    const email = e.target[1].value
    const mensaje = e.target[2].value

    const telefono = "50670089891"

    const url = `https://wa.me/${telefono}?text=` +
      `Hola, soy ${nombre}%0A` +
      `Correo: ${email}%0A` +
      `Mensaje: ${mensaje}`

    window.open(url, "_blank")
  }
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* FONDO DIFUMINADO */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-cyan-400">
          Nexora Web CR
        </h1>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex gap-6 text-gray-300">

          <a href="#inicio" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-cyan-400 transition">
            Servicios
          </a>

          <a href="#contacto" className="hover:text-cyan-400 transition">
            Contacto
          </a>

        </div>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </nav>

      {/* MENÚ MOBILE */}
      {menuOpen && (

        <div className="md:hidden bg-gray-900 border-b border-gray-800 px-8 py-6 flex flex-col gap-6 text-gray-300">

          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>

        </div>

      )}

      {/* HERO SECTION */}
      <motion.section id="inicio"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32"
      >

        <h2 className="text-6xl font-black max-w-5xl leading-tight">

          Diseñamos páginas web modernas para negocios que quieren crecer

        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl">

          Creamos experiencias digitales modernas, rápidas y profesionales para ayudar a los negocios a destacar en internet.

        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">

          <button
            onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Solicitar Cotización
          </button>

          <button
            onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition"
          >
            Ver Servicios
          </button>

        </div>

      </motion.section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative z-10 px-8 pb-24">

        <h3 className="text-4xl font-bold text-center mb-16">
          Nuestros Servicios
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Páginas Web
            </h4>

            <p className="text-gray-400">
              Diseños modernos y profesionales adaptados para celulares y computadoras.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Landing Pages
            </h4>

            <p className="text-gray-400">
              Páginas enfocadas en atraer clientes y generar más ventas para negocios.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Sistemas de Citas
            </h4>

            <p className="text-gray-400">
              Implementación de formularios y reservas online para facilitar la atención al cliente.
            </p>

          </div>

        </div>

      </section>
      {/* SOBRE NOSOTROS */}
      <section className="relative z-10 px-8 py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h3 className="text-5xl font-bold mb-8">
              Impulsamos negocios en internet
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">

              En Nexora Web CR desarrollamos páginas web modernas y profesionales para emprendimientos y negocios que buscan destacar en internet y atraer más clientes.

            </p>

            <p className="text-gray-400 text-lg leading-relaxed">

              Nuestro objetivo es crear experiencias visuales atractivas, rápidas y adaptadas para cualquier dispositivo.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <h4 className="text-5xl font-black text-cyan-400">
                100%
              </h4>

              <p className="text-gray-400 mt-4">
                Diseño Responsive
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <h4 className="text-5xl font-black text-cyan-400">
                Moderno
              </h4>

              <p className="text-gray-400 mt-4">
                Diseño Premium
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <h4 className="text-5xl font-black text-cyan-400">
                Rápido
              </h4>

              <p className="text-gray-400 mt-4">
                Optimización Web
              </p>

            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">

              <h4 className="text-5xl font-black text-cyan-400">
                Soporte
              </h4>

              <p className="text-gray-400 mt-4">
                Atención Personalizada
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROYECTOS */}
      <section className="relative z-10 px-8 py-24">

        <h3 className="text-5xl font-bold text-center mb-16">
          ¡Proyectos que pueden crearse para vos!
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* PROYECTO 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2 duration-300">
            <img
              src="/lavacar.png"
              alt="Lavacar Premium"
              className="h-56 w-full object-cover"
            />

            <div className="p-8">

              <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                Lavacar Premium
              </h4>

              <p className="text-gray-400">
                Diseño moderno para un negocio de lavado automotriz con reservas y contacto por WhatsApp.
              </p>

            </div>
          </div>

          {/* PROYECTO 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2 duration-300">

            <img
              src="/barberia.png"
              alt="Barbería Moderna"
              className="h-56 w-full object-cover"
            />

            <div className="p-8">

              <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                Barbería Moderna
              </h4>

              <p className="text-gray-400">
                Página elegante enfocada en reservas y presencia digital para barberías.
              </p>

            </div>
          </div>

          {/* PROYECTO 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2 duration-300">

            <img
              src="/restaurante.png"
              alt="Restaurantes"
              className="h-56 w-full object-cover"
            />

            <div className="p-8">

              <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                Restaurantes
              </h4>

              <p className="text-gray-400">
                Sitio web responsive para restaurantes con menú digital y contacto rápido.
              </p>

            </div>
          </div>

        </div>

      </section >

      {/* CONTACTO */}
      < section id="contacto" className="relative z-10 px-8 py-24" >

        <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-10">

          <h3 className="text-5xl font-bold text-center mb-6">
            Hablemos de tu proyecto
          </h3>

          <p className="text-center text-gray-400 mb-12">
            Cuéntanos sobre tu negocio y te ayudaremos a crear una presencia profesional en internet.
          </p>

          <form className="grid gap-6" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Nombre completo"
              className="bg-black border border-gray-700 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="bg-black border border-gray-700 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-400 transition"
            />

            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              rows="6"
              className="bg-black border border-gray-700 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-400 transition resize-none"
            ></textarea>

            <button
              className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Enviar Mensaje
            </button>

          </form>

        </div>

      </section >
      {/* FOOTER */}
      < footer className="relative z-10 border-t border-gray-800 py-10 px-8 text-center text-gray-500" >

        <h4 className="text-2xl font-bold text-cyan-400 mb-4">
          Nexora Web CR
        </h4>

        <p>
          Diseño y desarrollo web profesional para negocios y emprendimientos.
        </p>

        <p className="mt-4 text-sm">
          © 2026 Nexora Web CR - Todos los derechos reservados
        </p>

      </footer >

      {/* BOTÓN WHATSAPP */}
      < a
        href="https://wa.me/50670089891"
        target="_blank"
        className="fixed bottom-6 right-6 bg-cyan-400 text-black px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-110 transition z-50"
      >
        WhatsApp
      </a >
    </div >
  )
}