'use client'
import { useRouter } from "next/navigation";

function ReadMoreButton({ article }) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&');
    const url = `/article?${queryString}`;
    
    router.push(url.replace('#', ''));
  }

  return (
    <button
        onClick={handleClick}
        className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-9-- hover:bg-orange-500'
    >
        Read More
    </button>
  )
}

export default ReadMoreButton;