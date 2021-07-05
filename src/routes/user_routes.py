from flask import Flask, Response, Blueprint, jsonify, request, json

# from ..service.user_service import UserService
from ..service.user_service_real import UserService
from ..lib.boot_up import boot_up_app

user_blueprint = Blueprint('user_blueprint', __name__)

connections = boot_up_app()


@user_blueprint.route("/user/create", methods=["POST"])
def create_user():
    userService = UserService(connections)
    payload = request.get_json()
    return userService.create_user(payload)

@user_blueprint.route("/user/<string:user_id>", methods=["GET"])
def get_user(user_id):
    userService = UserService(connections)
    return userService.get_user(user_id)

@user_blueprint.route("/user/", methods=["GET"])
def get_all_users():
    userService = UserService(connections)
    return jsonify(userService.get_all_users())

@user_blueprint.route("/user/login", methods=["POST"])
def login():
    userService = UserService(connections)
    payload = request.get_json()
    response = Response()
    body = userService.login_user(payload, response)
    response.set_data(json.dumps(body))
    return response