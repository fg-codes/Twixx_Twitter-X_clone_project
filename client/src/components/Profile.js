import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../GlobalStyles";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { TweetSmall } from "./TweetSmall";
import { Loading } from "./utils/Loading";
import { format } from 'date-fns';
import { Tabulate } from "./Tabulate";

export const Profile = () => {
  const { profileId } = useParams();
  const [handle, setHandle] = useState(null);
  const [allTweets, setAllTweets] = useState(null);
  const [tweetsIds, setTweetsIds] = useState(null);
  const [tab, setTab] = useState('tweets');
  const scrollUpRef = useRef(null);

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then(res => res.json())
      .then(data => {
        setHandle(data.profile);
        scrollUpRef.current && (scrollUpRef.current.scrollIntoView());
      })
      .catch(error => console.log(error))
  }, [profileId]);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then(res => res.json())
      .then(data => {
        setAllTweets(data.tweetsById);
        setTweetsIds(data.tweetIds);
      })
      .catch(error => console.log(error))
  }, [profileId]);

  return (
    !handle
      ? <Loading />
      : <Wrapper ref={scrollUpRef}>
        <Banner src={handle.bannerSrc}></Banner>
        <Content>
          <AvatarDiv>
            <Avatar src={handle.avatarSrc}></Avatar>
            <FollowHandle>{handle.isBeingFollowedByYou ? "Following" : "Follow!"}</FollowHandle>
          </AvatarDiv>
          <HandleName>{handle.displayName}</HandleName>
          <Tag>{`@${handle.handle}`}<TagSpan>{handle.isFollowingYou ? 'Follows you' : "Does not follow you"}</TagSpan></Tag>
          <Bio>{handle.bio}</Bio>
          <Placer>
            <div>{handle.location && (<><FiMapPin /> {handle.location}</>)}</div>
            <div><FiCalendar /> {format(new Date(handle.joined), 'LLLL yyyy')}</div>
          </Placer>
          <Placer>
            <div><Bold>{handle.numFollowing}</Bold> Following</div>
            <div><Bold>{handle.numFollowers}</Bold> Followers</div>
          </Placer>
        </Content>
        <Div>
          <Tabulate tab={tab} setTab={setTab} />
          {tab === 'media' && (<FilterDiv>Media filter goes here</FilterDiv>)}
          {tab === 'likes' && (<FilterDiv>Likes filter goes here</FilterDiv>)}
          {tab === 'tweets' && (
            allTweets && tweetsIds && (
              tweetsIds.map((id) => {
                return (
                  <div key={id}>
                    <TweetSmall tweet={allTweets[Object.keys(allTweets).find(tweet => tweet === id.toString())]} />
                  </div>
                )
              })
            )
          )}
        </Div>
      </Wrapper>
  )
}

const FilterDiv = styled.div`
  text-align: center;
  margin: 40px 0px 120px;
`;

const Div = styled.div`
  position: relative;
`;
const Placer = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;
  color: gray;
`;

const Bold = styled.span`
  font-weight: bold;
  color: ${COLORS.primary_blue}
`;
const Bio = styled.p`
  padding: 20px 20vw 20px 40px;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
`;
const TagSpan = styled.span`
  background-color: lightgray;
  padding: 5px;
  border-radius: 5px;
  font-size: 1rem;
`;

const HandleName = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 10px 0px;
`;
const FollowHandle = styled.div`
  background-color: ${COLORS.matte_blue};
  width: fit-content;
  padding: 15px 30px;
  border-radius: 200px;
  color: ${COLORS.background}
`;

const Content = styled.div`
  padding: 0 60px;
  position: relative;
  top: -100px;
`;

const AvatarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Avatar = styled.img`
  width: 200px;
  border-radius: 500px;
  border: 5px solid ${COLORS.background};  
`;
const Banner = styled.img`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;