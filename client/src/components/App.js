import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

import { GlobalStyle } from "../GlobalStyles";
import { HomeFeed } from "./HomeFeed";
import { TweetDetails } from "./TweetDetails";
import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";
import { Error } from "./utils/Error";
import { Loading } from "./utils/Loading";

const App = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          {currentUser.status === 'loading' && (<Loading />)}
          {currentUser.status === 'failed' && (<Error />)}
          {currentUser.status === 'idle' && (
            <Routes>
              <Route path="/" element={<HomeFeed />} />
              <Route path="/tweet/:tweetId" element={<TweetDetails />} />
              <Route path="/:profileId" element={<Profile />} />
            </Routes>
          )}
        </Content>
      </Container>
    </BrowserRouter>
  )
};

export default App;

const Content = styled.div`
  flex: 1;
  padding-inline: 4vw;
`;

const Container = styled.div`
  display: flex;
`;