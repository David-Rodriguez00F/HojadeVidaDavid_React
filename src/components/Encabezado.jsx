import foto from '../assets/foto.jpeg';


const Encabezado = () => {
  return (
    <header className="header">
      <img
        src={foto}
        alt="Foto del aspirante"
        className="foto-perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h1>David Santiago Rdoriguez Sierra</h1>
      <div className="contact-info">
        <p>Ibagué, Colombia</p>
        <p>Teléfono: 3123921636</p>
        <p>Email: rodriguezsierradavidsantiago@gmail.com</p>
      </div>
    </header>
  );
};

export default Encabezado;
