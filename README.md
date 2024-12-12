# OH-exercises

## Frontend Project Setup and Run Instructions

This guide provides steps to set up and run the frontend service of the project.

---

### Prerequisites

1. Ensure you have **Node.js** and **npm** installed:

   - [Download Node.js](https://nodejs.org/) (latest version recommended).
   - Verify installation by running:
     ```bash
     node -v
     npm -v
     ```

2. Navigate to the `frontend` folder:
   - Open your terminal or command prompt.
   - Use the `cd` command to navigate to the `frontend` directory of the project:
     ```bash
     cd frontend
     ```

---

### Installation

Install the project dependencies by running:

```bash
npm install
```

### Running the Project

Start the development server with the following command:

```bash
npm run dev
```

The frontend service should now be running on http://localhost:3000.

## SQL Exercise

Given a database schema with the following tables:

### Employees Table

| Column Name   |
| ------------- |
| employee_id   |
| first_name    |
| last_name     |
| salary        |
| department_id |

---

### Departments Table

| Column Name     |
| --------------- |
| department_id   |
| department_name |

Define the following sql queries:

- Find the highest salary in the 'Sales' department
  - Solution:
  ```sql
  SELECT MAX(Employees.salary) AS highest_salary FROM Employees JOIN Departments ON Employees.department_id = Departments.department_id WHERE Departments.department_name = 'Sales';
  ```
- Find the average salary of employees in each department
  - Solution:
  ```sql
  SELECT Departments.department_name, AVG(Employees.salary) AS average_salary FROM Employees JOIN Departments ON Employees.department_id = Departments.department_id GROUP BY Departments.department_name;
  ```
- Find the number of employees in each department
  - Solution
  ```sql
  SELECT Departments.department_name, COUNT(Employees.employee_id) AS employee_count FROM Employees JOIN Departments ON Employees.department_id = Departments.department_id GROUP BY Departments.department_name;
  ```
- Find the top 5 highest paid employees
  - Solution
  ```sql
  SELECT employee_id, first_name, last_name, salary, department_id FROM Employees ORDER BY salary DESC LIMIT 5;
  ```

## Backend Project Setup and Run Instructions

This guide provides steps to set up and run the backend service of the project.

---

### Prerequisites

1. Ensure you have **Node.js** and **npm** installed:

   - [Download Node.js](https://nodejs.org/) (latest version recommended).
   - Verify installation by running:
     ```bash
     node -v
     npm -v
     ```

2. Navigate to the `backend` folder:
   - Open your terminal or command prompt.
   - Use the `cd` command to navigate to the `backend` directory of the project:
     ```bash
     cd backend
     ```

### Installation

Install the project dependencies by running:

```bash
npm install
```

### Running the Project

Start the development server with the following command:

```bash
npm run start
```

The backend service should now be running on http://localhost:3001.

### API Endpoints

---

#### 1. **Get All Users**

- **URL**: `/users`
- **Method**: `GET`
- **Description**: Retrieves a list of all users.

#### 2. **Get a Specific User**

- **URL**: `/users/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific user by their ID.

#### 3. **Create a New User**

- **URL**: `/users`
- **Method**: `POST`
- **Request Body**:

```json
{
  "username": "new_user",
  "email": "new@example.com",
  "password": "securepassword"
}
```

- **Description**: Creates a new user.

#### 4. **Update a User**

- **URL**: `/users/:id`
- **Method**: `PUT`
- **Request Body (Any subset of username, email, password):**:

```json
{
  "email": "updated@example.com"
}
```

- **Description**: Updates a user's information.

#### 5. **Delete a User**

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
