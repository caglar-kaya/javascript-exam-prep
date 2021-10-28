/**
 * You are building the next big video sharing site that will rival YouTube.
 * It is time to build the search functionality, which means we need a function that gets a list of videos and the search string and then returns the videos based on that search string.
 *
 * The backend developer has said that the videos given will have the following structure:
 * {
 *   id: string,
 *   title: string,
 *   tags: Array of strings
 * }
 *
 * A video should be included in the list if the search string:
 * - is in the title somewhere
 * - OR is in ANY of the tags
 *
 * The search should be case insensitive and can be anywhere in the word as well! 
 * So the search string `program` should match a video with a title that includes `Programming`. 
 * And the search string `gram` should also match the video with the title that includes `Programming`
 */

const findVideos = (videoList = [], search = "") => {
  const searchToLowerCase = search.toLowerCase();
  const filteredVideos = videoList.filter(video => {
    return video.title.toLowerCase().includes(searchToLowerCase)
      ||
      video.tags.map(word => word.toLowerCase()).join('').includes(searchToLowerCase);
  })
  return filteredVideos;
};

/**
 * TEST CODE. DO NOT EDIT
 */
const videos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];

console.assert(findVideos(videos).length === 3);
console.assert(findVideos(videos, "Programming").length === 2);
console.assert(findVideos(videos, "JavaScript").length === 1);
console.assert(findVideos(videos, "Animal").length === 1);
console.assert(findVideos(videos, "beginners").length === 2);
console.assert(findVideos(videos, "begin").length === 3);
console.assert(findVideos([], "Animal").length === 0);
