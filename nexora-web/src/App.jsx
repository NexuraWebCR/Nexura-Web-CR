import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function App() {

    const handleSubmit = (e) => {
        e.preventDefault()

        const nombre = e.target[0].value
        const email = e.target[1].value
        const mensaje = e.target[2].value

        const telefono = "50670089891"

        const url =
            `https://wa.me/${telefono}?text=` +
            `Hola, soy ${nombre}%0A` +
            `Correo: ${email}%0A` +
            `Mensaje: ${mensaje}`

        window.open(url, "_blank")
    }

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <div className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* FONDO */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/30 blur-3xl rounded-full z-0"></div>

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/30 blur-3xl rounded-full"></div>

            {/* NAVBAR */}
            <nav className="
            relative
            z-20
            flex
            items-center
            justify-between
            px-8
            py-5
            border-b
            border-cyan-500/10
            bg-black
            backdrop-blur-xl
            ">

                {/* LOGO */}
                <div className="flex flex-col items-start select-none">

                    <h1
                        className="
                        text-3xl
                        md:text-5xl
                        font-black
                        uppercase
                        leading-none
                        "
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            letterSpacing: "0.18em",
                            background:
                                "linear-gradient(90deg, #67e8f9 0%, #3b82f6 45%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 18px rgba(59,130,246,0.45)"
                        }}
                    >
                        NEXORA
                    </h1>

                    <p
                        className="
                        text-lg
                        uppercase
                        font-bold
                        self-center
                        "
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            letterSpacing: "0.5em",
                            color: "#c084fc"
                        }}
                    >
                        WEB CR
                    </p>

                </div>

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
            {
                menuOpen && (

                    <div className="md:hidden bg-gray-900 border-b border-gray-800 px-8 py-6 flex flex-col gap-6 text-gray-300">

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

                )
            }

            {/* HERO SECTION */}
            <motion.section
                id="inicio"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32"
            >

                <h2 className="text-5xl md:text-6xl font-black max-w-5xl leading-tight">

                    Diseñamos páginas web modernas para negocios que quieren crecer

                </h2>

                <p className="text-gray-400 text-xl mt-6 max-w-2xl">

                    Creamos experiencias digitales modernas, rápidas y profesionales para ayudar a los negocios a destacar en internet.

                </p>

                <div className="flex gap-4 mt-10 flex-wrap justify-center">

                    <button
                        onClick={() =>
                            document
                                .getElementById("contacto")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
                    >
                        Solicitar Cotización
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("servicios")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition"
                    >
                        Ver Servicios
                    </button>

                </div>

            </motion.section>

            {/* SERVICIOS */}
            <div className="absolute top-[900px] left-[-200px] w-[500px] h-[500px] bg-purple-400/10 blur-3xl rounded-full"></div>
            <section
                id="servicios"
                className="relative z-10 px-8 pb-24"
            >

                <h3 className="text-4xl font-bold text-center mb-16">
                    Nuestros Servicios
                </h3>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

                        <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                            Páginas Web
                        </h4>

                        <p className="text-gray-400">
                            Diseños modernos y profesionales adaptados para celulares y computadoras.
                        </p>

                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

                        <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                            Landing Pages
                        </h4>

                        <p className="text-gray-400">
                            Páginas enfocadas en atraer clientes y generar más ventas.
                        </p>

                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

                        <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                            Sistemas de Citas
                        </h4>

                        <p className="text-gray-400">
                            Formularios y reservas online para negocios modernos.
                        </p>

                    </div>

                </div>

            </section>
            {/* SOBRE NOSOTROS */}
            <section className="relative z-10 px-8 py-24">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                </div>
                {/* TEXTO */}
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


                {/* TARJETAS */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 text-center hover:border-cyan-400 transition overflow-hidden">

                        <h4 className="text-3xl md:text-5xl font-black text-cyan-400 break-words">
                            100%
                        </h4>

                        <p className="text-gray-400 mt-4 text-sm md:text-base">
                            Diseño Responsive
                        </p>

                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 text-center hover:border-cyan-400 transition overflow-hidden">

                        <h4 className="text-2xl md:text-5xl font-black text-cyan-400 break-words">
                            Moderno
                        </h4>

                        <p className="text-gray-400 mt-4 text-sm md:text-base">
                            Diseño Premium
                        </p>

                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 text-center hover:border-cyan-400 transition overflow-hidden">

                        <h4 className="text-2xl md:text-5xl font-black text-cyan-400 break-words">
                            Rápido
                        </h4>

                        <p className="text-gray-400 mt-4 text-sm md:text-base">
                            Optimización Web
                        </p>

                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 text-center hover:border-cyan-400 transition overflow-hidden">

                        <h4 className="text-2xl md:text-5xl font-black text-cyan-400 break-words">
                            Soporte
                        </h4>

                        <p className="text-gray-400 mt-4 text-sm md:text-base">
                            Atención Personalizada
                        </p>

                    </div>

                </div>
            </section>
            {/* PROYECTOS */}
            <div className="absolute top-[1700px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
            <section className="relative z-10 px-8 py-24">

                <h3 className="text-5xl font-bold text-center mb-6">
                    Estos proyectos pueden ser para vos
                </h3>

                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                    Diseños modernos y profesionales adaptados para diferentes tipos de negocios y emprendimientos.
                </p>

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
                                Diseño moderno para un negocio automotriz con reservas y contacto rápido por WhatsApp.
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
                            alt="Restaurante"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-8">

                            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                                Restaurantes
                            </h4>

                            <p className="text-gray-400">
                                Sitios web modernos con menú digital y contacto rápido para restaurantes.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CONTACTO */}
            <section
                id="contacto"
                className="relative z-10 px-4 md:px-8 py-24"
            >

                <div className="w-full max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-5 md:p-10 overflow-hidden">

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
                            className="bg-black border border-gray-700 rounded-xl px-4 md:px-6 py-4 w-full text-white outline-none focus:border-cyan-400 transition"
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="bg-black border border-gray-700 rounded-xl px-4 md:px-6 py-4 w-full text-white outline-none focus:border-cyan-400 transition"
                        />

                        <textarea
                            placeholder="Cuéntanos sobre tu proyecto..."
                            rows="6"
                            className="bg-black border border-gray-700 rounded-xl px-4 md:px-6 py-4 w-full text-white outline-none focus:border-cyan-400 transition resize-none"
                        ></textarea>

                        <button
                            className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
                        >
                            Enviar Mensaje
                        </button>

                    </form>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="relative z-10 border-t border-gray-800 py-10 px-8 text-center text-gray-500">

                <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                    Nexora Web CR
                </h4>

                <p>
                    Diseño y desarrollo web profesional para negocios y emprendimientos.
                </p>

                <p className="mt-4 text-sm">
                    © 2026 Nexora Web CR - Todos los derechos reservados
                </p>

            </footer>

            {/* BOTÓN WHATSAPP */}
            <a
                href="https://wa.me/50670089891"
                target="_blank"
                className="fixed bottom-6 right-6 bg-cyan-400 text-black px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-110 transition z-50"
            >
                WhatsApp
            </a>

        </div>

    )
}