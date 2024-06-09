const cardData = [
    { date: "23.12.16", link: 'https://www.instagram.com/p/C06AuxzLlld/',name: '쇼! 음악중심', image:'https://pbs.twimg.com/media/GG8aEQLawAAKsmU?format=jpg', video: 'https://www.youtube.com/watch?v=PC2Nfmu0t80'},
    { date: "00.00.00", link: 'https://x/',name: '쇼! 음악중심', image:'https://pbs.twimg.com/media/?format=jpg', video: 'https://www.youtube.com/'},

];

const container = document.getElementById('card-container');

cardData.forEach((data, index) => {
    //카드 생성
    const card = document.createElement('div');
    card.classList.add(`card-${index + 1}`, 'CARD');

    //이미지 추가 및 넣기
    const image = document.createElement('div');
    image.classList.add('image');
    image.style.backgroundImage = `url(${data.image})`; 

    const copy = document.createElement('div');
    copy.classList.add('copy');

    //날짜
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');
    textWrapper.textContent = data.date;

    //프로그램 이름
    const textWrapper2 = document.createElement('div');
    textWrapper2.classList.add('text-wrapper-2');
    textWrapper2.textContent = data.name;

    //link 추가 및 넣기
    const link = document.createElement('a');
    link.href = data.link;
    link.target = '_blank';

    //video
    const video = document.createElement('a');
    video.href = data.video;
    video.target = '_blank';


    link.appendChild(textWrapper);
    video.appendChild(textWrapper2)
    copy.appendChild(video)
    copy.appendChild(link);
    card.appendChild(image);
    card.appendChild(copy);
    container.appendChild(card);
});
