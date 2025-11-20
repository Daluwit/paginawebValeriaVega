import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ProfileImage from "@/components/ProfileImage";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Gift, 
  Sparkles,
  CheckCircle2,
  Brain,
  Handshake,
  Lightbulb,
  Rocket,
  Heart
} from "lucide-react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const pilares = [
    {
      title: "Cultura Organizacional",
      description: "Sistema de valores, creencias, supuestos, normas y comportamientos compartidos que guía la forma en que las personas dentro de una organización perciben, piensan, lideran, sienten y actúan.",
      icon: Users
    },
    {
      title: "Selección del Talento Humano adecuado",
      description: "Proceso sistemático mediante el cual una organización identifica, evalúa y elige a los candidatos que cumplen con el perfil requerido para un cargo, considerando competencias técnicas, comportamentales y evaluando la alineación con la cultura de la empresa.",
      icon: Target
    },
    {
      title: "Evaluación de desempeño",
      description: "Proceso continuo, estructurado y objetivo mediante el cual se analiza el rendimiento, el comportamiento y los resultados de un colaborador en un período determinado, comparándolos con estándares previamente definidos.",
      icon: TrendingUp
    },
    {
      title: "Plan de desarrollo",
      description: "El plan de desarrollo es un conjunto estructurado de acciones formativas diseñadas para fortalecer las competencias técnicas y blandas de un colaborador, con el fin de mejorar su desempeño actual y preparar su crecimiento profesional dentro de la organización.",
      icon: Award
    },
    {
      title: "Plan de beneficios",
      description: "Conjunto de compensaciones económicas y no económicas que la empresa ofrece a sus colaboradores, además del salario básico, para contribuir a su bienestar, motivación, retención y calidad de vida.",
      icon: Gift
    }
  ];

  const hallazgos = [
    {
      title: "Cultura Organizacional",
      critico: [
        "No hay evaluación formal → no se sabe cómo se está viviendo la cultura.",
        "Proyecto de cultura anterior quedó inconcluso: perfiles a medias, manuales temporales, formatos cambiados mil veces.",
        "Colaboradores que solo ejecutan tareas, trabajan sin sentido desconectados del propósito."
      ],
      riesgos: [
        "Desconexión entre la cultura deseada y la realidad cotidiana en los próximos años.",
        "Desgaste emocional.",
        "El exceso de presión y el micromanagement destruye la motivación."
      ]
    },
    {
      title: "Selección del Talento Humano adecuado",
      critico: [
        "Falta de procesos de selección robustos alineados a los nuevos valores y objetivos.",
        "Errores de contratación ante perfiles de cargo incompletos y cambiantes."
      ],
      riesgos: [
        "Contratación de personas que resuelven en la operación pero no cazan culturalmente con la compañía.",
        "Rotación por inadecuación de colaborador - cargo.",
        "Aumento del micromanagement."
      ]
    },
    {
      title: "Evaluación de desempeño",
      critico: [
        "Ausencia de indicadores por roles.",
        "Control ejercido desde la exigencia y no desde tableros de control."
      ],
      riesgos: [
        "Dificultad para tomar decisiones de aumentos, ascensos, planes de desarrollo y sucesión."
      ]
    },
    {
      title: "Plan de desarrollo",
      critico: [
        "Dificultad para tomar decisiones de aumentos, ascensos, planes de desarrollo y sucesión."
      ],
      riesgos: [
        "Pérdida de Talento con potencial.",
        "Dificultad para soportar la innovación y la expansión de la empresa sin personas preparadas."
      ]
    },
    {
      title: "Plan de beneficios",
      critico: [
        "Inequidad salarial.",
        "Ausencia de estructura de compensación y beneficios."
      ],
      riesgos: [
        "Resentimientos, comparaciones constantes, chisme y clima contaminado.",
        "Riesgo de perder talentos por sensación de injusticia."
      ]
    }
  ];

  const propuestaItems = [
    {
      title: "Fortalecimiento del rol de la líder Capital Humano",
      description: "No es sólo ordenar procesos, es subir a Capital Humano al nivel estratégico.",
      icon: Sparkles
    },
    {
      title: "Rediseñar el rol de María Camila",
      description: "Que deje parte de lo operativo (apoyada en IA y sistemas) y tome el rol de socia estratégica orientada a las personas.",
      icon: Brain
    },
    {
      title: "Uso de tecnología e IA en talento humano",
      description: "Diseñar procesos + herramientas (plantillas, flujos, automatizaciones) para disminuir tiempo de ejecución.",
      icon: CheckCircle2
    },
    {
      title: "Trabajo directo con la alta dirección",
      description: "Para generar un giro en la cultura organizacional, debemos trabajar de la mano con el equipo directivo.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen" style={{ 
      background: "linear-gradient(135deg, #faf6f1 0%, #f3f9ff 50%, #faf6f1 100%)"
    }}>
      <Navbar scrollToSection={scrollToSection} />
      {/* 1. PORTADA / COVER */}
      <section 
        className="min-h-screen flex flex-col px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative pt-20 sm:pt-24 md:pt-28 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #faf6f1 0%, #f3f9ff 50%, #dee9f6 100%)"
        }}
        data-testid="section-portada"
      >
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center pb-32 md:pb-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Imagen de perfil - lado izquierdo */}
            <div className="md:col-span-1 flex justify-center md:justify-end fade-in-section mb-8 md:mb-0">
              <div className="relative">
                {/* Borde azul decorativo */}
                <div 
                  className="absolute -left-2 -bottom-2 sm:-left-3 sm:-bottom-3 md:-left-4 md:-bottom-4 w-full h-full rounded-lg z-0"
                  style={{ backgroundColor: "#082053" }}
                />
                <div 
                  className="absolute -left-1 -bottom-1 sm:-left-2 sm:-bottom-2 md:-left-2 md:-bottom-2 w-full h-full rounded-lg z-10"
                  style={{ backgroundColor: "#306ab0" }}
                />
                <div className="relative z-20 w-48 sm:w-56 md:w-64 lg:w-80 h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                  <ProfileImage className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Contenido central */}
            <div className="md:col-span-2 text-center md:text-left space-y-6 md:space-y-8 fade-in-section">
              <div>
                <div className="mb-4 md:mb-6 lg:mb-8">
                  <img
                    src="/naturmega-logo.svg"
                    alt="Naturmega Logo"
                    className="h-16 md:h-32 lg:h-40 xl:h-44 w-auto object-contain mx-auto md:mx-0 max-w-full"
                    style={{ maxWidth: '500px' }}
                    onError={(e) => {
                      // Fallback si no existe el logo
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                    data-testid="naturmega-logo"
                  />
                  <h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight hidden"
            style={{ color: "#082053", fontWeight: 800 }}
                    data-testid="title-propuesta-fallback"
          >
                    NATURMEGA
          </h1>
                </div>
          <h2 
                  className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4"
            style={{ color: "#306ab0", fontWeight: 600 }}
            data-testid="subtitle-consultoria"
          >
                  Consultoría en gestion del Talento Humano
          </h2>
          <p 
                  className="text-base md:text-lg lg:text-xl"
            style={{ color: "#082053", fontWeight: 500 }}
            data-testid="text-location"
          >
            Barranquilla · Noviembre 2025
          </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Texto confidencial - responsive: relativo en móvil, absoluto en desktop */}
        <div 
          className="absolute bottom-4 md:bottom-12 left-0 right-0 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto z-10"
          data-testid="text-confidencial"
        >
          <p 
            className="text-xs sm:text-sm md:text-base leading-relaxed text-center"
            style={{ color: "#082053", fontWeight: 400, opacity: 0.7 }}
          >
            Documento confidencial destinado únicamente para el equipo directivo de Naturmega.
            Está prohibida su reproducción y/o distribución total o parcial sin permiso escrito de la fuente.
            Este documento representa una propiedad intelectual y como tal se encuentra protegida por la normatividad legal aplicable a la materia.
          </p>
        </div>
      </section>

      {/* 2. TABLA DE CONTENIDO */}
      <section 
        id="tabla-contenido"
        className="py-20 px-6"
        style={{ 
          background: "linear-gradient(180deg, #f3f9ff 0%, #ffffff 100%)"
        }}
        data-testid="section-tabla-contenido"
      >
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-tabla-contenido"
          >
            Tabla de contenido
          </h2>
          <div className="space-y-3">
            {[
              { id: "analisis", text: "ANÁLISIS DE LA SITUACIÓN ACTUAL" },
              { id: "pilares", text: "PILARES A TRABAJAR" },
              { id: "hallazgos", text: "HALLAZGOS IDENTIFICADOS BAJO VISIÓN SISTÉMICA" },
              { id: "estrategias", text: "ESTRATEGIAS ESPECÍFICAS PARA ABORDAR CADA ÁREA CRÍTICA" },
              { id: "planes", text: "PLANES DE ACCIÓN EN CADA PILAR" },
              { id: "propuesta", text: "NUESTRA PROPUESTA INCLUYE" },
              { id: "forma-pago", text: "FORMA DE PAGO" }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-8 py-5 rounded-lg transition-all duration-300 hover-elevate active-elevate-2 border"
                style={{ 
                  backgroundColor: "#ffffff",
                  borderColor: "#ded6cb",
                  color: "#082053",
                  fontWeight: 500
                }}
                data-testid={`link-${item.id}`}
              >
                <span className="text-lg">{index + 1}. {item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ANÁLISIS DE LA SITUACIÓN ACTUAL */}
      <section 
        id="analisis"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #ffffff 0%, #faf6f1 50%, #f3f9ff 100%)"
        }}
        data-testid="section-analisis"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-analisis"
          >
            Análisis de la situación actual
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Análisis 1: Contexto de transformación */}
            <AccordionItem 
              value="item-1" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "0ms"
              }}
            >
                <div 
                  className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                  style={{ backgroundColor: "#306ab0" }}
                >
                  <span 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                    style={{ color: "#ffffff", fontWeight: 800 }}
                  >
                    1
                  </span>
                </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Momento de transformación profunda: Separación empresarial, nuevo gerente general, implementación de ERP y metas 2026 generan fatiga organizacional
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Naturmega atraviesa un momento de transformación profunda. La separación de su empresa hermana, la llegada de un nuevo gerente general, la implementación acelerada de un nuevo ERP y la presencia permanente del presidente de la junta, sumados a las metas definidas para 2026, han generado un escenario organizacional nuevo y un ritmo que ha producido una evidente fatiga en los colaboradores.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Análisis 2: Equipo humano y Capital Humano */}
            <AccordionItem 
              value="item-2" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
                  style={{ 
                    borderColor: "#ded6cb",
                animationDelay: "100ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <span 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#ffffff", fontWeight: 800 }}
                >
                  2
                </span>
                    </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Equipo humano poco visible: Capital Humano operativo y reactivo sin herramientas estratégicas
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  El equipo humano, pese a ser el motor de la operación, hoy se siente poco visible. La gestión de talento recae en dos personas, ambas ocupadas en labores administrativas, comunicacionales y operativas. Esto convierte el área de Capital Humano en un departamento operativo y reactivo, sin las herramientas ni la estructura necesarias para desempeñar un rol estratégico dentro de la compañía.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Análisis 3: Proyecto cultural y ausencia de medición */}
            <AccordionItem 
              value="item-3" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "200ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <span 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#ffffff", fontWeight: 800 }}
                >
                  3
                </span>
          </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Proyecto cultural inconcluso y ausencia de medición: Sin datos, decisiones basadas en percepciones e intuición
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  El proyecto cultural previo, que buscaba definir manuales de funciones, quedó inconcluso. Los documentos existentes son temporales e incompletos lo que lleva a que muchos colaboradores lleguen a hacer, en lugar de desempeñar un rol con claridad, propósito y alineación a los objetivos estratégicos. A esta falta de estructura se suma la ausencia total de medición del clima laboral y de evaluación de desempeño durante los últimos tres años. Sin datos, las decisiones sobre las personas han dependido de percepciones, intuición y micromanagement, lo que limita la capacidad de la organización para crecer con coherencia y consistencia.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Análisis 4: Inequidad salarial */}
            <AccordionItem 
              value="item-4" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "300ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <span 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#ffffff", fontWeight: 800 }}
                >
                  4
                </span>
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Inequidad salarial interna: Diferencias significativas entre analistas con funciones similares amenazan la justicia organizacional
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  A lo anterior se suma una inequidad interna evidente, donde analistas que cumplen funciones similares tienen diferencias salariales significativas. Esta brecha es una amenaza directa para la percepción de justicia organizacional y para la confianza en los procesos de Capital Humano.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Análisis 5: Metas 2026 y sistema de talento */}
            <AccordionItem 
              value="item-5" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "400ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <span 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#ffffff", fontWeight: 800 }}
                >
                  5
                </span>
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Metas 2026 sin sistema de talento alineado: Falta de operativización en comportamientos, procesos e indicadores
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Naturmega proyecta metas para 2026 que responden a estándares de una empresa sólida y visionaria. Sin embargo, estos objetivos no cuentan aún con un sistema de talento humano alineado que permita operativizarlos y traducirlos en comportamientos, procesos, indicadores y prácticas de liderazgo coherentes con la visión.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 4. PILARES A TRABAJAR */}
      <section 
        id="pilares"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(135deg, #dee9f6 0%, #f3f9ff 50%, #dee9f6 100%)"
        }}
        data-testid="section-pilares"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-pilares"
          >
            Pilares a trabajar
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Pilar 1: Cultura Organizacional */}
            <AccordionItem 
              value="pilar-1" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
                style={{
                  borderColor: "#ded6cb",
                animationDelay: "0ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ color: "#ffffff" }} />
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Cultura Organizacional
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Sistema de valores, creencias, supuestos, normas y comportamientos compartidos que guía la forma en que las personas dentro de una organización perciben, piensan, lideran, sienten y actúan.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Pilar 2: Selección del Talento Humano adecuado */}
            <AccordionItem 
              value="pilar-2" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "100ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ color: "#ffffff" }} />
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Selección del Talento Humano adecuado
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Proceso sistemático mediante el cual una organización identifica, evalúa y elige a los candidatos que cumplen con el perfil requerido para un cargo, considerando competencias técnicas, comportamentales y evaluando la alineación con la cultura de la empresa.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Pilar 3: Evaluación de desempeño */}
            <AccordionItem 
              value="pilar-3" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "200ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ color: "#ffffff" }} />
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Evaluación de desempeño
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Proceso continuo, estructurado y objetivo mediante el cual se analiza el rendimiento, el comportamiento y los resultados de un colaborador en un período determinado, comparándolos con estándares previamente definidos.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Pilar 4: Plan de desarrollo */}
            <AccordionItem 
              value="pilar-4" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "300ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ color: "#ffffff" }} />
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Plan de desarrollo
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  El plan de desarrollo es un conjunto estructurado de acciones formativas diseñadas para fortalecer las competencias técnicas y blandas de un colaborador, con el fin de mejorar su desempeño actual y preparar su crecimiento profesional dentro de la organización.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Pilar 5: Plan de beneficios */}
            <AccordionItem 
              value="pilar-5" 
              className="fade-in-section border rounded-lg overflow-visible relative bg-white"
              style={{ 
                borderColor: "#ded6cb",
                animationDelay: "400ms"
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: "#306ab0" }}
              >
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ color: "#ffffff" }} />
              </div>
              <AccordionTrigger 
                className="px-4 sm:px-6 md:px-8 pl-14 sm:pl-18 md:pl-20 lg:pl-24 pt-7 sm:pt-9 md:pt-10 lg:pt-12 pb-3 sm:pb-4 hover:no-underline"
                style={{ color: "#082053" }}
              >
                <span className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-2 sm:pr-4" style={{ fontWeight: 600 }}>
                  Plan de beneficios
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Conjunto de compensaciones económicas y no económicas que la empresa ofrece a sus colaboradores, además del salario básico, para contribuir a su bienestar, motivación, retención y calidad de vida.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 5. HALLAZGOS IDENTIFICADOS */}
      <section 
        id="hallazgos"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #f3f9ff 0%, #faf6f1 50%, #ffffff 100%)"
        }}
        data-testid="section-hallazgos"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-16 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-hallazgos"
          >
            Hallazgos identificados en cada pilar bajo visión sistémica
          </h2>
          
          <div className="space-y-8">
            {hallazgos.map((hallazgo, index) => (
              <Card
                key={index}
                className="fade-in-section border overflow-visible relative"
                style={{
                  borderColor: "#ded6cb",
                  backgroundColor: "#ffffff",
                  animationDelay: `${index * 100}ms`
                }}
                data-testid={`card-hallazgo-${index}`}
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md"
                  style={{ backgroundColor: "#082053" }}
                  aria-hidden="true"
                />
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 pl-8 sm:pl-10 md:pl-12">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid={`heading-hallazgo-${index}`}
                  >
                    {index + 1}. {hallazgo.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <h4 
                        className="text-lg font-semibold mb-4 flex items-center gap-2"
                        style={{ color: "#306ab0", fontWeight: 600 }}
                        data-testid={`heading-critico-${index}`}
                      >
                        <span 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#306ab0" }}
                        />
                        Crítico
                      </h4>
                      <ul className="space-y-3">
                        {hallazgo.critico.map((item, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-3 leading-relaxed"
                            style={{ color: "#082053", fontWeight: 400 }}
                            data-testid={`text-critico-${index}-${i}`}
                          >
                            <span 
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: "#306ab0" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 
                        className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2"
                        style={{ color: "#306ab0", fontWeight: 600 }}
                        data-testid={`heading-riesgos-${index}`}
                      >
                        <span 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#306ab0" }}
                        />
                        Riesgos
                      </h4>
                      <ul className="space-y-3">
                        {hallazgo.riesgos.map((item, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-3 leading-relaxed"
                            style={{ color: "#082053", fontWeight: 400 }}
                            data-testid={`text-riesgos-${index}-${i}`}
                          >
                            <span 
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: "#306ab0" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ESTRATEGIAS ESPECÍFICAS */}
      <section 
        id="estrategias"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(135deg, #f3f9ff 0%, #ffffff 50%, #faf6f1 100%)"
        }}
        data-testid="section-estrategias"
      >
        <div className="max-w-6xl mx-auto fade-in-section">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-estrategias"
          >
            Estrategias específicas diseñadas para abordar cada área crítica
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cultura Organizacional",
                icon: Users,
                acciones: [
                  "Diagnóstico cultural mediante evaluación 360°",
                  "Talleres de definición de valores y propósito",
                  "Implementación de rituales y prácticas culturales",
                  "Medición trimestral del clima organizacional"
                ]
              },
              {
                title: "Selección del Talento Humano",
                icon: Target,
                acciones: [
                  "Revisión y actualización de perfiles de cargo",
                  "Diseño de proceso de selección por competencias",
                  "Capacitación en entrevistas conductuales",
                  "Sistema de onboarding estructurado"
                ]
              },
              {
                title: "Evaluación de desempeño",
                icon: TrendingUp,
                acciones: [
                  "Definición de KPIs por rol y área",
                  "Implementación de tableros de control",
                  "Ciclo de retroalimentación continua",
                  "Calibración semestral de objetivos"
                ]
              },
              {
                title: "Plan de desarrollo",
                icon: Award,
                acciones: [
                  "Identificación de brechas de competencias",
                  "Diseño de planes individuales de desarrollo",
                  "Programa de mentoría interna",
                  "Rutas de carrera definidas por área"
                ]
              },
              {
                title: "Plan de beneficios",
                icon: Gift,
                acciones: [
                  "Análisis de equidad salarial interna",
                  "Benchmarking de compensación del mercado",
                  "Diseño de estructura de bandas salariales",
                  "Paquete de beneficios flexibles"
                ]
              }
            ].map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className="fade-in-section border overflow-visible"
                  style={{
                    borderColor: "#ded6cb",
                    backgroundColor: "#ffffff",
                    animationDelay: `${index * 100}ms`
                  }}
                  data-testid={`card-plan-${index}`}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#dee9f6" }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#306ab0" }} />
                      </div>
                      <h3 
                        className="text-lg sm:text-xl font-semibold leading-tight pt-1 sm:pt-2"
                        style={{ color: "#082053", fontWeight: 600 }}
                        data-testid={`heading-plan-${index}`}
                      >
                        {plan.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {plan.acciones.map((accion, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 sm:gap-3 leading-relaxed text-sm sm:text-base"
                          style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                          data-testid={`text-plan-accion-${index}-${i}`}
                        >
                          <span 
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#306ab0" }}
                          />
                          <span>{accion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PLANES DE ACCIÓN EN CADA PILAR */}
      <section 
        id="planes"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #faf6f1 0%, #f3f9ff 50%, #ffffff 100%)"
        }}
        data-testid="section-planes"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-planes"
          >
            Planes de acción en cada pilar
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {/* 4.1 Cultura organizacional */}
            <Card 
              className="fade-in-section border overflow-visible"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "0ms"
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ color: "#082053", fontWeight: 600 }}
                >
                  4.1 Cultura organizacional
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Traducir los objetivos 2026 y valores en comportamientos concretos observables por cargo y nivel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Manuales de funciones y perfiles alineados a esa cultura, no solo a tareas.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4.2 Selección adecuada del Talento Humano */}
            <Card 
              className="fade-in-section border overflow-visible"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "100ms"
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ color: "#082053", fontWeight: 600 }}
                >
                  4.2 Selección adecuada del Talento Humano
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Matrices de competencias por rol (incluyendo conductas alineadas a valores).
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Guías de entrevista, pruebas y checklist específicos para NaturMega.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Proceso sistémico de selección
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4.3 Evaluación de desempeño */}
            <Card 
              className="fade-in-section border overflow-visible"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "200ms"
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ color: "#082053", fontWeight: 600 }}
                >
                  4.3 Evaluación de desempeño
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Modelo de evaluación adaptado a la innovación.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Sistema de feedback estructurado
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4.4 Plan de desarrollo */}
            <Card 
              className="fade-in-section border overflow-visible"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "300ms"
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ color: "#082053", fontWeight: 600 }}
                >
                  4.4 Plan de desarrollo
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Desarrollo de mapas de carrera
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Desarrollo de plan de desarrollo individual
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Escuela interna para el desarrollo de habilidades blandas
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4.5 Plan de beneficios */}
            <Card 
              className="fade-in-section border overflow-visible"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "400ms"
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ color: "#082053", fontWeight: 600 }}
                >
                  4.5 Plan de beneficios
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Esquema de equidad interna
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#306ab0" }}
                    />
                    <span 
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400 }}
                    >
                      Plan de beneficios integral
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. NUESTRA PROPUESTA INCLUYE */}
      <section 
        id="propuesta"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#082053" }}
        data-testid="section-propuesta"
      >
        <div className="max-w-6xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: "#fffcf7", fontWeight: 700 }}
            data-testid="title-propuesta-incluye"
          >
            Nuestra propuesta incluye
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {propuestaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 sm:p-6 md:p-8 rounded-lg border fade-in-section"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    animationDelay: `${index * 100}ms`
                  }}
                  data-testid={`item-propuesta-${index}`}
                >
                  <Icon 
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" 
                    style={{ color: "#fffcf7" }} 
                  />
                  <h3 
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                    data-testid={`heading-propuesta-item-${index}`}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.85 }}
                    data-testid={`text-propuesta-item-${index}`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div
              className="p-4 sm:p-6 md:p-8 rounded-lg border fade-in-section"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                animationDelay: "400ms"
              }}
              data-testid="item-propuesta-adicional-0"
            >
              <h3 
                className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight"
                style={{ color: "#fffcf7", fontWeight: 600 }}
                data-testid="heading-alineacion-cultural"
              >
                Alineación cultural
              </h3>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.85 }}
                data-testid="text-alineacion-cultural"
              >
                Trabajamos en conjunto con la dirección para alinear los valores organizacionales con las prácticas diarias y fortalecer la identidad corporativa.
              </p>
            </div>

            <div
              className="p-4 sm:p-6 md:p-8 rounded-lg border fade-in-section"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                animationDelay: "500ms"
              }}
              data-testid="item-propuesta-adicional-1"
            >
              <h3 
                className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight"
                style={{ color: "#fffcf7", fontWeight: 600 }}
                data-testid="heading-estilo-liderazgo"
              >
                Estilo de liderazgo
              </h3>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.85 }}
                data-testid="text-estilo-liderazgo"
              >
                Cómo pasar de micromanagement a gestión por indicadores. Desarrollamos líderes que empoderan equipos mediante objetivos claros y confianza.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-sm sm:text-base md:text-lg font-semibold rounded-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3"
              style={{
                backgroundColor: "#306ab0",
                color: "#ffffff",
                fontWeight: 600
              }}
              onClick={() => window.open("https://wa.me/573185538835", "_blank")}
              data-testid="button-agendar"
            >
              Agendar reunión con Valeria Vega
            </Button>
          </div>
        </div>
      </section>

      {/* 8. CONCLUSIÓN - ENFOQUE DE CO-CREACIÓN */}
      <section 
        id="conclusion"
        className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #082053 0%, #306ab0 50%, #082053 100%)"
        }}
        data-testid="section-conclusion"
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#fffcf7" }} />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full" style={{ backgroundColor: "#fffcf7" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full" style={{ backgroundColor: "#fffcf7" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in-section">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full mb-6 animate-pulse"
              style={{ backgroundColor: "rgba(255, 252, 247, 0.2)" }}
            >
              <Handshake className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#fffcf7" }} />
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#fffcf7", fontWeight: 700 }}
            >
              Nuestro Enfoque
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#306ab0" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Contenido principal */}
            <div className="fade-in-section space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255, 252, 247, 0.15)" }}
                >
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#fffcf7" }} />
                </div>
                <div>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                  >
                    Co-creación Colaborativa
                  </h3>
                  <p 
                    className="text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4"
                    style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.95 }}
                  >
                    Dentro de nuestra metodología de trabajo utilizamos un enfoque basado en co-creación, entendida como un proceso colaborativo en el cual la organización y el equipo consultor trabajan juntos para diseñar, validar y ajustar soluciones que respondan a las necesidades reales del negocio.
                  </p>
                  <p 
                    className="text-base sm:text-lg md:text-xl leading-relaxed"
                    style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.95 }}
                  >
                    Este enfoque permite que las soluciones no sean impuestas desde afuera, sino desarrolladas con las personas que conocen el día a día de Naturmega, lo que aumenta significativamente la pertinencia, aceptación y sostenibilidad de cada implementación.
                  </p>
                </div>
              </div>
            </div>

            {/* Iconos y beneficios visuales */}
            <div className="fade-in-section grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div 
                className="p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: "rgba(255, 252, 247, 0.1)",
                  borderColor: "rgba(255, 252, 247, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 252, 247, 0.2)" }}
                  >
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: "#fffcf7" }} />
                  </div>
                  <p 
                    className="text-xs sm:text-sm md:text-base font-semibold"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                  >
                    Trabajo en Equipo
                  </p>
                </div>
              </div>

              <div 
                className="p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: "rgba(255, 252, 247, 0.1)",
                  borderColor: "rgba(255, 252, 247, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 252, 247, 0.2)" }}
                  >
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: "#fffcf7" }} />
                  </div>
                  <p 
                    className="text-xs sm:text-sm md:text-base font-semibold"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                  >
                    Soluciones Pertinentes
                  </p>
                </div>
              </div>

              <div 
                className="p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: "rgba(255, 252, 247, 0.1)",
                  borderColor: "rgba(255, 252, 247, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 252, 247, 0.2)" }}
                  >
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: "#fffcf7" }} />
                  </div>
                  <p 
                    className="text-xs sm:text-sm md:text-base font-semibold"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                  >
                    Aceptación
                  </p>
                </div>
              </div>

              <div 
                className="p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: "rgba(255, 252, 247, 0.1)",
                  borderColor: "rgba(255, 252, 247, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 252, 247, 0.2)" }}
                  >
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: "#fffcf7" }} />
                  </div>
                  <p 
                    className="text-xs sm:text-sm md:text-base font-semibold"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                  >
                    Sostenibilidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FORMA DE PAGO */}
      <section 
        id="forma-pago"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #ffffff 0%, #faf6f1 100%)"
        }}
        data-testid="section-forma-pago"
      >
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-forma-pago"
          >
            Forma de pago
          </h2>
          
          <Card 
            className="border overflow-visible"
            style={{ 
              borderColor: "#ded6cb",
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="space-y-6 sm:space-y-8">
                {/* Valor del servicio */}
                <div className="text-center mb-6 sm:mb-8">
                  <div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                    style={{ color: "#082053", fontWeight: 800 }}
                    data-testid="valor-servicio"
                  >
                    $6.800.000
                  </div>
                  <p 
                    className="text-xs sm:text-sm md:text-base"
                    style={{ color: "#306ab0", fontWeight: 500 }}
                  >
                    Servicio presencial
                  </p>
                </div>

                {/* Detalles del servicio */}
                <div data-testid="block-detalles-servicio">
                  <h3 
                    className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid="heading-detalles-servicio"
                  >
                    Horarios de servicio
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span 
                        className="mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#306ab0" }}
                      />
                      <p 
                        className="leading-relaxed flex-1 text-sm sm:text-base"
                        style={{ color: "#082053", fontWeight: 500 }}
                      >
                        <strong>Lunes:</strong> Jornada completa
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span 
                        className="mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#306ab0" }}
                      />
                      <p 
                        className="leading-relaxed flex-1 text-sm sm:text-base"
                        style={{ color: "#082053", fontWeight: 500 }}
                      >
                        <strong>Martes, miércoles y jueves:</strong> Jornada de la mañana
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span 
                        className="mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#306ab0" }}
                      />
                      <p 
                        className="leading-relaxed flex-1 text-sm sm:text-base"
                        style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                      >
                        Disponibilidad de acompañamiento por fuera del horario descrito
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tipo de contrato */}
                <div 
                  className="pt-4 sm:pt-6 border-t"
                  style={{ borderColor: "#ded6cb" }}
                  data-testid="block-tipo-contrato"
                >
                  <p 
                    className="text-center leading-relaxed text-sm sm:text-base"
                    style={{ color: "#082053", fontWeight: 500 }}
                    data-testid="text-tipo-contrato"
                  >
                    Contrato por prestación de servicios
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer 
        className="py-12 px-6"
        style={{ backgroundColor: "#082053" }}
        data-testid="section-footer"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p 
            className="text-sm md:text-base"
            style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.9 }}
            data-testid="text-footer"
          >
            © 2025 – Propuesta de Consultoría en Talento Humano para Naturmega · Valeria Vega
          </p>
        </div>
      </footer>

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
