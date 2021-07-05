'''
User service does actions with respect to user
'''

import uuid
from flask import Response

class UserService():

  def __init__(self, connections):
    self.all_users = list([{
      'id': 'fbd204a7-318e-4dd3-86e0-e6d524fc3f98',
      'user_id': 'duraisarunya@gmail.com',
      'name': 'sarunya',
      'password': '****'
    },{
      'id': 'fbd204a7-318e-4dd3-86e0-e6d524fc3f99',
      'user_id': 'renu@gmail.com',
      'name': 'renu',
      'password': '****'
    }])


  def get_user(self, user_id)->dict:
    '''
    Checks if user information corresponding to user_id is available.
    If available returns it. If not return empty json
    '''
    print(self.all_users)
    ##check user in all users data
    for user in self.all_users:
      if user['user_id'] == user_id:
        return user

    ##return empty json if not found
    return {}
  
  
  def create_user(self, user:dict):
    '''
    Creates user if userid is not already available
    '''
    existing_user = self.get_user(user['user_id'])

    print(existing_user)

    if 'user_id' not in existing_user:
      user['id'] = uuid.uuid1()
      self.all_users.append(user)
      print('enter new user ', len(self.all_users))
      print(self.all_users)
      existing_user = user

    return user


  def get_all_users(self):
    '''
    Returns all user information available in the system
    '''
    return self.all_users


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


    



