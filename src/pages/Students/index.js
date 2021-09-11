import { useStudentsContext } from "../../context/StudentsContext";
import CardStudent  from '../../components/CardStudent';
import { CardArea, CardList } from './styles';
import Loading from "../../components/Loading";
import Modal from './../../components/Modal';
import ModalStudents from './../../components/ModalStudent';
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../../graphql/Students";


const Students = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const { data, loading } = useQuery(GET_STUDENTS)

  const students =  data?.getStudents || []

  const handleLessonData = (students) => {
    setModalData(students);
    setModalStatus(true);
  }

  if(loading) return <Loading className='students'>Carregando...</Loading>

    return (
      <>
        <CardArea>
          <CardList>
          {students?.map((item, index) => (
              <CardStudent
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

export default Students;