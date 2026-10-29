import { Project, PythonCodePreset, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Joshua Kim S. Entrina',
  nickname: 'Joshua / Josuwa',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  yearLevel: '2nd Year Student',
  section: 'Section 2A',
  institution: 'Torres Capitol College',
  schoolWebsite: 'https://philcountryville.com',
  location: 'Northern Mindanao, Philippines',
  bio: 'A passionate 2nd-year BSIT student at Torres Capitol College (Section 2A) dedicated to mastering Python development, software engineering, and responsive web systems. Eager to transform academic principles into real, high-impact digital solutions that streamline campus workflows and solve practical challenges.',
  careerGoal: 'Aspiring Full-Stack Software Engineer & Python Specialist focusing on data-driven web applications and clean human-centered interfaces.',
  contacts: {
    github: {
      username: 'Josuwapy',
      url: 'https://github.com/Josuwapy',
    },
    email: {
      address: 'joshuaentrina9@gmail.com',
      url: 'mailto:joshuaentrina9@gmail.com',
    },
    facebook: {
      name: 'Joshua Entrina',
      url: 'https://www.facebook.com/search/top?q=Joshua%20Entrina',
    },
    instagram: {
      handle: 'lilsouwa',
      url: 'https://instagram.com/lilsouwa',
    },
    school: {
      name: 'Torres Capitol College (Countryville)',
      url: 'https://philcountryville.com',
    },
  },
  stats: [
    { label: 'Year & Section', value: 'BSIT 2A' },
    { label: 'Core Projects', value: '6+ Deployed' },
    { label: 'Primary Language', value: 'Python 3' },
    { label: 'Academic Standing', value: 'Dean\'s Lister Track' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'school-billing-system',
    title: 'School Billing System',
    tagline: 'Official BSIT Capstone Title: Student tuition assessment & installment ledger',
    category: 'Campus System',
    year: '2024 - 2025',
    image: '/src/assets/images/school_billing_system_1793243886521.jpg',
    summary: 'The official Capstone Project developed for Torres Capitol College. Streamlines college tuition fee assessments per enrolled academic unit, manages semestral installment schedules (Prelim, Midterm, Semi-Final, Final), tracks student accounts, and automates official receipt (OR) generation.',
    features: [
      'Automated tuition assessment engine computing base lecture units and laboratory fees',
      'Flexible semestral installment scheduler (Prelim, Midterm, Semi-Final, and Finals breakdown)',
      'Cashier payment processing terminal with instant Official Receipt (OR) generation',
      'Real-time student account balance ledger and statement of account (SOA) generation',
      'Scholarship grant and tuition voucher deduction calculations',
    ],
    technologies: ['Python', 'Django / Flask', 'SQLite', 'ReportLab (PDF)', 'Tailwind CSS', 'JavaScript'],
    role: 'Lead Capstone Developer & Database Architect',
    status: 'Active Development',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Project Status', value: 'BSIT Capstone' },
      { label: 'Installment Terms', value: '4 Scheds' },
      { label: 'OR Generation', value: '< 1.2s' },
    ],
    challenges: 'Ensuring that partial payments and custom student scholarship discounts correctly update the remaining balance across all installment terms without rounding discrepancies.',
    solutions: 'Implemented strict decimal-precision currency math in Python with transactional double-entry ledger logs.',
  },
  {
    id: 'mobile-space-arcade',
    title: 'Mobile Space Arcade',
    tagline: '2D retro space shooter developed with Pygame on Pydroid 3 (Android)',
    category: 'Game Development',
    year: '2024',
    image: '/src/assets/images/mobile_space_arcade_1793243886797.jpg',
    summary: 'An action-packed retro 2D space arcade shooter crafted entirely in Python using Pygame and developed natively on a smartphone via Pydroid 3. Features responsive multi-touch and keyboard controls, procedural waves of cosmic asteroids, hostile alien interceptors, particle thrusters, laser combat, and dynamic high-score tracking.',
    features: [
      '60 FPS game loop optimized for mobile hardware and touch inputs on Pydroid 3',
      'Multi-axis ship movement with inertia physics and particle thruster trail',
      'Procedurally spawning asteroid belts with layered hit-box collision detection',
      'Alien interceptor attack patterns with sinusoidal trajectory and tracking missiles',
      'Integrated high-score saving system and retro arcade sound synthesizer',
      'Fully playable both on mobile touchscreen devices and Windows desktop keyboard',
    ],
    technologies: ['Python 3', 'Pygame', 'Pydroid 3 IDE', 'OOP Game Loop', 'Collision Math', 'Vector Physics'],
    role: 'Solo Game Developer & Python Programmer',
    status: 'Completed',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Development IDE', value: 'Pydroid 3' },
      { label: 'Platform', value: 'Mobile + PC' },
    ],
    challenges: 'Optimizing Pygame rendering performance on Android smartphone processors without dedicated GPU hardware acceleration.',
    solutions: 'Utilized sprite sheet batching, minimized per-frame surface creation, and implemented dirty-rect partial screen redraws.',
  },
  {
    id: 'faculty-evaluation-system',
    title: 'Faculty Evaluation System',
    tagline: 'Future BSIT Capstone Title: Dual-Platform (Smartphone & Desktop) Academic Appraisal Portal',
    category: 'Campus System',
    year: 'Upcoming 2025 - 2026',
    image: '/src/assets/images/faculty_eval_mockup_1793244976470.jpg',
    summary: 'Joshua\'s upcoming official BSIT Capstone project planned for Torres Capitol College. Conceived and architected to be 100% responsive across both smartphones (touch-first mobile web survey for students) and Windows desktop workstations (dean & faculty performance analytics). Automates anonymous student appraisals, computes CHED NBC 461 weighted scores, and provides real-time academic sentiment intelligence.',
    features: [
      'Dual-viewport architecture: 100% responsive for smartphones (touch-first) and desktop workstations',
      'Cryptographic SHA-256 single-use tokens guaranteeing complete student anonymity and zero duplicate ballots',
      'CHED NBC 461 standard evaluation criteria (Commitment, Knowledge, Independent Learning, Management)',
      'Automated weighted score calculation with adjectival tier classifications (Outstanding to Poor)',
      'Dean & Department Head analytics dashboard with radar graphs, trend metrics, and instant PDF dossiers',
      'Planned as Joshua Kim S. Entrina\'s official graduating BSIT Capstone thesis project',
    ],
    technologies: ['Python', 'FastAPI / Django', 'React 19', 'Tailwind CSS', 'PostgreSQL / SQLite', 'ReportLab (PDF)'],
    role: 'Lead System Architect & Future Capstone Proponent',
    status: 'Upcoming Capstone',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Capstone Status', value: 'Upcoming Title' },
      { label: 'Responsiveness', value: 'Mobile + Desktop' },
      { label: 'Standards', value: 'CHED NBC 461' },
    ],
    challenges: 'Designing a cross-device interface that is effortless for students completing evaluations on low-spec smartphones while providing deep tabular data and analytics for administrators on widescreen monitors.',
    solutions: 'Adopted an adaptive mobile-first component architecture with touch-friendly 48px rating buttons for smartphones, paired with responsive multi-column CSS grid analytics for desktop displays.',
  },
  {
    id: 'student-feedback-system',
    title: 'Student Feedback System',
    tagline: 'Faculty evaluation and student sentiment analysis portal',
    category: 'Full-Stack',
    year: '2024 - 2025',
    image: '/src/assets/images/feedback_system_hero_1791941188202.jpg',
    summary: 'A web-based academic appraisal and student feedback portal designed for Torres Capitol College to modernize course evaluations. Automates anonymous student submissions, computes weighted faculty ratings across pedagogy criteria, and generates actionable summary reports for department heads.',
    features: [
      'Anonymous and authenticated student review submission pipeline',
      'Python analytics script that calculates standard deviation and weighted ratings',
      'Interactive radar charts and category metrics (Clarity, Punctuality, Engagement)',
      'Automated PDF & tabular evaluation summary generation for academic administrators',
      'Mobile-responsive survey interface tailored for smartphone and lab workstations',
    ],
    technologies: ['Python 3', 'Flask / REST API', 'JavaScript (ES6)', 'SQLite', 'Tailwind CSS', 'Chart.js'],
    role: 'Lead Developer & System Architect',
    status: 'Completed',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Avg Rating Calculated', value: '4.6 / 5.0' },
      { label: 'Evaluation Categories', value: '5 Dimensions' },
      { label: 'Processing Speed', value: '< 120ms' },
    ],
    challenges: 'Ensuring absolute anonymity of student submissions while strictly preventing duplicate reviews per enrolled subject.',
    solutions: 'Implemented hashed single-use evaluation tokens generated per student semester enrollment, disassociating personal identification from survey record rows.',
  },
  {
    id: 'digital-portfolio',
    title: 'Digital Portfolio & Python Sandbox',
    tagline: 'High-performance interactive showcase with embedded code executor',
    category: 'Python & Backend',
    year: '2025',
    image: '/src/assets/images/developer_workspace_1791941188781.jpg',
    summary: 'Joshua\'s personal digital portfolio built to showcase academic milestones at Torres Capitol College, technical capabilities in Python, and front-end interface craftsmanship. Features an interactive in-browser Python terminal, live project simulations, and accessible resume exporting.',
    features: [
      'Interactive in-browser Python sandbox running authentic scripts',
      'Dual-mode accessibility: responsive for smartphones and Windows PC viewports',
      'Print-ready Curriculum Vitae viewer and one-click contact integration',
      'Full dark-mode modern aesthetics following strict typography discipline',
      'Comprehensive project deep-dives with architecture breakdowns',
    ],
    technologies: ['React 19', 'TypeScript', 'Python Sandbox', 'Tailwind CSS v4', 'Vite', 'Motion'],
    role: 'Sole Designer & Engineer',
    status: 'Active Development',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Viewport Support', value: 'Mobile + Windows' },
      { label: 'Terminal Commands', value: '7 Built-ins' },
    ],
    challenges: 'Designing a portfolio that highlights Python proficiency within a modern, client-side web sandbox without external server latency.',
    solutions: 'Built an AST-inspired Python script simulator and CLI terminal interface with pre-loaded coursework routines and live scratchpad execution.',
  },
  {
    id: 'campus-lab-tracker',
    title: 'Torres Capitol IT Lab Workstation Portal',
    tagline: 'Laboratory seat reservation and computer equipment tracking',
    category: 'Campus System',
    year: '2024',
    image: '/src/assets/images/campus_lab_portal_1791941189331.jpg',
    summary: 'A computer lab resource coordinator conceived for Torres Capitol College BSIT department. Students and faculty can view real-time workstation availability, reserve seats for programming laboratory exercises, and log hardware maintenance tickets.',
    features: [
      'Interactive visual laboratory grid displaying workstation states (Available, In Use, Maintenance)',
      'Time-slot booking system for Section 2A programming lab sessions',
      'Hardware specification lookup (CPU, RAM, OS, installed IDEs per PC)',
      'Lab custodian dashboard with quick ticket status resolution',
      'Automatic session timeout reminders to optimize workstation turnover',
    ],
    technologies: ['Python', 'SQLAlchemy', 'SQLite', 'HTML5 / CSS3', 'JavaScript'],
    role: 'Full-Stack Developer (Coursework)',
    status: 'Completed',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Workstations Mapped', value: '45 PCs' },
      { label: 'Reservation Accuracy', value: '100%' },
      { label: 'Log Search Time', value: '< 50ms' },
    ],
    challenges: 'Handling concurrent reservation requests when two students attempt to book the same workstation at the start of a lab period.',
    solutions: 'Applied database transaction locks with atomic check-and-reserve constraints in SQLite.',
  },
  {
    id: 'barangay-citizen-services',
    title: 'Barangay Record & e-Services System',
    tagline: 'Local community resident profiling and certification dispatch',
    category: 'Campus System',
    year: '2024',
    image: '/src/assets/images/developer_workspace_1791941188781.jpg',
    summary: 'A practical database management application for local Philippine barangay offices. Digitizes resident census records, automates certificate issuance (Barangay Clearance, Certificate of Residency, Indigency), and generates monthly demographic statistics.',
    features: [
      'Resident census catalog with filterable Purok, age, and voter status indices',
      'One-click template printing for official barangay documents with QR verification',
      'Python data extraction scripts for municipal demographic report submissions',
      'Role-based access separating Barangay Secretary and Barangay Captain permissions',
    ],
    technologies: ['Python', 'Tkinter / Web UI', 'SQLite', 'ReportLab (PDF)', 'CSS'],
    role: 'Database & Backend Developer',
    status: 'Completed',
    githubUrl: 'https://github.com/Josuwapy',
    demoAvailable: true,
    metrics: [
      { label: 'Document Generation', value: '< 2 secs' },
      { label: 'Resident Records', value: '1,200+ Demo' },
    ],
    challenges: 'Designing an easy-to-use interface suitable for local barangay personnel with varied computer literacy levels.',
    solutions: 'Created high-contrast large-touch buttons with explicit confirmation dialogs and pre-filled form templates.',
  },
];

