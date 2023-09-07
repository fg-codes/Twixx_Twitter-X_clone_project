const users = {
  JohnDoe: {
    handle: "JohnDoe",
    displayName: "John Doe",
    avatarSrc: "/assets/avatar-JohnDoe.jpg",
    bannerSrc: "/assets/banner-JohnDoe.jpeg",
    location: "Toronto, Canada",
    url: "https://www.johndoe.com",
    joined: "2023-01-10T12:00",
    bio: "Aspiring writer with a passion for technology. 📚🖥️ Exploring the fusion of storytelling and tech's endless possibilities.",
    followingIds: ["AliceSmith", "TechGuru123", "FoodieLover", "TravelExplorer", "FitnessFanatic"],
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
    joined: "2023-01-11T12:00",
    bio: "Nature lover and adventurer. 🌿🌄",
    followingIds: ["JohnDoe", "TechGuru123", "FitnessFanatic"],
    followerIds: ["JohnDoe", "TechGuru123", "TravelExplorer", "FoodieLover"],
    likeIds: ["1209791721099411456"],
  },

  TechGuru123: {
    handle: "TechGuru123",
    displayName: "Christopher Ferguson 2000",
    avatarSrc: "/assets/avatar-TechGuru123.jpg",
    bannerSrc: "/assets/banner-TechGuru123.jpeg",
    location: "Tokyo, Japan",
    url: "https://www.techgurureviews.com",
    joined: "2023-01-12T18:00",
    bio: "Sharing the latest in tech trends and gadgets. 💻📱",
    followingIds: ["AliceSmith", "FoodieLover", "TravelExplorer", "FitnessFanatic"],
    followerIds: ["JohnDoe", "AliceSmith"],
    likeIds: [],
  },

  FoodieLover: {
    handle: "FoodieLover",
    displayName: "Angelina Marcantognini",
    avatarSrc: "/assets/avatar-FoodieLover.jpg",
    bannerSrc: "/assets/banner-FoodieLover.jpeg",
    location: "Nashville, USA",
    url: "https://www.foodieadventures.com",
    joined: "2023-01-13T18:00",
    bio: "Exploring the world one meal at a time. 🍔🍕",
    followingIds: ["JohnDoe", "TravelExplorer", "FitnessFanatic", "FoodieLover"],
    followerIds: ["JohnDoe", "TechGuru123", "TravelExplorer"],
    likeIds: [],
  },

  TravelExplorer: {
    handle: "TravelExplorer",
    displayName: "Michael Telford",
    avatarSrc: "/assets/avatar-TravelExplorer.jpg",
    bannerSrc: "/assets/banner-TravelExplorer.jpeg",
    location: "Sydney, Australia",
    url: "https://www.traveltheworldwithme.com",
    joined: "2023-01-14T18:00",
    bio: "Roaming the globe and sharing travel tales. 🌍✈️",
    followingIds: ["AliceSmith", "FoodieLover", "FitnessFanatic"],
    followerIds: ["JohnDoe", "TechGuru123", "FoodieLover", "FitnessFanatic"],
    likeIds: [],
  },

  FitnessFanatic: {
    handle: "FitnessFanatic",
    displayName: "Kevin Simmons",
    avatarSrc: "/assets/avatar-FitnessFanatic.jpg",
    bannerSrc: "/assets/banner-FitnessFanatic.png",
    location: "San Francisco, USA",
    url: "https://www.fitnessjourney.com",
    joined: "2023-01-15T18:00",
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
    timestamp: "2023-02-10T09:14:00+00:00",
    sortedTimestamp: "2023-02-10T09:14:00+00:00",
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
    timestamp: "2023-04-17T09:14:00+00:00",
    sortedTimestamp: "2023-04-17T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "I loved my time at the reader group meeting, and meeting Alexander Radulov was an unexpected delight. A perfect blend of literature and sports!",
    media: [],
  },

  // AliceSmith
  "3911391382148489": {
    id: "3911391382148489",
    authorHandle: "AliceSmith",
    timestamp: "2023-03-01T09:14:00+00:00",
    sortedTimestamp: "2023-03-01T09:14:00+00:00",
    likedBy: ["TechGuru123", "TravelExplorer"],
    retweetedBy: [],
    status:
      "I embarked on a two-night trek through the stunning Chinese mountains, immersing myself in rugged terrain and breathtaking scenery. It was an adventure that truly touched my heart! ❤️❤️",
    media: [
      {
        type: "img",
        url: "/assets/3911391382148489.jpeg",
      },
    ],
  },
  "1215324598067245": {
    id: "1215324598067245",
    authorHandle: "AliceSmith",
    timestamp: "2023-04-05T09:14:00+00:00",
    sortedTimestamp: "2023-04-05T09:14:00+00:00",
    likedBy: ["JohnDoe"],
    retweetedBy: ["FoodieLover"],
    status:
      "At Rachel Claire boutique, I stumbled upon an exquisite collection of bath products and perfume, each a fragrant masterpiece. It was a delightful discovery.",
    media: [],
  },

  // TechGuru123
  "6710219229755186": {
    id: "6710219229755186",
    authorHandle: "TechGuru123",
    timestamp: "2023-05-15T09:14:00+00:00",
    sortedTimestamp: "2023-05-15T09:14:00+00:00",
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
  "2392375331521837r1": {
    id: "2392375331521837r1",
    authorHandle: "TechGuru123",
    timestamp: "2023-05-19T09:14:00+00:00",
    sortedTimestamp: "2023-05-19T09:14:00+00:00",
    retweetOf: "2392375331521837",
    likedBy: [],
    retweetedBy: [],
  },

  // FoodieLover
  "2392375331521837": {
    id: "2392375331521837",
    authorHandle: "FoodieLover",
    timestamp: "2023-04-28T09:14:00+00:00",
    sortedTimestamp: "2023-04-28T09:14:00+00:00",
    likedBy: [],
    retweetedBy: ["TechGuru123"],
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
    timestamp: "2023-04-21T09:14:00+00:00",
    sortedTimestamp: "2023-04-21T09:14:00+00:00",
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
    timestamp: "2023-03-05T09:14:00+00:00",
    sortedTimestamp: "2023-03-05T09:14:00+00:00",
    likedBy: ["TechGuru123"],
    retweetedBy: [],
    status:
      "OMG I was making breakfast, and when I popped my toast out of the toaster, it had this PERFECT cat shape on it! 😻🙌 It's like my breakfast is trying to tell me something...maybe I should adopt a kitty? 🤔❤️",
    media: [
      {
        type: "img",
        url: "/assets/6661005865559667.png",
      },
    ],
  },
  "1215324598067245r1": {
    id: "1215324598067245r1",
    authorHandle: "FoodieLover",
    timestamp: "2023-05-17T09:14:00+00:00",
    sortedTimestamp: "2023-05-17T09:14:00+00:00",
    retweetOf: "1215324598067245",
    likedBy: [],
    retweetedBy: [],
  },

  // TravelExplorer
  "2577516047780438": {
    id: "2577516047780438",
    authorHandle: "TravelExplorer",
    timestamp: "2023-06-14T09:14:00+00:00",
    sortedTimestamp: "2023-06-14T09:14:00+00:00",
    likedBy: ["TechGuru123", "AliceSmith"],
    retweetedBy: [],
    status:
    "My life is a jet-set dream. From exotic destinations to luxury accommodations, I've perfected the art of living life to the fullest. Travel isn't a pastime; it's a statement, and I'm the master of the game. Stay tuned for my next conquest! ✈️🌍🏨 #Jetsetter #LivingLarge",
    media: [
      {
        type: "img",
        url: "/assets/2577516047780438.jpeg",
      },
    ],
  },

  // FitnessFanatic
  "3341929402841045": {
    id: "3341929402841045",
    authorHandle: "FitnessFanatic",
    timestamp: "2023-02-22T09:14:00+00:00",
    sortedTimestamp: "2023-02-22T09:14:00+00:00",
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
};

module.exports = {
  users,
  tweets,
};
