from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/send-data':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            received_data = json.loads(post_data.decode())

            # Process received data as needed
            # For example:
            # processed_data = process_received_data(received_data)
            # print(processed_data)

            # Prepare response
            response_data = {"message": "Data received successfully"}

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

    def do_GET(self):
        if self.path == '/api/get-data':
            # Prepare data to send to frontend
            data_to_send = {"message": "Hello from Python Backend!"}

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(data_to_send).encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')





def fuzzy_logic():
    # Antecedents
    age = ctrl.Antecedent(np.arange(0, 101, 1), 'age')
    tobacco_smoking = ctrl.Antecedent(np.arange(0, 21, 1), 'tobacco_smoking')
    high_salt = ctrl.Antecedent(np.arange(0, 2, 1), 'high_salt')
    weight = ctrl.Antecedent(np.arange(10, 41, 1), 'weight')
    Helicobacter_pylori_infection = ctrl.Antecedent(np.arange(0, 2, 1), 'Helicobacter_pylori_infection')

    # Consequent
    cancer_risk = ctrl.Consequent(np.arange(0, 101, 1), 'cancer_risk')

    # Membership functions for age
    age['young'] = fuzz.trimf(age.universe, [0, 0, 40])
    age['middle_aged'] = fuzz.trimf(age.universe, [30, 50, 70])
    age['old'] = fuzz.trimf(age.universe, [60, 100, 100])


    # Membership functions for high_salt 
    high_salt['false'] = fuzz.trimf(high_salt.universe, [0, 0, 1])
    high_salt['true'] = fuzz.trimf(high_salt.universe, [0, 1, 1])

    # Membership functions for weight
    weight['underweight'] = fuzz.trimf(weight.universe, [0, 0, 18.5])
    weight['normal'] = fuzz.trimf(weight.universe, [18.5, 24.9, 29.9])
    weight['overweight'] = fuzz.trimf(weight.universe, [25, 29.9, 34.9])
    weight['obese'] = fuzz.trimf(weight.universe, [30, 40, 50])
    """
    Underweight: BMI less than 18.5
    Normal: BMI between 18.5 and 24.9
    Overweight: BMI between 25 and 29.9
    Obese: BMI of 30 or greater
    """

    # Membership functions for smoking
    tobacco_smoking['low'] = fuzz.trimf(tobacco_smoking.universe, [0, 0, 10])
    tobacco_smoking['moderate'] = fuzz.trimf(tobacco_smoking.universe, [5, 10, 15])
    tobacco_smoking['high'] = fuzz.trimf(tobacco_smoking.universe, [10, 20, 20])

    # Membership functions for Helicobacter_pylori_infection 
    Helicobacter_pylori_infection['false'] = fuzz.trimf(Helicobacter_pylori_infection.universe, [0, 0, 1])
    Helicobacter_pylori_infection['true'] = fuzz.trimf(Helicobacter_pylori_infection.universe, [0, 1, 1])

    # Membership functions for cancer risk
    cancer_risk['low'] = fuzz.trimf(cancer_risk.universe, [0, 0, 50])
    cancer_risk['medium'] = fuzz.trimf(cancer_risk.universe, [30, 50, 70])
    cancer_risk['high'] = fuzz.trimf(cancer_risk.universe, [50, 100, 100])

    # Rules
    rules = []

    rule1 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule2 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule3 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule4 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule5 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule6 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule7 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule8 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule9 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule10 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule11 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule12 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule13 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule14 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule15 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule16 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule17 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule18 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule19 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule20 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule21 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule22 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule23 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule24 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule25 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule26 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule27 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['underweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule28 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['low']))
    rule29 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule30 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule31 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule32 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule33 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule34 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule35 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule36 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule37 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule38 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule39 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule40 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule41 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule42 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule43 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule44 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule45 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule46 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule47 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule48 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule49 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule50 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule51 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule52 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule53 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule54 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule55 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule56 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule57 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule58 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule59 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule60 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule61 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule62 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule63 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule64 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule65 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule66 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule67 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule68 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule69 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule70 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule71 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule72 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['overweight'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule73 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule74 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule75 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule76 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule77 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule78 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule79 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule80 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule81 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule82 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['low']))
    rule83 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule84 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['normal'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule85 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule86 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule87 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule88 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule89 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule90 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule91 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule92 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule93 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule94 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule95 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule96 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule97 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule98 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule99 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['overweight'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule100 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule101 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule102 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule103 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule104 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule105 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule106 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule107 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule108 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['normal'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule109 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule110 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule111 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule112 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule113 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule114 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule115 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule116 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule117 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule118 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule119 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule120 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule121 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule122 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule123 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule124 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule125 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule126 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule127 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule128 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule129 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule130 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule131 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule132 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule133 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['medium']))
    rule134 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule135 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['false'] & weight['obese'] & Helicobacter_pylori_infection['true'], cancer_risk['high']))
    rule136 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule137 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule138 = rules.append(ctrl.Rule(age['young'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule139 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule140 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule141 = rules.append(ctrl.Rule(age['middle_aged'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule142 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['low'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['medium']))
    rule143 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['moderate'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    rule144 = rules.append(ctrl.Rule(age['old'] & tobacco_smoking['high'] & high_salt['true'] & weight['obese'] & Helicobacter_pylori_infection['false'], cancer_risk['high']))
    return rules


def calculate(data:dict):

    # Control System
    cancer_ctrl = ctrl.ControlSystem(fuzzy_logic())
    cancer_sim = ctrl.ControlSystemSimulation(cancer_ctrl)

    if data["high_salt"] == False:
        cancer_sim.input['high_salt'] = 0  # false
    else:
        cancer_sim.input['high_salt'] = 1


    # Input values
    cancer_sim.input['age'] = data["Age"]

    if data["tobacco_smoking"] == "low" :
        cancer_sim.input['tobacco_smoking'] = 1
    elif data["tobacco_smoking"] == "moderate" :
        cancer_sim.input['tobacco_smoking'] = 7
    else :
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
    if cancer_sim.output['cancer_risk'] < 33 :
        risk = "low risk"
    elif 34 < cancer_sim.output['cancer_risk'] < 65 :
        risk = "medium risk"
    else :
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
    

    #insert data into mongo db
    mycollection.insert_one(newData)  
        


data= {
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

#start
cancer_risk_peercent = calculate(data)

if cancer_risk_peercent < 33 :
    risk = "low risk"
elif 34 < cancer_risk_peercent < 65 :
    risk = "medium risk"
else :
    risk = "high risk" 

data.update({"cancer_risk" : risk})
save_db(data)