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
│   │    |    ├── authAPI.ts  
│   │    |    |   
│   │    |    ├── thoughtAPI.ts 
│   │    |    |   
│   │    |    └── userAPI.ts   
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
│   │    |    |    ├── ErrorMessage.tsx   
│   │    |    |    |  
│   │    |    |    ├── LoadingSpinner.tsx  
│   │    |    |    |  
│   │    |    |    └── Modal.tsx   
│   │    |    |  
│   │    |    ├── form/ 
│   │    |    |    ├── FormButton.tsx   
│   │    |    |    |  
│   │    |    |    ├── FormInput.tsx  
│   │    |    |    |  
│   │    |    |    └── FormTextarea.tsx  
│   │    |    |  
│   │    |    ├── layout/ 
│   │    |    |    ├── MainLayout.tsx  
│   │    |    |    |  
│   │    |    |    ├── PageWrapper.tsx  
│   │    |    |    |  
│   │    |    |    └── ProtectedRoute.tsx  
│   │    |    |  
│   │    |    ├── navigation/ 
│   │    |    |    └── NavBar.tsx  
│   │    |    |  
│   │    |    ├── thoughts/  
│   │    |    |    ├── AllThoughts.tsx  
│   │    |    |    |  
│   │    |    |    ├── CreateThought.tsx  
│   │    |    |    |  
│   │    |    |    ├── EditThought.tsx  
│   │    |    |    |  
│   │    |    |    ├── FollowFeed.tsx  
│   │    |    |    |  
│   │    |    |    ├── FriendFeed.tsx  
│   │    |    |    |  
│   │    |    |    ├── PublicFeed.tsx  
│   │    |    |    |  
│   │    |    |    ├── ReactionList.tsx  
│   │    |    |    |  
│   │    |    |    ├── SingleThought.tsx  
│   │    |    |    |  
│   │    |    |    └── ThoughtCard.tsx  
│   │    |    |   
│   │    |    └── user/ 
│   │    |         ├── FriendsList.tsx  
│   │    |         |  
│   │    |         ├── MyPosts.tsx  
│   │    |         |  
│   │    |         ├── UserCard.tsx  
│   │    |         | 
│   │    |         └── UserProfile.tsx  
│   │    |   
│   │    ├── interfaces/  
│   │    |    ├── ApiMessages.tsx  
│   │    |    |   
│   │    |    ├── ThoughtData.tsx  
│   │    |    |   
│   │    |    ├── UserData.tsx  
│   │    |    |   
│   │    |    └── UserLogin.tsx  
│   │    |   
│   │    ├── pages/  
│   │    |    ├── Dashboard.tsx  
│   │    |    |   
│   │    |    ├── Home.tsx  
│   │    |    |   
│   │    |    ├── Login.tsx  
│   │    |    |   
│   │    |    ├── NotFound.tsx  
│   │    |    |     
│   │    |    └── SignUp.tsx  
│   │    |   
│   │    ├── utils/   
│   │    │    ├── auth.ts  
│   │    |    |   
│   │    │    ├── errorHandler.ts  
│   │    |    |   
│   │    │    └── formatDate.ts  
│   │    |   
│   │    ├── App.tsx   
│   │    |   
│   │    ├── index.css  
│   │    |   
│   │    ├── main.tsx  
│   │    |   
│   │    └── vite-env.d.ts  
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
│   ├── postcss.config.ts  
│   │      
│   ├── tailwind.config.ts  
│   │      
│   ├── tsconfig.json  
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
   