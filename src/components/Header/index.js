import React, { useState } from 'react';
import Navbar from '../NavBar';
// import { Sling as Hamburger } from 'hamburger-react'
import SideMenu from '../SideMenu';


// import Modal from '../Modal'
import { Container } from './styles';

const Header = () => {

  // const [modalVisible, setModalVisible] = useState(false)

  // const handleButtonClick = () => {
  //   setModalVisible(true);
  // }

  return (
    <Container>
      <header>
        <a href="/">LOGO</a>

        <Navbar/>


        {/* <Hamburger color="#81c043" onClick={handleButtonClick} toggled={modalVisible} toggle={setModalVisible} />
        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <h1>Testando 123</h1>
        </Modal> */}
      </header>
    </Container>
  );
}

export default Header;