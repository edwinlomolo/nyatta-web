"use client"

import { PropsWithChildren, useMemo, useState, useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'

import { GET_USER_PROPERTIES } from '@gql'
import ListingsContext from 'contexts/listings'

const ListingsProvider = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession()
  const skipRequest = status === 'unauthenticated' || status === 'loading'
  const { data } = useQuery(GET_USER_PROPERTIES, {
    variables: {
      email: session?.user?.email,
    },
    skip: skipRequest,
  })
  const listings = useMemo(() => (data?.getUser.properties || []), [data])
  const [defaultListing, setDefaultListing] = useState<string | undefined>()
  const hasListings = useMemo(() => data?.getUser.properties.length > 0, [data])

  useEffect(() => {
    setDefaultListing(listings[0]?.id)
  }, [listings])

  return (
    <ListingsContext.Provider
      value={{
        defaultListing,
        setDefaultListing,
        listings,
        hasListings,
      }}
    >
      {children}
    </ListingsContext.Provider>
  )
}

export default ListingsProvider
