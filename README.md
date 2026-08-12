# MultimedAI — Medical AI Analysis Platform

MultimedAI is a full-stack Medical AI platform developed as a collaborative project to provide AI-assisted analysis of medical images through a web-based clinical interface.

The platform combines locally hosted machine-learning models with Generative AI to produce structured diagnostic insights, confidence scores, clinical observations, medical classification information, and downloadable reports.

## Project Demo 
[Watch MultimedAI Demo](https://drive.google.com/file/d/1Uc9qes-WpJwmvJ65IlNFAsMALfAyNHas/view?usp=drive_link)

The demo showcases the complete workflow from medical image upload and
AI-assisted analysis to diagnostic results, medical classification, and
PDF report generation.

## Problem Statement

Medical image analysis involves large amounts of visual information and requires significant clinical expertise. MultimedAI explores how AI can assist this workflow by providing an interactive platform where medical images can be uploaded, analyzed through ML models, and supplemented with AI-generated explanations.

The system is designed as an **assistive research platform**, not as a replacement for clinical diagnosis.

## Key Features

* Medical image upload and analysis through a web interface
* X-ray analysis workflows for supported conditions
* CT and MRI analysis workflows
* Local ML model inference through a Python backend
* Generative AI-assisted diagnostic interpretation
* Confidence scores and structured diagnostic observations
* Medical classification and ICD code generation
* AI-generated clinical reasoning
* Visualization support for model outputs
* Downloadable PDF diagnostic reports
* Interactive analytics and result visualization
* REST APIs for communication between frontend and backend

## System Architecture

```text
                        User
                         |
                         v
              React + TypeScript
                 Web Interface
                         |
                         | HTTP / REST
                         v
                 Python + FastAPI
                   Backend API
                         |
             +-----------+-----------+
             |                       |
             v                       v
       Local ML Models        Google Gemini API
        PyTorch-based         AI-assisted reasoning
             |                       |
             +-----------+-----------+
                         |
                         v
                Structured Results
                         |
             +-----------+-----------+
             |                       |
             v                       v
       Clinical Insights       PDF Reports
```

## AI Processing Workflow

```text
Image Upload
     |
     v
Input Validation
     |
     v
Medical Image Preprocessing
     |
     v
Local ML Model Inference
     |
     +----------------------+
     |                      |
     v                      v
Prediction             Model Output
     |                      |
     +----------+-----------+
                |
                v
       Gemini-assisted Analysis
                |
                v
   Diagnostic Interpretation
                |
        +-------+-------+
        |       |       |
        v       v       v
   Confidence  ICD   Observations
        |
        v
    PDF Report
```

## Technology Stack

| Layer             | Technologies                          |
| ----------------- | ------------------------------------- |
| Frontend          | React, TypeScript, Vite               |
| Backend           | Python, FastAPI, Uvicorn              |
| Machine Learning  | PyTorch, trained medical image models |
| Generative AI     | Google Gemini API                     |
| Data / Processing | NumPy, image-processing utilities     |
| Visualization     | Chart.js, React Chart.js              |
| Reporting         | jsPDF                                 |
| Development       | Git, GitHub, VS Code                  |

## Core Components

### Frontend

The frontend is implemented using React and TypeScript and provides the user-facing clinical workflow.

Major interfaces include:

* Dashboard
* Diagnostic classifier selection
* Medical image upload
* Analysis results
* Diagnostic observations
* Classification information
* Analytics and visualizations
* Report generation

### FastAPI Backend

The Python backend exposes REST endpoints for medical image processing and model inference.

The backend is responsible for:

* Receiving uploaded images
* Validating input
* Running configured ML models
* Returning prediction results
* Providing confidence information
* Generating structured API responses
* Supporting frontend-backend communication

Interactive API documentation is available through FastAPI Swagger UI.

### Machine Learning Layer

The platform integrates PyTorch-based medical image models into the backend inference pipeline.

The model layer is designed to separate model loading and inference from the API layer, allowing different models to be used for different imaging workflows.

The current implementation includes model-backed workflows for supported X-ray analysis, while some other modality workflows use application-level/mock inference where dedicated trained weights are not available.

### Generative AI Layer

Google Gemini is used as an additional reasoning and interpretation layer.

The system can provide the model output and relevant clinical context to the Generative AI component to generate structured observations and explanations.

This creates a hybrid workflow:

```text
Traditional ML Model
        +
Generative AI
        =
Structured AI-assisted Analysis
```

The ML model provides prediction-oriented outputs, while the Generative AI layer assists with interpretation and presentation.

## Diagnostic Output

The analysis response can contain information such as:

* Predicted condition
* Confidence score
* Clinical observations
* Diagnostic reasoning
* ICD classification information
* Visualization references
* Additional structured metadata

This information is then presented through the frontend for user review.

## Medical Classification

The platform incorporates medical classification information into the diagnostic workflow.

Depending on the analysis, the application can present:

* ICD-related diagnostic codes
* Ayurveda-related terminology
* Siddha-related terminology
* Unani-related terminology

These classifications are presented as supporting information alongside the AI-generated analysis.

## Report Generation

The platform generates downloadable PDF reports from analysis results.

Reports can contain:

* Diagnostic findings
* Confidence information
* Clinical observations
* Classification information
* Analysis metadata
* Visual evidence where available

PDF generation is implemented on the frontend using `jsPDF`.

## API Endpoints

The backend provides modality-specific prediction endpoints, including workflows such as:

```text
POST /predict-xray/chest
POST /predict-xray/knee
POST /predict-mri
POST /predict-ct
```

The exact available endpoints can be explored through the FastAPI documentation.

## Project Structure

```text
MultimedAI/
│
├── backend/
│   ├── models/
│   ├── services/
│   ├── main.py
│   └── requirements.txt
│
├── components/
│   └── ...
│
├── services/
│   ├── apiService.ts
│   └── geminiService.ts
│
├── App.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Installation

### Prerequisites

* Python 3.11+
* Node.js 20+
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/classrep12/MultimedAI-Project.git
cd MultimedAI-Project
```

### Backend Setup

```bash
cd backend
python -m venv myenv
```

Windows:

```bash
myenv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup

From the project root:

```bash
npm install
npm run dev
```

## Local Services

| Service          | Address                    |
| ---------------- | -------------------------- |
| Frontend         | http://localhost:3000      |
| Backend API      | http://localhost:8000      |
| Swagger API Docs | http://localhost:8000/docs |

## Engineering Highlights

* Developed a modular frontend-backend architecture using React, TypeScript, and FastAPI.
* Integrated PyTorch-based medical image inference into REST APIs.
* Integrated Generative AI with traditional ML outputs for richer diagnostic interpretation.
* Designed modality-specific API endpoints for medical image analysis.
* Implemented structured result handling for predictions, confidence scores, observations, and classification data.
* Implemented client-side PDF report generation using jsPDF.
* Added data visualization capabilities using Chart.js.
* Separated frontend presentation, API communication, model inference, and AI reasoning into distinct application components.

## Collaboration

MultimedAI was developed as a collaborative project.

Contributions across the project include frontend development, backend/API development, AI/ML integration, medical image processing, UI implementation, and system integration.

Individual contributions should be described according to the work completed by each contributor.

## Future Scope

* Integration of additional validated medical imaging models
* Improved model evaluation and benchmarking
* Medical image segmentation and explainability
* Batch image analysis
* Scalable model-serving infrastructure
* Integration with healthcare information systems
* Improved authentication and access control

## Disclaimer

MultimedAI is a research and educational project intended to explore AI-assisted medical image analysis.

It is not a certified medical device and should not be used as a substitute for professional medical diagnosis or clinical decision-making. AI-generated results should be reviewed by qualified healthcare professionals.
