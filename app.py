from flask import Flask
from flask_cors import CORS
from .src.routes.user_routes import user_blueprint

app = Flask(__name__)
cors = CORS(app)
app.register_blueprint(user_blueprint)

app.run(port="4000")