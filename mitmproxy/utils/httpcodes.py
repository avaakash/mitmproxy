from http import HTTPStatus

StatusCode = {}

for status in list(HTTPStatus):
    StatusCode[status.value] = status.phrase
