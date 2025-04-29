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
│   │    │    └── css/  
│   │    │         ├── common/
│   │    |         |    ├── Button.module.css  
│   │    |         |    |  
│   │    |         |    ├── Card.module.css 
│   │    |         |    |  
│   │    |         |    ├── Form.module.css 
│   │    |         |    | 
│   │    |         |    ├── LoadingSpinner.module.css 
│   │    |         |    | 
│   │    |         |    └── Modal.module.css   
│   │    |         |  
│   │    |         ├── layout/ 
│   │    |         |    ├── Layout.module.css   
│   │    |         |    |  
│   │    |         |    ├── MainLayout.module.css 
│   │    |         |    |  
│   │    |         |    └── PageWrapper.module.css  
│   │    |         |  
│   │    |         └── navigation/ 
│   │    |              └── NavBar.module.css  
│   │    |   
│   │    ├── components/  
│   │    |    ├── common/
│   │    |    |    ├── ErrorMessage.jsx   
│   │    |    |    |  
│   │    |    |    ├── LoadingSpinner.jsx  
│   │    |    |    |  
│   │    |    |    └── Modal.jsx   
│   │    |    |  
│   │    |    ├── form/ 
│   │    |    |    ├── FormButton.jsx   
│   │    |    |    |  
│   │    |    |    ├── FormInput.jsx  
│   │    |    |    |  
│   │    |    |    └── FormTextarea.jsx  
│   │    |    |  
│   │    |    ├── layout/ 
│   │    |    |    ├── MainLayout.jsx  
│   │    |    |    |  
│   │    |    |    ├── PageWrapper.jsx  
│   │    |    |    |  
│   │    |    |    └── ProtectedRoute.jsx  
│   │    |    |  
│   │    |    ├── navigation/ 
│   │    |    |    └── NavBar.jsx  
│   │    |    |  
│   │    |    ├── thoughts/  
│   │    |    |    ├── AllThoughts.jsx  
│   │    |    |    |  
│   │    |    |    ├── CreateThought.jsx  
│   │    |    |    |  
│   │    |    |    ├── EditThought.jsx  
│   │    |    |    |  
│   │    |    |    ├── FriendFeed.jsx  
│   │    |    |    |  
│   │    |    |    ├── PublicFeed.jsx  
│   │    |    |    |  
│   │    |    |    ├── ReactionList.jsx  
│   │    |    |    |  
│   │    |    |    └── ThoughtCard.jsx  
│   │    |    |   
│   │    |    └── user/ 
│   │    |         ├── FriendsList.jsx  
│   │    |         |  
│   │    |         ├── MyPosts.jsx  
│   │    |         |  
│   │    |         ├── UserCard.jsx  
│   │    |         | 
│   │    |         └── UserProfile.jsx  
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
│   │    |    ├── Dashboard.jsx  
│   │    |    |   
│   │    |    ├── Home.jsx  
│   │    |    |   
│   │    |    ├── Login.jsx  
│   │    |    |   
│   │    |    ├── NotFound.jsx  
│   │    |    |     
│   │    |    └── SignUp.jsx  
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
│   │    |    ├── authController.ts   
│   │    |    | 
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
   