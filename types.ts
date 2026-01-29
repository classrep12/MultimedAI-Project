
export enum ScanType {
  XRAY_CHEST = 'Chest X-ray',
  XRAY_KNEE = 'Knee X-ray',
  CT = 'CT Scan',
  MRI = 'MRI'
}

export interface ClassResult {
  label: string;
  confidence: number;
}

export interface ModelComparison {
  name: string;
  prediction: string;
  confidence: number;
  reasoning: string;
  status: 'optimal' | 'divergent' | 'corroborated';
}

export interface InfoTabContent {
  type: 'table' | 'text';
  headers?: string[];  
  columns?: string[];  
  rows?: any[][];
  content?: string;
}

export interface DiagnosisResult {
  id: string;
  timestamp: string;
  scanType: ScanType;
  prediction: string;
  confidence: number;
  icdCode: string;
  primaryAyurvedaCode: string;
  radiologicalObservation: string;
  modelArchitecture?: string; 
  detectedAnatomy?: string;
  imageUrl: string;      
  
  original_url?: string;
  heatmap_url?: string;
  overlay_url?: string;
  image_url?: string;    
  all_results?: ClassResult[];
  
  info?: Record<string, InfoTabContent>;
  comparisons?: ModelComparison[];
  allResults: ClassResult[]; 
}

export interface UserSettings {
  darkMode: boolean;
  hospitalName: string;
}
