import { useEffect, useState } from "react";
import { TweetSmall } from "./TweetSmall";
import { InputField } from "./InputField";
import { Loading } from "./utils/Loading";
import { Error } from "./utils/Error";

export const HomeFeed = () => {
  const [tweets, setTweets] = useState(null);
  const [reload, setReload] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/me/home-feed')
      .then(res => res.json())
      .then(data => setTweets({ all: data.tweetsById, sortedIDs: data.tweetIds }))
      .catch(() => setError(true))
  }, [reload]);

  return (
    error
      ? <Error />
      : <>
        <InputField reload={reload} setReload={setReload} />
        {!tweets
          ? <Loading />
          : tweets.sortedIDs.map((id) => {
            return (<TweetSmall key={id} tweet={tweets.all[id]} />)
          })}
      </>)
}
