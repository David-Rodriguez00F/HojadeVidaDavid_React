const Experiencia = () => {
    const experienciaLaboral = [
      {
        id: 0,
        empresa: "Constructora Privada",
        cargo: "Auxiliar En Mano De Obra",
        period: "4 Mayo 2023 - 4 de Mayo 2025",
        funciones: [
            "Pintar, Enchapar, Electricidad, Resanar, Estucar, tratamiento de humedades, Drywall y otras."
        ],
        supervisor: "Pablo Cesar Rubio",
        contacto: "3223534168"
      },
    ];
  
    return (
      <section className="section">
        <h2>Experiencia Laboral</h2>
        <div className="experience-list">
          {experienciaLaboral.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <p className="position">{exp.cargo} | {exp.period}</p>
              <h4>Funciones:</h4>
              <ul>
                {exp.funciones.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
              <p className="supervisor"><strong>Jefe inmediato:</strong> {exp.supervisor}</p>
              <p className="contact"><strong>Contacto:</strong> {exp.contacto}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiencia;