import { useState} from "react"
export default function AddStudent(
  {setStudents}

) {
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/addstudent', {
      method: 'POST',
      
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, address, course })

    });
    const data = await response.json();

    setStudents(prev => [...prev, data]);
    

    setName('');
    setAddress('');
    setCourse('');
  }

  return (
    <div className="w-full">
    <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl text-slate-700 border-b-3 border-blue-800 rounded w-full p-5">Add New Student</h1>
    

        <form onSubmit={handleSubmit} className="flex flex-col  mt-8 w-3/4">
        <input type="text" placeholder="Enter fullname" className="border-2 border-slate-400 rounded p-2 m-2" value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type="text" placeholder="Enter address" className="border-2 border-slate-400 rounded p-2 m-2" value={address} onChange={(e)=> setAddress(e.target.value)} />
          <input type="text" placeholder="Enter course" className="border-2 border-slate-400 rounded p-2 m-2" value={course} onChange={(e)=> setCourse(e.target.value)} />
        <input type="submit" value="Add Student" className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-900"/>
        </form>
      </div>
    </div>
  )
}
