from http.client import HTTPException

from django.http import JsonResponse

from calculator.utils import concat_numbers


def calculator_plus(request, first_number, second_number):
	if second_number > first_number:
		raise HTTPException('The first number cannot be bigger than the second')

	return JsonResponse({"results": concat_numbers(first_number, second_number)})
