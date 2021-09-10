import {gql} from "@apollo/client";

export const GET_LESSONS = gql`
  query {
    allLessons { 
      name 
      teacherName
      startDate
      endDate
      students {
        name
        # lastName
      }
    }
  }
`;

export const CREATE_LESSON = gql`
  mutation CREATE_LESSON(
    $name: String!
    $teacherName: String!
    $startDate: String!
    $endDate: String!
  ){
    createLesson(createLessonInput: {
      name: $name
      teacherName: $teacherName
      startDate: $startDate
      endDate: $endDate
    }){
      id
      name
      teacherName
      startDate
      endDate
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

export const ASSIGNT_STUDENTS_LESSON = gql`
  mutation ASSIGNT_STUDENTS_LESSON(
    $lessonId: ID!
    $studentsIds: [ID]!
    $students: [String!]!
  ){
    assignStudentsToLesson(assignStudentsToLessonInput: {
      lessonId: $lessonId
      studentsIds: $studentsIds
      students: $students
    }){
      students {
        name
      }
    }
  }
`;
