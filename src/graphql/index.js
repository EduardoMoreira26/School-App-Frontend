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
        lastName
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
