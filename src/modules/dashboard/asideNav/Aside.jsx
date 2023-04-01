import React, { useState } from 'react'
import Quizystem from '../../../assets/QLogoWhite.png'
import femavatar from '../../../assets/femAvatar.png'
import maleavatar from '../../../assets/maleAvatar.png'
import { useGlobalContext } from '../../context/GlobalContext'
import { UilApps, UilUsersAlt, UilCommentAltQuestion, UilCog, UilQuestionCircle } from '@iconscout/react-unicons'
import { DownCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export const Aside = () => {
    const [selectedMenuItem, setselectedMenuItem] = useState("Dashboard")
    const [studentsOpen, setstudentsOpen] = useState(false)
    const { setloggedUser } = useGlobalContext();

    const selectionItemHandler = (e) => {
        setselectedMenuItem(e.currentTarget.id)
        e.currentTarget.id === "Students" && setstudentsOpen(p => !p)
    }
    const setSelectedItemColor = (item) => {
        return selectedMenuItem === item ? ' border-l-tertiary text-tertiary' : ''
    }

    return (
        <>
            <aside className='fixed flex flex-col justify-between h-screen min-w-[230px] w-[20%] bg-primary overflow-y-auto'>
                <img src={Quizystem} alt="LogoQuizystem" className='w-1/2 ml-3 mt-2' />

                <div className='mt-1 flex flex-col  items-center'>
                    <figure className='my-2 w-16 h-16 bg-white rounded-full overflow-hidden'>
                        <img className='w-[90%] mx-auto object-cover' src={maleavatar} alt="" />
                    </figure>
                    {/* <i style={{backgroundImage: `url('${femavatar}')` }} className= {`rounded-full h-16 w-16 bg-white bg-cover ]`} ></i> */}
                    <h2 className='text-lg font-semibold text-white'>Luis Marin</h2>
                    <h3 className='text-lg font-medium text-tertiary'>Admin</h3>
                    <hr className='w-[80%] my-2' />
                </div>


                <nav className='mt-4 mb-2 flex flex-col justify-between min-h-[200px] h-[60%]'>
                    <ul className='flex flex-col gap-2 list-none  text-white'>
                        <li className={'border-l-[6px] border-l-primary pl-5 flex items-center ' + setSelectedItemColor("Dashboard")} >
                            <Link to={"/dashboard"} id='Dashboard' onClick={selectionItemHandler} className='flex hover:cursor-pointer'>
                                <UilApps className='w-5 mr-2 h-full' />
                                <span className=''>Dashboard</span>
                            </Link>
                        </li>
                        <li className={'border-l-[6px] border-l-primary pl-5 pr-3 '+ setSelectedItemColor("Students")}>
                            <div className='w-full flex items-center justify-between'>
                                <div id='Students' onClick={selectionItemHandler} className='flex hover:cursor-pointer'>
                                    <UilUsersAlt className='w-5 mr-2 h-full' />
                                    <span className=''>Students</span>
                                </div>
                                <div className=' hover:cursor-pointer ' onClick={() => setstudentsOpen(p => !p)}>
                                    {studentsOpen ? <DownCircleOutlined className='transition-transform ease-in rotate-180' /> : <DownCircleOutlined className='transition-transform ease-in rotate-none' />}
                                </div>
                            </div>
                            <div id='Students' onClick={selectionItemHandler} className={studentsOpen ? "transition-all ease-out duration-300 h-12 " : " transition-all duration-300 ease-in text-[2px] h-0 invisible "}>
                                <Link className=' block pl-[10%] font-light' to={'/dashboard/users'} >
                                     Overview
                                </Link>
                                <Link className=' block pl-[10%] font-light' to={'/dashboard/users/create'} >
                                     New Student
                                </Link>
                            </div>
                        </li>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
                            <UilCommentAltQuestion className='w-5 mr-2 h-full' />
                            <span className=''> Questions & Answers</span>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-2 list-none  text-white mt-4'>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>

                            <UilCog className='w-5 mr-2 h-full' />
                            <span>Settings</span>

                        </li>
                        <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
                            <UilQuestionCircle className='w-5 mr-2 h-full' />
                            <span>Help</span>
                        </li>
                    </ul>


                </nav>
                {/* <hr className='mx-auto w-[80%]' />
        <span className='h-16 mx-4 text-white font-light my-auto'>Medellin, Colombia 2023</span> */}

            </aside>
            <div className='min-w-[230px] w-[20%]'></div> {/*fake aside -> div with Aside dimensions */}
        </>
    )
}
