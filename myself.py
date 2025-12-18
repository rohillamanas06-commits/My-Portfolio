"""
Manas Rohilla - Portfolio Backend API
All-in-one Flask application with embedded data
"""

from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
from datetime import datetime
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure CORS with environment variable
cors_origins = os.getenv('CORS_ORIGINS', '*')
CORS(app, resources={r"/*": {"origins": cors_origins}})

# ============================================================================
# PORTFOLIO DATA
# ============================================================================

PORTFOLIO_DATA = {
    "about": {
        "name": "Manas Rohilla",
        "title": "AI-Based Developer & BTech CSE Student",
        "university": "Manipal University Jaipur",
        "year": "2nd Year",
        "degree": "Bachelor of Technology - Computer Science and Engineering",
        "bio": "Passionate AI-based developer currently pursuing BTech in Computer Science and Engineering at Manipal University Jaipur. Experienced in building intelligent applications with focus on healthcare and smart solutions. Dedicated to leveraging AI and machine learning to solve real-world problems.",
        "location": "Jaipur, India",
        "specialization": "Artificial Intelligence & Machine Learning",
        "image": "/api/profile-image"
    },
    
    "experience": {
        "education": [
            {
                "institution": "Manipal University Jaipur",
                "degree": "Bachelor of Technology in Computer Science and Engineering",
                "duration": "2022 - 2026",
                "current": True,
                "year": "2nd Year",
                "description": "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications"
            },
            {
                "institution": "Jain Public School",
                "degree": "High School",
                "duration": "Completed",
                "current": False,
                "description": "Completed secondary education with strong foundation in mathematics and science"
            }
        ],
        "highlights": [
            "AI & ML focused development",
            "Full-stack application development",
            "Healthcare technology solutions",
            "Smart assistant systems"
        ]
    },
    
    "social": {
        "github": {
            "url": "https://github.com/rohillamanas06-commits",
            "username": "@rohillamanas06-commits",
            "icon": "github"
        },
        "linkedin": {
            "url": "https://www.linkedin.com/in/manas-rohilla-b73415338/",
            "username": "Manas Rohilla",
            "icon": "linkedin"
        },
        "email": {
            "url": "mailto:rohillamanas06@gmail.com",
            "address": "rohillamanas06@gmail.com",
            "icon": "email"
        },
        "instagram": {
            "url": "https://www.instagram.com/manas_rohilla_/",
            "username": "@manas_rohilla_",
            "icon": "instagram"
        }
    },
    
    "projects": [
        {
            "id": 0,
            "name": "MedMate - AI Health Assistant v2",
            "description": "Advanced AI-powered health assistant providing intelligent medical guidance, symptom analysis, and health recommendations. Built with cutting-edge machine learning algorithms to assist users with their healthcare needs.",
            "github": "https://github.com/rohillamanas06-commits/MedMate---AI-Health-Assistant-v2",
            "featured": True,
            "tags": ["AI", "Machine Learning", "Healthcare", "Python", "Natural Language Processing"],
            "technologies": ["Python", "TensorFlow", "Flask", "NLP", "AI/ML"],
            "category": "Healthcare AI",
            "status": "Active"
        },
        {
            "id": 1,
            "name": "MedMate - AI Health Assistant",
            "description": "First version of the intelligent health assistant system. Provides AI-driven health insights, symptom checking, and personalized health recommendations to users.",
            "github": "https://github.com/rohillamanas06-commits/MedMate---AI-Health-Assistant",
            "featured": True,
            "tags": ["AI", "Healthcare", "Machine Learning", "Python", "Assistant"],
            "technologies": ["Python", "Machine Learning", "Flask", "AI"],
            "category": "Healthcare AI",
            "status": "Active"
        },
        {
            "id": 2,
            "name": "Sawari - Bus Assistant",
            "description": "Smart bus assistant application designed to help commuters with real-time bus tracking, route optimization, and schedule management. Features AI-powered predictions for better travel planning.",
            "github": "https://github.com/rohillamanas06-commits/Sawari---bus---Assistant",
            "featured": True,
            "tags": ["AI", "Transportation", "Smart City", "Python", "Assistant"],
            "technologies": ["Python", "AI", "APIs", "Real-time Processing"],
            "category": "Smart Transportation",
            "status": "Active"
        },
        {
            "id": 3,
            "name": "Weather Buddy",
            "description": "A weather application that provides real-time weather information and forecasts. Simple and user-friendly interface for checking weather conditions.",
            "github": "https://github.com/rohillamanas06-commits/Weather-Buddy",
            "featured": False,
            "tags": ["Python", "API Integration", "Weather", "Web App"],
            "technologies": ["Python", "APIs", "Web Development"],
            "category": "Utility",
            "status": "Active"
        }
    ],
    
    "skills": {
        "primary": [
            "Artificial Intelligence",
            "Machine Learning",
            "Python Development",
            "Natural Language Processing",
            "Deep Learning"
        ],
        "backend_languages": [
            "Python",
            "Java",
            "C",
            "MATLAB"
        ],
        "databases": [
            "PostgreSQL"
        ],
        "ai_tools": [
            "Cursor AI",
            "Windsurf",
            "Bolt",
            "GitHub Copilot",
            "Lovable"
        ],
        "deployment": [
            "Render",
            "Railway",
            "Vercel",
            "Netlify"
        ],
        "technologies": [
            "Python",
            "Java",
            "C",
            "MATLAB",
            "Flask",
            "PostgreSQL",
            "Pandas",
            "NumPy",
            "Git & GitHub",
            "Render",
            "Railway",
            "Vercel",
            "Netlify"
        ]
    }
}

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

