
import Post from '../src/components/Post'
import "./App.css"
function App() {
  // const [count, setCount] = useState(0)

    // const getPostData = async () => {
    //     const res = await getPosts();
    //     // console.log(res.data)
    // }
    //
    // useEffect(() => {
    //     getPostData();
    // },[])
  return (
    <section className="main-section">
        <Post/>
    </section>
  )
}

export default App
