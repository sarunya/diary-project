from enum import Enum

class DiaryQuery():
  Insert = "INSERT INTO diary (%s) VALUES (%s)"
  Update = "UPDATE diary SET data = '%s' where id='%s'"
  Delete = "DELETE from diary where id='%s'"
  Select = "SELECT * from diary where user_id=%s"