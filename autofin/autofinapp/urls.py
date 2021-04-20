from django.urls import path
from . import views
urlpatterns = [
    path('home/', views.home_autofin),
    path('home/register/', views.register_autofin),
    path('payment/', views.payment_autofin),
]