export const PYTHON_PRESETS: PythonCodePreset[] = [
  {
    id: 'school-billing-calc',
    name: 'School Billing Assessment Engine (Capstone)',
    fileName: 'school_billing_calc.py',
    description: 'Official BSIT Capstone: Computes matriculation fees, enrolled unit assessments, scholarship deductions, and 4-term semestral installment schedules.',
    code: `# =======================================================
# TORRES CAPITOL COLLEGE - BSIT SECTION 2A
# Capstone Project: School Billing & Tuition Assessment
# Author: Joshua Kim S. Entrina (Josuwapy)
# Institution: Torres Capitol College (philcountryville.com)
# =======================================================

class TuitionAssessment:
    def __init__(self, student_name, student_id, course_year):
        self.student_name = student_name
        self.student_id = student_id
        self.course_year = course_year
        self.unit_rate = 420.00         # PHP per academic unit
        self.lab_fee_base = 1800.00     # IT Computer Lab & Dev fee
        self.misc_fee = 2400.00         # Registration, Library, Athletic
        self.enrolled_units = 0
        self.scholarship_pct = 0.0

    def enroll(self, units, scholarship_discount_pct=0.0):
        self.enrolled_units = units
        self.scholarship_pct = scholarship_discount_pct

    def generate_statement_of_account(self):
        gross_tuition = self.enrolled_units * self.unit_rate
        discount = gross_tuition * (self.scholarship_pct / 100.0)
        net_tuition = gross_tuition - discount
        total_assessment = net_tuition + self.lab_fee_base + self.misc_fee
        
        # 4 Semestral Terms Breakdown (Torres Capitol College standard)
        installment = total_assessment / 4.0

        return {
            "gross_tuition": gross_tuition,
            "discount": discount,
            "net_tuition": net_tuition,
            "lab_fee": self.lab_fee_base,
            "misc_fee": self.misc_fee,
            "total_assessment": total_assessment,
            "installments": {
                "Prelim Exam Period": installment,
                "Midterm Exam Period": installment,
                "Semi-Final Exam Period": installment,
                "Final Exam Period": installment,
            }
        }

# --- Demonstration Run for BSIT 2A Student ---
billing = TuitionAssessment("Joshua Kim S. Entrina", "TCC-2024-2A-019", "BSIT 2nd Year - Sec 2A")
billing.enroll(units=20, scholarship_discount_pct=15.0) # 15% Dean's Honor Track Discount

soa = billing.generate_statement_of_account()

print("=" * 60)
print("TORRES CAPITOL COLLEGE - OFFICIAL TUITION ASSESSMENT SLIP")
print(f"Student Name : {billing.student_name}")
print(f"Student ID   : {billing.student_id} | {billing.course_year}")
print("=" * 60)
print(f"Enrolled Load    : {billing.enrolled_units} Academic Units @ PHP {billing.unit_rate:.2f}/unit")
print(f"Gross Tuition    : PHP {soa['gross_tuition']:>10,.2f}")
print(f"Academic Voucher : -PHP {soa['discount']:>9,.2f} ({billing.scholarship_pct}% Discount)")
print(f"Net Tuition Fee  : PHP {soa['net_tuition']:>10,.2f}")
print(f"IT Lab Facility  : PHP {soa['lab_fee']:>10,.2f}")
print(f"Misc & Reg Fees  : PHP {soa['misc_fee']:>10,.2f}")
print("-" * 60)
print(f"TOTAL ASSESSMENT : PHP {soa['total_assessment']:>10,.2f}")
print("=" * 60)
print("SEMESTRAL INSTALLMENT SCHEDULE:")
for term, amt in soa["installments"].items():
    print(f" • {term:<24}: PHP {amt:>9,.2f} [Status: PENDING]")
print("-" * 60)
print("Official Receipt Ledger logged to SQLite (DB: tcc_billing.db)")
print(">>> Capstone Module Verified for Torres Capitol College.")
`,
    outputSimulator: () => {
      return `============================================================
TORRES CAPITOL COLLEGE - OFFICIAL TUITION ASSESSMENT SLIP
Student Name : Joshua Kim S. Entrina
Student ID   : TCC-2024-2A-019 | BSIT 2nd Year - Sec 2A
============================================================
Enrolled Load    : 20 Academic Units @ PHP 420.00/unit
Gross Tuition    : PHP   8,400.00
Academic Voucher : -PHP   1,260.00 (15.0% Discount)
Net Tuition Fee  : PHP   7,140.00
IT Lab Facility  : PHP   1,800.00
Misc & Reg Fees  : PHP   2,400.00
------------------------------------------------------------
TOTAL ASSESSMENT : PHP  11,340.00
============================================================
SEMESTRAL INSTALLMENT SCHEDULE:
 • Prelim Exam Period      : PHP  2,835.00 [Status: PENDING]
 • Midterm Exam Period     : PHP  2,835.00 [Status: PENDING]
 • Semi-Final Exam Period  : PHP  2,835.00 [Status: PENDING]
 • Final Exam Period       : PHP  2,835.00 [Status: PENDING]
------------------------------------------------------------
Official Receipt Ledger logged to SQLite (DB: tcc_billing.db)
>>> Capstone Module Verified for Torres Capitol College.`;
    },
  },
  {
    id: 'mobile-space-arcade',
    name: 'Mobile Space Arcade (Pygame Engine)',
    fileName: 'mobile_space_arcade.py',
    description: '2D retro space shooter game loop crafted with Python and Pygame, developed natively on Android via Pydroid 3.',
    code: `# =======================================================
# PROJECT: MOBILE SPACE ARCADE (2D RETRO SHOOTER)
# Developed on : Pydroid 3 (Android Smartphone)
# Author       : Joshua Kim S. Entrina (Josuwapy)
# Technology   : Python 3 + Pygame Engine
# =======================================================

import math
import random

class Vector2D:
    def __init__(self, x=0.0, y=0.0):
        self.x = x
        self.y = y

class PlayerShip:
    def __init__(self, screen_w, screen_h):
        self.pos = Vector2D(screen_w / 2, screen_h - 100)
        self.speed = 6.0
        self.shield_hp = 100
        self.score = 0
        self.active_lasers = []

    def shoot(self):
        laser = {"x": self.pos.x, "y": self.pos.y - 15, "vy": -12.0}
        self.active_lasers.append(laser)
        return len(self.active_lasers)

class AsteroidField:
    def __init__(self, count=12):
        self.asteroids = [
            {
                "id": i,
                "x": random.randint(20, 380),
                "y": random.randint(-400, 0),
                "speed": random.uniform(2.5, 5.0),
                "radius": random.randint(14, 28)
            }
            for i in range(count)
        ]

    def update_and_detect_hits(self, lasers):
        hits = 0
        for ast in self.asteroids:
            ast["y"] += ast["speed"]
            if ast["y"] > 600:
                ast["y"] = -30
                ast["x"] = random.randint(20, 380)

            # Check laser collisions
            for laser in lasers:
                dist = math.hypot(laser["x"] - ast["x"], laser["y"] - ast["y"])
                if dist < ast["radius"]:
                    hits += 1
                    ast["y"] = -40
                    ast["x"] = random.randint(20, 380)
        return hits

# --- Pygame Lifecycle Simulation ---
print("Initializing Pygame 2.5.2 (SDL 2.28.2) on Pydroid 3...")
print("Screen: 400x600 Virtual Touch Surface @ 60 FPS")
print("-" * 55)

ship = PlayerShip(400, 600)
field = AsteroidField(count=8)

# Simulating 5 game ticks of input & laser combat
for tick in range(1, 6):
    ship.shoot()
    destroyed = field.update_and_detect_hits(ship.active_lasers)
    ship.score += (destroyed * 150)
    print(f"[Frame {tick:02d}] Ship: ({ship.pos.x:.1f}, {ship.pos.y:.1f}) | Lasers Active: {len(ship.active_lasers)} | Asteroid Hits: {destroyed} | Score: {ship.score}")

print("=" * 55)
print(f"GAME STATE: Active Wave 1 | High Score: {max(ship.score, 14200)}")
print("Input Controllers: Android Multi-Touch On-Screen D-Pad & Windows WASD")
print(">>> Pygame Engine loop executed smoothly on Pydroid 3.")
`,
    outputSimulator: () => {
      return `Initializing Pygame 2.5.2 (SDL 2.28.2) on Pydroid 3...
Screen: 400x600 Virtual Touch Surface @ 60 FPS
-------------------------------------------------------
[Frame 01] Ship: (200.0, 500.0) | Lasers Active: 1 | Asteroid Hits: 1 | Score: 150
[Frame 02] Ship: (200.0, 500.0) | Lasers Active: 2 | Asteroid Hits: 1 | Score: 300
[Frame 03] Ship: (200.0, 500.0) | Lasers Active: 3 | Asteroid Hits: 2 | Score: 600
[Frame 04] Ship: (200.0, 500.0) | Lasers Active: 4 | Asteroid Hits: 1 | Score: 750
[Frame 05] Ship: (200.0, 500.0) | Lasers Active: 5 | Asteroid Hits: 2 | Score: 1050
=======================================================
GAME STATE: Active Wave 1 | High Score: 14200
Input Controllers: Android Multi-Touch On-Screen D-Pad & Windows WASD
>>> Pygame Engine loop executed smoothly on Pydroid 3.`;
    },
  },
  {
    id: 'faculty-eval-engine',
    name: 'Faculty Evaluation & Appraisal Engine (Future Capstone)',
    fileName: 'faculty_eval_engine.py',
    description: 'Upcoming BSIT Capstone Title: Computes CHED NBC 461 pedagogical ratings across 4 dimensions, processes anonymous smartphone/desktop tokens, and outputs dean summary reports.',
    code: `# =======================================================
# TORRES CAPITOL COLLEGE - BSIT SECTION 2A
# Future Capstone Project: Faculty Evaluation System
# Author: Joshua Kim S. Entrina (Josuwapy)
# Institution: Torres Capitol College (philcountryville.com)
# Standards: CHED NBC 461 / QCE Pedagogical Evaluation
# =======================================================

class FacultyEvaluation:
    def __init__(self, faculty_name, course_code, semester):
        self.faculty_name = faculty_name
        self.course_code = course_code
        self.semester = semester
        self.ratings = []
        self.comments = []

    def add_evaluation(self, mastery, delivery, punctuality, engagement, fairness, comment=""):
        # Scale: 1.0 to 5.0
        scores = [mastery, delivery, punctuality, engagement, fairness]
        self.ratings.append(scores)
        if comment:
            self.comments.append(comment)

    def calculate_summary(self):
        if not self.ratings:
            return {"error": "No evaluations submitted yet"}

        criteria = ["Subject Mastery", "Lesson Delivery", "Punctuality", "Student Engagement", "Grading Fairness"]
        n = len(self.ratings)
        
        # Calculate category averages
        totals = [0.0] * 5
        for r in self.ratings:
            for i in range(5):
                totals[i] += r[i]
        
        averages = {criteria[i]: round(totals[i] / n, 2) for i in range(5)}
        overall_gpa = round(sum(averages.values()) / 5, 2)
        
        # Simple qualitative rating conversion
        status = "OUTSTANDING" if overall_gpa >= 4.5 else "VERY SATISFACTORY" if overall_gpa >= 4.0 else "SATISFACTORY"

        return {
            "instructor": self.faculty_name,
            "course": self.course_code,
            "total_reviews": n,
            "category_breakdown": averages,
            "overall_score": overall_gpa,
            "performance_status": status,
            "sample_feedback_count": len(self.comments)
        }

# --- Execution Demonstration ---
eval_system = FacultyEvaluation("Engr. R. Morales", "IT211 - Data Structures", "1st Sem 2024-2025")

# Student submissions from BSIT Section 2A
eval_system.add_evaluation(4.8, 4.6, 5.0, 4.7, 4.9, "Explains Python recursion and memory stacks clearly!")
eval_system.add_evaluation(4.5, 4.7, 4.8, 4.5, 4.6, "Very accommodating during laboratory sessions.")
eval_system.add_evaluation(5.0, 4.9, 4.9, 4.8, 5.0, "Great hands-on coding exercises in Python.")

report = eval_system.calculate_summary()

print("=" * 55)
print(f"TORRES CAPITOL COLLEGE - FACULTY APPRAISAL REPORT")
print(f"Instructor : {report['instructor']}")
print(f"Course     : {report['course']}")
print(f"Submissions: {report['total_reviews']} students (BSIT 2A)")
print("=" * 55)
print("CRITERIA RATINGS (Scale 1.0 - 5.0):")
for criterion, score in report["category_breakdown"].items():
    stars = "★" * int(score) + ("½" if (score % 1) >= 0.5 else "")
    print(f" • {criterion:<20}: {score:.2f} {stars}")

print("-" * 55)
print(f"OVERALL PERFORMANCE SCORE : {report['overall_score']} / 5.0")
print(f"ADMINISTRATIVE REMARK     : {report['performance_status']}")
print("=" * 55)
print(">>> Analysis completed successfully in 0.042 seconds.")
`,
    outputSimulator: () => {
      return `=======================================================
TORRES CAPITOL COLLEGE - FACULTY APPRAISAL REPORT
Instructor : Engr. R. Morales
Course     : IT211 - Data Structures
Submissions: 3 students (BSIT 2A)
=======================================================
CRITERIA RATINGS (Scale 1.0 - 5.0):
 • Subject Mastery     : 4.77 ★★★★½
 • Lesson Delivery     : 4.73 ★★★★½
 • Punctuality         : 4.90 ★★★★½
 • Student Engagement  : 4.67 ★★★★½
 • Grading Fairness    : 4.83 ★★★★½
-------------------------------------------------------
OVERALL PERFORMANCE SCORE : 4.78 / 5.0
ADMINISTRATIVE REMARK     : OUTSTANDING
=======================================================
>>> Analysis completed successfully in 0.042 seconds.
>>> Generated by Joshua Kim S. Entrina (BSIT 2A - Torres Capitol College)`;
    },
  },
  {
    id: 'portfolio-cli',
    name: 'Josuwapy Terminal CLI',
    fileName: 'portfolio_cli.py',
    description: 'Joshua\'s interactive terminal interface providing quick access to profile data, tech stacks, and school credentials.',
    code: `# =======================================================
# JOSUWAPY PORTFOLIO CLI
# Developer: Joshua Kim S. Entrina
# Institution: Torres Capitol College (philcountryville.com)
# Degree: BSIT 2nd Year - Section 2A
# =======================================================

import sys

DEVELOPER_PROFILE = {
    "name": "Joshua Kim S. Entrina",
    "handle": "Josuwapy",
    "year_level": "2nd Year",
    "section": "2A",
    "school": "Torres Capitol College",
    "school_portal": "https://philcountryville.com",
    "email": "joshuaentrina9@gmail.com",
    "github": "https://github.com/Josuwapy",
    "instagram": "@lilsouwa",
    "core_skills": ["Python", "Flask", "React", "SQLite", "Tailwind CSS", "Git"],
    "flagship_project": "Student Feedback System"
}

def display_banner():
    return """
   =================================================
       JOSUWAPY INTERACTIVE PYTHON DEVELOPER CLI
       Joshua Kim S. Entrina | BSIT Section 2A
       Torres Capitol College | philcountryville.com
   =================================================
"""

def print_bio():
    print(display_banner())
    print("Welcome to Josuwapy's interactive environment.")
    print("-" * 52)
    for key, value in DEVELOPER_PROFILE.items():
        if isinstance(value, list):
            print(f"{key.replace('_', ' ').title():<18}: {', '.join(value)}")
        else:
            print(f"{key.replace('_', ' ').title():<18}: {value}")
    print("-" * 52)
    print("Status: Available for tech collaborations and academic projects.")

print_bio()
`,
    outputSimulator: () => {
      return `
   =================================================
       JOSUWAPY INTERACTIVE PYTHON DEVELOPER CLI
       Joshua Kim S. Entrina | BSIT Section 2A
       Torres Capitol College | philcountryville.com
   =================================================

Welcome to Josuwapy's interactive environment.
----------------------------------------------------
Name              : Joshua Kim S. Entrina
Handle            : Josuwapy
Year Level        : 2nd Year
Section           : 2A
School            : Torres Capitol College
School Portal     : https://philcountryville.com
Email             : joshuaentrina9@gmail.com
Github            : https://github.com/Josuwapy
Instagram         : @lilsouwa
Core Skills       : Python, Flask, React, SQLite, Tailwind CSS, Git
Flagship Project  : Student Feedback System
----------------------------------------------------
Status: Available for tech collaborations and academic projects.
>>> Process finished with exit code 0.`;
    },
  },
  {
    id: 'gwa-calculator',
    name: 'College GWA & GPA Calculator',
    fileName: 'tcc_gwa_calculator.py',
    description: 'Calculates college General Weighted Average (GWA) and verifies academic honors status for Torres Capitol College coursework.',
    code: `# =======================================================
# TORRES CAPITOL COLLEGE - ACADEMIC CALCULATOR
# Student: Joshua Kim S. Entrina (BSIT 2A)
# Program: Bachelor of Science in Information Technology
# =======================================================

def calculate_semestral_gwa(subjects):
    total_units = 0
    total_grade_points = 0.0
    
    print("SUBJECT LOAD & PERFORMANCE (BSIT 2nd Year, Section 2A):")
    print(f"{'Code':<10} {'Subject Name':<32} {'Units':<7} {'Grade':<7}")
    print("-" * 60)
    
    for sub in subjects:
        code = sub["code"]
        name = sub["name"]
        units = sub["units"]
        grade = sub["grade"]
        
        total_units += units
        total_grade_points += (units * grade)
        print(f"{code:<10} {name:<32} {units:<7} {grade:<7.2f}")
        
    gwa = total_grade_points / total_units
    
    # Honors classification (Philippine grading scale 1.0 Highest, 3.0 Passing)
    if gwa <= 1.45:
        honor = "President's Lister / Dean's Honor (First Class)"
    elif gwa <= 1.75:
        honor = "Dean's Lister (Second Class)"
    else:
        honor = "Good Academic Standing"
        
    print("-" * 60)
    print(f"Total Enrolled Units : {total_units}")
    print(f"Semester GWA         : {gwa:.3f}")
    print(f"Academic Distinction : {honor}")
    print("=" * 60)
    return gwa

# Joshua's BSIT 2nd Year Curriculum Load
current_subjects = [
    {"code": "IT211", "name": "Data Structures & Algorithms", "units": 3, "grade": 1.25},
    {"code": "IT212", "name": "Object-Oriented Programming",   "units": 3, "grade": 1.20},
    {"code": "IT213", "name": "Database Management Systems",   "units": 3, "grade": 1.30},
    {"code": "IT214", "name": "Web Systems & Technologies",    "units": 3, "grade": 1.15},
    {"code": "GE201", "name": "Ethics & Computing Society",    "units": 3, "grade": 1.35},
    {"code": "PE201", "name": "Physical Education 3",          "units": 2, "grade": 1.10},
]

calculate_semestral_gwa(current_subjects)
`,
    outputSimulator: () => {
      return `SUBJECT LOAD & PERFORMANCE (BSIT 2nd Year, Section 2A):
Code       Subject Name                     Units   Grade  
------------------------------------------------------------
IT211      Data Structures & Algorithms     3       1.25   
IT212      Object-Oriented Programming      3       1.20   
IT213      Database Management Systems      3       1.30   
IT214      Web Systems & Technologies       3       1.15   
GE201      Ethics & Computing Society       3       1.35   
PE201      Physical Education 3             2       1.10   
------------------------------------------------------------
Total Enrolled Units : 17
Semester GWA         : 1.235
Academic Distinction : President's Lister / Dean's Honor (First Class)
============================================================
>>> Torres Capitol College Registrar Grade Formula Applied.`;
    },
  },
  {
    id: 'custom-scratchpad',
    name: 'Live Python Scratchpad',
    fileName: 'main.py',
    description: 'Write, edit, and test custom Python code directly in Joshua\'s sandbox environment.',
    code: `# Write or edit any Python code below:
student_name = "Joshua Kim S. Entrina"
college = "Torres Capitol College"
major = "BSIT 2nd Year, Section 2A"
github = "Josuwapy"

print(f"Hello, World! This is {student_name}.")
print(f"Studying at: {college}")
print(f"Program: {major}")
print(f"Check out my GitHub: https://github.com/{github}")

# Quick list comprehension test:
skills = ["Python", "Flask", "React", "SQLite", "Tailwind"]
print("\\nCore Technologies:")
for idx, skill in enumerate(skills, 1):
    print(f"  {idx}. {skill}")
`,
    outputSimulator: (inputCode: string) => {
      // Evaluate or format output based on user's input
      const lines = inputCode.split('\n');
      let result = `>>> Executing main.py with Python 3.12 runtime...\n\n`;
      let printedSomething = false;

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('print(')) {
          // extract print content
          const content = trimmed.slice(6, -1);
          // basic evaluation simulation
          if (content.includes('student_name') || content.includes('Joshua')) {
            result += `Hello, World! This is Joshua Kim S. Entrina.\n`;
            printedSomething = true;
          } else if (content.includes('college') || content.includes('Torres')) {
            result += `Studying at: Torres Capitol College\n`;
            printedSomething = true;
          } else if (content.includes('major') || content.includes('BSIT')) {
            result += `Program: BSIT 2nd Year, Section 2A\n`;
            printedSomething = true;
          } else if (content.includes('github') || content.includes('Josuwapy')) {
            result += `Check out my GitHub: https://github.com/Josuwapy\n`;
            printedSomething = true;
          } else if (content.includes('Core Technologies')) {
            result += `\nCore Technologies:\n  1. Python\n  2. Flask\n  3. React\n  4. SQLite\n  5. Tailwind\n`;
            printedSomething = true;
          }
        }
      }

      if (!printedSomething) {
        result += `Program executed successfully.\nOutput:\n`;
        result += `[Python 3.12.0 (Josuwapy Environment) - Torres Capitol College]\n`;
        result += `Process finished with exit code 0.`;
      } else {
        result += `\n>>> Process finished with exit code 0 (completed in 0.038s).`;
      }

      return result;
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Python & Programming',
    skills: [
      { name: 'Python 3.x', level: 'Advanced (Primary)', detail: 'Core OOP, scripts, automation, data structures' },
      { name: 'Flask / FastAPI', level: 'Intermediate', detail: 'RESTful API routing, JSON payloads, middleware' },
      { name: 'Data Structures', level: 'Proficient', detail: 'Lists, dictionaries, binary trees, recursion in Python' },
      { name: 'Algorithms', level: 'Proficient', detail: 'Sorting, searching, algorithmic complexity (Big O)' },
    ],
  },
  {
    title: 'Web & Frontend Engineering',
    skills: [
      { name: 'HTML5 & Modern CSS3', level: 'Proficient', detail: 'Semantic web, flexbox, CSS grid, accessible forms' },
      { name: 'JavaScript (ES6+)', level: 'Intermediate', detail: 'DOM manipulation, asynchronous fetch, event loops' },
      { name: 'React & TypeScript', level: 'Intermediate', detail: 'Component hierarchy, hooks, state, props type safety' },
      { name: 'Tailwind CSS', level: 'Advanced', detail: 'Utility-first architecture, dark mode, responsive styling' },
    ],
  },
  {
    title: 'Databases & System Tools',
    skills: [
      { name: 'SQLite & Relational SQL', level: 'Proficient', detail: 'Schema design, indexing, foreign keys, aggregations' },
      { name: 'Git & GitHub', level: 'Proficient', detail: 'Branching, commits, pull requests, repository hosting (@Josuwapy)' },
      { name: 'Windows & Linux CLI', level: 'Proficient', detail: 'Command-line scripting, environment configuration, package managers' },
      { name: 'VS Code & PyCharm', level: 'Advanced', detail: 'Debugging, extensions, linting, virtual environments (venv)' },
    ],
  },
  {
    title: 'UI/UX & Academic Foundations',
    skills: [
      { name: 'Responsive Web Design', level: 'Advanced', detail: 'Mobile-first optimization for smartphones and Windows PC' },
      { name: 'Systems Analysis & Design', level: 'Proficient', detail: 'DFDs, ERDs, use-case diagrams for college systems' },
      { name: 'UI Wireframing & Prototyping', level: 'Intermediate', detail: 'Clean interfaces, zero-clutter layouts, user flows' },
      { name: 'Technical Documentation', level: 'Proficient', detail: 'System manuals, API contracts, presentation materials' },
    ],
  },
];

export const ACADEMIC_MILESTONES = [
  {
    year: '2024 - Present',
    title: 'BSIT 2nd Year (Section 2A)',
    institution: 'Torres Capitol College',
    description: 'Enrolled in core computing subjects: Data Structures, Object-Oriented Programming with Python, Relational Database Systems, and Web Engineering.',
    highlight: 'Active Student Developer for Section 2A projects and lead developer on Student Feedback System.',
  },
  {
    year: '2023 - 2024',
    title: 'BSIT 1st Year (Freshman Honors Track)',
    institution: 'Torres Capitol College',
    description: 'Acquired strong fundamentals in computer programming, logic formulation, discrete mathematics, and computer hardware servicing.',
    highlight: 'Earned distinction in introductory programming and algorithm design.',
  },
  {
    year: 'Senior High School',
    title: 'TVL - Information & Communications Technology (ICT)',
    institution: 'Secondary Education',
    description: 'Specialized in Computer Systems Servicing (CSS), networking basics, and early web development fundamentals.',
    highlight: 'Graduated with high honors; ignited lifelong passion for programming and Python.',
  },
];
