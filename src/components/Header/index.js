/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Modal from "../Modal";
import LessonsModal from "../LessonsModal";


import { 
  Container,
  SearchInput
} from "./styles"


export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
};
  
  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if(search === '') {
      setInputActive(false);
    }
  };

  const handleChange = (e) => {
    onSearch(e.target.value);
  }

  return (
   <Container>
     <SearchInput 
      value={search}
      onChange={handleChange}
      type="text" 
      placeholder="Pesquise uma aula" 
      active={inputActive}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      />

      <Modal  
        status={modalStatus}
        setStatus={setModalStatus}
      >
        <LessonsModal data={modalData} setStatus={setModalStatus}/>
      </Modal> 
      <button className="button-65" onClick={handleProductClick}>Criar aula</button> 
   </Container>
  );
}