import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TweetActions } from "./TweetActions";
import { Error } from "./utils/Error";
import { Loading } from "./utils/Loading";
import { format } from 'date-fns';
import { COLORS } from "../GlobalStyles";


export const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then(res => res.json())
      .then(data => setTweet(data.tweet))
      .catch(() => setError(true))
  }, [])
  return (
    error
      ? <Error />
      : !tweet
        ? <Loading />
        : <Wrapper>
          <UserDetails>
            <Avatar src={tweet.author.avatarSrc}></Avatar>
            <HandleDetails to={`/${tweet.author.handle}`}>
              <SpanBold>{tweet.author.displayName}</SpanBold>
              <Span>{` @${tweet.author.handle}`}</Span>
            </HandleDetails>
          </UserDetails>
          <Status>{tweet.status}</Status>
          {tweet.media.length > 0 && (<Image src={tweet.media[0].url}></Image>)}
          <TimeFormat>{format(new Date(tweet.timestamp), 'h:mm aa - MMM dd yyyy')} - Critter web app</TimeFormat>
          <TweetActions />
        </Wrapper>
  )
}

const Span = styled.span`
  text-decoration: none;
  transition: all 200ms ease-in-out;
  color: ${COLORS.primary_blue};
  &:hover {
    color: ${COLORS.matte_blue};
  }
`;

const TimeFormat = styled.div`
  padding: 10px;
`;

const Status = styled.p`
  margin: 30px 40px;
`;

const SpanBold = styled(Span)`
  font-weight: 800;
  font-size: 20px;
`;
const Wrapper = styled.div`
  padding: 30px;
`;
const Avatar = styled.img`
  width: 80px;
  border-radius: 50px;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const HandleDetails = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 5px;
  padding: 0px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 20px;
  object-fit: fill;
`;