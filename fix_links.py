import os
import re

app_dir = 'app'

def fix_links(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace href="index.html" with href="/"
    content = re.sub(r'href=\\?"index\.html\\?"', r'href="/"', content)
    
    # Replace href="about.html" with href="/about"
    # To be safe and generic: href="something.html" -> href="/something"
    # But wait, dangerouslySetInnerHTML string might have escaped quotes: href=\"about.html\"
    content = re.sub(r'href=\\?"([^"]+)\.html\\?"', r'href="/\1"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('page.tsx'):
            fix_links(os.path.join(root, file))

print("Fixed links!")
