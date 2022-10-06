const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDomKTwMIX0U_cMQzUweggQ&part=snippet%2Cid&order=date&maxResults=50';

const content  = null || document.getElementById('content');

const youtubeURL = 'https://www.youtube.com/watch?v=';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3a27cc1c7msh3f7743c18447bcfp1d90f7jsndb3eff939272',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        // videos.map(video => console.log(video))
        // console.log('${video.id.videoId}')
        let view = `
        ${videos.items.map(video =>
            `
            <div class="group relative cursor-pointer" onclick="window.open('https://www.youtube.com/watch?v=${video.id.videoId}')">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                <p class="hidden">${video.id.videoId}</p>
                </div>
            </div>
        `).slice(0,50).join('')}
        `;
        content.innerHTML = view;
       
        content.addEventListener('click', () => {

        })
    } catch (error) {
        console.log(error);
    }
})();
