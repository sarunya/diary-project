from enum import Enum

class UserQuery():
  Insert = "INSERT INTO user (%s) VALUES (%s)"
  Update = "UPDATE user SET password = '%s' where id='%s'"
  Delete = "DELETE from user where id='%s'"
  Select = "SELECT * from user where user_id=%s"
  SelectAll = "SELECT * from user"