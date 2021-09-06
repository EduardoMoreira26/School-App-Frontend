import {gql} from "@apollo/client";

export const GET_STUDENTS = gql`
  query {
    allLessons { 
      name 
      startDate
      endDate
      students {
        name
      }
    }
  }
`;