import sys

sys.path.append('./././src/service')

from user_service import UserService
import unittest

class UserServiceTest(unittest.TestCase):

  def test_get_all_users(self):
    userService = UserService()
    result = userService.get_all_users()
    self.assertEqual(len(result), 2)


if __name__=='__main__':
  unittest.main()