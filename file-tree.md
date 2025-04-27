# Project File Tree  

Module-17-Lattice/    
│  
│  
├── instructions/                 # This folder contains instructions and the start code for the project  
│  
│  
├── Assets/                       # This folder contains screenshots of the project   
│  
│  
├── client/                       # Frontend   
│   ├── public/    
│   │    └── ...   
│   │    
│   ├── dist/   
│   │    └── ...  
│   │    
│   ├── src/   
│   │    ├── api/  
│   │    |    ├── authAPI.jsx  
│   │    |    |   
│   │    |    ├── thoughtAPI.jsx  
│   │    |    |   
│   │    |    └── userAPI.jsx   
│   │    |   
│   │    ├── assets/  
│   │    |    ├── react.svg  
│   │    |    |  
│   │    |    └── css/  
│   │    |         └── css modules...  
│   │    |   
│   │    ├── components/  
│   │    |    ├── ErrorMessage.jsx  
│   │    |    |   
│   │    |    ├── FormButton.jsx  
│   │    |    |   
│   │    |    ├── FormInput.jsx  
│   │    |    |   
│   │    |    ├── FormTextarea.jsx  
│   │    |    |   
│   │    |    ├── LoadingSpinner.jsx  
│   │    |    |   
│   │    |    ├── Modal.jsx  
│   │    |    |   
│   │    |    ├── NavBar.jsx  
│   │    |    |   
│   │    |    ├── PageWrapper.jsx  
│   │    |    |   
│   │    |    ├── ProtectedRoutes.jsx  
│   │    |    |   
│   │    |    ├── ReactionList.jsx  
│   │    |    |   
│   │    |    ├── ThoughtCard.jsx  
│   │    |    |   
│   │    |    └── UserCard.jsx  
│   │    |   
│   │    ├── interfaces/  
│   │    |    ├── ApiMessages.jsx  
│   │    |    |   
│   │    |    ├── ThoughtData.jsx  
│   │    |    |   
│   │    |    ├── UserData.jsx  
│   │    |    |   
│   │    |    └── UserLogin.jsx  
│   │    |   
│   │    ├── pages/  
│   │    |    ├── AllThoughts.jsx  
│   │    |    |   
│   │    |    ├── CreateThought.jsx  
│   │    |    |   
│   │    |    ├── Dashboard.jsx  
│   │    |    |   
│   │    |    ├── EditThought.jsx  
│   │    |    |   
│   │    |    ├── FriendsList.jsx  
│   │    |    |   
│   │    |    ├── Home.jsx  
│   │    |    |   
│   │    |    ├── Login.jsx  
│   │    |    |   
│   │    |    ├── NotFound.jsx  
│   │    |    |   
│   │    |    ├── SignUp.jsx  
│   │    |    |   
│   │    |    ├── SingleThought.jsx  
│   │    |    |   
│   │    |    └── UserProfile.jsx  
│   │    |   
│   │    ├── utils/   
│   │    │    ├── auth.js  
│   │    |    |   
│   │    │    ├── errorHandler.js  
│   │    |    |   
│   │    │    └── formatDate.js  
│   │    |   
│   │    ├── App.jsx   
│   │    |   
│   │    ├── index.css  
│   │    |   
│   │    └── main.jsx  
│   │     
│   │      
│   ├── node_modules/   
│   │    └── ...    
│   │      
│   ├── .eslintrc.cjs   
│   │      
│   ├── .gitignore  
│   │      
│   ├── index.html  
│   │      
│   ├── package.json  
│   │      
│   ├── package-lock.json  
│   │      
│   ├── postcss.config.js  
│   │      
│   ├── tailwind.config.js  
│   │      
│   ├── tsconfig.json  
│   │      
│   ├── tsconfig.node.json  
│   │      
│   ├── vite.config.js   
│   │      
│   └── vitest.config.js                
│
│   
├── server/                       # Backend                 
│   ├── src/   
│   │    ├── config/  
│   │    |    └── connection.ts  
│   │    |   
│   │    ├── controllers/  
│   │    |    ├── thoughtController.ts   
│   │    |    |   
│   │    |    └── userController.ts  
│   │    |   
│   │    ├── middleware/  
│   │    |    └── auth.ts  
│   │    |   
│   │    ├── models/  
│   │    |    ├── index.ts  
│   │    |    |   
│   │    |    ├── Thought.ts   
│   │    |    |   
│   │    |    └── User.ts  
│   │    |   
│   │    ├── routes/  
│   │    |    ├── api/  
│   │    |    |    ├── index.ts    
│   │    |    |    |   
│   │    |    |    ├── thoughtRoutes.ts  
│   │    |    |    |   
│   │    |    |    └── userRoutes.ts  
│   │    |    |   
│   │    |    ├── auth-routes.ts  
│   │    |    |   
│   │    |    └── index.ts  
│   │    |   
│   │    ├── seeds/   
│   │    |    ├── index.ts  
│   │    |    |   
│   │    |    ├── thoughts.json  
│   │    |    |   
│   │    |    ├── thought-seeds.ts   
│   │    |    |   
│   │    |    ├── users.json   
│   │    |    |   
│   │    |    └── user-seeds.ts    
│   │    |   
│   │    ├── types/   
│   │    │    └── express/  
│   │    │         └── index.d.ts   
│   │    |   
│   │    ├── utils/   
│   │    │    ├── auth.ts  
│   │    |    |   
│   │    │    ├── errorHandler.ts  
│   │    |    |   
│   │    │    └── formatDate.ts  
│   │    |   
│   │    └── server.ts    
│   │   
│   │         
│   ├── dist/   
│   │    └── ...  
│   │   
│   ├── node_modules/   
│   │    └── ...     
│   │   
│   ├── .gitignore  
│   │   
│   ├── jest.config.js  
│   │   
│   ├── package.json  
│   │   
│   ├── package-lock.json  
│   │   
│   └── tsconfig.json  
│  
│  
├── .env  
│     
├── .gitignore  
│     
├── package.json  
│     
├── package-lock.json  
│     
├── tsconfig.json  
│     
└── README.md  
   