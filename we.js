const container = document.getElementById('card-container');
let cardData = []; // Initialize empty array


$.getJSON('file:///C:/Users/gocks/OneDrive/%EB%AC%B8%EC%84%9C/GitHub/in_STAR-/main/TAB_1/twitter_media.json', function(data) {
    console.log(data)
    // data.forEach((item, index) => {
    //     let newData = {
    //         date: new Date(item.date).toLocaleDateString(), 
    //         link: item.post_link,
    //         name: '', 
    //         image: item.media_url
    //     };
    //     cardData.push(newData); 

       
    //     const card = document.createElement('div');
    //     card.classList.add(`card-${index + 1}`, 'CARD');

    //     const imageDiv = document.createElement('div');
    //     imageDiv.classList.add('image');
    //     imageDiv.style.backgroundImage = `url(${newData.image})`;

    //     const copy = document.createElement('div');
    //     copy.classList.add('copy');

    //     const textWrapper = document.createElement('div');
    //     textWrapper.classList.add('text-wrapper');
    //     textWrapper.textContent = newData.date;

    //     const link = document.createElement('a');
    //     link.href = newData.link;
    //     link.target = '_blank';

    //     const textWrapper2 = document.createElement('div');
    //     textWrapper2.classList.add('text-wrapper-2');
    //     textWrapper2.textContent = newData.name; 

    //     link.appendChild(textWrapper2);
    //     copy.appendChild(textWrapper);
    //     copy.appendChild(link);
    //     card.appendChild(imageDiv);
    //     card.appendChild(copy);
    //     container.appendChild(card);
    // });
});
