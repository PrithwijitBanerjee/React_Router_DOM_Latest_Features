// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'
// import { getSinglePostData } from '../utils/getSinglePostData';
import {useLoaderData} from 'react-router-dom'

// import { Vortex } from 'react-loader-spinner';
const PostDetail = () => {
    const {post} = useLoaderData();
    // const { id } = useParams();
    // const [post, setPost] = useState({});
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setPost(await getSinglePostData('posts', id));
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error?.message);
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();

    //     return () => { // clean up function ...
    //         setPost({});
    //         setLoading(true);
    //     }
    // }, [id]);

    // if (loading) {
    //     return (<div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    //         <div className="row">
    //             <Vortex
    //                 visible={true}
    //                 height="80"
    //                 width="80"
    //                 ariaLabel="vortex-loading"
    //                 wrapperStyle={{}}
    //                 wrapperClass="vortex-wrapper"
    //                 colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    //             />
    //         </div>
    //     </div>);
    // }
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <div className="row">
                <div className="col-12">
                    <div className="card" style={{ width: '30rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{post?.title} id: {post?.id}</h5>
                            <p className="card-text">{post?.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail