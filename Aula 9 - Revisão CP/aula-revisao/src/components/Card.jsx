export default function Card({full_name, has_issues, forks}){
    return (
        <div className="py-5 px-3 flex flex-col  items-center bg-gray-800 my-5 rounded-xl h-50">
            <h2 className="text-xl text-gray-100 font-bold">{full_name}</h2>
            <div className="mt-10 flex flex-col items-center"> 
                <h2 className="text-lg text-gray-100">{has_issues ? "Tem problema" : "FDS"}</h2>           
                <h2 className="text-lg text-gray-100">{forks}</h2>
            </div>           
        </div>
    )
}