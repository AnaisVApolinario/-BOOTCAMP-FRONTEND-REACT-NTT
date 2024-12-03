import { useState, useEffect } from 'react';
import { DistrictType } from '../domain/districtType';

export const useDistrict = () => {
  const [district, setDistrict] = useState<DistrictType[]>([]);

  useEffect(() => {

    const loadDistritos = async () => {
      const data = await fetch('/src/__mocks__/distritos.json').then((res) => res.json());
      setDistrict(data.map((district: DistrictType) => district));
    };

    loadDistritos();
  }, []);

  return district;
};