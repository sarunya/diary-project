'''
Model class for User
'''

import uuid

from ..lib.mysql_db_connector import Connections
from ..lib.mysql_db_base import MySqlDbBase
from ..query.user_queries import UserQuery


class UserDb(MySqlDbBase):
  
  def __init__(self, connections:Connections):
    MySqlDbBase.__init__(self, connections, UserQuery)  

  
  def insert_user(self, user_info:dict):
    user_info['id'] = str(uuid.uuid1())
    self.insert(user_info)
    return user_info

  def get_user(self, user_id:list)->dict:
    return self.select(user_id)

  def get_all_users(self) -> []:
    return self.selectAll()
    
