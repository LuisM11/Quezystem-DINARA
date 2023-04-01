import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { AddUser } from '../../../assets/svg/AddUser'
import { Space, Table, Tag, Modal } from 'antd';
import { useUsersFetch } from '../../hooks/useUsersFetch';
import { Spinner } from '../../../assets/svg/Spinner';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import findStudent from '../../utils/findStudent';
import { useNavigate } from 'react-router-dom';


export const UserOverview = () => {
  const users = useUsersFetch(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token)
  const nav = useNavigate()
  const [searchValue, setsearchValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentIndex, setstudentIndex] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchValue],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.identification).toLowerCase().includes(value.toLowerCase()) ||
          String(record.email).toLowerCase().includes(value.toLowerCase()) ||
          String(record.phone).toLowerCase().includes(value.toLowerCase());

      },

    },
    {
      title: 'ID Document',
      dataIndex: 'identification',
      key: 'identification',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => <Tag color={status ? 'geekblue' : 'volcano'} > {status ? 'Active' : 'Inactive'} </Tag>
    }
    ,
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined onClick={() => {
            setstudentIndex(record.key);
            setIsModalOpen(true)
          }} />
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Modal className='prmAntB' 
        title={<div className='font-semibold text-lg text-primary border-b'> {`Details Student #${studentIndex}`}</div>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}>
        {(users.data && studentIndex) && 
        <div className='grid grid-cols-2 grid-columns-5 gap-y-3 mt-5'>
          <span className=''>First Name:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"firstName")}</span> </span>
          <span className=''>Second Name:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"secondName")}</span> </span>
          <span className=''>Firs Surname:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"surname")}</span> </span>
          <span className=''>Second Surname:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"secondSurName")}</span> </span>
          <span className=''>ID Type:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"typeDocument")}</span> </span>
          <span className=''>ID Number:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"documentNumber")}</span> </span>
          <span className=''>Email:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"email")}</span> </span>
          <span className=''>Phone:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"phone")}</span> </span>
          <span className=''>Gender:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"gender")}</span> </span>
          <span className=''>Status:<span className='text-black/50 font-normal'> {findStudent(studentIndex,users.data.data,"state")}</span> </span>
        </div>}
      </Modal>
      <section className=' max-w-full min-h-full mx-8 my-5 grid grid-cols-1 grid-rows-[70px_1fr] gap-y-4'>
        <div className=' flex h-full justify-between'>
          <h2  className='tracking-wide self-center font-bold text-2xl min-w-max '>
            Students Management
          </h2>

          <form onSubmit={(e) => {
            e.preventDefault()
            setsearchValue(e.target.filter.value)
          }} className='w-2/3  self-center h-1/2 flex items-center justify-end space-x-4' action="">
            <div className=' w-[65%] h-full flex space-x-2'>
              <input id='filter' placeholder='Filter here' className='px-2 h-full border-2 rounded-md w-[75%]' name='filter' type="text" />
              <button className='h-full bg-tertiary w-16 rounded-md min-w-[10%] w-16 ' type="submit">
                <SearchOutlined className='' />
              </button>
            </div>
            <div onClick={()=> nav('/dashboard/users/create')} className='flex '>
              <span className='mt-auto font-semibold text-primary'>Add New</span>
              <AddUser  w={35} />
            </div>
          </form>

        </div>

        <div className=' h-full'>
          <Table columns={columns} dataSource={users.data?.dataForTable}
            bordered={true}
            pagination={{
              pageSize: 5,
              pageSizeOptions: ["10", "20", "30", "40", "50"]
            }}
            loading={{ spinning: users.isFetching, tip: "Loading...", indicator: <Space><Spinner css={''} w={'25px'} /></Space>, style: { color: '#AD8E70' } }}
            rowClassName={(record, index) => 'text-gray-700'}
          />
        </div>
        


      </section>
    </>
  )
}
