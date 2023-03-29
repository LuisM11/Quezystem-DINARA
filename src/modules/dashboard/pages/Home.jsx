import React from 'react'
import {  UilCheckCircle } from '@iconscout/react-unicons'
import student from '../../../assets/online-learning-concept.png'
import teacher from '../../../assets/teaching.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className=' max-w-full min-h-full m-8 grid gap-x-14 grid-cols-2 grid-rows-[60px_200px]'>
          <h1 className='col-span-2 font-bold text-2xl'>Management Quick Accesses</h1>
          <Link to='/dashboard/users'>
          <article className='flex border-[1px] rounded-2xl border-gray-300 bg-blue-50 transition-all ease-linear hover:shadow-lg hover:cursor-pointer hover:scale-[1.01]'>
            <img className='w-[30%] my-auto ml-4 mr-4' src={student} alt="students-management" />
            <div className='w-[70%] border-l-[1px] px-6 py-2 border-l-gray-300 flex flex-col'>
              <h2 className='mx-auto font-semibold text-primary text-xl mb-2'>Students</h2>
              <ul className='space-y-1 text-gray-700 '>
                <li className='flex'> <UilCheckCircle className="text-quaternary mr-3"/> List all registered students</li>
                <li className='flex'> <UilCheckCircle className="text-quaternary mr-3"/> Filter students</li>
                <li className='flex'><UilCheckCircle className="text-quaternary mr-3"/> Create new students</li>
                <li className='flex'><UilCheckCircle className="text-quaternary mr-3"/>Update an existent student</li>
                <li className='flex'><UilCheckCircle className="text-quaternary mr-3"/>Delete a student</li>
              </ul>
            </div>
          </article>
          </Link>
          <article className='flex border-[1px] rounded-2xl border-gray-300 bg-blue-50 transition-all ease-linear hover:shadow-lg hover:cursor-pointer hover:scale-[1.01]'>
            <img className='w-[30%] my-auto ml-4 mr-4' src={teacher} alt="quizes-management" />
            <div className='w-[60%] border-l-[1px] px-6 py-2 border-l-gray-300 flex flex-col'>
              <h2 className='mx-auto font-semibold text-primary text-xl mb-4'>Questions and Answers</h2>
              <ul className='space-y-1 text-gray-700 ' >
                <li className='flex'> <UilCheckCircle className="text-quaternary mr-3"/> List all questions</li>
                <li className='flex'><UilCheckCircle className="text-quaternary mr-3"/>Create new questions</li>
                <li className='flex'><UilCheckCircle className="text-quaternary mr-3"/>Modify questions and its options</li>
                
              </ul>
            </div>
          </article>
        </section>
  )
}
