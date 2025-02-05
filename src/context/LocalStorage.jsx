// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "total" : 5,
    "active" : 2,
    "newTask" : 1,
    "completed" : 3,
    "failed" : 0,

    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Task 1",
        "description": "Complete the quarterly report.",
        "date": "2025-01-20",
        "taskCategory": "Work",
        "active": 3,
        "completed": 2,
        "failed": 1,  
        "newTask": 0,
      },
      {
        "taskNumber": 2,
        "taskTitle": "Task 2",
        "description": "Attend team meeting at 3 PM.",
        "date": "2025-01-20",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true, 
      },
      {
        "taskNumber": 3,
        "taskTitle": "Task 3",
        "description": "Review marketing plan for next quarter.",
        "date": "2025-01-22",
        "taskCategory": "Work",
        "active": false,
        "completed": true,
        "failed": false,  
        "newTask": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ravi",
    "email": "employee2@example.com",
    "password": "123",
    "active" : 2,
    "newTask" : 1,
    "completed" : 4,
    "failed" : 0,
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Task 1",
        "description": "Prepare presentation for the client meeting.",
        "date": "2025-01-21",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Task 2",
        "description": "Follow up with sales team on lead status.",
        "date": "2025-01-22",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "active" : 2,
    "newTask" : 1,
    "completed" : 1,
    "failed" : 0,
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Task 1",
        "description": "Complete software bug fixes.",
        "date": "2025-01-23",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Task 2",
        "description": "Deploy new version of the app.",
        "date": "2025-01-24",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      },
      {
        "taskNumber": 3,
        "taskTitle": "Task 3",
        "description": "Update documentation for new features.",
        "date": "2025-01-25",
        "taskCategory": "Work",
        "active": true,
        "completed": false,
        "failed": true,   
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sunita",
    "email": "employee4@example.com",
    "password": "123",
    "active" : 3,
    "newTask" : 1,
    "completed" : 2,
    "failed" : 0,
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Task 1",
        "description": "Organize the workspace.",
        "date": "2025-01-19",
        "taskCategory": "Personal",
        "active": true,
        "completed": true,
        "failed": false, 
        "newTask": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Task 2",
        "description": "Set up new office supplies.",
        "date": "2025-01-20",
        "taskCategory": "Personal",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      },
      {
        "taskNumber": 3,
        "taskTitle": "Task 3",
        "description": "Prepare lunch for the team.",
        "date": "2025-01-21",
        "taskCategory": "Personal",
        "active": false,
        "completed": true,
        "failed": false,  
        "newTask": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "active" : 2,
    "newTask" : 1,
    "completed" : 3,
    "failed" : 0,
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Task 1",
        "description": "Design new logo for the marketing campaign.",
        "date": "2025-01-22",
        "taskCategory": "Design",
        "active": true,
        "completed": false,
        "failed": true, 
        "newTask": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Task 2",
        "description": "Create social media posts for new product launch.",
        "date": "2025-01-23",
        "taskCategory": "Marketing",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      },
      {
        "taskNumber": 3,
        "taskTitle": "Task 3",
        "description": "Collaborate with the content team on campaign ideas.",
        "date": "2025-01-24",
        "taskCategory": "Collaboration",
        "active": true,
        "completed": false,
        "failed": true,  
        "newTask": true
      }
    ]
  }
];




  
const admin = [{
      "id": 1,
      "firstName": "Hammad",
      "email": "admin@example.com",
      "password": "123"
    }]



export const setLocalStorage = () => {
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
return {employees, admin}
}
  
