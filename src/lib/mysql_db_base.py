from .mysql_db_connector import Connections
import mysql.connector

class MySqlDbBase():

  def __init__(self, connections: Connections, query):
    self.my_sql_db = connections.my_sql_db
    self.query = query


  def __execute_query_commit__(self, query, values):

    self.__execute_query__(query, values)
    self.my_sql_db.commit()



  def __execute_query__(self, query, values=[]):

    cursor: mysql.connector.cursor_cext.CMySQLCursor

    cursor = self.my_sql_db.cursor(buffered=True, dictionary=True)
    cursor.execute(query, values)
    return cursor


  def insert(self, values:dict, sql=None):
    sql= self.query.Insert if sql is None else sql
    placeholders = ', '.join(['%s'] * len(values))
    columns = ', '.join(values.keys())
    sql = sql % (columns, placeholders)
    self.__execute_query_commit__(sql, list(values.values()))


  def delete(self, values, sql=None):
    sql= self.query.Delete if sql is None else sql
    self.__execute_query_commit__(sql, values)


  def update(self, values, sql=None):
    sql= self.query.Update if sql is None else sql
    self.__execute_query_commit__(sql, values)


  def select(self, values=[], sql=None):
    sql= self.query.Select if sql is None else sql
    cursor= self.__execute_query__(sql, values)
    data = {}
    if cursor.rowcount > 0:
      data = cursor.fetchall()[0]
    cursor.close()
    return data

  def selectAll(self, sql=None):
    sql = self.query.SelectAll if sql is None else sql
    cursor= self.__execute_query__(sql)
    data = []
    if cursor.rowcount > 0:
      data = cursor.fetchall()
    cursor.close()
    return data
