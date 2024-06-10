window.addEventListener('DOMContentLoaded', function () {
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    var video = document.getElementById('popup-video');
    video.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    const goButton = document.getElementById('go-button');
    goButton.addEventListener('click', function () {
        var pageNumber = document.getElementById('page-number').value;
        const maxPageNumber = parseInt(document.getElementById('page-number').max, 10);
        if (pageNumber > 0 && pageNumber <= maxPageNumber) {
            window.location.href = `/photo/nmixx?page=${pageNumber}`;
        } else {
            //input 칸 초기화
            document.getElementById('page-number').value = '';
            alert('유효한 숫자를 입력해 주세요.');
        }
    });

});
var scrollPosition = 0;

function alartsistem() {
    setTimeout(function () {
        if (sessionStorage.getItem('alerted') != 'yes') {
            alert("이미지를 누르면 팝업을 종료합니다");
            sessionStorage.setItem('alerted', 'yes');
        }
    }, 200);
}

var xhr;
function showPopup(src) {

    if (xhr) {
        xhr.abort(); // 요청 중단
    }
    var popup = document.getElementById('popup');
    //var img = popup.querySelector('img');
    var img = document.getElementById('popup-image');
    var video = document.getElementById('popup-video');
    var loadingText = document.getElementById('loading-text');
    //var loadingImg = document.getElementById('loading-image');
    var metadataDiv = document.getElementById('metadata');
    var progressBar_out = document.getElementById('progress-bar');
    var progressBar = document.getElementById('progress-bar-inner');
    var loadingText = document.getElementById('loading-text');


    img.style.display = 'none';
    video.style.display = 'none';

    loadingText.style.display = 'block';
    //loadingImg.style.display = 'block';
    progressBar.style.width = "0%";
    loadingText.textContent = '로딩중 0.00%'
    progressBar_out.style.display = 'block';
    progressBar.style.display = 'block';
    popup.style.display = 'flex';
    metadataDiv.style.display = 'none';

    function updateProgressBar(percentComplete) {
        progressBar.style.width = (percentComplete) + '%';
        loadingText.textContent = '로딩중 ' + percentComplete.toFixed(2) + '%';
    }

    xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'blob';

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            var percentComplete = (event.loaded / event.total) * 100;
            updateProgressBar(percentComplete);

        }
    };

    xhr.onload = function () {
        if (this.status === 200) {
            var blob = new Blob([this.response], { type: this.getResponseHeader('Content-Type') });

            if (src.endsWith('.mp4') || src.endsWith('.mkv') || src.endsWith('.avi') || src.endsWith('.mov') || src.endsWith('.webm')) {
                var vidURL = src
                video.src = vidURL;
                progressBar.style.width = "100%";
                metadataDiv.style.display = 'block';
                loadingText.style.display = 'none';
                progressBar_out.style.display = 'none';
                progressBar.style.display = 'none';
                img.style.display = 'none';
                video.style.display = 'block';
                alartsistem()
            } else {
                var imgURL = src
                img.src = imgURL;
                img.onload = function () {
                    progressBar.style.width = "100%";
                    metadataDiv.style.display = 'block';
                    loadingText.style.display = 'none';
                    progressBar_out.style.display = 'none';
                    progressBar.style.display = 'none';
                    img.style.display = 'block';
                    video.style.display = 'none';
                    alartsistem()
                };

            }
        }
    };

    xhr.send();

    // 스크롤 위치 저장 및 본문 고정
    scrollPosition = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollPosition + 'px';

    var ismetadata = "False";

    if (ismetadata == "True") {
        fetch('/photo/nmixx/metadata/' + src.split('/').pop())
            .then(response => response.json())
            .then(metadata => {
                // Clear the metadata div
                metadataDiv.innerHTML = '';

                function formatFNumber(fNumber) {
                    if (fNumber.includes('/')) {
                        var [numerator, denominator] = fNumber.split('/');
                        return 'F' + (parseInt(numerator) / parseInt(denominator)).toFixed(1);
                    } else {
                        return 'F' + fNumber;
                    }
                }

                function formatFocalLength(focalLength) {
                    return focalLength + 'mm';
                }

                function formatExposureTime(ExposureTime) {
                    return ExposureTime + 's';
                }

                var keys = ["Image Model", "EXIF LensModel", "EXIF FNumber", "EXIF ExposureTime", "EXIF ISOSpeedRatings", "EXIF FocalLengthIn35mmFilm", "EXIF DateTimeOriginal", "Image Copyright", "Image Software"];
                var names = ["카메라", "렌즈", "조리개", "셔터스피드", "ISO", "초점 거리", "촬영시간", "저작권", "프로그램"];

                // Add the first two metadata entries to the div in one line
                var p = document.createElement('p');
                for (var i = 0; i < 2; i++) {
                    var key = keys[i];
                    if (key in metadata) {
                        p.textContent += names[i] + ': ' + metadata[key] + ', ';
                    }
                }
                metadataDiv.appendChild(p);

                // Add the next four metadata entries to the div in a new line
                p = document.createElement('p');
                for (var i = 2; i < 6; i++) {
                    var key = keys[i];
                    if (key in metadata) {
                        var value = metadata[key];
                        if (key === 'EXIF FNumber') {
                            value = formatFNumber(value);
                        } else if (key === 'EXIF FocalLengthIn35mmFilm') {
                            value = formatFocalLength(value);
                        } else if (key === 'EXIF ExposureTime') {
                            value = formatExposureTime(value);
                        }
                        p.textContent += names[i] + ': ' + value + ', ';
                    }
                }
                metadataDiv.appendChild(p);

                // Add the seventh metadata entry to the div in a new line
                p = document.createElement('p');
                for (var i = 6; i < 8; i++) {
                    var key = keys[i];
                    if (key in metadata) {
                        p.textContent += names[i] + ': ' + metadata[key] + ', ';
                    }
                }
                metadataDiv.appendChild(p);

                // Add the eighth metadata entry to the div in a new line
                p = document.createElement('p');
                if (keys[8] in metadata) {
                    p.textContent = names[8] + ': ' + metadata[keys[8]];
                }
                metadataDiv.appendChild(p);
            });
    }
}

function hidePopup() {
    if (xhr) {
        xhr.abort(); // 요청 중단
    }
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    var metadataDiv = document.getElementById('metadata');
    metadataDiv.style.display = 'none';

    // 비디오 종료
    var video = document.getElementById('popup-video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    // 본문 고정 해제 및 스크롤 위치 복원
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
}

function scrollToBottom() {
    var bottom = document.getElementById('bottom');
    bottom.scrollIntoView({ behavior: 'smooth' });
}