export default function Card({full_name, id, node_id}){
    return (
        <div className="py-5 px-3 flex flex-col justify-center items-center">
            <h2 className="text-lg text-gray-100">{id}</h2>
            <h2 className="text-lg text-gray-100">{full_name}</h2>
            <h2 className="text-lg text-gray-100">{node_id}</h2>           
        </div>
    )
}