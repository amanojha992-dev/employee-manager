import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, emp, set }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleComplete = () => {
        const updateddata = userData.map((employee) => {
            if (employee.firstName === emp.firstName) {
                return {
                    ...employee,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        completed: employee.taskCounts.completed + 1
                    },
                    tasks: employee.tasks.map((elem) => {
                        if (elem.taskTitle === data.taskTitle) {
                            return {
                                ...elem,
                                active: false,
                                completed: true
                            }
                        }
                        return elem
                    })
                }
            }
            return employee
        })
        
        setUserData(updateddata)
        const updatedEmployee = updateddata.find(empObj => empObj.firstName === emp.firstName)
        localStorage.setItem('loggedInUser', JSON.stringify({ 
            role: 'employee', 
            data: updatedEmployee 
        }))
        set(updatedEmployee)
    }

    const handleFailed = () => {
        const updateddata = userData.map((employee) => {
            if (employee.firstName === emp.firstName) {
                return {
                    ...employee,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        failed: employee.taskCounts.failed + 1
                    },
                    tasks: employee.tasks.map((elem) => {
                        if (elem.taskTitle === data.taskTitle) {
                            return {
                                ...elem,
                                active: false,
                                failed: true
                            }
                        }
                        return elem
                    })
                }
            }
            return employee
        })
        
        setUserData(updateddata)
        const updatedEmployee = updateddata.find(empObj => empObj.firstName === emp.firstName)
        localStorage.setItem('loggedInUser', JSON.stringify({ 
            role: 'employee', 
            data: updatedEmployee 
        }))
        set(updatedEmployee)
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button 
                    className='bg-green-500 rounded font-medium py-1 px-2 text-xs'
                    onClick={handleComplete}
                >
                    Mark as Completed
                </button>
                <button 
                    className='bg-red-500 rounded font-medium py-1 px-2 text-xs'
                    onClick={handleFailed}
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask