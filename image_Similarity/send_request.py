import requests

# FastAPI 엔드포인트 URL
url = "http://127.0.0.1:8000/check_image"

# 요청 페이로드 (username과 image_url을 적절히 변경)
payload = {
    "username": "nmixx_official",  # 여기에 실제 인스타그램 사용자 이름을 입력하세요
    "image_url": "https://ibb.co/pWGxZ8W"  # 여기에 실제 이미지 URL을 입력하세요
}

# 요청 헤더
headers = {
    "Content-Type": "application/json",

}

# POST 요청 보내기
response = requests.post(url, json=payload, headers=headers)

# 응답 확인
if response.status_code == 200:
    print(response.json())
else:
    print(f"Request failed with status code {response.status_code}: {response.text}")
