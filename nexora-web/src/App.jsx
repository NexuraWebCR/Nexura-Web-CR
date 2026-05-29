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
            <nav className="
relative
z-10
flex
items-center
justify-between
px-8
py-7
border-b
border-cyan-500/10
bg-black/60
backdrop-blur-2xl
shadow-[0_0_45px_rgba(59,130,246,0.12)]
">
                {/* LOGO */}
                <div className="flex flex-col items-start select-none">

                    <h1
                        className="
    text-5xl
    md:text-6xl
    font-black
    uppercase
    leading-none
    transition-all
    duration-500
    hover:scale-105
    "
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            letterSpacing: "0.18em",
                            background: "linear-gradient(90deg, #67e8f9 0%, #3b82f6 45%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 18px rgba(59,130,246,0.45)"
                        }}
                    >
                        NEXORA
                    </h1>

                    <div className="w-full flex justify-center mt-1">

                        <p
                            className="
      text-ml
      uppercase
      font-bold
      "
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                letterSpacing: "0.55em",
                                color: "#c084fc",
                                textShadow: "0 0 10px rgba(168,85,247,0.7)"
                            }}
                        >
                            WEB CR
                        </p>

                    </div>

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
            <motion.section
                id="inicio"
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

        </div>
    )
}