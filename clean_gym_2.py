import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for dental/clinic -> gym
    replacements = {
        r"Book a visit": "Free Gym Trial",
        r"Get a callback within 10 minutes": "Get a callback instantly",
        r"Request a callback": "Claim Trial",
        r"No spam. A real person calls you back, fast.": "No spam. Start your fitness journey today.",
        r"Our team will call you within 10 minutes.": "Our team will contact you shortly.",
        r"Message on WhatsApp": "Chat with Trainer",
        r"vgenstudio": "ironfitness",
        r"lumoraLead": "ironLead",
    }

    new_content = content
    for pattern, repl in replacements.items():
        new_content = re.sub(pattern, repl, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
