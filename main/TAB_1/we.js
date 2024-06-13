try {
    const response = await fetch('path/to/twitter_media.json'); // 실제 JSON 파일 경로로 변경
    const twitterMediaData = await response.json();

    const cardData = twitterMediaData.map(item => {
        return {
            date: new Date(item.date).toLocaleDateString('ko-KR'),
            link: item.post_link,
            name: '', // JSON에 name 필드가 없으므로 빈 문자열로 설정
            image: item.media_url.split('&')[0] // 추가 파라미터를 제거하여 URL 정리
        };
    });

    const container = document.getElementById('card-container');

    cardData.forEach((data, index) => {
        const card = document.createElement('div');
        card.classList.add(`card-${index + 1}`, 'CARD');

        const image = document.createElement('div');
        image.classList.add('image');
        image.style.backgroundImage = `url(${data.image})`; // 배경 이미지를 동적으로 설정

        const copy = document.createElement('div');
        copy.classList.add('copy');

        const textWrapper = document.createElement('div');
        textWrapper.classList.add('text-wrapper');
        textWrapper.textContent = data.date;

        const link = document.createElement('a');
        link.href = data.link;
        link.target = '_blank';

        const textWrapper2 = document.createElement('div');
        textWrapper2.classList.add('text-wrapper-2');
        textWrapper2.textContent = data.name || 'unknown'; // name이 비어있으면 'unknown'으로 기본값 설정

        link.appendChild(textWrapper2);
        copy.appendChild(textWrapper);
        copy.appendChild(link);
        card.appendChild(image);
        card.appendChild(copy);
        container.appendChild(card);
    });
} catch (error) {
    console.error('Error fetching Twitter media:', error);
}