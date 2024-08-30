from django.shortcuts import render
from django.views import View
import json


class FrontendTemaplteView(View):
  def post(self, request):
    context = {
    	'post_data': request.body,
      'get_data': json.dumps(request.GET)
    }
    return render(request, 'index.html', context)