import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Menu,
    X,
    Code2,
    Rocket,
    Calendar,
    Check,
    Star,
    ChevronDown,
    Send,
    MessageSquare,
    Phone,
    Mail,
    MapPin,
    ExternalLink,
    ArrowRight,
    ShieldCheck,
    Zap,
    Sparkles
} from "lucide-react"

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeFaq, setActiveFaq] = useState(null)

    // Capturar scroll para navbar compacta
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const services = [
        {
            title: "Páginas Web",
            icon: <Code2 className="w-7 h-7 text-cyan-400" />,
            description: "Sitios web corporativos completos, interactivos y altamente profesionales adaptados de forma nativa para todos los dispositivos.",
            features: ["Optimización SEO integrada", "Dominio & Hosting de alta velocidad", "Diseño responsivo optimizado"],
            borderColor: "hover:border-cyan-500/30",
            shadowColor: "hover:shadow-cyan-500/10"
        },
        {
            title: "Landing Pages",
            icon: <Rocket className="w-7 h-7 text-purple-400" />,
            description: "Páginas de aterrizaje de alto impacto y velocidad, enfocadas al 100% en convertir visitas en clientes potenciales y ventas.",
            features: ["Estructura de alta conversión", "Integración ágil de WhatsApp", "Llamados a la acción estratégicos"],
            borderColor: "hover:border-purple-500/30",
            shadowColor: "hover:shadow-purple-500/10"
        },
        {
            title: "Sistemas de Citas",
            icon: <Calendar className="w-7 h-7 text-blue-400" />,
            description: "Formularios inteligentes y calendarios de reservas integrados directamente con tu WhatsApp para automatizar tu negocio.",
            features: ["Calendario interactivo intuitivo", "Validación instantánea de datos", "Notificaciones directas por chat"],
            borderColor: "hover:border-blue-500/30",
            shadowColor: "hover:shadow-blue-500/10"
        }
    ]

    const projects = [
        {
            title: "Lavacar Premium",
            description: "Plataforma de detailing automotriz de alta gama, con cotizador inteligente de servicios y selector de citas directo a WhatsApp.",
            image: "/lavacar.png",
            tags: ["React", "Tailwind CSS", "WhatsApp API", "Reservas"],
            whatsappMsg: "Hola Nexora Web, vi el proyecto de Lavacar Premium y me gustaría cotizar algo similar para mi negocio."
        },
        {
            title: "Barbería",
            description: "Página web elegante para agendamiento de citas, galería interactiva de cortes en alta definición y mapa de ubicación integrada.",
            image: "/barberia.png",
            tags: ["React", "Framer Motion", "Tailwind", "Responsive"],
            whatsappMsg: "Hola Nexora Web, me encantó el diseño de la Barbería y quiero cotizar una web moderna con sistema de citas."
        },
        {
            title: "Restaurante",
            description: "Menú gastronómico digital interactivo con categorías dinámicas y llamado directo a pedidos, ideal para restaurantes modernos.",
            image: "/restaurante.png",
            tags: ["Next.js", "Glassmorphism", "Delivery Link", "Menu Digital"],
            whatsappMsg: "Hola Nexora Web, estoy interesado en una página web para mi restaurante similar al proyecto Restaurante."
        }
    ]

    const metrics = [
        { value: "100%", label: "Diseño Responsive", desc: "Perfecto en móviles y computadoras" },
        { value: "Premium", label: "Diseño Exclusivo", desc: "Sin plantillas baratas ni aburridas" },
        { value: "Rápido", label: "Optimización WPO", desc: "Tiempos de carga ultrarrápidos" },
        { value: "24/7", label: "Soporte Continuo", desc: "Atención personalizada posventa" }
    ]



    const faqs = [
        {
            q: "¿Qué necesito para empezar mi página web?",
            a: "¡Es muy sencillo! Solo necesitas tener una idea clara de tu negocio, tu logotipo, y los textos o imágenes básicas que quieras incluir. Si no los tienes, nosotros te asesoramos y ayudamos a redactarlos e ilustrarlos con recursos premium."
        },
        {
            q: "¿Cuánto tiempo toma el desarrollo de una web?",
            a: "El tiempo depende de la complejidad. Una Landing Page de alta conversión suele estar lista en 5-7 días hábiles. Una Página Web Corporativa completa o un Sistema de Citas toma entre 10 y 15 días hábiles."
        },
        {
            q: "¿Las páginas web incluyen dominio y hosting?",
            a: "¡Sí, totalmente! Todos nuestros planes de desarrollo web incluyen el registro de tu dominio personalizado (ej. tuempresa.com) y el servicio de hosting de alta velocidad optimizado por el primer año, sin costos adicionales."
        },
        {
            q: "¿Cómo funciona el botón de WhatsApp y las cotizaciones?",
            a: "Integramos botones inteligentes que envían un mensaje personalizado directamente a tu WhatsApp con los datos del cliente que llenó el formulario, facilitando una conversación instantánea y aumentando las ventas de inmediato."
        }
    ]

    return (
        <div className="relative min-h-screen bg-[#030014] text-[#f8fafc] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-400">

            {/* MALLA DE FONDO DINÁMICA CON ORBES */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full z-0 animate-blob-1 pointer-events-none"></div>
            <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full z-0 animate-blob-2 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[15%] w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full z-0 animate-blob-1 pointer-events-none"></div>

            {/* CUADRÍCULA DE FONDO ULTRA SUTIL */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"
            ></div>

            {/* NAVBAR */}
            <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${scrolled
                    ? "bg-slate-950/70 border-slate-800/40 backdrop-blur-md py-4 shadow-lg shadow-cyan-950/20"
                    : "bg-transparent border-transparent py-6"}
      `}>
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

                    {/* LOGO */}
                    <a href="#inicio" className="flex flex-col items-start select-none group">
                        <h1
                            className="text-4xl md:text-5xl font-black uppercase leading-none tracking-wider transition-all duration-300 group-hover:scale-102"
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                background: "linear-gradient(90deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 0 30px rgba(59,130,246,0.4)"
                            }}
                        >
                            NEXORA
                        </h1>
                        <p
                            className="text-sm uppercase font-extrabold tracking-[0.45em] self-center ml-1 text-purple-400"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            WEB CR
                        </p>
                    </a>

                    {/* MENÚ DESKTOP */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#inicio" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300">
                            Inicio
                        </a>
                        <a href="#servicios" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300">
                            Servicios
                        </a>
                        <a href="#proyectos" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300">
                            Proyectos
                        </a>
                        <a href="#propuesta" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300">
                            ¿Por qué elegirnos?
                        </a>
                        <a href="#contacto" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300">
                            Contacto
                        </a>
                    </div>

                    {/* BOTÓN CTA DESKTOP */}
                    <div className="hidden md:block">
                        <a
                            href="#contacto"
                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-full group bg-gradient-to-br from-cyan-500 to-purple-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#030014] rounded-full group-hover:bg-opacity-0">
                                Cotizar Proyecto
                            </span>
                        </a>
                    </div>

                    {/* BOTÓN MOBILE */}
                    <button
                        className="md:hidden text-cyan-400 focus:outline-none p-1 rounded-lg border border-cyan-500/20 bg-cyan-950/20"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </nav>

            {/* MENÚ MOBILE */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[70px] left-0 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-lg px-8 py-8 flex flex-col gap-6 text-slate-200 z-40 md:hidden"
                    >
                        <a href="#inicio" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-cyan-400 transition py-1 border-b border-slate-900">
                            Inicio
                        </a>
                        <a href="#servicios" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-cyan-400 transition py-1 border-b border-slate-900">
                            Servicios
                        </a>
                        <a href="#proyectos" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-cyan-400 transition py-1 border-b border-slate-900">
                            Proyectos
                        </a>
                        <a href="#propuesta" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-cyan-400 transition py-1 border-b border-slate-900">
                            ¿Por qué elegirnos?
                        </a>
                        <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-cyan-400 transition py-1">
                            Contacto
                        </a>
                        <a
                            href="#contacto"
                            onClick={() => setMenuOpen(false)}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-center shadow-lg shadow-cyan-500/20"
                        >
                            Cotizar ahora
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <motion.section
                id="inicio"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-20 grid lg:grid-cols-12 gap-12 items-center"
            >
                <div className="lg:col-span-7 flex flex-col items-start text-left">

                    {/* BADGE SUPERIOR */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
                        <Sparkles size={12} />
                        Desarrollo Web Premium en Costa Rica
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
                        Diseñamos páginas web <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">modernas</span> para marcas que inspiran.
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
                        Creamos experiencias digitales exclusivas, rápidas y totalmente profesionales para ayudar a los negocios a destacar en internet y maximizar sus ventas.
                    </p>

                    <div className="flex gap-4 mt-8 flex-wrap">
                        <button
                            onClick={() =>
                                document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })
                            }
                            className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center gap-2"
                        >
                            Solicitar Cotización
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() =>
                                document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })
                            }
                            className="border border-slate-700 hover:border-cyan-400/50 bg-slate-950/40 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all duration-300"
                        >
                            Ver Servicios
                        </button>
                    </div>

                </div>

                {/* COLUMNA DERECHA: MOCKUP INTERACTIVO SIMULADO (IDE PANEL) */}
                <div className="lg:col-span-5 relative animate-float">

                    {/* ORBE DETRÁS DEL MOCKUP */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl rounded-3xl pointer-events-none"></div>

                    <div className="relative border border-slate-800/80 bg-slate-950/80 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden max-w-lg mx-auto">

                        {/* VENTANA CABECERA */}
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/80">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                            </div>
                            <span className="text-xs font-mono text-slate-500 select-none">nexora-config.js</span>
                            <div className="w-10"></div>
                        </div>

                        {/* CUERPO DE CÓDIGO */}
                        <div className="p-6 font-mono text-xs md:text-sm text-slate-400 overflow-x-auto select-none leading-relaxed">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">nexoraWeb</span> = &#123;
                            <div className="pl-4">
                                <span>nombre:</span> <span className="text-emerald-400">"Diseño Web CR"</span>,
                            </div>
                            <div className="pl-4">
                                <span>velocidad:</span> <span className="text-emerald-400">"99% (WPO A+)"</span>,
                            </div>
                            <div className="pl-4">
                                <span>experiencia:</span> <span className="text-emerald-400">"Premium"</span>,
                            </div>
                            <div className="pl-4">
                                <span>tecnologias:</span> [
                                <div className="pl-4">
                                    <span className="text-amber-400">"React"</span>, <span className="text-amber-400">"Tailwind"</span>, <span className="text-amber-400">"Framer Motion"</span>
                                </div>
                                ],
                            </div>
                            <div className="pl-4">
                                <span>seo:</span> <span className="text-cyan-400">true</span>,
                            </div>
                            <div className="pl-4">
                                <span>whatsappReady:</span> <span className="text-cyan-400">true</span>
                            </div>
                            &#125;;
                            <br /><br />
                            <span className="text-purple-400">function</span> <span className="text-yellow-400">crecerNegocio</span>(<span className="text-orange-400">marca</span>) &#123;
                            <div className="pl-4">
                                <span className="text-purple-400">return</span> <span className="text-emerald-400">`🚀 $&#123;<span className="text-slate-300">marca</span>&#125; despega en la web!`</span>;
                            </div>
                            &#125;
                        </div>

                    </div>

                </div>

            </motion.section>

            {/* DETECTOR DE SCROLL MOUSE INDICATOR */}
            <div className="flex justify-center pb-20 select-none pointer-events-none">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2"
                >
                    <span className="w-1.5 h-3 bg-cyan-400 rounded-full inline-block"></span>
                </motion.div>
            </div>

            {/* SECCIÓN DE SERVICIOS */}
            <section
                id="servicios"
                className="relative z-10 px-6 md:px-8 py-20 max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Zap size={12} />
                        Lo Que Hacemos
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Nuestros Servicios Profesionales
                    </h3>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
                        Creamos infraestructuras digitales potentes, eficientes y hermosas que elevan el valor percibido de tu negocio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`
                relative bg-slate-950/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-sm
                transition-all duration-500 hover:-translate-y-2 group
                ${service.borderColor} ${service.shadowColor} hover:bg-slate-950/60
              `}
                        >
                            {/* BACKGLOW DE TARJETA */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-white/[0.03] rounded-3xl pointer-events-none"></div>

                            {/* ICONO */}
                            <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                {service.icon}
                            </div>

                            <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                {service.description}
                            </p>

                            {/* LISTA DE BENEFICIOS DEL SERVICIO */}
                            <ul className="space-y-3 pt-4 border-t border-slate-900">
                                {service.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                                        <span className="w-5 h-5 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                            <Check size={10} />
                                        </span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN SOBRE NOSOTROS (LAYOUT CORREGIDO & OPTIMIZADO) */}
            <section className="relative z-10 px-6 md:px-8 py-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* TEXTO IZQUIERDA */}
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            <ShieldCheck size={12} />
                            Sobre Nexora
                        </div>

                        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Impulsamos la visibilidad de tu negocio en internet
                        </h3>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
                            En **Nexora Web CR** nos especializamos en dotar a emprendedores y empresas costarricenses con herramientas web premium y de alta tecnología. Diseñamos para enamorar visualmente y optimizamos para convertir visitas en ventas.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                            No utilizamos plantillas sobrecargadas. Cada línea de código y cada elemento visual está pensado de manera estratégica para garantizar velocidad de carga sobresaliente, posicionamiento en buscadores (SEO) y una experiencia de usuario insuperable.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 w-6 h-6 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                    <Check size={12} />
                                </span>
                                <div>
                                    <h5 className="font-semibold text-slate-200">Garantía de Optimización A+</h5>
                                    <p className="text-xs text-slate-400 font-light mt-0.5">Sitios webs súper veloces que cargan en menos de 2 segundos.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1 w-6 h-6 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                    <Check size={12} />
                                </span>
                                <div>
                                    <h5 className="font-semibold text-slate-200">Integración con WhatsApp y CRM</h5>
                                    <p className="text-xs text-slate-400 font-light mt-0.5">Captura clientes de forma instantánea directamente en tu móvil.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TARJETAS DE MÉTRICAS DERECHA (GRID CORREGIDA) */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="relative bg-slate-950/30 border border-slate-800/80 rounded-3xl p-4 sm:p-6 text-center hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/10 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-white/[0.02] rounded-3xl pointer-events-none"></div>

                                <h4 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-cyan-400 mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {metric.value}
                                </h4>

                                <p className="text-slate-200 font-bold text-xs sm:text-sm md:text-base">
                                    {metric.label}
                                </p>

                                <p className="text-slate-500 text-[10px] sm:text-xs mt-2 font-light">
                                    {metric.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECCIÓN PORTAFOLIO DE PROYECTOS */}
            <section
                id="proyectos"
                className="relative z-10 px-6 md:px-8 py-20 max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles size={12} />
                        Caso de Éxito
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Proyectos que impulsan tus ideas
                    </h3>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
                        Echa un vistazo a estas estructuras conceptuales listas para ser totalmente adaptadas y personalizadas para tu marca.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-slate-950/40 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 group shadow-2xl backdrop-blur-sm flex flex-col h-full"
                        >

                            {/* IMAGEN DE PORTADA */}
                            <div className="relative overflow-hidden h-52 md:h-56 w-full border-b border-slate-900">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-60"></div>
                            </div>

                            {/* CONTENIDO */}
                            <div className="p-8 flex flex-col flex-grow">

                                {/* BADGES / TAGS */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {proj.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold border border-slate-800 bg-slate-900/60 text-slate-400 uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                                    {proj.title}
                                </h4>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light flex-grow">
                                    {proj.description}
                                </p>

                                {/* BOTÓN COTIZACIÓN POR PROYECTO */}
                                <a
                                    href={`https://wa.me/50670089891?text=${encodeURIComponent(proj.whatsappMsg)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 border border-slate-800 hover:border-cyan-400/50 bg-slate-900/40 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm"
                                >
                                    Me interesa esta plantilla
                                    <ExternalLink size={14} />
                                </a>

                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NUEVA: SECCIÓN DE TESTIMONIOS (OPINIONES) */}
            {/* SECCIÓN POR QUÉ ELEGIRNOS */}
            <section
                id="propuesta"
                className="relative z-10 px-6 md:px-8 py-20 max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
                        <Sparkles size={12} />
                        Nuestra Filosofía
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        ¿Por qué elegir Nexora Web?
                    </h3>
                    <p className="text-slate-400 mt-5 max-w-3xl mx-auto font-light text-base md:text-lg leading-relaxed">
                        Tu sitio web no es solo un gasto o una tarjeta de presentación digital; <span className="text-cyan-400 font-semibold">es el mejor vendedor de tu negocio, disponible las 24 horas del día.</span> No creamos páginas genéricas; diseñamos herramientas de conversión rápidas, seguras y optimizadas que atraen clientes de verdad.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* CARTA 1: CONVERSIÓN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-950/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-slate-950/60 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Rocket size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">Enfoque 100% en Ventas</h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                            No diseñamos para que solo "se vea bonito". Estructuramos estratégicamente llamados a la acción claros, botones de WhatsApp flotantes de alta conversión y flujos de usuario intuitivos pensados para aumentar tu facturación desde el primer día.
                        </p>
                    </motion.div>

                    {/* CARTA 2: VELOCIDAD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-950/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-sm hover:border-purple-500/30 hover:bg-slate-950/60 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Zap size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-purple-400 transition-colors">Velocidad que Retiene Clientes</h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                            Una página web que tarda más de 3 segundos en cargar pierde la mitad de sus clientes potenciales. Programamos con código optimizado de última generación, asegurando que tu sitio sea instantáneo en celulares y computadoras.
                        </p>
                    </motion.div>

                    {/* CARTA 3: SOPORTE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-slate-950/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-500/30 hover:bg-slate-950/60 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors">Soporte y Garantía Total</h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                            No te dejamos solo después de entregar la página. Nos encargamos del hosting de alta velocidad, registro del dominio, certificados de seguridad SSL y brindamos soporte técnico continuo para que tu sitio web nunca deje de vender.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* NUEVA: SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) ACCORDION */}
            <section className="relative z-10 px-6 md:px-8 py-20 max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <MessageSquare size={12} />
                        Dudas Comunes
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Preguntas Frecuentes
                    </h3>
                    <p className="text-slate-400 mt-4 font-light">
                        Todo lo que necesitas saber antes de dar el siguiente gran paso digital para tu negocio.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-slate-950/30 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:bg-slate-950/50"
                        >
                            <button
                                className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-slate-200 hover:text-cyan-400 transition-colors focus:outline-none"
                                onClick={() => toggleFaq(i)}
                            >
                                <span>{faq.q}</span>
                                <ChevronDown
                                    size={18}
                                    className={`text-slate-400 transition-transform duration-300 ${activeFaq === i ? "rotate-180 text-cyan-400" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light border-t border-slate-900/60 pt-2">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ))}
                </div>

            </section>

            {/* SECCIÓN CONTACTO (DOS COLUMNAS OPTIMIZADA) */}
            <section
                id="contacto"
                className="relative z-10 px-6 md:px-8 py-20 max-w-7xl mx-auto"
            >
                <div className="relative border border-slate-800/80 bg-slate-950/30 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm">

                    {/* ORBE DENTRO DE CONTACTO */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

                        {/* COLUMNA 1: INFO DE CONTACTO */}
                        <div className="lg:col-span-5 flex flex-col justify-between h-full">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                                    <Send size={12} />
                                    ¿Hablamos?
                                </div>

                                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                                    Hablemos de tu proyecto
                                </h3>

                                <p className="text-slate-400 mb-8 font-light leading-relaxed">
                                    Cuéntanos qué ideas tienes para tu negocio. Nos pondremos en contacto contigo para asesorarte y crear una propuesta a la medida de tu presupuesto.
                                </p>
                            </div>

                            {/* TARJETAS CON DATOS */}
                            <div className="space-y-4">

                                <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-900 rounded-2xl p-4">
                                    <span className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                        <Phone size={18} />
                                    </span>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Teléfono / WhatsApp</p>
                                        <a href="https://wa.me/50670089891" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">+506 7008-9891</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-900 rounded-2xl p-4">
                                    <span className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                                        <Mail size={18} />
                                    </span>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Correo Electrónico</p>
                                        <a href="mailto:nexorawebcr@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-purple-400 transition-colors">nexorawebcr@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-900 rounded-2xl p-4">
                                    <span className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                        <MapPin size={18} />
                                    </span>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Ubicación</p>
                                        <p className="text-sm font-semibold text-slate-200">Cartago, Costa Rica</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* COLUMNA 2: FORMULARIO */}
                        <div className="lg:col-span-7">
                            <form className="grid gap-5 bg-slate-900/30 border border-slate-800/40 p-6 md:p-8 rounded-2xl backdrop-blur-sm" onSubmit={handleSubmit}>

                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nombre completo</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ej. Juan Pérez"
                                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Correo electrónico</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Ej. juan@tuempresa.com"
                                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Cuéntanos sobre tu proyecto</label>
                                    <textarea
                                        required
                                        placeholder="Ej. Necesito una landing page profesional para mi consultorio médico..."
                                        rows="4"
                                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Enviar Mensaje
                                    <Send size={16} />
                                </button>

                            </form>
                        </div>

                    </div>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 border-t border-slate-900 bg-slate-950/40 backdrop-blur-md py-14 px-6 md:px-8 text-center text-slate-500">
                <div className="max-w-7xl mx-auto flex flex-col items-center">

                    <h4
                        className="text-2xl font-black text-cyan-400 mb-3 uppercase tracking-widest"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Nexora Web CR
                    </h4>

                    <p className="max-w-md text-sm text-slate-400 font-light mb-6">
                        Diseño y desarrollo web premium. Creamos estructuras digitales de alto rendimiento a precios justos para potenciar tu marca.
                    </p>

                    <div className="flex gap-6 text-xs font-medium text-slate-500 mb-8">
                        <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
                        <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
                        <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
                        <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
                    </div>

                    <p className="text-xs text-slate-600 font-light">
                        © {new Date().getFullYear()} Nexora Web CR. Todos los derechos reservados.
                    </p>

                </div>
            </footer>

            {/* BOTÓN WHATSAPP FLOTANTE MEJORADO */}
            <a
                href="https://wa.me/50670089891"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 flex items-center gap-3 z-50 group"
            >

                {/* TOOLTIP/BADGE DE WHATSAPP */}
                <span className="hidden md:inline-block bg-slate-950/90 border border-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    ¿Tienes dudas? ¡Escríbenos!
                </span>

                {/* LOGO WHATSAPP CON ONDAS EXPANSIVAS */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#25d366]/40 blur-md rounded-full animate-ping pointer-events-none"></div>
                    <div className="relative w-14 h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-300 shadow-[#25d366]/20">
                        <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.031 2C6.49 2 2 6.48 2 12.02c0 1.91.53 3.78 1.56 5.42L2 23l5.72-1.5c1.57.86 3.32 1.3 5.31 1.3 5.54 0 10.03-4.48 10.03-10.02C23.06 6.48 18.57 2 12.03 2zM12 20.33c-1.74 0-3.41-.45-4.89-1.32l-.35-.2-3.64.95.97-3.53-.22-.36c-.95-1.5-1.46-3.23-1.46-5.05 0-4.8 3.9-8.7 8.7-8.7 4.8 0 8.7 3.9 8.7 8.7 0 4.8-3.9 8.7-8.7 8.7zm4.84-6.62c-.27-.13-1.57-.77-1.81-.86-.24-.09-.42-.13-.59.13-.18.26-.68.86-.83 1.03-.15.17-.3.2-.57.06-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.3.4-.46.13-.16.18-.28.27-.46.09-.18.04-.33-.02-.46-.06-.13-.59-1.42-.81-1.95-.21-.52-.43-.45-.59-.46-.15-.01-.33-.01-.51-.01-.18 0-.48.07-.73.33-.25.27-.97.95-.97 2.31s.99 2.68 1.13 2.86c.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.67.21 1.28.18 1.76.11.54-.08 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.06-.11-.24-.18-.51-.31z" />
                        </svg>
                    </div>
                </div>

            </a>

        </div>
    )
}