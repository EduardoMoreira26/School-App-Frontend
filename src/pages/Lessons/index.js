import { useLessonsContext } from "../../context/LessonsContext";
import Card  from '../../components/Card';
import { CardArea, CardList } from './styles';
import Loading from "../../components/Loading";

const Lessons = () => {
const { lessons } = useLessonsContext()

if(lessons.loading) return <Loading className='students'>Carregando...</Loading>

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