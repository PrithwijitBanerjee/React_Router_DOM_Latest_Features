// import { useEffect, useState } from "react"
// import { getAllPosts } from "../utils/getAllPosts";
import { Vortex } from "react-loader-spinner";
import {Link, useLoaderData} from 'react-router-dom'
const Home = () => {
  const {posts} = useLoaderData();
  // const [posts, setPosts] = useState([]);

  // const getData = async () => {
  //   try {
  //     setPosts(await getAllPosts('posts'));
  //   } catch (error) {
  //     console.log(error?.message);
  //   }
  // }
  // useEffect(() => {
  //   getData();

  //   return () => { //clean up function ...
  //     setPosts([]);
  //   }
  // }, []);

  if (posts?.length === 0) {
    return (<div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    </div>);
  }
  return (
    <div className="container">
      <div className="row">
        {
          posts?.length !== 0 && posts?.map(post => (
            <div className="col" key={post?.id}>
              <div className="card m-5" style={{ width: '20rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{post?.title} id: {post?.id}</h5>
                  <p className="card-text">{post?.body}</p>
                  <Link to={`/postDetail/${post?.id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home