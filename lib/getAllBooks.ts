// import React from 'react'

// export default async function getAllBooks() {
//   const res = await fetch('http://localhost:4000/books')

//   if (!res.ok) throw new Error('failed to fetch data')

//   return res.json()
// }
 

import { useQuery,QueryKey  } from '@tanstack/react-query';
import axios from "axios";

const fetchBooks = async () => {
  const response = await axios.get('http://localhost:4000/books');

  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }

  return response.data;
};
export default function useBooksQuery() {
  const queryKey: QueryKey = ["books"];
  return useQuery(queryKey, fetchBooks);}

  
