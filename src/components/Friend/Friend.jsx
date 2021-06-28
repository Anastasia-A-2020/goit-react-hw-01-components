import PropTypes from 'prop-types';

export default function Friend({isOnline, name, avatar}) {
    return (
        <>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </>
    )
}


Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}