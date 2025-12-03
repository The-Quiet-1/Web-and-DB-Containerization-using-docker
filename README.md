# **Webserver with Database using Docker**

A complete containerized web application that includes:

* **Frontend** served from the `public/` folder.
* **Backend** built using **Node.js (Express)**.
* **MySQL Database** using Docker.
* **Docker Compose** to orchestrate all services.


<br>

---

# **📌 Overview**

This project demonstrates how a multi-service containerized application works. Each component runs in a separate container and communicates internally using Docker networking. <br>
You get a full stack setup:

* **Frontend** → HTML, CSS, JS
* **Backend** → Express server (`server.js`)
* **Database** → MySQL with initialization SQL (`db/init.sql`)
* **Production-grade setup** → Dockerfile + Docker Compose

<br>

---

# **📁 Project Structure**

```
project/
│── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
│── db/
│   ├── init.sql
│
│── server.js
│── Dockerfile
│── docker-compose.yml
│── package.json
│── .gitignore
```

<br>

---

# **⚙️ How It Works**

### **🔹 Frontend**

Located in the `public/` directory.<br>
Served using Express static middleware.

### **🔹 Backend (Node.js + Express)**

* Handles API requests
* Connects to MySQL database
* Runs inside its own Docker container

### **🔹 MySQL Database**

* Initializes automatically using `db/init.sql`
* Stores and manages application data

### **🔹 Docker Compose**

Automatically sets up the full environment:

* Builds backend container
* Starts MySQL container
* Maps volumes
* Links networks

<br>

---

# **🚀 How to Run the Project**

### **1️⃣ Clone the Repository**

```
git clone <your-repo-link>
cd project
```

<br>

### **2️⃣ Build & Start Containers**

```
docker-compose up --build -d
```

<br>

### **3️⃣ Check Running Containers**

```
docker ps
```

<br>

### **4️⃣ Access the Application**

Open your browser:

```
http://localhost:3000
```

<br>

---

# **🗄️ MySQL Database Access**

Follow these steps to check the database inside Docker:

1. **List all running containers**

```
docker ps
```

You should see a container named `video-editing-db`.

2. **Enter the PostgreSQL container**

```
docker exec -it video-editing-db bash
```

This opens a shell inside the database container.

3. **Login to the PostgreSQL database**

```
psql -U postgres -d video_booking
```

Here:

* `postgres` → username
* `video_booking` → your database name

4. **Check available tables**

```
\dt
```

5. **View all bookings**

```
SELECT * FROM bookings;
```

6. **Exit PostgreSQL**

```
\q
```

7. **Exit the container**

```
exit
```

<br>

---

# **📦 Docker Commands (Useful Manual Guide)**

### **Start services**

```
docker-compose up -d
```

### **Stop services**

```
docker-compose down
```

### **Rebuild everything**

```
docker-compose up --build
```

### **View logs**

```
docker-compose logs -f
```

<br>

---

# **📌 Technologies Used**

* **HTML, CSS, JS** (Frontend)
* **Node.js + Express** (Backend)
* **MySQL** (Database)
* **Docker & Docker Compose**
* **Volumes & Networks**

<br>

---

# **📄 License**

This project is open-source and available for modification.

<br>

---

# **✨ Author**

Made with care & best practices
