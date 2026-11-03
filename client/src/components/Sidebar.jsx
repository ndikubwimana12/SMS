import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className="bg-slate-500 h-screen w-50 flex flex-col justify-between items-center">
            <ul className="flex flex-col justify-center items-center p-4">
                <li className="text-sm text-slate-950 font-semibold hover:bg-blue-500 w-full rounded-lg px-4 py-3"><Link to="/">Dashboard</Link></li>
                <li className="text-sm text-slate-950 font-semibold hover:bg-blue-500 w-full rounded-lg px-4 py-3"><Link to="/addstudent"> Add Student</Link></li>
                <li className="text-sm text-slate-950 font-semibold hover:bg-blue-500 w-full rounded-lg px-4 py-3"><Link to="students">Students</Link></li>
                <li className="text-sm text-slate-950 font-semibold hover:bg-blue-500 w-full rounded-lg px-4 py-3">Setting</li>
            </ul>
            <button className="p-2 bg-red-500 rounded-lg w-3/4 my-4 font-semibold"><Link to="home">Logout</Link></button>
        </div>
    )
}
