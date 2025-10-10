export default function Section({titulo, children}){
    return (
        <div className="m-7">
            <h2 className="text-xl text-gray-100 mb-6">{titulo}</h2>
            <div className="w-full grid grid-col-5">
                {children}
            </div>
        </div>
    )
}