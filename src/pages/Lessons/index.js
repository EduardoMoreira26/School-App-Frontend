import { useLessonsContext } from "../../context/LessonsContext";
import Card  from '../../components/Card';
import { CardArea, CardList } from './styles';
import Loading from "../../components/Loading";
import Modal from './../../components/Modal';
import ModalStudents from './../../components/ModalStudent';
import { useState } from "react";


const Lessons = () => {
  const { lessons } = useLessonsContext()

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLessonData = (lessons) => {
    setModalData(lessons);
    setModalStatus(true);
  }

  if(lessons.loading) return <Loading className='students'>Carregando...</Loading>

    return (
      <>
        <CardArea>
          <CardList>
          {lessons?.itens?.map((item, index) => (
              <Card
              key={index}
              data={item}
              onClick={handleLessonData}
              />
          ))}
          </CardList>
        </CardArea>

        <Modal 
          status={modalStatus}
          setStatus={setModalStatus}
        >
          <ModalStudents data={modalData} setStatus={setModalStatus} />
        </Modal>
      </>
    )
}

export default Lessons;