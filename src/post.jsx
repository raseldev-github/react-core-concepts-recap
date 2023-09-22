import './Post.css'
export default function Post({post}){
        console.log(post)
        const {title, body, id, userId} = post;
       return (
          <div className='box'>
            <h3>Title: {title}</h3>
            <p><small>UserId: {userId}</small></p>
            <p><small>PostId: {id}</small></p>
            <p>Description: {body}</p>
          </div>
       )
}