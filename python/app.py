import numpy as np
import pandas as pd
import os
import pickle
from flask import Flask, jsonify, request, json, session
from functools import wraps
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"": {"origins": "http://127.0.0.1:5000"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)

filename = '../machinelearning/pickle_model.pkl'
model = pickle.load(open(filename, 'rb'))

mappings = {
    "Arthritis": "Rheumatologist",
    "Varicose veins": "Vascular Surgeon",
    "Dimorphic hemmorhoids(piles)": "General Surgeon",
    "Heart attack": "Cardiologist",
    "Cervical spondylosis": "Orthopedic",
    "Hyperthyroidism": "Endocrinologist",
    "Malaria": "General Physician",
    "Acne": "Dermatologist",
    "Hypoglycemia": "General Physician",
    "Osteoarthristis": "Orthopedic",
    "Hepatitis D": "Gastrologist",
    "Jaundice": "General Physician",
    "(vertigo) Paroymsal  Positional Vertigo": "Neurologist",
    "Migraine": "Neurologist",
    "Hypertension": "General Physician",
    "hepatitis A": "Gastrologist",
    "Diabetes": "Diabetologist",
    "Peptic ulcer diseae": "Gastrologist",
    "Gastroenteritis": "Gastrologist",
    "Chronic cholestasis": "Gastrologist",
    "Allergy": "General Physician",
    "GERD": "Gastrologist",
    "Urinary tract infection": "Urologist",
    "Typhoid": "General Physician",
    "Alcoholic hepatitis": "Gastrologist",
    "Hepatitis C": "Gastrologist",
    "Paralysis (brain hemorrhage)": "Neurologist",
    "Impetigo": "Dermatologist",
    "Dengue": "General Physician",   
}

# @app.route('/ml/',methods=['GET'])
# def getSymptoms():
#     data=pd.read_csv("../machinelearning/Training.csv")
#     columns_delete= ['nodal_skin_eruptions','muscle_wasting','burning_micturition','spotting_ urination','patches_in_throat','fluid_overload',
#                     'swelled_lymph_nodes', 'malaise', 'phlegm', 'swollen_extremeties', 'extra_marital_contacts', 'toxic_look_(typhos)', 'altered_sensorium',
#                     'dischromic _patches', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'receiving_unsterile_injections', 'coma', 'fluid_overload.1', 'silver_like_dusting',
#                     'small_dents_in_nails', 'yellow_crust_ooze']
#     for i in columns_delete:
#         del data[i]
#     column = data.columns.values.tolist()
#     column.remove('prognosis') 
#     return jsonify({"symptoms" : column})

@app.route('/ml/predict/',methods=['GET'])
def predictDisease():
    # Response:   {
    #                 "disease": "Allergy",
    #                 "specialist": "General Physician"
    #             }
    data=json.loads(request.data)
    final_features = [np.array(list(data.values()))]
    prediction = model.predict(final_features)
    specialist = mappings[prediction[0]]
    return jsonify({"disease" : prediction[0], "specialist": specialist})
    
if __name__ == "__main__":
    app.run(debug=True)