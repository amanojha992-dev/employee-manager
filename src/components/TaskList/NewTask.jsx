import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, emp,set }) => {
     console.log(data, emp) 
    const [userData, setUserData] = useContext(AuthContext)
    console.log(userData)
    

    const submithandler = () => {
        const updateddata = userData.map((employee) => {
            if (employee.firstName == emp.firstName) {
                console.log(employee)
                return {
                    ...employee,
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask - 1,
                        active: employee.taskCounts.active + 1,

                    },
                    tasks: employee.tasks.map((elem)=>{
                        console.log(elem)
                        if (elem.taskTitle==data.taskTitle)
                        {
                           
                            return{
                                ...elem,
                                active: true,
                                newTask:false
                            }

                        }

                        return elem

                    })


                }


            }

            return employee
        })
        setUserData(updateddata);
        console.log(updateddata)  
        
          const updatedEmployee = updateddata.find(empObj => empObj.firstName === emp.firstName);
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
        set(updatedEmployee) 

    }
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'  onClick={submithandler}  >Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask