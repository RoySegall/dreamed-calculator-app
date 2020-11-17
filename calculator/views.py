from django.http import JsonResponse

from calculator.utils import concat_numbers


def calculator_plus(request, first_number, second_number):
	return JsonResponse({"results": concat_numbers(first_number, second_number)})
