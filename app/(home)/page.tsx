import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev";

async function getBooks() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const categoryList = await getBooks();
  return (
    <div>
      {categoryList.results.map((l) => (
        <li key={l.display_name}>
          <Link href={`/list/${l.list_name_encoded}`}>{l.display_name}</Link>
        </li>
      ))}
    </div>

  );
}