import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[friend.isOnline]}`}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

// FriendListItem.PropTypes = {
//   status: PropTypes.bool,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// }
