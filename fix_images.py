import os
import urllib.request
import shutil

img_dir = 'public/assets/img'
gym_images_urls = [
    'https://loremflickr.com/800/800/gym,fitness?random=1',
    'https://loremflickr.com/800/800/gym,fitness?random=2',
    'https://loremflickr.com/800/800/gym,fitness?random=3',
    'https://loremflickr.com/800/800/gym,fitness?random=4',
    'https://loremflickr.com/800/800/gym,fitness?random=5',
    'https://loremflickr.com/800/800/gym,fitness?random=6',
    'https://loremflickr.com/800/800/gym,fitness?random=7',
    'https://loremflickr.com/800/800/gym,fitness?random=8',
    'https://loremflickr.com/800/800/gym,fitness?random=9',
    'https://loremflickr.com/800/800/gym,fitness?random=10'
]

local_gym_images = []
print("Downloading gym images...")
for i, url in enumerate(gym_images_urls):
    local_path = f'gym_placeholder_{i}.jpg'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
        shutil.copyfileobj(response, out_file)
    local_gym_images.append(local_path)

print("Replacing old images...")
img_idx = 0
for root, dirs, files in os.walk(img_dir):
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            filepath = os.path.join(root, file)
            src_img = local_gym_images[img_idx % len(local_gym_images)]
            img_idx += 1
            shutil.copy2(src_img, filepath)

for img in local_gym_images:
    os.remove(img)

print(f"Done! Replaced {img_idx} images with gym content.")
