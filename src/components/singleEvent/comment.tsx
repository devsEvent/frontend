import { useState } from "react";

import Reply from "./reply";

import EditIcon from "../../assets/icons/edit.svg";

import "../../styles/comment.scss";

type reply = {
  name: string;
  date: string;
  time: string;
  likesCount: number;
  profile: string;
  positions: string[];
  text: string;
};
interface Props {
  name: string;
  date: string;
  time: string;
  likesCount: number;
  profile: string;
  positions: string[];
  text: string;
  replies: reply[];
}

function Comment(props: Props) {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked((prevValue) => !prevValue);
  };

  return (
    <div className="comment__block">
      <div className="block__comment">
        <div className="comment__profile">
          <img src={props.profile} alt="" />
        </div>

        <div className="comment__container container">
          <div className="container__header header">
            <div className="header__data data">
              <h3>{props.name}</h3>
              <time>{props.date}</time>
              <span>{props.time}</span>
              <div className="data__buttons">
                <button>
                  <img src={EditIcon} alt="" />
                </button>
                <button>پاسخ دادن</button>
              </div>
            </div>
            <div className="header__position">
              <span>{props.positions[0]} </span> <span>|</span> <span>{props.positions[1]}</span>
            </div>
          </div>
          <p className="container__text">{props.text}</p>
          <button className="container__like" onClick={likeHandler}>
            <span>{props.likesCount}</span>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={liked ? "like--checked" : "like--unchecked"}
            >
              <path
                d="M4.00001 6.77673C4.2068 6.10613 4.57722 5.47603 5.14527 4.91284C5.59251 4.46941 6.05668 4.17698 6.52241 4M12.6007 2.14593C14.2743 1.08425 16.9773 0.0803204 19.3115 2.46071C24.8525 8.11136 15.3502 19 11 19C6.64988 19 -2.85249 8.11136 2.68853 2.46072C5.02272 0.0803466 7.72564 1.08427 9.39929 2.14593C10.345 2.74582 11.655 2.74582 12.6007 2.14593Z"
                stroke="#FF4E4E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="comment__replies">
        {props.replies.map((item, index) => (
          <Reply {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
