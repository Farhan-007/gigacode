import "./style.css"

export default function Header() {
   
    return (
        <div className="headWrapper fixed box-border flex items-center bg-white h-[10vh] w-[100vw] z-10">
            <div className="header flex mx-[8vw] w-[100vw] justify-between ">
                <div className="logo flex items-baseline text-2xl">GigaCode <span className=" block mx-1 bg-green-500 w-[10px] h-[15px]"></span></div>
                <div className="nav">
                    <ul className="flex py-1">
                        <li className=" px-10 py-1">Login</li>
                        <li className=" px-10  py-1 border-solid border-gray-500 border-[1px]">Sign Up</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}