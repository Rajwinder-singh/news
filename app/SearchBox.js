'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!input) return;
        console.log(input);

        router.push(`/search?term=${input}`);
    }

  return (
    <form
        onSubmit={handleSearch}
        className='max-w-6xl mx-auto flex justify-between items-center px-5'
    >
        <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search Keywords...'
            className='flex-1 w-full h-14 rounded-sm placeholder-grey-500 text-gray-500
                outline-none bg-transparent dark:text-orange-400' />
        <button
            disabled={!input}
            type='submit'
            className='text-orange-400 disabled:text-gray-400'
        >
            Search
        </button>
    </form>
  )
}

export default SearchBox;