export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full bg-blue-600">

            <h1 className=" h-15 text-2xl text-slate-800 font-bold p-4">CodeRwanda <span className="text-pink-800">Tech</span></h1>
            <div className="flex gap-4 mx-4">
                <p className=" px-4 py-1 rounded-lg text-slate-700 font-semibold hover:bg-amber-900 hover:text-white">Welcome Admin!</p>
                <button className="bg-gray-700 px-4 py-1 rounded-full text-slate-700 font-semibold hover:bg-amber-900 hover:text-white w-10 h-10 "><img src="p.png" /></button>
            </div>
        </div>
    )
}
