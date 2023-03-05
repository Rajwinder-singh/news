import { gql } from "graphql-request"
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (category, keywords, isDynamic) => {
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "us, in"
                sort: "published_desc"
                keywords: $keywords
            ) {
            data {
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
            }
        }
      `

    const response = await fetch('https://haacht.stepzen.net/api/pugnacious-ragdoll/__graphql', {
        method: 'POST',
        cache: isDynamic ? 'no-cache': 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords
            }
        })
    });

    const newsResponse = await response.json();
    const news = sortNewsByImage(newsResponse.data.myQuery.data);

    return news;
}

export default fetchNews;