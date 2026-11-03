import DashboardCard from "../components/DashboardCard"
export default function Dashboard({students}) {
    return (
        <div className="flex-1">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-2xl text-slate-700 border-b-3 border-blue-800 rounded-lg p-5 w-3/4 ">Dashboard</h1>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-5">
                <DashboardCard role="Students" number={students.length} />
                <DashboardCard role="Droped out" number="10" />
                <DashboardCard role="Active Students" number="810" />

            </div>
        </div>
    )
}
