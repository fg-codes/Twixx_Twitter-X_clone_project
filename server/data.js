const users = {
  JohnDoe: {
    handle: "JohnDoe",
    displayName: "John Doe",
    avatarSrc: "/assets/avatar-JohnDoe.jpg",
    bannerSrc: "/assets/banner-JohnDoe.jpeg",
    location: "Toronto, Canada",
    url: "https://www.johndoe.com",
    joined: "2022-02-02T12:00",
    bio: "Aspiring writer with a passion for technology. 📚🖥️ Exploring the fusion of storytelling and tech's endless possibilities.",
    followingIds: ["AliceSmith", "TechGuru123", "FoodieLover", "TravelExplorer"],
    followerIds: ["AliceSmith", "FoodieLover"],
    likeIds: ["1212689921057665024"],
  },

  AliceSmith: {
    handle: "AliceSmith",
    displayName: "Alice Smith",
    avatarSrc: "/assets/avatar-AliceSmith.jpg",
    bannerSrc: "/assets/banner-AliceSmith.jpeg",
    location: "Los Angeles, USA",
    url: "https://www.alicesmithblog.com",
    joined: "2022-03-03T12:00",
    bio: "Nature lover and adventurer. 🌿🌄",
    followingIds: ["JohnDoe", "TechGuru123", "FitnessFanatic"],
    followerIds: ["JohnDoe", "TechGuru123", "TravelExplorer", "FoodieLover"],
    likeIds: ["1209791721099411456"],
  },

  TechGuru123: {
    handle: "TechGuru123",
    displayName: "Tech Guru 2000",
    avatarSrc: "/assets/avatar-TechGuru123.jpg",
    bannerSrc: "/assets/banner-TechGuru123.jpeg",
    location: "Tokyo, Japan",
    url: "https://www.techgurureviews.com",
    joined: "2022-04-04T18:00",
    bio: "Sharing the latest in tech trends and gadgets. 💻📱",
    followingIds: ["AliceSmith", "FoodieLover", "TravelExplorer", "FitnessFanatic"],
    followerIds: ["JohnDoe", "AliceSmith"],
    likeIds: [],
  },

  FoodieLover: {
    handle: "FoodieLover",
    displayName: "Maddie aka Foodie Lover",
    avatarSrc: "/assets/avatar-FoodieLover.jpg",
    bannerSrc: "/assets/banner-FoodieLover.jpeg",
    location: "Nashville, USA",
    url: "https://www.foodieadventures.com",
    joined: "2022-05-05T18:00",
    bio: "Exploring the world one meal at a time. 🍔🍕",
    followingIds: ["JohnDoe", "TravelExplorer", "FitnessFanatic", "FoodieLover"],
    followerIds: ["JohnDoe", "TechGuru123", "TravelExplorer"],
    likeIds: [],
  },

  TravelExplorer: {
    handle: "TravelExplorer",
    displayName: "Travel Explorer",
    avatarSrc: "/assets/avatar-TravelExplorer.jpg",
    bannerSrc: "/assets/banner-TravelExplorer.jpeg",
    location: "Sydney, Australia",
    url: "https://www.traveltheworldwithme.com",
    joined: "2022-06-06T18:00",
    bio: "Roaming the globe and sharing travel tales. 🌍✈️",
    followingIds: ["AliceSmith", "FoodieLover", "FitnessFanatic"],
    followerIds: ["JohnDoe", "TechGuru123", "FoodieLover", "FitnessFanatic"],
    likeIds: [],
  },

  FitnessFanatic: {
    handle: "FitnessFanatic",
    displayName: "Fitness Fanatic",
    avatarSrc: "/assets/avatar-FitnessFanatic.jpg",
    bannerSrc: "/assets/banner-FitnessFanatic.png",
    location: "San Francisco, USA",
    url: "https://www.fitnessjourney.com",
    joined: "2022-07-07T18:00",
    bio: "Living a healthy and active lifestyle. 💪🏋️",
    followingIds: ["TravelExplorer"],
    followerIds: ["AliceSmith", "TechGuru123", "FoodieLover", "TravelExplorer"],
    likeIds: [],
  },
};