def load_data():
    """Return portfolio data"""
    return PORTFOLIO_DATA

# ============================================================================
# ERROR HANDLERS
# ============================================================================

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

# ============================================================================
# API ROUTES
# ============================================================================

@app.route('/')
def home():
    """API home endpoint with documentation"""
    return jsonify({
        'message': 'Welcome to Manas Rohilla Portfolio API',
        'version': '1.0.0',
        'endpoints': {
            '/api/about': 'GET - Get personal information',
            '/api/projects': 'GET - Get all projects',
            '/api/projects/<id>': 'GET - Get specific project',
            '/api/experience': 'GET - Get education and experience',
            '/api/social': 'GET - Get social media links',
            '/api/contact': 'POST - Send contact message',
            '/api/profile-image': 'GET - Get profile image',
            '/api/skills': 'GET - Get skills and technologies',
            '/api/stats': 'GET - Get portfolio statistics',
            '/api/search': 'GET - Search projects (query param: q)'
        }
    })

@app.route('/api/about', methods=['GET'])
def get_about():
    """Get personal information"""
    data = load_data()
    return jsonify(data['about'])

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all projects"""
    data = load_data()
    return jsonify(data['projects'])

@app.route('/api/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """Get specific project by ID"""
    data = load_data()
    projects = data['projects']
    
    if 0 <= project_id < len(projects):
        return jsonify(projects[project_id])
    return jsonify({'error': 'Project not found'}), 404

@app.route('/api/experience', methods=['GET'])
def get_experience():
    """Get education and experience"""
    data = load_data()
    return jsonify(data['experience'])

@app.route('/api/social', methods=['GET'])
def get_social():
    """Get social media links"""
    data = load_data()
    return jsonify(data['social'])

@app.route('/api/skills', methods=['GET'])
def get_skills():
    """Get skills and technologies"""
    data = load_data()
    return jsonify(data['skills'])

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get portfolio statistics"""
    data = load_data()
    return jsonify({
        'total_projects': len(data['projects']),
        'featured_projects': len([p for p in data['projects'] if p['featured']]),
        'years_of_study': 4,
        'technologies': len(data['skills']['technologies']),
        'last_updated': datetime.now().isoformat()
    })

@app.route('/api/profile-image', methods=['GET'])
def get_profile_image():
    """Get profile image"""
    image_path = 'Myself.Jpg'
    if os.path.exists(image_path):
        return send_file(image_path, mimetype='image/jpeg')
    return jsonify({'error': 'Image not found'}), 404

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # In a real application, you would:
        # 1. Validate email format
        # 2. Store in database
        # 3. Send email notification
        # 4. Implement rate limiting
        
        # For now, we'll just log and return success
        print(f"Contact form submission: {data}")
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! I will get back to you soon.'
        }), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/send-email', methods=['POST'])
def send_email():
    """Send email from contact form"""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        # Get email credentials from environment variables
        smtp_server = os.getenv('SMTP_SERVER')
        smtp_port = int(os.getenv('SMTP_PORT'))
        smtp_username = os.getenv('SMTP_USERNAME')
        smtp_password = os.getenv('SMTP_PASSWORD')
        
        # Create email
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = smtp_username  # Send to yourself
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        body = f"""
New message from portfolio contact form:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
Sent from Portfolio Contact Form
"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email with timeout
        with smtplib.SMTP(smtp_server, smtp_port, timeout=10) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
        
        print(f"Email sent from: {name} ({email})")
        
        return jsonify({
            'success': True,
            'message': 'Email sent successfully!'
        }), 200
    
    except Exception as e:
        print(f"Email error: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/search', methods=['GET'])
def search():
    """Search projects by keyword"""
    query = request.args.get('q', '').lower()
    if not query:
        return jsonify({'error': 'Search query required'}), 400
    
    data = load_data()
    results = []
    
    for project in data['projects']:
        if (query in project['name'].lower() or 
            query in project['description'].lower() or 
            any(query in tag.lower() for tag in project['tags'])):
            results.append(project)
    
    return jsonify({
        'query': query,
        'count': len(results),
        'results': results
    })

# ============================================================================
# MAIN
# ============================================================================

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
