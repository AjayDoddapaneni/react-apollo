import React, { Component } from 'react'
// import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CustomTable from './table';


class LinkList extends Component {
  render() {
    // const linksToRender = [
    //   {
    //     id: '1',
    //     description: 'Prisma turns your database into a GraphQL API 😎',
    //     url: 'https://www.prismagraphql.com',
    //   },
    //   {
    //     id: '2',
    //     description: 'The best GraphQL client',
    //     url: 'https://www.apollographql.com/docs/react/',
    //   },
    // ]
    const FEED_QUERY = gql`
    {
      feed {
        links {
          id
          createdAt
          url
          description
        }
      }
    }
  `


  // query CaseDetail($case_id: number!) {
  //   case(id: $case_id) {
  //     Breed
  //     Sex
  //     Age
  //     Disease
  //     StageOfDisease
  //     DateOFDiagnosis
  //     PrimarySite
  //     HistoricalGrade
  //     AssignedToStudy
  //     AssignedToArm
  //     AssignedToCohort
  //     PatientSubGroup
  //     DateOfInformedConsent
  //     DateOfEnrollment
  //     StudySite
  //   }
  // }
  return (
    <Query query={FEED_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>

      const linksToRender = data.feed.links
console.log(linksToRender);
      return (
        // <div>
        //   {linksToRender.map(link => <Link key={link.id} link={link} />)}
        // </div>
        <CustomTable link={linksToRender} />
      )
    }}
  </Query>
  )  }
}

export default LinkList
