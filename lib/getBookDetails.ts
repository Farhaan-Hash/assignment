import React from 'react'

export default async function getBookDetails(bookId: string) {
  const res = await fetch(`http://localhost:4000/description/${bookId}`)

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}
 