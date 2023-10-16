from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from models import db, Users

app = Flask(__name__)


app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/database_ni_emy'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

CORS(app, supports_credentials=True)

db.init_app(app)

with app.app_context():
    db.create_all()

ma = Marshmallow(app)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'date', 'time', 'guest')  

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route("/")
def hello_world():
    return "<p>try</p>"

@app.route('/users', methods=['GET'])
def listusers():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)

@app.route('/userdetails/<id>', methods=['GET'])
def userdetails(id):
    user = Users.query.get(id)
    return user_schema.jsonify(user)

@app.route('/userupdate/<id>', methods=['PUT'])
def userupdate(id):
    user = Users.query.get(id)

    name = request.json['name']
    date = request.json['date'] 
    time = request.json['time']  
    guest = request.json['guest']

    user.name = name
    user.date = date  # Set date field
    user.time = time  # Set time field
    user.guest = guest

    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/userdelete/<id>', methods=['DELETE'])
def userdelete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/newuser', methods=['POST'])
def newuser():
    name = request.json['name']
    date = request.json['date']  
    time = request.json['time']  
    guest = request.json['guest']

    users = Users(name=name, date=date, time=time, guest=guest)  # Added date and time fields

    db.session.add(users)
    db.session.commit()
    return user_schema.jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)