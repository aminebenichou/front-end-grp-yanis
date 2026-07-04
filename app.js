const url = 'https://youtube-v2.p.rapidapi.com/video/recommendations?video_id=c-xOi9FcSqA';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
    'x-rapidapi-host': 'youtube-v2.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};


async function getVideos() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const videos = document.getElementsByClassName("videos")[0]
    var html_videos = ""

    result.videos.forEach((video) => html_videos += `
    <div class="video">
                <img class="thumbnail" src=${video.thumbnails[1].url}
                    alt="">
                <div class="vid-info">
                    <img src="https://yt3.ggpht.com/xJoq2CjGxYMHeNje60pgQpcUaQ1r2Z3DUDNANIUGG-J80kZqfhG_8Z4EFan3yh7t9mhFSp-6=s68-c-k-c0x00ffffff-no-rj"
                        alt="">
                    <div>
                        <p class="vid-title"> ${video.title} </p>
                        <a class="channel-name" href="">${video.author}</a>
                        <div class="vid-stats">
                            <p class="video-views">${video.number_of_views} views</p>
                            <p> ${video.published_time} </p>
                        </div>
                    </div>
                </div>
    </div>
`)

    videos.innerHTML = html_videos
  } catch (error) {
    console.error(error);
  }
}

getVideos()

