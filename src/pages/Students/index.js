import { useStudentsContext } from "../../context/StudentsContext";

const Students = () => {
const { students } = useStudentsContext()

if(students.loading) return <div className='students'>Carregando...</div>

  return (
    <div className='students'>
      {students?.itens?.map((item, index) => (
        <>
          <div key={index}>{item.name}</div>
          <div key={index}>{item.startDate}</div>
          <div key={index}>{item.endDate}</div>
          <div key={index}>{item.students?.map(it => `${it.name} - `)}</div>
        </>
      ))}
    </div>
  )
}

export default Students;