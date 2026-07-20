filepath = 'public/assets/css/iron.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the custom override block
marker = "/* Custom Override to disable horizontal scroll and stickiness for services section */"
if marker in content:
    idx = content.find(marker)
    new_content = content[:idx].strip() + "\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed CSS by removing the custom override block.")
else:
    print("Marker not found.")

