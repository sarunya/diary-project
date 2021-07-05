'''
Model class for User
'''

import uuid
from collections import defaultdict
from datetime import date

from ..lib.mysql_db_connector import Connections
from ..lib.mysql_db_base import MySqlDbBase
from ..query.diary_queries import DiaryQuery


class DiaryDb(MySqlDbBase):
  
  def __init__(self, connections:Connections):
    MySqlDbBase.__init__(self, connections, DiaryQuery)  

  
  def insert_data(self, user_id: str, data: dict):
    db_data = defaultdict(dict)
    db_data['id'] = str(uuid.uuid1())
    db_data['user_id'] = user_id
    db_data['data'] = data
    db_data['created_date'] = str(date.today())
    self.insert(db_data)
    return db_data

  def get_diary_data(self, user_id:list)->dict:
    return self.select(user_id)

  def update_diary_data(self, id, data) -> []:
    return self.update(id, data)
    
