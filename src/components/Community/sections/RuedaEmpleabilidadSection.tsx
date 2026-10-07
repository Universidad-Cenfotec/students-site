'use client';

import React, { useState } from 'react';
import ClientLayout from '@/layout/ClientLayout';

export default function RuedaEmpleabilidadPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [openGuideTab, setOpenGuideTab] = useState<'cv' | 'video'>('cv');

  // Enlaces oficiales
  const FORM_INSCRIPCION_URL =
    'https://forms.zohopublic.com/pbrenes/form/FormulariodeinscripcinalaRuedadeEmpleabilidadExpoC1/formperma/HvGPaxyGnG3-LmkbChe3LDI-OUWrgynDht4YZGoGS84';
  
  // Ruta directa al archivo PDF alojado en la carpeta public
  const MACHOTE_PDF_URL = '/CV - machote.pdf';

  const CENTRO_ASISTENCIA_URL =
    'https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/bienestar-estudiantil';
  const FORM_CAIC_URL =
    'https://forms.zoho.com/pbrenes/form/FormulariodesolicituddeapoyoseducativosCentrodeApo/formperma/wy922Tnm9sVL-eefC9q4XC3rIgzvfiRtaXAkHpDzU3I';

  // URL del logo CAIC
  const CAIC_LOGO_URL =
    'https://res-console.cloudinary.com/uwgwvmjn/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q0FJQy1Mb2dvLUNvbG9y/template_primary';

  return (
    <ClientLayout>
      <div className="w-full min-h-screen px-4 pt-20 md:pt-28 pb-12 max-w-6xl mx-auto flex flex-col gap-8">
        {/* HERO / HEADER PRINCIPAL */}
        <div className="bg-white/80 backdrop-blur-md rounded-[32px] border border-gray-200/80 p-8 md:p-12 shadow-sm relative overflow-hidden mt-2">
          <div className="max-w-3xl relative z-10">
            <span className="inline-block text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Bienestar Estudiantil · Universidad CENFOTEC
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              Rueda de <span className="text-blue-600">Empleabilidad</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Un proceso estratégico diseñado para conectar directamente el talento de estudiantes y egresados con empresas del sector tecnológico. Recibí retroalimentación profesional para pulir tu perfil antes de agendar entrevistas en <strong>ExpoCENFO</strong>.
            </p>

            {/* Chips de Enlaces Rápidos */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <a
                href={MACHOTE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-full transition-all shadow-xs"
              >
                Machote de CV (PDF)
              </a>
              <a
                href={CENTRO_ASISTENCIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-full transition-all shadow-xs"
              >
                Centro de Asistencia
              </a>
              <a
                href="mailto:bienestarestudiantil@ucenfotec.ac.cr"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-full transition-all shadow-xs"
              >
                bienestarestudiantil@ucenfotec.ac.cr
              </a>
            </div>

            {/* Botones de Acción Principal */}
            <div className="flex flex-wrap gap-3">
              <a
                href={FORM_INSCRIPCION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 rounded-full transition-all shadow-md shadow-blue-500/20"
              >
                Llenar formulario de inscripción
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a
                href={MACHOTE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base px-6 py-3 rounded-full border border-gray-200 transition-all"
              >
                Abrir Machote de CV
              </a>
            </div>
          </div>
        </div>

        {/* ¿QUÉ ES Y CÓMO FUNCIONA? */}
        <section className="bg-white/80 backdrop-blur-md rounded-[32px] border border-gray-200/80 p-6 md:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold text-gray-500 tracking-wider uppercase">Conectá con las empresas</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">¿Qué es la Rueda de Empleabilidad?</h2>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Es un espacio donde expertos en empleabilidad revisan tu <strong>Curriculum Vitae</strong> y tu <strong>video de presentación</strong>. Su objetivo es darte retroalimentación profesional para optimizar tu perfil y capacitarte en entrevistas laborales. Las empresas participantes revisan los perfiles con anticipación y agendan entrevistas directas durante <strong>ExpoCENFO</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📄</span>
                <h3 className="font-bold text-gray-900 text-lg">Requisito 1: Curriculum Vitae</h3>
              </div>
              <ul className="text-base text-gray-700 space-y-2 list-disc pl-5">
                <li>Formato <strong>PDF</strong> obligatorio.</li>
                <li>Máximo <strong>2 páginas</strong> de extensión.</li>
                <li><strong>Sin foto</strong> y sin dirección exacta.</li>
                <li>Formato de nombre: <code className="bg-white px-2 py-0.5 rounded text-blue-700 font-mono text-sm">CV Nombre_Apellido_Perfil</code></li>
              </ul>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎬</span>
                <h3 className="font-bold text-gray-900 text-lg">Requisito 2: Videocurrículum</h3>
              </div>
              <ul className="text-base text-gray-700 space-y-2 list-disc pl-5">
                <li>Formato <strong>.MP4</strong> obligatorio.</li>
                <li>Duración máxima de <strong>1 minuto</strong>.</li>
                <li>Grabación horizontal en calidad HD (1280x720).</li>
                <li>Formato de nombre: <code className="bg-white px-2 py-0.5 rounded text-blue-700 font-mono text-sm">Nombre_Apellido_VideoCV</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* PASO A PASO DE INSCRIPCIÓN */}
        <section className="bg-white/80 backdrop-blur-md rounded-[32px] border border-gray-200/80 p-6 md:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold text-gray-500 tracking-wider uppercase">Proceso oficial</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">Pasos para participar e inscribirte</h2>
            <p className="text-gray-700 text-base mt-1">Siguiente esta secuencia sencilla para que el equipo reclutador acceda a tus archivos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 border-b border-gray-200 pb-6 mb-6">
            {[
              { num: 1, title: '1. Crear carpeta Drive' },
              { num: 2, title: '2. Subir CV y Video' },
              { num: 3, title: '3. Configurar acceso' },
              { num: 4, title: '4. Formulario final' },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                  activeStep === step.num
                    ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-xs'
                    : 'bg-gray-50/50 border-gray-200 text-gray-600 hover:bg-gray-100/60'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeStep === step.num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.num}
                </span>
                <span className="text-base font-semibold">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200/80">
            {activeStep === 1 && (
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Paso 1 · Crear carpeta en Google Drive</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Ingresá a Google Drive utilizando tu <strong>cuenta institucional de Universidad CENFOTEC</strong>. Creá una nueva carpeta asignándole tu <strong>nombre completo</strong>.
                </p>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Paso 2 · Subir tus documentos</h4>
                <p className="text-gray-700 text-base leading-relaxed mb-3">
                  Guardá dentro de esa carpeta tus dos archivos preparados adecuadamente:
                </p>
                <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
                  <li>Tu Curriculum Vitae actualizado en formato PDF.</li>
                  <li>Tu VideoCV de máximo 1 minuto en formato MP4.</li>
                </ul>
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Paso 3 · Configurar permisos de la carpeta</h4>
                <p className="text-gray-700 text-base leading-relaxed mb-3">
                  Hacé clic derecho en la carpeta o seleccioná "Compartir". En la sección de <strong>Acceso General</strong>, asegurate de seleccionar la opción:
                </p>
                <div className="inline-block bg-yellow-100 border border-yellow-300 text-yellow-900 text-base font-semibold px-3.5 py-1.5 rounded-lg">
                  "Cualquier persona con el enlace"
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  * Esto es fundamental para que el equipo reclutador y las empresas puedan ingresar libremente a ver tus materiales.
                </p>
              </div>
            )}
            {activeStep === 4 && (
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Paso 4 · Completar el formulario oficial</h4>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Copiá el enlace de tu carpeta compartida, ingresá al formulario oficial, completá tus datos personales, aceptá el consentimiento informado y pegá el link.
                </p>
                <a
                  href={FORM_INSCRIPCION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 rounded-full transition-all"
                >
                  Ir al Formulario de Inscripción
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* GUÍA DE ELABORACIÓN (CV Y VIDEO) */}
        <section className="bg-white/80 backdrop-blur-md rounded-[32px] border border-gray-200/80 p-6 md:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-gray-500 tracking-wider uppercase">Material de apoyo</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Guía para un perfil competitivo</h2>
            </div>
            <a
              href={MACHOTE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-sm px-4 py-2 rounded-full border border-blue-200 transition-all"
            >
              Abrir Machote de CV
            </a>
          </div>

          {/* Sub-tabs para CV / VideoCV */}
          <div className="flex gap-2 border-b border-gray-200 mb-6">
            <button
              onClick={() => setOpenGuideTab('cv')}
              className={`pb-2.5 text-base font-bold transition-all border-b-2 ${
                openGuideTab === 'cv'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Recomendaciones para tu CV
            </button>
            <button
              onClick={() => setOpenGuideTab('video')}
              className={`pb-2.5 text-base font-bold transition-all border-b-2 ${
                openGuideTab === 'video'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Recomendaciones para tu VideoCV
            </button>
          </div>

          {openGuideTab === 'cv' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-gray-700">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">1. Formato y Presentación</h4>
                <p>Tipografía profesional (Arial, Calibri), tamaño 10-12pt, interlineado 1.5 y márgenes uniformes. Máximo 2 páginas.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">2. Datos y Experiencia</h4>
                <p>Incluí nombre, cédula, correo profesional y teléfono. Resumen de 4-5 renglones. Usá verbos de acción y logros cuantificables.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">3. Sin Foto ni Dirección</h4>
                <p>Mantené el enfoque puramente profesional. Indicá tus habilidades técnicas, certificaciones e idiomas con su nivel.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-gray-700">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">1. Técnica e Imagen</h4>
                <p>Grabá en horizontal HD. Usá fondo neutro, buena iluminación frontal, audio sin ruido y vestimenta adecuada (sin gorra ni lentes oscuros).</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">2. Estructura del Guion</h4>
                <p>Introducción (saludo y nombre) ➔ Desarrollo (habilidades clave y logros) ➔ Conclusión (motivación y contacto). Máximo 1 minuto.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70">
                <h4 className="font-bold text-gray-900 mb-2">3. Lenguaje Corporal</h4>
                <p>Mirá fijamente a la cámara, hablá con claridad y volumen moderado. Proyectá energía positiva y confianza profesional.</p>
              </div>
            </div>
          )}
        </section>

        {/* SECCIÓN CAIC */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-[32px] p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              {/* PÍLDORA CON FONDO BLANCO SÓLIDO PARA EL LOGO CAIC */}
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl mb-4 shadow-md">
                <img
                  src={CAIC_LOGO_URL}
                  alt="Logo CAIC - Centro de Apoyo para la Inclusión"
                  className="h-10 w-auto object-contain rounded-md"
                />
                <div className="flex flex-col border-l border-gray-200 pl-3">
                  <span className="text-sm font-bold tracking-wider text-gray-900">CAIC</span>
                  <span className="text-xs text-gray-600 font-medium">Centro de Apoyo para la Inclusión</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ¿Necesitás asesoría personalizada para tu CV o Entrevista?
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-4">
                El <strong>Centro de Apoyo para la Inclusión CENFOTEC (CAIC)</strong> te ofrece sesiones individuales enfocadas en la optimización de tu CV, elaboración de VideoCurriculum y simulación de entrevistas laborales.
              </p>
              <ul className="text-base text-blue-200 space-y-2 mb-6 list-disc pl-5">
                <li>Revisión directa y optimización de tu CV en PDF.</li>
                <li>Orientación para estructurar tu videocurrículum.</li>
                <li>Práctica de entrevistas para ganar confianza.</li>
              </ul>
            </div>

            <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-3">
              <a
                href={FORM_CAIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold text-base px-6 py-3.5 rounded-full transition-all shadow-md text-center"
              >
                <span>Solicitar Asesoría CAIC (Formulario)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <span className="text-xs text-blue-300 text-center md:text-right font-mono">
                * Agendá tu sesión completando el formulario
              </span>
            </div>
          </div>
        </section>

        {/* DUDAS Y CONSULTAS */}
        <div className="text-center py-4 text-base text-gray-500">
          ¿Tenés alguna duda adicional? Escribinos a{' '}
          <a
            href="mailto:bienestarestudiantil@ucenfotec.ac.cr"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
          >
            bienestarestudiantil@ucenfotec.ac.cr
          </a>{' '}
          o consultá nuestra{' '}
          <a
            href={CENTRO_ASISTENCIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
          >
            Base de Conocimiento en el Centro de Asistencia
          </a>.
        </div>
      </div>
    </ClientLayout>
  );
}