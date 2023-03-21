import React from 'react'
import Quizystem from '../assets/QLogoWhite.png'
import femavatar from '../assets/femAvatar.png'
import { UilApps, UilUsersAlt, UilCommentAltQuestion, UilCog, UilQuestionCircle, UilUserCircle } from '@iconscout/react-unicons'
import { Dropdown } from 'antd'

export const Home = () => {

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className='flex w-full min-h-screen h-auto'>

      <aside className='fixed flex flex-col justify-between h-screen min-w-[230px] w-[20%] bg-primary overflow-y-auto'>
        <img src={Quizystem} alt="LogoQuizystem" className='w-2/3 mx-auto mt-1' />

        <div className='my-8 flex flex-col  items-center'>
          <figure className='my-2 w-16 h-16 bg-white rounded-full overflow-hidden'>
            <img className='w-[90%] mx-auto object-cover' src={femavatar} alt="" />
          </figure>
          {/* <i style={{backgroundImage: `url('${femavatar}')` }} className= {`rounded-full h-16 w-16 bg-white bg-cover ]`} ></i> */}
          <h2 className='text-lg font-semibold text-white'>Marianita Arias</h2>
          <h3 className='text-lg font-medium text-tertiary'>Admin</h3>
          <hr className='w-[80%] my-2' />
        </div>


        <nav className='mt-4 mb-2 flex flex-col justify-between min-h-[200px] h-[60%]'>
          <ul className='flex flex-col gap-2 list-none  text-white'>
            <li className='border-l-[6px] border-l-tertiary pl-5 flex items-center text-tertiary'>
              <UilApps className='w-5 mr-2 h-full' />
              <span className=''>Home</span>
            </li>
            <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
              <UilUsersAlt className='w-5 mr-2 h-full' />
              <span className=''>Students</span>
            </li>
            <li className='border-l-[6px] border-l-primary pl-5 flex items-center'>
              <UilCommentAltQuestion className='w-5 mr-2 h-full' />
              <span className=''> Questions & Answers</span>
            </li>
          </ul>

          <ul className='flex flex-col gap-2 list-none  text-white mt-4'>
            <il className='border-l-[6px] border-l-primary pl-5 flex items-center'>
              <UilCog className='w-5 mr-2 h-full' />
              <span>Settings</span>
            </il>
            <il className='border-l-[6px] border-l-primary pl-5 flex items-center'>
              <UilQuestionCircle className='w-5 mr-2 h-full' />
              <span>Help</span>
            </il>
          </ul>


        </nav>
        {/* <span className='mx-4 text-white font-light'>Medellin, Colombia 2023</span> */}


      </aside>

      <main className=' ml-auto w-[80%] '>

        <div className='w-full bg-white flex justify-end py-2 shadow'>
          <Dropdown.Button
            className='w-auto mx-1 ' trigger={['click', 'hover']} 
            menu={menuProps}
            icon={<UilUserCircle className="w-[80%] mx-auto" />}>
              mariasmo@unal.edu.co
          </Dropdown.Button>
        </div>

      </main>
    </div>
  )
}
