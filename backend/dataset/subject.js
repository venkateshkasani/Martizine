const data = [
    {
      "course": "ECE",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Maths-1", "Applied Physics", "Programming for problem solving", "Engineering graphics"],
        "sem2": ["Maths-2", "Chemistry", "Basic Electrical Engineering", "English Language Communication Skills"],
        "sem3": ["Electronic Devices & Circuits", "Probability Theory & Stochastic Processes", "Signals & Systems", "Digital System Design", "Network Analysis & Transmission Lines"],
        "sem4": ["Transformations, Complex Variables & Numerical Techniques (TCVNT)", "Electromagnetic Fields & Waves", "Analog & Digital Communications", "Linear Integrated IC Applications", "Electronic Circuit Analysis"],
        "sem5": ["Electronic Measuring Instruments", "Business Economics & Financial Analysis", "Control Systems", "Microprocessors & Microcontrollers", "Data Communication Networks"],
        "sem6": ["Antennas & Wave Propagation", "Very Large Scale Integration (VLSI)", "Digital Signal Processing", "Embedded System Design", "Cyber Law & Ethics"],
        "sem7": ["Digital Image Processing", "Database Management Systems", "Java Programming", "Professional Practice Law & Ethics", "Microwave & Optical Communications"],
        "sem8": ["System On Chip", "Radar Systems", "Scripting Languages"]
      }
    },
    {
      "course": "CSE",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra & Calculus", "Basic Electrical Engineering", "Engineering Chemistry", "Engineering Workshop"],
        "sem2": ["Advanced Calculus", "Applied Physics", "Programming for Problem Solving", "Engineering Graphics"],
        "sem3": ["R Programming", "Computer Oriented Statistical Methods", "Computer Organization & Architecture", "Data Structures using C", "Analog & Digital Electronics"],
        "sem4": ["Operating Systems", "Python Programming", "Java Programming", "Business Economics & Financial Analysis", "Discrete Mathematics"],
        "sem5": ["Formal Languages & Automata Theory", "Software Engineering", "Computer Networks", "Database Management Systems", "Principles of Programming Languages"],
        "sem6": ["Machine Learning", "Compiler Design", "Design and Analysis of Algorithms", "Web Technologies", "Fundamentals of Internet of Things"],
        "sem7": ["Cryptography & Network Security", "Data Mining", "Cloud Computing", "Electronic Sensors", "Software Process & Project Management"],
        "sem8": [""]
      }
    },
    {
      "course": "IT",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra & Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
        "sem2": ["Advanced Calculus", "Applied Physics", "Programming for problem solving", "Engineering Graphics"],
        "sem3": ["Python Programming", "Computer Oriented Statistical Methods", "Business Economics & Financial Analysis", "Data Structures using C", "Analog & Digital Electronics"],
        "sem4": ["Operating Systems", "Database Management Systems", "Java Programming", "Computer Organization & Microprocessor", "Discrete Mathematics"],
        "sem5": ["Formal Languages & Automata Theory", "Software Engineering", "Data Communication & Computer Networks", "Web Programming", "Principles of Programming Languages"],
        "sem6": ["Big Data Analytics", "Principles of Compiler Construction", "Algorithm Design & Analysis", "Embedded Systems & IOT", "Software Testing Methodologies"],
        "sem7": ["Information Security", "Machine Learning", "Cloud Computing", "Electronic Sensors", "Software Process & Project Management"],
        "sem8": [""]
      }
    },
    {
      "course": "CSE_AIML",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra & Calculus", "Applied Physics", "Programming for problem solving", "Engineering graphics"],
        "sem2": ["Advanced Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
        "sem3": ["Discrete Mathematics", "Data Structures", "Mathematical & Statistical Foundations", "Computer Architecture & Organization", "Python Programming"],
        "sem4": ["Formal Languages & Automata Theory", "Introduction to Artificial Intelligence", "Operating Systems", "Database Management Systems", "Object Oriented Programming using Java"],
        "sem5": ["Advanced Artificial Intelligence", "Data Warehousing & Data Mining", "Design & Analysis of Algorithms", "Computer Networks", "Web Technologies"],
        "sem6": ["Machine Learning", "Natural Language Processing", "Software Engineering", "Computer Vision", "Fundamentals of IOT"],
        "sem7": ["Deep Learning", "Robotics", "Cloud Computing", "Electronic Sensors", "Speech & Video Processing"],
        "sem8": [""]
      }
    },
    {
      "course": "AIML",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra & Calculus", "Applied Physics", "Programming for problem solving", "Engineering graphics"],
        "sem2": ["Advanced Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
        "sem3": ["Discrete Mathematics", "Data Structures", "Mathematical & Statistical Foundations", "Computer Architecture & Organization", "Python Programming"],
        "sem4": ["Formal Languages & Automata Theory", "Introduction to Artificial Intelligence", "Operating Systems", "Database Management Systems", "Object Oriented Programming using Java"],
        "sem5": ["Design and Analysis of Algorithms", "Machine Learning", "Computer Networks", "Compiler Design", "Computer Graphics"],
        "sem6": ["Software Engineering", "DevOps", "Natural Language Processing", "Data Mining", "Fundamentals of IOT"],
        "sem7": ["Neural Networks & Deep Learning", "Reinforcement Learning", "Cloud Computing", "Electronic Sensors", "Adhoc & Sensor Networks"],
        "sem8": [""]
      }
    },
    {
      "course": "AIDS",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra and Calculus", "Applied Physics", "Programming for problem solving", "Engineering Graphics"],
        "sem2": ["Advanced Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
        "sem3": ["Discrete Mathematics", "Data Structures", "Mathematical & Statistical Foundations", "Computer Organization & Architecture", "Python Programming"],
        "sem4": ["Formal Languages & Automata Theory", "Introduction to Artificial Intelligence", "Operating Systems", "Database Management Systems", "Object Oriented Programming using Java"],
        "sem5": ["Machine Learning", "Designing and Analysis of Algorithms", "Big Data Technologies", "Software Engineering", "Computer Graphics"],
        "sem6": ["Knowledge Representation & Reasoning", "Data Analytics", "Computer Networks", "Web Technologies", "Fundamentals of IOT"],
        "sem7": ["Deep Learning", "Data wrangling & visualization", "Cloud Computing", "Electronic Sensors", "ADHOC Sensor Networks"],
        "sem8": [""]
      }
    },
    {
      "course": "CSG",
      "uploadedAt": new Date(),
      "sem_subjects": {
        "sem1": ["Linear Algebra and Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
        "sem2": ["Advanced Calculus", "Applied Physics", "Programming for Problem Solving", "Engineering Graphics"],
        "sem3": ["Analog and Digital Electronics", "Data Structures", "Mathematical and Statistical Foundations", "Computer Vision", "Python Programming"],
        "sem4": ["Discrete Mathematics", "Computer Graphics", "Operating Systems", "Database Management Systems", "Java Programming"],
        "sem5": ["Design and Analysis of Experiments", "Computer Networks", "Design and Analysis of Algorithms", "Software Engineering", "Data Analytics"],
        "sem6": ["Automata Theory and Compiler Design", "Introduction to Engineering Design", "Machine Learning", "Software Testing Methodologies", "Fundamentals of Internet of Things"],
        "sem7": ["Deep Learning", "Information Security", "Cloud Computing", "Electronic Sensors", "Evolutionary Computing"],
        "sem8": [""]
      }
    },
    {
        "course": "EEE",
        "uploadedAt": new Date(),
        "sem_subjects": {
            "sem1": ["Linear Algebra and Calculus", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Workshop"],
            "sem2": ["Advanced Calculus", "Applied Physics", "Programming for Problem Solving", "Engineering Graphics"],
            "sem3": ["Electrical Circuit Analysis", "Electromagnetic Fields", "Electrical Machines-I", "Engineering Mechanics", "Analog Electronics"],
            "sem4": ["Transformations, Complex Variables & Numerical Techniques", "Electrical Machines - II", "Power Electronics", "Digital Electronics", "Power Systems - I"],
            "sem5": ["Control Systems", "Power Systems II", "Power Semiconductor Drives", "Electrical Measurements and Instrumentation", "Business Economics and Financial Analysis"],
            "sem6": ["Power System Protection", "Microprocessors and Microcontrollers", "Signals and Systems", "Electrical Energy Conservation and Auditing", "High Voltage Engineering"],
            "sem7": ["Power Quality", "Fundamentals of Management for Engineers", "Digital Signal Processing", "Data structures"],
            "sem8": [""]
        }
    }    
]

module.exports = data;