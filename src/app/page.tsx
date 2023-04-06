import React from 'react'
async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`, { cache: 'no-store' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function page() {
  const blogs = await getBlogs()
  console.log(blogs);

  return (
    <div className='grid md:grid-cols-4 grid-cols-1 bg-slate-400 p-5 gap-5'>
      {blogs.items.map((blog: any) => {
        return (
          <div className="p-6 rounded-md shadow-md bg-white text-black" key={blog.sys.id}>
            {blogs.includes.Asset.map((elem: any) => {
              return (
                <div key={blog.fields.image.sys.id}>
                  {blog.fields.image.sys.id == elem.sys.id ?
                    <img src={"https:" + elem.fields.file.url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /> : <div></div>}
                </div>
              )
            })}

            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide">{blog.fields.title}</h2>
            </div>
            <p className="dark:text-gray-100">{blog.fields.desc}</p>
            <div className="flex justify-between my-3">
              <p className="dark:text-gray-100 font-semibold ">Size: {blog.fields.size}</p>
              <h2 className='font-bold'>{blog.fields.price}</h2>
            </div>
          </div>
        )
      })}

      {/* <div className="p-6 rounded-md shadow-md bg-white text-black">
        <img src="/shirt01.webp" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div>
      <div className="p-6 rounded-md shadow-md bg-white text-black">
        <img src="/shirt01.webp" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div>
      <div className="p-6 rounded-md shadow-md bg-white text-black">
        <img src="/shirt01.webp" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div> */}
    </div>
  )
}
