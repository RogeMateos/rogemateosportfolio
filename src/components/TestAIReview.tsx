import React, { useState, useEffect } from 'react';

// TODO: Este componente necesita estilos apropiados
interface TestComponentProps {
  name: string;
  age?: number;
  data?: any; // Esto debería ser más específico
  callback?: (result: any) => void; // Otro tipo any
}

export const TestAIReview: React.FC<TestComponentProps> = ({
  name,
  age,
  data,
  callback
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FIXME: Este useEffect tiene dependencias faltantes
  useEffect(() => {
    console.log('Componente montado con datos:', data); // Declaración de debug
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);

    try {
      // Sin manejo de errores para esta llamada fetch
      const response = await fetch('/api/user');
      const userData = response.json(); // Falta await

      console.log('Datos de usuario obtenidos:', userData); // Otra declaración de debug

      if (callback) {
        callback(userData);
      }
    } catch (err) {
      console.error('Error obteniendo datos:', err); // Console.error en catch
      setError('Falló al obtener datos');
    } finally {
      setLoading(false);
    }
  };

  // Función sin manejo apropiado de errores
  const handleClick = () => {
    console.log('¡Botón clickeado!'); // Más salida de debug

    // Manipulación directa del DOM (no es la forma de React)
    document.getElementById('test-element')?.classList.add('active');

    // TODO: Agregar validación apropiada aquí
    if (name) {
      alert(`¡Hola ${name}!`); // Usando alert en lugar de UI apropiada
    }
  };

  // Objeto grande en línea (code smell)
  const largeConfig = {
    api: {
      endpoint: 'https://api.example.com',
      timeout: 5000,
      retries: 3,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token-aqui', // ¡Token hardcodeado!
        'X-Custom-Header': 'valor'
      }
    },
    ui: {
      theme: 'dark',
      animations: true,
      notifications: true
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Sin componente de carga apropiado
  }

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>; // Estilos en línea
  }

  return (
    <div className="test-component">
      <h2>Componente de Prueba para Revisión IA</h2>
      <p>Nombre: {name}</p>
      {age && <p>Edad: {age}</p>}

      <button
        onClick={handleClick}
        id="test-element"
        style={{ padding: '10px', margin: '5px' }} // Más estilos en línea
      >
        ¡Haz clic!
      </button>

      {/* FIXME: Esto debería ser un componente apropiado */}
      <div>
        <span>Config: {JSON.stringify(largeConfig)}</span>
      </div>
    </div>
  );
};

// Falta export default
// export default TestAIReview;