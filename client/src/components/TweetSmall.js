import { styled } from 'styled-components';
import { TweetActions } from './TweetActions';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { FiRepeat } from 'react-icons/fi';
import { COLORS } from '../GlobalStyles';

export const TweetSmall = ({ tweet }) => {
  const navigate = useNavigate();

  const handleClick = (event, to) => {
    event.preventDefault();
    navigate(`/${to}`)
  }

  return (
    tweet && (
      <Section>
        {tweet.retweetFrom && (<div><FiRepeat /> {tweet.author.displayName} Reposted</div>)}
        <Wrapper>
          <div><Avatar src={tweet.author.avatarSrc}></Avatar></div>
          <Content>
            <ContentLink to={`/tweet/${tweet.id}`}>
              <div>
                <HandleDetails onClick={(event) => handleClick(event, tweet.author.handle)}>
                  <SpanBold>{tweet.author.displayName}</SpanBold>

                  <SpanHandler>{` @${tweet.author.handle}`}</SpanHandler>
                </HandleDetails>
                <SpanDate>{` - ${format(new Date(tweet.timestamp), 'MMM do')}`}</SpanDate>
              </div>
              <Status>{tweet.status}</Status>
              {tweet.media.length > 0 && (<Image src={tweet.media[0].url}></Image>)}
            </ContentLink>
            <TweetActions />
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
`;

const Wrapper = styled.div`
  padding-top: 4vh;
  display: flex;
  gap: 4vh;
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
`;

const SpanBold = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const SpanHandler = styled.span`
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${COLORS.primary_blue};
  }
`;

const SpanDate = styled.span`
  color: ${COLORS.primary_text};
`;

const ContentLink = styled(Link)`
  text-decoration: none;
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
  height: 60vh;
  border-radius: 5px;
  object-fit: cover;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 6px ${COLORS.secondary_text}88;
  }
`;