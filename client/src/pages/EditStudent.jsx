import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditStudent({ loadStudents }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [course, setCourse] = useState("");



    // Load selected student
    useEffect(() => {

        const getStudent = async () => {

            const response = await fetch(
                `http://localhost:5000/students/${id}`
            );

            const data = await response.json();

            setName(data.name);
            setAddress(data.address);
            setCourse(data.course);

        };

        getStudent();

    }, [id]);



    const handleSubmit = async (e) => {

        e.preventDefault();

        await fetch(
            `http://localhost:5000/students/${id}`,
            {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    address,
                    course
                })

            }
        );

        await loadStudents();

        navigate("/students");

    };



    return (

        <div className="w-full">

            <div className="w-full flex flex-col justify-center items-center">

                <h1 className="text-2xl text-slate-700 border-b-4 border-blue-700 w-3/4 p-4">
                    Edit Student
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-3/4 mt-8"
                >

                    <input
                        type="text"
                        placeholder="Enter fullname"
                        className="border-2 p-2 m-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Enter address"
                        className="border-2 p-2 m-2 rounded"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Enter course"
                        className="border-2 p-2 m-2 rounded"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Update Student"
                        className="bg-green-700 text-white p-2 rounded cursor-pointer hover:bg-green-800"
                    />

                </form>

            </div>

        </div>

    );

}