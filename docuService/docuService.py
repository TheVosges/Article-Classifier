from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model
model = joblib.load('tdidf_BR_SVC_lin.pklz')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    data = dict(data)

    text_to_predict = data.get('text')

    # Make predictions using the loaded model
    prediction = model.predict([text_to_predict])
    print(list(prediction[0]))
    return jsonify({'prediction': str(list(prediction[0]))})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
