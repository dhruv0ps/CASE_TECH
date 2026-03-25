# Starter Template
A full-stack starter template using React, TypeScript, Tailwind CSS, Flowbite-React, Node.js, Express (CommonJS), and MongoDB.

## Features

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Flowbite-React components for UI
- Vite for fast development

### Backend
- Node.js with Express (CommonJS)
- MongoDB for database storage
- Mongoose for schema modeling

## Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- MongoDB (Local or Cloud Instance)

### Clone the Repository
```sh
git clone https://gitlab.com/ITCARTADMIN/starter-template
cd starter-template
```

### Install Dependencies
#### Frontend
```sh
cd frontend
yarn
yarn tailwind -i src/index.css -o src/output.css
```

#### Backend
```sh
cd backend
yarn
```

## Running the Project

### Start Backend Server
```sh
cd Backend
yarn start
```

### Start Frontend
```sh
cd Frontend
yarn run dev
```

## Folder Structure
```
starter-template/
├── Backend/          # Node.js Express backend
│   ├── controllers/  # API controllers
│   ├── Config/       
│   |    ├── Models/  # Mongoose models
│   |    ├── init     # Functions to run on initial start of project
│   |    ├── db       # Database config
│   ├── routes/       # Express routes
│   ├── services/     # Business logic services
│   ├── app.js        # Entry point
├── Frontend/         # React frontend
│   ├── src/
│   │   ├── config/         # Typescript models and api configs
│   │   ├── features/       # UI modules
│   │   ├── layout/         # Main layout components such as sidebar, navbar etc
│   │   ├── util/           # Custom hooks/utilities
│   │   ├── stores/         # MobX Stores
│   │   ├── main.tsx        # Root router component
│   ├── index.tsx           # Entry point
│   ├── tailwind.config.js  # Tailwind configuration
├── README.md               # Documentation
```

## Environment Variables
Create a `.env` file in the `backend/` directory with the following:
```
PORT=5050
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Contributing
no.

## License
This project is licensed under the MIT License.

