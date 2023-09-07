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
      .then(data => {
        setTweet(data.tweet)
        console.log(data.tweet)
      })
      .catch(() => setError(true))
  }, [])
  return (
    error
      ? <Error />
      : !tweet
        ? <Loading />
        : <Section>
          <UserDetails>
            <Avatar src={tweet.author.avatarSrc}></Avatar>
            <HandleDetails to={`/${tweet.author.handle}`}>
              <SpanBold>{tweet.author.displayName}</SpanBold>
              <SpanHandler>{` @${tweet.author.handle}`}</SpanHandler>
            </HandleDetails>
          </UserDetails>
          <Status>{tweet.status}</Status>
          {tweet.media.length > 0 && (<Image src={tweet.media[0].url}></Image>)}
          <TimeFormat>{format(new Date(tweet.timestamp), 'h:mm aa - MMM dd yyyy')} - Twixx web app</TimeFormat>
          <TweetActions retweets={tweet.numRetweets} likes={tweet.numLikes} />
        </Section>
  )
}

const Section = styled.section`
  margin-top: 4vh;
  background-color: ${COLORS.card};
  border-radius: 5px;
  padding: 4vh 4vh 2vh;
  margin-bottom: 80px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const HandleDetails = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${COLORS.primary_text};
  gap: 5px;
  padding: 0px 20px;
`;

const SpanBold = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const SpanHandler = styled.span`
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${COLORS.primary_blue};
  }
`;

const TimeFormat = styled.div`
  padding: 10px;
  color: ${COLORS.secondary_text};
  font-size: 14px;
`;

const Status = styled.p`
  padding: 4vh 2vh;
  color: ${COLORS.secondary_text};
  font-style: italic;
  line-height: 22px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 5px;
  object-fit: cover;
`;