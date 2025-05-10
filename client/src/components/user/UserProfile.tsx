// client/src/components/user/UserProfile.tsx

// client/src/components/user/UserProfile.tsx

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import layoutStyles from '../../assets/css/layout/Layout.module.css';
import Auth from '../../utils/auth';
import { retrieveUsers, fetchMyProfile } from '../../api/userAPI';
import { UserData, defaultUserData } from '../../interfaces/UserData';

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserData>(defaultUserData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (userId === 'me' && !Auth.loggedIn()) {
          navigate('/login');
          return;
        }

        setIsLoading(true);

        let profileData: any;

        if (userId === 'me') {
          profileData = await fetchMyProfile();
        } else {
          const users = await retrieveUsers();
          profileData = users.find((u: any) => String(u._id) === String(userId));

          if (!profileData) {
            setError(`User with ID ${userId} not found`);
            return;
          }
        }

        setUser({
          _id: profileData._id,
          username: profileData.username,
          email: profileData.email || '',
          bio: profileData.bio || '',
          profilePhoto: profileData.profilePhoto || '',
          friendCount: profileData.friendCount || 0,
          friendList: profileData.friendList || [],
          followingCount: profileData.followingCount || 0,
          followingList: profileData.followingList || [],
          followersCount: profileData.followersCount || 0,
          followersList: profileData.followersList || [],
        });
      } catch (err) {
        console.error(err);
        setError('Failed to load user profile.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [userId, navigate]);

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className={layoutStyles.centeredContent}>
        <h2 className="mb-4 text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-500">{error}</p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className={layoutStyles.container}>
      <div className="mb-12 text-center">
        {user.profilePhoto && (
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md"
          />
        )}
        <h1 className="mb-2 text-4xl font-bold">{user.username}</h1>

        {userId === 'me' && user.email && (
          <p className="mb-2 text-sm text-gray-400">{user.email}</p>
        )}

        {user.bio && <p className="text-sm text-gray-500">{user.bio}</p>}

        <p className="mt-4 text-sm text-gray-600">
          {user.friendCount} {user.friendCount === 1 ? 'Friend' : 'Friends'}
        </p>
        <p className="text-sm text-gray-600">
          Following: {user.followingCount} • Followers: {user.followersCount}
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;



// This is the old version that WAS WORKING but I wanted to refactor it to use the new UserData interface and the new API functions. 
// I will keep it here in case I can't get the new version to work.


// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../common/LoadingSpinner';
// import layoutStyles from '../../assets/css/layout/Layout.module.css';
// import Auth from '../../utils/auth';
// import { retrieveUsers, fetchMyProfile } from '../../api/userAPI';
// import { UserData, defaultUserData } from '../../interfaces/UserData';

// interface UserProfileData {
//   id: string;
//   username: string;
//   email?: string | null;
//   bio?: string;
//   profilePhoto?: string;
//   friendCount: number;
// }

// const UserProfile: React.FC = () => {
//   const { userId } = useParams<{ userId: string }>();
//   const navigate = useNavigate();

//   const [user, setUser] = useState<UserProfileData | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>('');

//   if (userId === 'me' && !Auth.loggedIn()) {
//     navigate('/login');
//     return null;
//   }

//   useEffect(() => {
//     const loadProfile = async () => {
//       try {
//         setIsLoading(true);

//         let profileData: any;

//         if (userId === 'me') {
//           profileData = await fetchMyProfile();
//         } else {
//           const users = await retrieveUsers();
//           profileData = users.find((u: any) => String(u._id) === String(userId));

//           if (!profileData) {
//             setError(`User with ID ${userId} not found`);
//             return;
//           }
//         }

//         setUser({
//           id: profileData._id,
//           username: profileData.username,
//           email: profileData.email || null,
//           bio: profileData.bio || '',
//           profilePhoto: profileData.profilePhoto || '',
//           friendCount: profileData.friends?.length || 0,
//         });
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load user profile.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadProfile();
//   }, [userId]);

//   if (isLoading) return <LoadingSpinner />;

//   if (error) {
//     return (
//       <div className={layoutStyles.centeredContent}>
//         <h2 className="mb-4 text-2xl font-bold text-red-600">Error</h2>
//         <p className="text-gray-500">{error}</p>
//         <Link
//           to="/dashboard"
//           className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
//         >
//           Back to Dashboard
//         </Link>
//       </div>
//     );
//   }

//   if (!user) return null;

//   return (
//     <div className={layoutStyles.container}>
//       <div className="mb-12 text-center">
//         {user.profilePhoto && (
//           <img
//             src={user.profilePhoto}
//             alt="Profile"
//             className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md"
//           />
//         )}
//         <h1 className="mb-2 text-4xl font-bold">{user.username}</h1>

//         {userId === 'me' && user.email && (
//           <p className="mb-2 text-sm text-gray-400">{user.email}</p>
//         )}

//         {user.bio && <p className="text-sm text-gray-500">{user.bio}</p>}

//         <p className="mt-4 text-sm text-gray-600">
//           {user.friendCount} {user.friendCount === 1 ? 'Friend' : 'Friends'}
//         </p>
//       </div>

//       <div className="text-center">
//         <Link
//           to="/dashboard"
//           className="inline-block px-6 py-2 mt-6 font-semibold text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
//         >
//           Back to Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
