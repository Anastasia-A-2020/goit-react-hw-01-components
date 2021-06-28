// import user from "./user.json";
// import statisticalData from "./statistical-data.json";
// import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";

// export default function App () {
//   return (<div>
//       <div>
//         <Profile
//           name={user.name}
//           tag={user.tag}
//           location={user.location}
//           avatar={user.avatar}
//           stats={user.stats}
//         />
//       </div>
    
//       <div>
//         <Statistics title="Upload stats" stats={statisticalData} />
//         <Statistics stats={statisticalData} />
//       </div>
//     </div>
//    )
// }

import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

export default function App() {
  return <FriendList friends={friends} />
}