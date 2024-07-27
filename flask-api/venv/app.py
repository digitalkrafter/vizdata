from flask import Flask
from flask_cors import CORS
#Test comment
app = Flask(__name__)
#CORS(app, resources={r"/*": {"origins": "*"}})  # Apply CORS to all routes

CORS(app)

@app.route('/members')
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)
