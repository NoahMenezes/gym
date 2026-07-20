import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for logos
    # Let's replace all unsplash URLs inside src="..." on lines containing logo_image
    # Or just replace the exact img tags
    new_content = re.sub(r'<img alt="Iron logo" class="logo_image" loading="eager" src="[^"]+"/>', '<img alt="Ambrose Fitness Studio logo" class="logo_image" loading="eager" src="/assets/img/lumora-logo-dark.svg"/>', content)
    
    # Also update any other logos if found (like footer)
    new_content = re.sub(r'<img src="https://images.unsplash.com[^"]+" loading="lazy" alt="Logo"[^>]*>', '<img src="/assets/img/lumora-logo.svg" loading="lazy" alt="Ambrose Fitness Studio logo" class="footer_logo"/>', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated logo in {filepath}")

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

# Update layout.tsx
layout_path = 'app/layout.tsx'
with open(layout_path, 'r', encoding='utf-8') as f:
    layout_content = f.read()

layout_content = layout_content.replace('title: "Gym & Fitness Studio",', 'title: "Ambrose Fitness Studio",')
layout_content = layout_content.replace('title: "Create Next App",', 'title: "Ambrose Fitness Studio",')

with open(layout_path, 'w', encoding='utf-8') as f:
    f.write(layout_content)
print("Updated title in app/layout.tsx")

