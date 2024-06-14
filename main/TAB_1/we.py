import time, json
from selenium import webdriver
from selenium.webdriver.common.by import By # 요소 찾는거 도와주는거   ex) By.id, By.CSS_SELECTOR
from selenium.webdriver.common.keys import Keys

# Chrome 드라이버 초기화
driver = webdriver.Chrome()

# Twitter 미디어 페이지 열기
driver.get('https://x.com/NMIXX_official/media')
time.sleep(5)  # 페이지 로드 대기

post_cnt_str = driver.find_elements(By.XPATH, '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[1]/div[1]/div/div/div/div/div/div[2]/div/div')
#post_cnt = int(post_cnt_str[-1].text[:3])
# 더 많은 미디어를 로드하기 위해 스크롤하기
def scroll_down():
    driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.END) # 페이지 끝까지 내리기
    time.sleep(0.8)  # 속도 조절

# 데이터 수집
media_data = []

while True:
    # 모든 미디어 게시물 찾기
    articles = driver.find_elements(By.TAG_NAME, 'article')
    for article in articles:
        try:
            # XPATH라고 형식이 하나 있음
            
            # 트윗의 날짜 가져오기
            date_element = article.find_element(By.XPATH, './/time')
            date = date_element.get_attribute('datetime')

            # 트윗 링크 가져오기 
            link_element = article.find_element(By.XPATH, './/a[contains(@href, "/status/")]')
            post_link = link_element.get_attribute('href')

            # 미디어 URL 가져오기
            media_elements = article.find_elements(By.XPATH, './/img[contains(@src, "twimg.com/media/")]')

            name = 'meber'

            # 정리
            for media_element in media_elements:
                media_url = media_element.get_attribute('src')
                media_data.append({
                    'date': date,
                    'image': media_url,
                    'link': post_link,
                    'name': name
                })
        except :
            print(f"게시물 처리 중 오류 발생, 속도를 줄여보는거 추천")


    scroll_down()

    # 종료 조건 확인 
    if len(media_data) >= 100: 
        break

# 브라우저 닫기
driver.quit()

# 수집한 데이터를 JSON 파일로 저장
with open('twitter_media_official.json', 'w') as f:
    json.dump(media_data, f, indent=4)

print(f"{len(media_data)}개의 미디어 항목을 twitter_media_official.json 파일로 저장했습니다.")
