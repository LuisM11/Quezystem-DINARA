import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/usersApi'
import { useGlobalContext } from '../context/GlobalContext'

export const useUsersFetch = (token) => {
    const { setloggedUser } = useGlobalContext();
    const usersFetch = useQuery({
        queryKey: ['allusers', token],
        queryFn: getUsers,
        retry: false,

        onError: (error) => {
            if (error.response.data.message.includes('expired')) {
                localStorage.removeItem('user')
                setloggedUser(null)
            }
        },

        select: (data) => {
            const dataForTable = data.data.users
            .filter((user) => user.role === 2)
            .map((user) => {
                const newUser = {
                    key: user.id,
                    name: user.firstName + ' ' + user.secondName + ' ' + user.surname + ' ' + user.secondSurName,
                    identification: user.documentNumber,
                    email: user.email,
                    phone: user.phone,
                    gender: user.gender,
                    status: user.state
                }
                return newUser
            })
            return {dataForTable,data}
        }
    })
    return usersFetch

}
