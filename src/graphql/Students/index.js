import {gql} from "@apollo/client";


export const GET_STUDENTS = gql`
  query {
    getStudents { 
      name 
    }
  }
`;


export const CREATE_STUDENT = gql`
  mutation CREATE_STUDENT(
    $name: String!
    # $lastName: String!
  ){
    createStudent(createStudentInput: {
      name: $name
      # lastName: $studentsIds
    }){
      id
      name
      # lastName
    }
  }
`;