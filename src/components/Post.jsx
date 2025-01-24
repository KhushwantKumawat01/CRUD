import {useEffect, useState} from "react";
import {deletePost, getPosts} from "../api/PostApi.jsx";
import Form from "./Form.jsx"

function Post () {

    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({});

    const getPostData = async () => {
        const res = await getPosts();
        setData(res.data);
    }

    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((curPost) => {
                    return curPost.id !== id;
                });
                setData(newUpdatedPosts);
            } else {
                console.log("Failed to delete the post:", res.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdatePost = async (curElem) => setUpdateDataApi(curElem);
    useEffect(()=>{
        getPostData();
    },[])
    return<>
        <section className="section-form">
            <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={{setUpdateDataApi}} />
        </section>
        <section className="section-post">
            <ol>
                {
                    data.map((curElem) => {
                        return <li key={curElem.id}>
                            <p> Title : {curElem.title}</p>
                            <p> Body : {curElem.body}</p>
                            <button onClick={()=>handleUpdatePost(curElem)}>Edit</button>
                            <button className="btn-delete" onClick={() => handleDeletePost(curElem.id)}>Delete</button>

                        </li>
                    })
                }
            </ol>
        </section>
    </>
}

export default Post;