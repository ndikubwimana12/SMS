import {Link} from "react-router-dom";

export default function Students(
    { students }
    
) {
    return (
        <div className="flex-1">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-2xl text-slate-700 border-b-3 border-blue-800 rounded-lg p-5 w-3/4 ">Students List</h1>
            </div>

            <div className="mt-8 flex flex-cols justify-center items-center">
                <table>
                    <thead>
                        <tr>
                            <th className="border-2 p-2">#</th>
                            <th className="border-2 p-2">fullname</th>
                            <th className="border-2 p-2">address</th>
                            <th className="border-2 p-2">course</th>
                            <th className="border-2 p-2" colSpan={2}>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td className="border-2 p-1-2">{student.id}</td>
                                    <td className="border-2 p-1-2">{student.name}</td>
                                    <td className="border-2 p-1-2">{student.address}</td>
                                    <td className="border-2 p-1-2">{student.course}</td>
                                    <td className="border-2 p-1-2"><button className="bg-green-600 text-white px-4 py-1 rounded"><Link to={`/editstudent/${student.id}`}>Edit</Link></button></td>
                                    <td className="border-2 p-1-2"><button className="bg-red-600 text-white px-4 py-1 rounded">Delete</button></td>
                                </tr>
                            ))
}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
