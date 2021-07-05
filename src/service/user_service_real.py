'''
User service does actions with respect to user
'''
from flask import Response

from ..db_access.user_db import UserDb

class UserService():

  def __init__(self, connections):
    self.user_db = UserDb(connections)


  def get_user(self, user_id)->dict:
    '''
    Checks if user information corresponding to user_id is available.
    If available returns it. If not return empty json
    '''
    ##check user in all users data
    return self.user_db.get_user([user_id])
  
  
  def create_user(self, user:dict):
    '''
    Creates user if userid is not already available
    '''
    user_info = self.get_user(user['user_id'])

    if user_info==None or 'id' not in user_info:
      user_info = self.user_db.insert_user(user)

    return user_info


  def get_all_users(self):
    '''
    Returns all user information available in the system
    '''
    return self.user_db.get_all_users()


  def login_user(self, user_login, response: Response):
    '''
    Validate's uers password information and authenticates user
    '''

    user_info = self.get_user(user_login['user_id'])

    if len(user_info.keys()) == 0:
      return { 'message' :'User not found' }
    elif user_info['password'] != user_login['password']:
      return { 'message' :'Invalid Password' }
    else:
      response.set_cookie('diary_jwt', user_info['id'], expires=3600)
      return { 'name': user_info['name'] }


    



