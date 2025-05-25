import { blog_data } from '@/Assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {

    const [menu, setMenu] = useState('ALL');

    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('ALL')} className={menu === 'ALL' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>ALL</button>
                <button onClick={() => setMenu('Technology')} className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Lifestyle</button>
            </div>

            <div className='flex flex-wrap gap-1 gap-y-10 mb-16 xl:mx-24 cursor-pointer'>
                {blog_data.filter((item) => menu === 'ALL' ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
            </div>
        </div>
    )
}

export default BlogList;