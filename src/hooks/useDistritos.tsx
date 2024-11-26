import { useState, useEffect } from 'react';

export const useDistritos = () => {
  const [distritos, setDistritos] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    // Simula una llamada a una API o archivo JSON
    const loadDistritos = async () => {
      const data = await fetch('/src/__mocks__/distritos.json').then((res) => res.json());
      setDistritos(data.map((distrito: { id: number; name: string }) => distrito));
    };

    loadDistritos();
  }, []);

  return distritos;
};