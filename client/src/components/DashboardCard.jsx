export default function DashboardCard(
    {
        role, number
    }
) {
    return (
        <div className="bg-gray-200 shadow-lg h-40 border-l-3 border-blue-800 rounded-lg flex flex-col justify-center items-center mx-2">
            <h1 className="text-2xl font-bold text-slate-700 p-2">Total {role}</h1>
            <h1 className="text-3xl font-bold text-blue-700 p-4">{number}</h1>
            <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 w-4/5">View Details</button>
        </div>
    )
}
