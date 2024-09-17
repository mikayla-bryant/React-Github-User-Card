import React from 'react';

const Card = (props) => {
  return (
    <div class='card'>
      <img src={props.data.avatar_url} alt='Github Profile' />
      <div class='card-info'>
        <h3 class='name'>{props.data.name}</h3>
        <p class='username'>{props.data.login}</p>
        <p>Location: {props.data.location}</p>
        <p>
          Profile:
          <a href={props.data.url}>{props.data.url}</a>
        </p>
        <p>Followers: {props.data.followers}</p>
        <p>Following: {props.data.following}</p>
        <p>Bio: {props.data.bio}</p>
      </div>
    </div>
  );
};

export default Card;
