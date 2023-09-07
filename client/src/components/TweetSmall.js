import { styled } from "styled-components";
import { TweetActions } from "./TweetActions";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { FiRepeat } from "react-icons/fi";
import { COLORS } from "../GlobalStyles";

export const TweetSmall = ({ tweet }) => {
  const navigate = useNavigate();

  const handleClick = (event, to) => {      // onClick on a div is required, as the WS asks, since we can't nest a <a> inside a <a>
    event.preventDefault();
    navigate(`/${to}`)
  }

  return (
    tweet && (
      <Section>
        {tweet.retweetFrom && (<div><FiRepeat /> {tweet.author.displayName} Remoewed</div>)}
        <Wrapper>
          <div><Avatar src={tweet.author.avatarSrc}></Avatar></div>
          <Content>
            <ContentLink to={`/tweet/${tweet.id}`}>
              <div>
                <HandleDetails onClick={(event) => handleClick(event, tweet.author.handle)}>
                  <SpanBold>{tweet.author.displayName}</SpanBold>
                  <Span>{` @${tweet.author.handle}`}</Span>
                </HandleDetails>
                {` - ${format(new Date(tweet.timestamp), 'MMM do')}`}
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

const Span = styled.span`
  transition: all 200ms ease-in-out;
  font-size: 1.1rem;
  &:hover {
    color: ${COLORS.matte_blue};
  }
`;

const SpanBold = styled(Span)`
  font-weight: 600;
`;

const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 80px;
  border-radius: 50px;
`;
const ContentLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const HandleDetails = styled.div`
  display: inline-block;
`;

const Content = styled.div`
  width: 100%;
`;

const Status = styled.p`
  padding: 20px 20px 20px 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  border-radius: 20px;
  object-fit: fill;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translate(0, -2px);
    box-shadow: 4px 4px 12px gray;
  }
`;