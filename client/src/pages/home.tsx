import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Gift, 
  Sparkles,
  CheckCircle2,
  Brain
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
    <div className="min-h-screen" style={{ backgroundColor: "#faf6f1" }}>
      {/* 1. PORTADA / COVER */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
        style={{ backgroundColor: "#faf6f1" }}
        data-testid="section-portada"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-section">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ color: "#082053", fontWeight: 800 }}
            data-testid="title-propuesta"
          >
            Propuesta – NATURMEGA
          </h1>
          <h2 
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "#306ab0", fontWeight: 600 }}
            data-testid="subtitle-consultoria"
          >
            Consultoría en Talento Humano
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: "#082053", fontWeight: 500 }}
            data-testid="text-location"
          >
            Barranquilla · Noviembre 2025
          </p>
        </div>
        
        <div 
          className="absolute bottom-12 left-0 right-0 px-6 md:px-12 max-w-6xl mx-auto"
          data-testid="text-confidencial"
        >
          <p 
            className="text-xs md:text-sm leading-relaxed text-center"
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
        style={{ backgroundColor: "#f3f9ff" }}
        data-testid="section-tabla-contenido"
      >
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
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
              { id: "planes", text: "PLANES DE ACCIÓN DE CADA PILAR" },
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
        className="py-20 px-6"
        style={{ backgroundColor: "#faf6f1" }}
        data-testid="section-analisis"
      >
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-analisis"
          >
            Análisis de la situación actual
          </h2>
          <p 
            className="text-xl md:text-2xl text-center mb-16"
            style={{ color: "#306ab0", fontWeight: 600 }}
            data-testid="subtitle-analisis"
          >
            Definición de pilares y procesos de Talento Humano que debemos trabajar
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <Card 
                  key={index}
                  className="fade-in-section border overflow-visible"
                  style={{ 
                    borderColor: "#ded6cb",
                    backgroundColor: "#ffffff",
                    animationDelay: `${index * 100}ms`
                  }}
                  data-testid={`card-pilar-${index}`}
                >
                  <CardContent className="p-8 space-y-4">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#dee9f6" }}
                    >
                      <Icon className="w-7 h-7" style={{ color: "#306ab0" }} />
                    </div>
                    <h3 
                      className="text-xl font-semibold leading-tight"
                      style={{ color: "#082053", fontWeight: 600 }}
                      data-testid={`heading-pilar-analisis-${index}`}
                    >
                      {pilar.title}
                    </h3>
                    <p 
                      className="leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                      data-testid={`text-pilar-description-${index}`}
                    >
                      {pilar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PILARES A TRABAJAR */}
      <section 
        id="pilares"
        className="py-20 px-6"
        style={{ backgroundColor: "#dee9f6" }}
        data-testid="section-pilares"
      >
        <div className="max-w-5xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-pilares"
          >
            Pilares a trabajar
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Cultura organizacional",
              "Selección del talento humano adecuado",
              "Evaluación de desempeño",
              "Plan de desarrollo",
              "Plan de beneficios"
            ].map((pilar, index) => (
              <Badge
                key={index}
                className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium border"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#082053",
                  borderColor: "#ded6cb",
                  fontWeight: 500
                }}
                data-testid={`badge-pilar-${index}`}
              >
                {pilar}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HALLAZGOS IDENTIFICADOS */}
      <section 
        id="hallazgos"
        className="py-20 px-6"
        style={{ backgroundColor: "#faf6f1" }}
        data-testid="section-hallazgos"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center fade-in-section"
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
                <CardContent className="p-8 md:p-10 pl-10 md:pl-12">
                  <h3 
                    className="text-2xl md:text-3xl font-semibold mb-8"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid={`heading-hallazgo-${index}`}
                  >
                    {index + 1}. {hallazgo.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
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
                        className="text-lg font-semibold mb-4 flex items-center gap-2"
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

      {/* 6. PLANES DE ACCIÓN */}
      <section 
        id="planes"
        className="py-20 px-6"
        style={{ backgroundColor: "#f3f9ff" }}
        data-testid="section-planes"
      >
        <div className="max-w-6xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
            data-testid="title-planes"
          >
            Planes de acción en cada pilar
          </h2>
          <p 
            className="text-xl text-center mb-16"
            style={{ color: "#306ab0", fontWeight: 500, opacity: 0.9 }}
            data-testid="subtitle-planes"
          >
            Estrategias específicas diseñadas para abordar cada área crítica
          </p>
          
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
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#dee9f6" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#306ab0" }} />
                      </div>
                      <h3 
                        className="text-xl font-semibold leading-tight pt-2"
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
                          className="flex items-start gap-3 leading-relaxed"
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

      {/* 7. NUESTRA PROPUESTA INCLUYE */}
      <section 
        id="propuesta"
        className="py-20 px-6"
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
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {propuestaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg border fade-in-section"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    animationDelay: `${index * 100}ms`
                  }}
                  data-testid={`item-propuesta-${index}`}
                >
                  <Icon 
                    className="w-10 h-10 mb-4" 
                    style={{ color: "#fffcf7" }} 
                  />
                  <h3 
                    className="text-xl font-semibold mb-3 leading-tight"
                    style={{ color: "#fffcf7", fontWeight: 600 }}
                    data-testid={`heading-propuesta-item-${index}`}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.85 }}
                    data-testid={`text-propuesta-item-${index}`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div
              className="p-8 rounded-lg border fade-in-section"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                animationDelay: "400ms"
              }}
              data-testid="item-propuesta-adicional-0"
            >
              <h3 
                className="text-xl font-semibold mb-3 leading-tight"
                style={{ color: "#fffcf7", fontWeight: 600 }}
                data-testid="heading-alineacion-cultural"
              >
                Alineación cultural
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.85 }}
                data-testid="text-alineacion-cultural"
              >
                Trabajamos en conjunto con la dirección para alinear los valores organizacionales con las prácticas diarias y fortalecer la identidad corporativa.
              </p>
            </div>

            <div
              className="p-8 rounded-lg border fade-in-section"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                animationDelay: "500ms"
              }}
              data-testid="item-propuesta-adicional-1"
            >
              <h3 
                className="text-xl font-semibold mb-3 leading-tight"
                style={{ color: "#fffcf7", fontWeight: 600 }}
                data-testid="heading-estilo-liderazgo"
              >
                Estilo de liderazgo
              </h3>
              <p 
                className="leading-relaxed"
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
              className="text-lg font-semibold rounded-lg"
              style={{
                backgroundColor: "#306ab0",
                color: "#ffffff",
                fontWeight: 600
              }}
              data-testid="button-agendar"
            >
              Agendar reunión con Valeria Vega
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FORMA DE PAGO */}
      <section 
        id="forma-pago"
        className="py-20 px-6"
        style={{ backgroundColor: "#faf6f1" }}
        data-testid="section-forma-pago"
      >
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
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
            <CardContent className="p-10 md:p-12">
              <div className="space-y-8">
                <div data-testid="block-modalidad-pago">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid="heading-modalidad-pago"
                  >
                    Modalidad de pago
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                    data-testid="text-modalidad-pago"
                  >
                    Las condiciones de pago serán acordadas en reunión conjunta según las necesidades y capacidad de la organización.
                  </p>
                </div>

                <div data-testid="block-plazos">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid="heading-plazos"
                  >
                    Plazos
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                    data-testid="text-plazos"
                  >
                    Los plazos de ejecución del proyecto se definirán en función del alcance acordado y los recursos disponibles.
                  </p>
                </div>

                <div data-testid="block-metodos-pago">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#082053", fontWeight: 600 }}
                    data-testid="heading-metodos-pago"
                  >
                    Métodos de pago
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                    data-testid="text-metodos-pago"
                  >
                    Transferencia bancaria, consignación o pago digital según preferencia de la organización.
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
