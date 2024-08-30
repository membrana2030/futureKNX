from django.contrib import admin
from django.urls import path, include
from home.views import FrontendTemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', FrontendTemplateView.as_view())
]

urlpatterns += staticfiles_urlpatterns
