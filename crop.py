from PIL import Image
import os

images = {
    "list1": ["music1", "student_affairs", "sports1", "japan", "finance", "music2"],
    "list2": ["music3", "music4", "coursera", "ecell", "skribble", "debate1", "debate2"],
    "list3": ["lit", "cultural1", "sports2", "debate3", "pavan2", "cultural2"]
}

# The avatar size is approx 40x40.
# Assuming x is around 18.
x = 18
w = 40

# The row height is about 112 pixels.
def crop_avatars(filename, names, start_y, row_height=110):
    img = Image.open(f"public/{filename}.png")
    for i, name in enumerate(names):
        y = start_y + i * row_height
        box = (x, y, x+w, y+w)
        cropped = img.crop(box)
        cropped.save(f"public/{name}.png")

# Let's try some offsets
crop_avatars("list1", images["list1"], 170, 116)
crop_avatars("list2", images["list2"], 170, 116)
crop_avatars("list3", images["list3"], 140, 116)
