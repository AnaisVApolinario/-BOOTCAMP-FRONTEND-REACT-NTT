import { useState, useEffect } from 'react';

// spanglish
export const useDistritos = () => {
  const [distritos, setDistritos] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    // Simula una llamada a una API o archivo JSON
    const loadDistritos = async () => {
      const data = await fetch('/src/__mocks__/distritos.json').then((res) => res.json());
      // crear una interface o type no ponerlo directamente en el valor
      setDistritos(data.map((distrito: { id: number; name: string }) => distrito));
    };

    loadDistritos();
  }, []);

  return distritos;
};