import mysql.connector


class Connections():
  my_sql_db: mysql.connector.connection.MySQLConnection

  def __init__(self):
    self.my_sql_db = None

  def initialize_mysql(self):
    self.my_sql_db = mysql.connector.connect(
      host="localhost",
      user="root",
      password="root",
      database="diary_db"
    )

  def close_mysql(self):
    if(self.my_sql_db != None):
      self.my_sql_db.close()