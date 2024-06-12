from fastapi import FastAPI, HTTPException, Header
from pydantic import BaseModel
from typing import List
import instaloader
from PIL import Image
import requests
from io import BytesIO
from skimage.metrics import structural_similarity as ssim
import numpy as np

app = FastAPI()


class CheckImageRequest(BaseModel):
    username: str
    image_url: str


def download_image(url: str) -> Image.Image:
    response = requests.get(url)
    if response.status_code != 200:
        raise ValueError("Image could not be downloaded.")
    return Image.open(BytesIO(response.content))


def get_instagram_images(username: str) -> List[str]:
    loader = instaloader.Instaloader()
    profile = instaloader.Profile.from_username(loader.context, username)
    images = []
    for post in profile.get_posts():
        images.append(post.url)
    return images


def is_image_similar(target_image: Image.Image, post_image: Image.Image, threshold: float = 0.8) -> bool:
    target_image = target_image.resize((256, 256)).convert('L')
    post_image = post_image.resize((256, 256)).convert('L')
    target_array = np.array(target_image)
    post_array = np.array(post_image)
    similarity_index = ssim(target_array, post_array)
    return similarity_index > threshold


@app.post("/check_image")
async def check_image(request: CheckImageRequest):
    print(request)

    try:
        target_image = download_image(request.image_url)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    try:
        posts = get_instagram_images(request.username)
    except instaloader.exceptions.ProfileNotExistsException:
        raise HTTPException(status_code=404, detail="Instagram profile not found.")

    for post_url in posts:
        try:
            post_image = download_image(post_url)
            if is_image_similar(target_image, post_image):
                return {"found": True}
        except ValueError:
            continue

    return {"found": False}