const tweets = {
  // JohnDoe
  "9325965937879404": {
    id: "9325965937879404",
    authorHandle: "JohnDoe",
    timestamp: "2022-03-13T09:14:00+00:00",
    sortedTimestamp: "2022-03-13T09:14:00+00:00",
    likedBy: ["FoodieLover"],
    retweetedBy: [],
    status:
      "C.S. Lewis's Chronicles of Narnia whisked me away to a magical world, filled with unforgettable adventures and cherished characters.It was an enchanting reading journey that I'll always hold close to my heart. 📚✨ #NarniaMagic",
    media: [
      {
        type: "img",
        url: "/assets/9325965937879404.jpeg",
      },
    ],
  },
  "6449055778308144": {
    id: "6449055778308144",
    authorHandle: "JohnDoe",
    timestamp: "2022-03-14T09:14:00+00:00",
    sortedTimestamp: "2022-03-14T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "I loved my time at the reader group meeting, and meeting Alexander Radulov was an unexpected delight. A perfect blend of literature and sports!",
    media: [],
  },
  "8192327576064052r1": {
    id: "8192327576064052r1",
    authorHandle: "JohnDoe",
    timestamp: "2023-02-20T09:14:00+00:00",
    sortedTimestamp: "2023-02-20T09:14:00+00:00",
    retweetOf: "8192327576064052",
    likedBy: [],
    retweetedBy: [],
  },

  // AliceSmith
  "3911391382148489": {
    id: "3911391382148489",
    authorHandle: "AliceSmith",
    timestamp: "2022-04-14T09:14:00+00:00",
    sortedTimestamp: "2022-04-14T09:14:00+00:00",
    likedBy: ["TechGuru123", "TravelExplorer"],
    retweetedBy: ["TravelExplorer"],
    status:
      "I embarked on a two-night trek through the stunning Chinese mountains, immersing myself in rugged terrain and breathtaking scenery. It was an adventure that truly touched my heart! ❤️❤️",
    media: [
      {
        type: "img",
        url: "/assets/3911391382148489.jpeg",
      },
    ],
  },
  "8192327576064052": {
    id: "8192327576064052",
    authorHandle: "AliceSmith",
    timestamp: "2022-04-15T09:14:00+00:00",
    sortedTimestamp: "2022-04-15T09:14:00+00:00",
    likedBy: ["JohnDoe"],
    retweetedBy: ["JohnDoe", "FoodieLover"],
    status:
      "At Rachel Claire boutique, I stumbled upon an exquisite collection of bath products and perfume, each a fragrant masterpiece. It was a delightful discovery.",
    media: [],
  },

  // TechGuru123
  "6710219229755186": {
    id: "6710219229755186",
    authorHandle: "TechGuru123",
    timestamp: "2022-05-15T09:14:00+00:00",
    sortedTimestamp: "2022-05-15T09:14:00+00:00",
    likedBy: ["JohnDoe"],
    retweetedBy: [],
    status:
      "Spent an awesome day playing around with my new toy: a drone! 🚁 So much fun capturing the world from a whole new perspective!",
    media: [
      {
        type: "img",
        url: "/assets/6710219229755186.png",
      },
    ],
  },
  "6661005865559667r1": {
    id: "6661005865559667r1",
    authorHandle: "TechGuru123",
    timestamp: "2023-03-13T09:14:00+00:00",
    sortedTimestamp: "2023-03-13T09:14:00+00:00",
    retweetOf: "6661005865559667",
    likedBy: [],
    retweetedBy: [],
  },

  // FoodieLover
  "2392375331521837": {
    id: "2392375331521837",
    authorHandle: "FoodieLover",
    timestamp: "2022-06-16T09:14:00+00:00",
    sortedTimestamp: "2022-06-16T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "Tacos Tuesday fiesta at the Tiki Bar! 🌮🎉",
    media: [
      {
        type: "img",
        url: "/assets/2392375331521837.jpeg",
      },
    ],
  },
  "0574698479845977": {
    id: "0574698479845977",
    authorHandle: "FoodieLover",
    timestamp: "2022-07-17T09:14:00+00:00",
    sortedTimestamp: "2022-07-17T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "Yet so simple but sooo yummy!!",
    media: [
      {
        type: "img",
        url: "/assets/0574698479845977.png",
      },
    ],
  },
  "6661005865559667": {
    id: "6661005865559667",
    authorHandle: "FoodieLover",
    timestamp: "2022-08-18T09:14:00+00:00",
    sortedTimestamp: "2022-08-18T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "I was making breakfast, and when I popped my toast out of the toaster, it had this PERFECT cat shape on it! 😻🙌 It's like my breakfast is trying to tell me something...maybe I should adopt a kitty? 🤔❤️",
    media: [
      {
        type: "img",
        url: "/assets/6661005865559667.png",
      },
    ],
  },
  "8192327576064052r2": {
    id: "8192327576064052r2",
    authorHandle: "FoodieLover",
    timestamp: "2023-05-15T09:14:00+00:00",
    sortedTimestamp: "2023-05-15T09:14:00+00:00",
    retweetOf: "8192327576064052",
    likedBy: [],
    retweetedBy: [],
  },

  // TravelExplorer
  "2577516047780438": {
    id: "2577516047780438",
    authorHandle: "TravelExplorer",
    timestamp: "2022-11-21T09:14:00+00:00",
    sortedTimestamp: "2022-11-21T09:14:00+00:00",
    likedBy: [],
    retweetedBy: ["FitnessFanatic"],
    status:
    "My life is a jet-set dream. From exotic destinations to luxury accommodations, I've perfected the art of living life to the fullest. Travel isn't a pastime; it's a statement, and I'm the master of the game. Stay tuned for my next conquest! ✈️🌍🏨 #Jetsetter #LivingLarge",
    media: [
      {
        type: "img",
        url: "/assets/2577516047780438.jpeg",
      },
    ],
  },
  "3911391382148489r1": {
    id: "3911391382148489r1",
    authorHandle: "TravelExplorer",
    timestamp: "2023-08-11T09:14:00+00:00",
    sortedTimestamp: "2023-08-11T09:14:00+00:00",
    retweetOf: "3911391382148489",
    likedBy: [],
    retweetedBy: [],
  },

  // FitnessFanatic
  "3341929402841045": {
    id: "3341929402841045",
    authorHandle: "FitnessFanatic",
    timestamp: "2022-12-21T09:14:00+00:00",
    sortedTimestamp: "2022-12-21T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "My buddy Correy is in the zone, heating up for his CrossFit competition. 🔥💪 Let's see him crush those goals!",
    media: [
      {
        type: "img",
        url: "/assets/3341929402841045.png",
      },
    ],
  },
  "2577516047780438r1": {
    id: "2577516047780438r1",
    authorHandle: "FitnessFanatic",
    timestamp: "2023-09-09T09:14:00+00:00",
    sortedTimestamp: "2023-09-09T09:14:00+00:00",
    retweetOf: "2577516047780438",
    likedBy: [],
    retweetedBy: [],
  },
};

module.exports = {
  users,
  tweets,
};
