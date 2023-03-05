export default function sortNewsByImage(news) {
    const newsWithImage = news.filter((item) => item.image !== null);
    const newsWithoutImage = news.filter((item) => item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithoutImage]
    };

    return sortedNewsResponse;
}