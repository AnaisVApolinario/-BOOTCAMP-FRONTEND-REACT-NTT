// esto podr'ia estar en una carpeta shared/helpers 
export const apiService = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};