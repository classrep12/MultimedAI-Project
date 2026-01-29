# CCRAS Medical AI Platform

## Setup Instructions

### Prerequisites
- Python 3.11+
- Node.js 20+
- npm

### Backend Setup
```bash
cd backend
python -m venv myenv
myenv\Scripts\activate.bat
 #(on Windows)
pip install -r requirements.txt
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
npm install
npm run dev
```

### Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
