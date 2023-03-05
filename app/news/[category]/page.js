import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";

async function NewsCategory({ params: { category } }) {
  const news = await fetchNews(category)

  return (
    <div>
        <h1 className='headerTitle'>{category}</h1>
        <NewsList news={news} />
    </div>
  )
}

export default NewsCategory;

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category
    }))
}