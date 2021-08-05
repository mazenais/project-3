import { useState, useEffect } from 'react';
import BlogList from './BlogList';
//outputting lists
const Home = () => {
     const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
     ]);
const [name, setName] = useState('mario');
const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
//using props to pass data from a parent component to a child component
// passing functions as props (deleting components)
//using efect
useEffect(() => {
    console.log('use effect ran')
    console.log(name)
}, [name]);
    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
          <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete} />
          <button onClick={() => setName('luigi')}>change name</button>
          <p>{ name }</p>
        </div>
     );
}
 
export default Home;