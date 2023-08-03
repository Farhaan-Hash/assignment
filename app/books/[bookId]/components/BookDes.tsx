import Link from 'next/link';
import React from 'react';
import profilepic from "../../../images/4.png";
import Image from 'next/image';
import CommentSection from '@/app/components/Comments';

type Props = {
  promise: Promise<Description>
  name: string
}

export default async function BookDes({ promise,name }: Props) {
  const bookDes = await promise;

  return (
    <div className="flex justify-center p-4">
      
      <div className="w-screen max-w-screen-lg bg-white p-8 rounded-lg shadow-lg mt-8">
        <Link href="/books">
          <div className="mb-4 inline-block text-blue-600 hover:text-blue-800">&larr; Go Back</div>
        </Link>
        <div className="flex flex-col-reverse sm:flex-row">
         
          <div className="w-full sm:w-2/3 order-2 sm:order-1">
            <div className="relative">
              <Image src={profilepic} alt="pic" />  
              <h1 className=' text-2xl text-bold text-gray-900 mt-6 pt-6'>{name}</h1>
 
              {bookDes.discount && (
                <div className="absolute top-2 left-2  p-2 bg-red-500 text-dark font-bold rounded-full">
                {bookDes.discount} OFF
              </div>
              )}
            </div>
          </div>
          <div className='w-auto sm:w-1/3 mt-3 order-1 sm:order-2'>
            <h2 className='text-xl text-gray-800'><strong>Author:</strong> {bookDes.author}</h2>
            <h2 className='text-xl text-gray-800'><strong>Price:</strong> ${bookDes.price}</h2>
            <p className='text-xl text-gray-800'><strong>Description:</strong> {bookDes.description}</p>
          </div>
        </div>
        <div className='mt-8 flex justify-between'>
          <div className='text-red-500 text-xl font-bold'>20%</div>
          <div className='text-xl font-bold text-gray-900'>56700루피</div>
        </div>
        <hr className='my-4 mt-20 border-gray-300' />
        <div className='ml-8'>
          <CommentSection />
        </div>
      </div>
    </div>
  );
};