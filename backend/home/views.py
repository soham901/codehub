from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "msg": "it's working"
    })
