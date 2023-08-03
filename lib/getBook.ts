import React from 'react'

export default async function getBook(bookId: string) {
  const res = await fetch(`http://localhost:4000/books/${bookId}`)

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}
 