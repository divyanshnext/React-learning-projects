const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Design homepage",
          description: "Create a responsive homepage design",
          date: "2025-02-15",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix navbar bug",
          description: "Resolve alignment issues in the navbar",
          date: "2025-02-14",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Optimize database queries",
          description: "Improve SQL query performance",
          date: "2025-02-16",
          category: "Backend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Create API documentation",
          description: "Document all API endpoints in Swagger",
          date: "2025-02-17",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Set up CI/CD pipeline",
          description: "Configure Jenkins for automated deployment",
          date: "2025-02-18",
          category: "DevOps",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write unit tests",
          description: "Improve test coverage in backend services",
          date: "2025-02-19",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Redesign dashboard",
          description: "Update UI/UX for the admin dashboard",
          date: "2025-02-20",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix login issue",
          description: "Resolve authentication failure in login API",
          date: "2025-02-21",
          category: "Backend",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Implement dark mode",
          description: "Add dark mode toggle for better UI experience",
          date: "2025-02-22",
          category: "Frontend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Optimize images",
          description: "Reduce image load time using compression",
          date: "2025-02-23",
          category: "Performance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 101,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
  }