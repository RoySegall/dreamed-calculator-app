from django.http import JsonResponse


def calculator_plus(request, first_number, second_number):
	return JsonResponse({"results": first_number + second_number})
