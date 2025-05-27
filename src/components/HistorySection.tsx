// components/HistorySection.tsx
// import React from 'react'

// export default function HistorySection() {
//   return (
//     <section className="relative w-full bg-[url('/frente.iehs.png')] bg-contain bg-center bg-no-repeat text-black">
//       {/* Overlay semitransparente */}
//       <div className="absolute inset-0 bg-white/30"></div>
//       {/* Contenedor de contenido centrado */}
//       <div className="relative max-w-4xl mx-auto px-4 sm:px-0 py-16">
//         {/* Hero */}
//         <h1 className="text-5xl font-bold mb-4 text-center">Bienvenidos al IEHS</h1>

//         {/* Sección de historia */}
//         <h2 className="text-3xl font-semibold mb-4 text-center">Quiénes somos</h2>
//         <p className="text-base leading-relaxed mb-4">
//           El Instituto de Estudios Histórico-Sociales se creó en 1986 en el marco del clima institucional y académico que propuso a la Universidad como el centro privilegiado de producción del conocimiento científico de excelencia. Desde entonces el IEHS estimula la labor de investigación de gran parte de los docentes del Departamento de Historia y de otros espacios académicos de la Facultad de Ciencias Humanas de la UNCPBA.
//         </p>
//         <p className="text-base leading-relaxed mb-4">
//           Diferentes temáticas de estudio, en particular, la historia y la sociedad argentina y americana son abordadas desde entonces por los investigadores que se agrupan en diferentes programas de investigación. Como instancia de intercambio, que favorece el desarrollo en esta tarea, el IEHS organiza diversas actividades académicas como reuniones científicas, conferencias, publicaciones, de las que participan investigadores nacionales e internacionales.
//         </p>
//         <p className="text-base leading-relaxed mb-4">
//           A partir de la continuidad de esta política académica, se ha podido estimular y garantizar la formación de recursos humanos de alta calificación que se desempeñan como docentes e investigadores de esta casa de estudio. Desde 2012, el IEHS integra el IGEHCS, unidad ejecutora conjunta del CONICET y la UNCPBA.
//         </p>
//         <p className="text-base leading-relaxed">
//           Vinculación reconocida por convenios con: Universidad Autónoma de Nuevo León; Instituto de Investigaciones Antropológicas-UNAM, México; Centro de Investigaciones y Estudios Superiores en Antropología Social, México; Instituto Mora, México.
//         </p>
//       </div>
//     </section>
//   );
// }

import React from 'react'

export default function HistorySection() {
  return (
   <section className="relative w-full bg-[url('/frente.iehs.png')] bg-cover bg-center text-white">
  <div className="absolute inset-0 bg-white/30"></div>
  <div className="relative max-w-4xl mx-auto px-4 py-20">
    <h1 className="text-6xl font-extrabold mb-4 text-shadow-custom text-[#134e5e] text-outline-black">
      Bienvenidos al IEHS
    </h1>

    <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-[#134e5e]">
        Quiénes somos
      </h2>
      <p className="text-base leading-relaxed mb-4 text-[#134e5e] font-bold">
           El Instituto de Estudios Histórico-Sociales se creó en 1986 en el marco del clima institucional y académico que propuso a la Universidad como el centro privilegiado de producción del conocimiento científico de excelencia. Desde entonces el IEHS estimula la labor de investigación de gran parte de los docentes del Departamento de Historia y de otros espacios académicos de la Facultad de Ciencias Humanas de la UNCPBA.
         </p>
         <p className="text-base leading-relaxed mb-4 text-[#134e5e] font-bold">
           Diferentes temáticas de estudio, en particular, la historia y la sociedad argentina y americana son abordadas desde entonces por los investigadores que se agrupan en diferentes programas de investigación. Como instancia de intercambio, que favorece el desarrollo en esta tarea, el IEHS organiza diversas actividades académicas como reuniones científicas, conferencias, publicaciones, de las que participan investigadores nacionales e internacionales.
         </p>
         <p className="text-base leading-relaxed mb-4 text-[#134e5e] font-bold">
           A partir de la continuidad de esta política académica, se ha podido estimular y garantizar la formación de recursos humanos de alta calificación que se desempeñan como docentes e investigadores de esta casa de estudio. Desde 2012, el IEHS integra el IGEHCS, unidad ejecutora conjunta del CONICET y la UNCPBA.
         </p>
        <p className="text-base leading-relaxed text-[#134e5e] font-bold">
           Vinculación reconocida por convenios con: Universidad Autónoma de Nuevo León; Instituto de Investigaciones Antropológicas-UNAM, México; Centro de Investigaciones y Estudios Superiores en Antropología Social, México; Instituto Mora, México.
         </p>
      {/* resto de los párrafos */}
    </div>
  </div>
</section>

  );
}
