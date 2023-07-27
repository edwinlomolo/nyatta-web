import { gql } from '@apollo/client'

export const GET_LISTING_OVERVIEW = gql`
  query ListingOverview($propertyId: ID!) {
    listingOverview(propertyId: $propertyId) {
      totalUnits
      occupiedUnits
      vacantUnits
    }
  }
`
