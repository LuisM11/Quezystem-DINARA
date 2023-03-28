import React from 'react'
import { Dropdown, Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons';
import { UilSignout, UilEditAlt,  UilUserCircle} from '@iconscout/react-unicons'
import { useGlobalContext } from '../../context/GlobalContext';

export const Header = () => {
  const { setloggedUser } = useGlobalContext();
  const onClick = ({ key }) => {
    if (key === "2") {
      localStorage.removeItem('user')
      setloggedUser(null)
    }
  };

  const items = [
    {
      label: 'Edit Profile',
      key: '1',
      icon: <UilEditAlt className="w-5" />
    },
    {
      label: 'LogOut',
      key: '2',
      icon: <UilSignout className="w-5" />
    }
  ];
  const menuProps = {
    items,
    onClick,
  };
  return (
    <div className='w-full bg-white flex items-center justify-between py-2 shadow'>
          <Breadcrumb
            className='ml-5'
            items={[
              {
                title:
                  <>
                    <HomeOutlined />
                    <span>Home</span>
                  </>,

              },
              { title: "Page" }

            ]}
          />
          <Dropdown.Button
            className='w-auto mx-1 ' trigger={['click', 'hover']}
            menu={menuProps}
            icon={<UilUserCircle className="w-[80%] mx-auto" />}>
            mariasmo@unal.edu.co
          </Dropdown.Button>
        </div>
  )
}
