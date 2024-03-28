export const API_URL = "https://books-api.nomadcoders.workers.dev";

export default async function getCategory() {
    const response = await fetch(`${API_URL}/lists`);
    const json = await response.json();
    return json;
  }