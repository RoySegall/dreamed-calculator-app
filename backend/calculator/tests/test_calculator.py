from django.test import TestCase, Client


class TestCalculator(TestCase):

	def _calculate_plus(self, client, first_number, second_number, expected):
		response = client.get(f'/calculator/plus/{first_number}/{second_number}')
		results = response.json().get('results')
		self.assertEquals(results, expected)

	def test_concat_numbers(self):
		client = Client()

		expected_results = []
		for first_number in range(10):
			for second_number in range(10):
				expected_results.append({
					'first_number': first_number,
					'second_number': second_number,
					'expected': first_number + second_number
				})

		for expected_result in expected_results:
			self._calculate_plus(
				client=client,
				first_number=expected_result.get('first_number'),
				second_number=expected_result.get('second_number'),
				expected=expected_result.get('expected')
			)


