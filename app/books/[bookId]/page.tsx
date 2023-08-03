import getBook from '@/lib/getBook'
import getBookDetails from '@/lib/getBookDetails'
import React,{Suspense} from 'react'
import BookDes from './components/BookDes'


type Params = {
  params: {
    bookId: string
  }
}


export default async function BookPage({params: {bookId}} : Params) {

  const bookData : Promise<Book> = getBook(bookId)
  const bookDetail :Promise<Description> = getBookDetails(bookId);



  // const[book, bookDes] = await Promise.all([bookData, bookDetail])
  const book = await bookData
  return (
    <>
 
      {/* <h1 className='text-center text-2xl text-bold text-dark-700 mt-6 pt-6'>{book.name}</h1> */}
   
    <Suspense fallback={<h2>loading....</h2>}>
      <BookDes promise={bookDetail} name={book.name}/>
    </Suspense>
    </>
  )



  
  
}
