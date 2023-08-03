"use client"
import React from 'react';
import { atom } from 'recoil';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import profilepic from "../images/7.jpg"


interface Comment {
  username: string;
  comment: string;
  likes: number;
  commentsCount: number;
}

// Atomic State:----------------------------
export const userAvatarAtom = atom<string>({
  key: 'userAvatar',
  default: profilepic.src, 
});

const CommentSection: React.FC = () => {
  const [userAvatar, setUserAvatar] = useRecoilState(userAvatarAtom);

  const comments: Comment[] = [
    { username: '알렉스', comment: 'This book is amazing! Cant wait for the next part!', likes: 10, commentsCount: 5 },
    { username: '광선', comment: 'I love this book!', likes: 15, commentsCount: 3 },
   
  ];

  return (
    <div className='mt-6 p-8'>
      {comments.map((comment, index) => (
        <div key={index} className="flex items-center mb-4">
       <div className="rounded-full w-12 h-12 bg-gray-400 mr-2 flex-shrink-0">
            <Image src={userAvatar} alt="pic" className="rounded-full object-cover" layout="responsive" width={12} height={12} />
          </div>
          <div className="ml-2 mt-8"> 
          <p className="text-gray-800 mr-1 font-semibold flex">
              {comment.username} 
              {index === 0 && (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </span>
              )}<span className=' items-center sm:flex text-sm ml-4 text-gray-500'>사용</span>
            </p>
            <p className="text-gray-600">{comment.comment}</p>
          </div>
          <div className="ml-auto flex items-center">
            <div className="flex items-center mr-4 mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

              <div className="text-gray-600 mt-10">{comment.likes}</div>
            </div>
            <div className="flex items-center mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

              <div className="text-gray-600 mt-10">{comment.commentsCount}</div>
            </div>
          </div>
          <span className='text-gray-400 -mt-8'>••• </span>
        </div>
      ))}
        <div className="flex items-center mb-4 mt-14">
      
        <div className="  ml-2 mt-8 w-full">
<div className="relative"> 
<input  type="text"
            className="border-top-2 rounded-md px-2 py-1 w-full"
            placeholder="       여기에 입력하십시오"
          />
          <div className="absolute top-0 left-0 -bottom-1 flex items-center pr-2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
          </div>
          <div className="absolute top-0 right-0 -bottom-1 flex items-center pr-2 pointer-events-none text-gray-400">
          시오
          </div>
          </div>
         
        </div>
      </div>
      <hr className="my-2 border-gray-300" />
    </div>
  );
};

export default CommentSection;