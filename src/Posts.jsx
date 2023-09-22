import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){
        // 1. state decleration
        const [post, setPost] = useState([])
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => setPost(data))
        },[])
       return (
         <div>
            <h3>Posts: {post.length} </h3>
            {
              post.map(data => <Post post ={data}></Post>)
            }
         </div>
       )
}


/* *
  1. create a state to store the data.
  2. create use effects with no dependencies.
  3. use fetch to load date.
  4.  
* */