import PropTypes from 'prop-types';
import Friend from "../Friend/Friend";

export default function FriendList({friends}) {
    return (
         <div>
            <ul className="friendList">
                {friends.map(friend => <li className="item" key={friend.id}>
                    <Friend isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar} />
                </li>)}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}