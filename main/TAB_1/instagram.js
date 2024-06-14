const cardData = [
    {
        "name": "한국➡일본 이륙합니다✈ 항공 승무원 알바ㅣ워크돌ㅣ엔믹스 해원",
        "image": "https://i.ytimg.com/vi/i3rrSbYhPnY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAeQA2LWcjttXnwOuK5FQBBa8RvEA",
    },
    {
        "name": "[K-WAVE CONCERT 4K] 엔믹스 지우 'DASH' (NMIXX JIWOO FanCam) │@SBS Inkigayo 240609",
        "image": "https://i.ytimg.com/vi/guYNQU3qZCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA0PwdlJL7CSMwxm25usru8S--UJA",
    }


];

// https://www.youtube.com/watch?v=&list=PLJGupZvqQHAsIBaJvC4LrafCsQub4Qfw1&index=5
// https://www.youtube.com/watch?v=1UWU_NI6vio&list=PLJGupZvqQHAsIBaJvC4LrafCsQub4Qfw1&index=7

const container = document.getElementById('card-container');

cardData.forEach((data, index) => {
    const card = document.createElement('div');
    card.classList.add(`card-${index + 1}`, 'CARD');

    const image = document.createElement('div');
    image.classList.add('image');
    image.style.backgroundImage = `url(${data.image})`; // Set background image dynamically

    const copy = document.createElement('div');
    copy.classList.add('copy');

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');
    textWrapper.textContent = data.date;

    const link = document.createElement('a');
    link.href = (`https://www.youtube.com/watch?v=i3rrSbYhPnY&list=PLJGupZvqQHAsIBaJvC4LrafCsQub4Qfw1&index=${index}`);
    link.target = '_blank';

    const textWrapper2 = document.createElement('div');
    textWrapper2.classList.add('text-wrapper-2');
    textWrapper2.textContent = '바로가기';

    link.appendChild(textWrapper2);
    copy.appendChild(textWrapper);
    copy.appendChild(link);
    card.appendChild(image);
    card.appendChild(copy);
    container.appendChild(card);
});


