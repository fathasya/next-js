import { useRouter } from 'next/router'
import React from 'react'
import { Home } from '../../../../layouts'

export default function commentId() {
    const router = useRouter()
    const { productId, commentId} = router.query

  return (
    <Home pageTitle='Comment | Nested Dynamic Routes'>
        <h1>
          product : {productId} <br />
          comment : {commentId}
        </h1>
        <hr />
    </Home>
  )
}
