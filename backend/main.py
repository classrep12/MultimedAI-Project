from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from model_factory import orchestrator  # DiagnosticFactory instance

app = FastAPI(title="CCRAS Local Node")

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "Institutional AI Node Online"}

@app.post("/predict-xray/chest")
async def predict_chest(file: UploadFile = File(...)):
    result = orchestrator.run_inference(file, "Chest X-ray")
    return result

@app.post("/predict-xray/knee")
async def predict_knee(file: UploadFile = File(...)):
    result = orchestrator.run_inference(file, "Knee X-ray")
    return result

@app.post("/predict-mri")
async def predict_mri(file: UploadFile = File(...)):
    # MRI will use mock inference only to avoid unsafe weight issues
    result = orchestrator.run_inference(file, "MRI")
    return result

@app.post("/predict-ct")
async def predict_ct(file: UploadFile = File(...)):
    result = orchestrator.run_inference(file, "CT")
    return result
