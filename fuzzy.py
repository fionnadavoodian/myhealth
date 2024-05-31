import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

from connection import RequestHandler

# the data which fiona will send and it will be used
# data = RequestHandler.do_POST()


def calculate(data: dict):
    from rules import fuzzy_logic

    cancer_ctrl = ctrl.ControlSystem(fuzzy_logic())
    cancer_sim = ctrl.ControlSystemSimulation(cancer_ctrl)

    if data["high_salt"] == False:
        cancer_sim.input['high_salt'] = 0  # false
    else:
        cancer_sim.input['high_salt'] = 1

    # Input values
    cancer_sim.input['age'] = data["Age"]

    if data["tobacco_smoking"] == "low":
        cancer_sim.input['tobacco_smoking'] = 1
    elif data["tobacco_smoking"] == "moderate":
        cancer_sim.input['tobacco_smoking'] = 7
    else:
        cancer_sim.input['tobacco_smoking'] = 20

    if data["high_salt"] == False:
        cancer_sim.input['high_salt'] = 0  # false
    else:
        cancer_sim.input['high_salt'] = 1

    BMI = (data["Weight"])/((data["Height"]/100)*(data["Height"]/100))
    cancer_sim.input['weight'] = BMI

    if data['Helicobacter_pylori_infection'] == False:
        cancer_sim.input['Helicobacter_pylori_infection'] = 0  # false
    else:
        cancer_sim.input['Helicobacter_pylori_infection'] = 1

    """
    Underweight: BMI less than 18.5
    Normal: BMI between 18.5 and 24.9
    Overweight: BMI between 25 and 29.9
    Obese: BMI of 30 or greater
    """

    # Compute
    cancer_sim.compute()

    # Output
    print("Risk of Gastric Cancer:", cancer_sim.output['cancer_risk'])
    if cancer_sim.output['cancer_risk'] < 33:
        risk = "low risk"
    elif 34 < cancer_sim.output['cancer_risk'] < 65:
        risk = "medium risk"
    else:
        risk = "high risk"
    print(risk)

    return cancer_sim.output['cancer_risk']


def save_db(newData):
    import pymongo
    import pymongo.mongo_client
    from pymongo import MongoClient

    client = MongoClient("mongodb://localhost:27017/")
    mydb = client["MainDB"]
    mycollection = mydb["pationt"]

    # insert data into mongo db
    mycollection.insert_one(newData)


# data for testing
data = {
    "Fname": "farud",
    "Lname": "farokhi",
    "Age": 74,
    "Gender": "male",
    "Email": "ali@yahoo.com",
    "Password": "789",
    "Weight": 84,
    "Height": 168,
    "Helicobacter_pylori_infection": False,
    "Gastric_atrophic": False,
    "peptic_ulcer": False,
    "Gastric_surgery": False,
    "penicious_anemia": False,
    "Family_history": False,
    "Vegetable": True,
    "high_salt": False,
    "tobacco_smoking": "high",
}

# start
cancer_risk_peercent = calculate(data)

if cancer_risk_peercent < 33:
    risk = "low risk"
elif 34 < cancer_risk_peercent < 65:
    risk = "medium risk"
else:
    risk = "high risk"

data.update({"cancer_risk": risk})
# save_db(data)
