import React from 'react'

export const NewUser = () => {
    return (
        <section className=' max-w-full min-h-full mx-8 my-5 grid grid-cols-1 grid-rows-[70px_minmax(200px,_400px)]'>
            <h2 className=' flex h-full justify-between tracking-wide font-bold text-2xl'>
                New User
            </h2>
            <form className='border grid grid-cols-4 grid-row-2'>
                <div className='col-span-2 h-full border border-tertiary'>
                    <h3 className='text-center'>Name</h3>
                    <div className='w-full flex'>
                        <label className='pl-[5%] w-1/2' htmlFor="firstName">
                            First Name
                            <input type="text" placeholder='Luis' className='border' />
                        </label>
                        <label className='pl-[5%]  w-1/2' htmlFor="secondName">
                            First Name
                            <input type="text" placeholder='Felipe' className='border' />
                        </label>

                    </div>
                </div>
                <div className='col-span-2 h-full border border-tertiary'>
                    <h3 className='text-center'>Surname</h3>
                    <div className='w-full flex'>
                        <label className='pl-[5%] w-1/2' htmlFor="firstName">
                            First Surname
                            <input type="text" placeholder='Marin' className='border' />
                        </label>
                        <label className='pl-[5%]  w-1/2' htmlFor="secondName">
                            First Surname
                            <input type="text" placeholder='Buitrago' className='border' />
                        </label>

                    </div>
                </div>
                <div>5</div>
                <div>gfd</div>
                <div>432</div>

            </form>
        </section>
    )
}
