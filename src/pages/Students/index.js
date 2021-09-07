import { useLessonsContext } from "../../context/StudentsContext";
import Card  from '../../components/Card';
import { CardArea, CardList } from './styles';

const Lessons = () => {
const { lessons } = useLessonsContext()

if(lessons.loading) return <Card className='students'>Carregando...</Card>

  return (
      <CardArea>
      <CardList>
      {lessons?.itens?.map((item, index) => (
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

export default Lessons;