const medicalConditionsList = [
    "All Diabetes",
    "Alzheimer's Disease",
    "Anemia",
    "Anxiety",
    "Asthma",
    "Atrial Fibrillation",
    "Bariatric Surgery",
    "Breast Cancer",
    "Bronchiectasis",
    "Chronic Kidney Disease",
    "Chronic Obstructive Pulmonary Disease",
    "Colorectral Cancer",
    "Congestive Heart Failure",
    "Crohn's Disease",
    "Depression",
    "Diabetes Type 1",
    "Emphysema",
    "Endometrial Cancer",
    "Fibromyalgia",
    "Glaucoma",
    "Heart Transplant",
    "Hepatitis",
    "Hip Replacement",
    "Hip/Pelvic Fracture",
    "Hyperlipidemia",
    "Ischemic Heart Disease",
    "Knee Joint Replacement",
    "Leukemia",
    "Lung Cancer",
    "Lymphoma",
    "Metastatic Brain Tumor",
    "Multiple Sclerosis",
    "Opioid Dependency",
    "Osteoarthritis",
    "Osteoporosis",
    "Ovarian Cancer",
    "Parkinson's Disease",
    "Prostate Cancer",
    "Resuscitation",
    "Rheumatoid Arthritis",
    "Senile Dementia",
    "Sleep Apnea",
    "Spine",
    "Total Joint Replacement",
    "Trigeminal Neuralgia",
    "Ulcerative Colitis",
    "Ventricular Assist Device (VAD)",
    "Acquired Hypothyroidism",
    "Acute Myocardial Infarction",
    "Hypertension",
    "Bronchitis",
    "Diabetes Type 2",
    "COVID-19",
    "Physical therapy",
    "Migraine Headaches",
    "Hernia"
  ];
  
  const sortedMedicalConditionsList = medicalConditionsList.sort()
  
  const capitalizeFirstLetterOfEachWord = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }
  
  export const medicalConditionsArray = sortedMedicalConditionsList.map(
    (condition) => ({
      value: condition,
      label: capitalizeFirstLetterOfEachWord(condition),
      searchValue: condition,
    }),
  )
  