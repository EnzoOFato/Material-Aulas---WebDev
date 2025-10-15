export default function Section(props){
    return (
        <div className="m-7 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-gray-100 text-center">{props.titulo}</h2>
            <div className="w-full grid grid-cols-2 gap-10">
                {props.children}
            </div>
        </div>
    )
}