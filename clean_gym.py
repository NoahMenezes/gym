import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for dental/clinic -> gym
    replacements = {
        r"Get Appointment": "Join Now",
        r"Book An Appointment": "Get Membership",
        r"booking appointments": "getting memberships",
        r"appointments": "memberships",
        r"Appointments": "Memberships",
        r"appointment": "membership",
        r"Appointment": "Membership",
        r"clinic\b": "gym",
        r"clinics\b": "gyms",
        r"clinician": "trainer",
        r"clinicians": "trainers",
        r"clinical": "training",
        r"treatment": "workout",
        r"treatments": "workouts",
        r"procedure": "session",
        r"procedures": "sessions",
        r"Preventive gym": "Personal Training",
        r"Cosmetic gym": "Group Classes",
        r"Restorative treatments": "Strength Training",
        r"Orthodontics": "Cardio Fitness",
        r"gums": "core",
        r"whitening, veneers, and bonding": "HIIT, yoga, and pilates",
        r"Whitening": "Yoga",
        r"Checkups": "Assessment",
        r"Cleanings": "Warmups",
        r"Oral Health": "Flexibility",
        r"Muscles Whitening": "Weight Loss",
        r"Fitness Veneers": "Muscle Gain",
        r"Strength Makeover": "Endurance",
        r"Cosmetic Bonding": "Bodybuilding",
        r"Fitness Fillings": "Powerlifting",
        r"Crowns &Bridges": "CrossFit",
        r"Crowns &amp;Bridges": "CrossFit",
        r"Muscle Repair": "Recovery",
        r"Fitness Implants": "Nutrition",
        r"repair damaged or missing muscles using fillings, crowns, bridges, and implants": "build strength and muscle mass using free weights, machines, and expert guidance",
        r"correct misaligned muscles and bite issues using braces or aligners": "improve cardiovascular health and stamina through high-intensity exercises",
        r"improves the appearance of your muscles through treatments like": "improves your overall fitness through classes like",
        r"Early care and regular checkups are the key to avoiding serious fitness issues\. Our preventive treatments help you maintain strong, healthy muscles and": "Consistent training and proper guidance are key to achieving your fitness goals. Our personal training helps you build a strong, healthy body and",
        r"members say they feel less anxious during visits with us": "members say they feel energized after workouts with us",
        r"Wait time before being seen": "Wait time for equipment",
        r"Experiencing sudden pain, injury or issues\? Our team is here for you 24/7\.": "Need access to the gym at any time? Our facility is open for you 24/7.",
        r"fitness care": "fitness training",
        r"Fitness Care": "Fitness Training",
        r"Fitness Wellness": "Physical Excellence",
        r"Trusted by Community": "Loved by Members",
        r"patient": "member",
        r"patients": "members",
        r"care\b": "training",
        r"Care\b": "Training",
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
