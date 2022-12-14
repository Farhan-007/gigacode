import "./style.css"

export default function Landing() {

    return (
        <div className="flex box-border w-[100vw] h-[105vh]">
            <div className="w-1/2 flex flex-col mt-[10vh] items-center justify-between py-28">
                <div className=" text-3xl flex flex-col w-3/4 h-1/4 text-slate-500 text-center justify-end">
                    <h1>Code, Compete</h1>
                    <h1>and Win $</h1>

                </div>
                <div className="w-3/4 h-1/8 text-center ">
                    <p>
                        take part in online and offline hackthons and win exciting prices
                    </p>
                </div>
                <div className="text-center text-2xl w-3/4 h-1/4 ">
                    <button className=" border-none px-6 py-3  bg-green-500 text-white">
                        Register Now
                    </button>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center  ">
                <h1 className=" text-4xl">idhar mst photu daalne ka re baba</h1>
            </div>
        </div>
    )
}