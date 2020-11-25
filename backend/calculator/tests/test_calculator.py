from unittest.mock import patch

from django.test import TestCase, Client
from calculator.utils import concat_numbers


class TestCalculator(TestCase):

	def test_concat_numbers(self):
		expected_results = []
		for first_number in range(10):
			for second_number in range(10):
				expected_results.append({
					'first_number': first_number,
					'second_number': second_number,
					'expected': first_number + second_number
				})

		for expected_result in expected_results:
			results = concat_numbers(
				expected_result.get('first_number'),
				expected_result.get('second_number')
			)
			self.assertEquals(results, expected_result.get('expected'))

	def test_concat_numbers_view(self):
		client = Client()
		response = client.get(f'/calculator/plus/1/2')
		results = response.json().get('results')
		self.assertEquals(results, 3)

	@patch('calculator.views.concat_numbers')
	def test_unit_concat_numbers_view(self, concat_numbers_mock):
		concat_numbers_mock.return_value = 3
		client = Client()

		response = client.get(f'/calculator/plus/1/2')
		concat_numbers_mock.assert_called_with(1, 2)

		results = response.json().get('results')
		self.assertEquals(results, 3)
