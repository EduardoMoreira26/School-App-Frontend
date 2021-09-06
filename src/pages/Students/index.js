import { useStudentsContext } from "../../context/StudentsContext";
import Card  from '../../components/Card';
import { CardArea, CardList } from './styles';

const Students = () => {
const { students } = useStudentsContext()

if(students.loading) return <Card className='students'>Carregando...</Card>

  return (
      <CardArea>
      <CardList>
      {students?.itens?.map((item, index) => (
        <>
          <Card
           key={index}
           data={item}
          />
        </>
      ))}
      </CardList>
    </CardArea>
  )
  
}

export default Students;