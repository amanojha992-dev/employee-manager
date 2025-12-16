import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    /*  const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    } */
    
    const submitHandler = (e) => {
        e.preventDefault()
    
        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }
    
        const updatedEmployees = userData.map(employee => {
            if (employee.firstName === asignTo) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, task],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask + 1
                    }
                }
            }
            return employee
        })
    
        setUserData(updatedEmployees)
        localStorage.setItem('employees', JSON.stringify({ employees: updatedEmployees }))
    
        // Clear form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 max-w-4xl mx-auto'>
            <h2 className='text-xl font-semibold text-white mb-6'>Create New Task</h2>
            
            <form onSubmit={submitHandler} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-5'>
                        <div className='w-full'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500'
                                type="text"
                                placeholder='Make a UI design'
                                required
                            />
                        </div>
                        
                        <div className='w-full'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                                type="date"
                                required
                            />
                        </div>
                        
                        <div className='w-full'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Assign to</label>
                            <input
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500'
                                type="text"
                                placeholder='Employee name'
                                required
                            />
                        </div>
                        
                        <div className='w-full'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500'
                                type="text"
                                placeholder='Design, Development, etc'
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='flex flex-col h-full'>
                        <div className='w-full flex-grow'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>Description</label>
                            <textarea
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className='w-full h-full min-h-[200px] px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500 resize-none'
                                placeholder='Enter task details...'
                                required
                            />
                        </div>
                        
                        <button
                            type='submit'
                            className='w-full mt-6 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask