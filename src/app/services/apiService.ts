export const apiService = async <T>(url: string): Promise<T>   => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};