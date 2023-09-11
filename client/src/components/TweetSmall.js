import { styled } from 'styled-components';
import { TweetActions } from './TweetActions';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { FiRepeat } from 'react-icons/fi';
import { COLORS } from '../GlobalStyles';

export const TweetSmall = ({ tweet }) => {
  const navigate = useNavigate();

  const handleClick = (event, to) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(to);
  }

  return (
    tweet && (
      <Section onClick={(e) => handleClick(e, `/tweet/${tweet.id}`)}>
        {tweet.retweetFrom && (<div><FiRepeat /> {tweet.retweetFrom.displayName} Reposted</div>)}
        <Wrapper>
          <div><Avatar onClick={(e) => handleClick(e, `/${tweet.author.handle}`)} src={tweet.author.avatarSrc}></Avatar></div>
          <Content>
            <div>

              <HandleDetails onClick={(e) => handleClick(e, `/${tweet.author.handle}`)}>
                <SpanBold>{tweet.author.displayName}</SpanBold>
                <SpanHandler>{` @${tweet.author.handle}`}</SpanHandler>
              </HandleDetails>

              <SpanDate>{` - ${format(new Date(tweet.timestamp), 'MMM do')}`}</SpanDate>
            </div>

            <Status>{tweet.status}</Status>

            {tweet.media.length > 0 && (<Image src={tweet.media[0].url}></Image>)}
            <TweetActions retweets={tweet.numRetweets} likes={tweet.numLikes} />
          </Content>
        </Wrapper>
      </Section>
    )
  )
}
const Section = styled.section`
  margin-top: 4vh;
  background-color: ${COLORS.card};
  border-radius: 5px;
  padding: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  padding-top: 4vh;
  display: flex;
  gap: 4vh;
  transition: all 200ms ease-in-out;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: brightness(60%);
  }
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
`;

const SpanBold = styled.span`
  font-weight: 600;
  font-size: 16px;
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${COLORS.primary_blue};
  }
`;

const SpanHandler = styled.span`
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${COLORS.primary_blue};
  }
`;

const SpanDate = styled.span`
  color: ${COLORS.primary_text};
  &:hover {
    cursor: default;
  }
`;

const HandleDetails = styled.div`
  display: inline-block;
  color: ${COLORS.primary_text};
`;

const Status = styled.p`
  padding: 2vh;
  color: ${COLORS.secondary_text};
  font-style: italic;
  line-height: 22px;
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  object-fit: cover;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 6px ${COLORS.secondary_text}88;
  }
`;