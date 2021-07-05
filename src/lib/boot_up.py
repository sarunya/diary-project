from .mysql_db_connector import Connections

def boot_up_app() -> Connections:
  connections = Connections()
  connections.initialize_mysql()
  return connections