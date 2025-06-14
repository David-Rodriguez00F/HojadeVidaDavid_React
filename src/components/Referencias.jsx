const Referencias = () => {
    const references = [
      {
        name: "Ninguno",
        position: "Ninguno",
        phone: "Ninguno",
        email: "Ninguno"
      },
    ];
  
    return (
      <section className="section">
        <h2>Referencias Profesionales</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;