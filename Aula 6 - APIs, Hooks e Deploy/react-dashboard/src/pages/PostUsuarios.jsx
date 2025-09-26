import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostUsuarios(){

    const parametros = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${parametros.id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl font-bold">Posts do Usuario</h1>
            {posts.map((pegaItem) => (
                <h1 className="text-xl bg-gray-300 w-full">Titulo: {pegaItem.title}</h1>
            ))}
        </div>
    )
}