const Educacion = () => {
    const formacionAcademica = [
      {
        year: "2023",
        titulo: "Bachiller",
        institucion: "Institucion Educativa Jorge Eliecer Gaitan - Ibague Tolima"
      },
      {
        year: "2015",
        titulo: "Especialista en Desarrollo de Software",
        institucionn: "Universidad Cooperativa de Colombia - Ibagué Tolima"
      },
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;