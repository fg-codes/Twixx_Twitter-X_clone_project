import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../GlobalStyles";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { TweetSmall } from "./TweetSmall";
import { Loading } from "./utils/Loading";
import { format } from 'date-fns';
import { Tabulate } from "./Tabulate";

export const Profile = () => {
  const { profileId } = useParams();
  const currentUser = useContext(CurrentUserContext)
  const [handle, setHandle] = useState(null);
  const [allTweets, setAllTweets] = useState(null);
  const [allLikes, setAllLikes] = useState(null);
  const [tweetsIds, setTweetsIds] = useState(null);
  const [tab, setTab] = useState('tweets');

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then(res => res.json())
      .then(data => {
        setAllTweets(data.tweetsById);
        setTweetsIds(data.tweetIds);
        setAllLikes(data.likes);
      })
      .catch(error => console.log(error))

    fetch(`/api/${profileId}/profile`)
      .then(res => res.json())
      .then(data => {
        setHandle(data.profile);
        window.scrollTo(0, 0);
      })
      .catch(error => console.log(error))
    return () => {
      setTab('tweets');
      setHandle(null);
      setAllTweets(null);
      setAllLikes(null);
    }
  }, [profileId]);

  return (
    !handle
      ? <Loading />
      : <Section>
        <BioSection>
          <Banner src={handle.bannerSrc}></Banner>

          <AvatarContainer>
            <Avatar src={handle.avatarSrc}></Avatar>
            {currentUser.currentuser.handle !== handle.handle &&
              <TagSpan>
                <Tag>{handle.isBeingFollowedByYou ? "Following" : "Follow!"}</Tag>
                <Tag>{handle.isFollowingYou ? 'Follows you' : "Does not follow you"}</Tag>
              </TagSpan>}
          </AvatarContainer>

          <BioContainer>
            <HandleName>{handle.displayName}</HandleName>
            {`@${handle.handle}`}
            <Bio>{handle.bio}</Bio>
          </BioContainer>

          <Placer>
            <div>{handle.location && (<><FiMapPin /> {handle.location}</>)}</div>
            <div><FiCalendar /> {format(new Date(handle.joined), 'LLLL yyyy')}</div>
          </Placer>

          <Placer>
            <div><Bold>{handle.numFollowing}</Bold> Following</div>
            <div><Bold>{handle.numFollowers}</Bold> Followers</div>
          </Placer>

          <Tabulate tab={tab} setTab={setTab} />
        </BioSection>
        {tab === 'tweets' && (
          allTweets && tweetsIds && (
            tweetsIds.map((id) => {
              return <TweetSmall key={id} tweet={allTweets[Object.keys(allTweets).find(tweet => tweet === id.toString())]} />
            })
          )
        )}
        {tab === 'media' && (
          allTweets && tweetsIds && (
            tweetsIds.map((id) => {
              return allTweets[Object.keys(allTweets).find(tweet => tweet === id.toString())].media.length > 0
                ? <TweetSmall key={id} tweet={allTweets[Object.keys(allTweets).find(tweet => tweet === id.toString())]} />
                : null
            })
          )
        )}
        {tab === 'likes' && (
          allLikes && (
            allLikes.map((tweet) => {
              return <TweetSmall key={tweet.id} tweet={tweet} />
            })
          )
        )}
      </Section>
  )
}

const BioSection = styled.div`
  background-color: ${COLORS.card};
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 8vh;
  align-items: flex-end;
  margin-top: -100px;
`;

const BioContainer = styled.div`
  padding: 4vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TagSpan = styled.span`
  font-size: 14px;
  display: flex;
  gap: 15px;
`;

const Tag = styled.div`
  background-color: ${COLORS.hover};
  color: ${COLORS.secondary_text};
  padding: 10px 20px;
  border-radius: 5px;
`;

const HandleName = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 20px 0px 10px;
  color: ${COLORS.primary_text};
`;

const Placer = styled.div`
  padding: 0 0 2vh 4vh;
  display: flex;
  gap: 4vh;
  color: gray;
`;

const Bold = styled.span`
  font-weight: bold;
  color: ${COLORS.primary_blue}
`;
const Bio = styled.p`
  padding: 4vh;
  color: ${COLORS.secondary_text};
  font-style: italic;
  line-height: 22px;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${COLORS.card};  
`;


