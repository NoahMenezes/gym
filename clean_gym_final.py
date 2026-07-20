import glob
import re

replacements = [
    # Doctor Details -> Trainer Details
    (r"Doctor Details", "Trainer Details"),
    
    # Staff / clinical / medical terms
    (r"Each member of our clinical staff is not only highly qualified but deeply passionate about helping members achieve healthier\.", 
     "Each member of our expert coaching staff is not only highly qualified but deeply passionate about helping members achieve peak fitness and transform their lives."),
    (r"clinical staff", "coaching staff"),
    (r"clinical tools", "gym equipment"),
    (r"clinical", "fitness"),
    (r"clinicians", "coaches"),
    (r"clinician", "fitness coach"),
    (r"clinics", "gym locations"),
    (r"clinic", "gym"),
    (r"treatment room", "workout area"),
    (r"treatment outcomes", "fitness results"),
    (r"transparent treatment plans", "transparent workout plans"),
    (r"treatment", "training program"),
    (r"treatments", "fitness programs"),

    # Oral health & Dental phrases
    (r"in Oral Health", "in Physical Fitness"),
    (r"Oral Health Tips", "Fitness & Nutrition Tips"),
    (r"Oral Health", "Strength Training"),
    (r"oral health and wellness", "health, strength, and overall wellness"),
    (r"oral health needs", "fitness & wellness goals"),
    (r"oral health", "physical health"),
    (r"healthy muscles and gums", "healthy muscles and overall physical fitness"),
    (r"gums", "joints"),
    (r"Preventive gym", "Preventive Fitness"),
    (r"Cosmetic gym", "Body Conditioning"),
    (r"Muscles Whitening", "Body Sculpting"),
    (r"Whitening", "Muscle Toning"),
    (r"whitening, veneers, and bonding", "custom routines, strength training, and recovery"),
    (r"whitening", "muscle toning"),
    (r"Fitness Veneers", "Postural Correction"),
    (r"veneers", "custom fitness routines"),
    (r"Cosmetic Bonding", "Flexibility Training"),
    (r"Restorative treatments", "Strength & Recovery"),
    (r"fillings, crowns, bridges, and implants", "custom workout plans, mobility work, and resistance training"),
    (r"Fitness Fillings", "Endurance Training"),
    (r"Crowns &Bridges", "Powerlifting"),
    (r"Muscle Repair", "Injury Recovery"),
    (r"Fitness Implants", "Hypertrophy Training"),
    (r"Orthodontic treatments correct misaligned muscles and bite issues using braces or aligners, improving both appearance and long-term oral health\.",
     "Mobility and posture training helps realign your body and improve joint function, enhancing both performance and long-term physical well-being."),
    (r"Orthodontic", "Posture & Mobility"),

    # Anesthesia & pain
    (r"anesthesia", "proper coaching"),
    (r"Are your treatments painful\?", "Are your workout programs beginner-friendly?"),
    (r"Most treatments are comfortable with modern techniques and anesthesia, ensuring minimal pain and a stress-free experience\.",
     "Our workout programs cater to all fitness levels with expert coaching and proper form guidance, ensuring a safe, effective, and motivating experience."),

    # Story / Wait times / Anxiety
    (r"Members say they feel less anxious during visits with us", "Members love our friendly, supportive training environment"),
    (r"Just 7 minutes is the average wait time before being seen", "100% personalized guidance on every workout session"),

    # General phrases
    (r"routine fitness checkup every six months", "consistent workout routine every week"),
    (r"routine checkups to advanced treatments", "beginner fitness plans to advanced strength training"),
    (r"From consultation to treatment, everything was smooth and stress-free\. The trainer was gentle, and the staff was supportive\. Highly recommend their fitness services\.",
     "From the initial assessment to personal training, everything has been fantastic. The coaches are knowledgeable and supportive. Highly recommend Iron Fitness!"),
    (r"How veneers can you completely transform your strength", "How progressive strength training can completely transform your physique"),
    (r"Advanced technology, a caring team, and treatments designed to keep your strength healthy for life\.",
     "State-of-the-art equipment, expert trainers, and fitness programs designed to keep you strong and healthy for life."),
    (r"Our gym uses advanced fitness technology to deliver precise diagnoses, efficient treatments, and improved comfort for faster, more effective results\.",
     "Our gym uses modern fitness equipment and data-driven tracking to deliver efficient workouts, personalized training, and faster, more effective results."),
    (r"Our approach goes beyond treatment, we provide compassionate care that ensures every member feels comfortable, understood, and supported throughout their fitness journey\.",
     "Our approach goes beyond generic workouts—we provide dedicated coaching that ensures every member feels motivated, supported, and guided throughout their fitness journey."),
    (r"We believe in honest communication and transparent treatment plans, helping you make informed decisions with complete trust and confidence\.",
     "We believe in transparent pricing and customized workout plans, helping you achieve your fitness goals with complete confidence."),
    (r"Provide exceptional fitness care using modern techniques and technologies\. Build lasting relationships with members while promoting oral health and wellness\.",
     "Provide exceptional fitness coaching using modern training techniques. Build lasting relationships with members while promoting health, strength, and overall wellness."),
    (r"Assist trainers during procedures while ensuring member comfort and safety\. Manage clinical tools and support smooth, efficient operations in the treatment room\.",
     "Assist trainers during workout sessions while ensuring member safety. Manage gym equipment and support smooth operations on the gym floor."),
    (r"Two convenient clinics across the USA, bringing quality fitness care closer to you\.",
     "Two convenient gym locations, bringing quality fitness training closer to you.")
]

files = glob.glob("app/**/*.tsx", recursive=True)

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    original_content = content
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)

    if content != original_content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {file_path}")
