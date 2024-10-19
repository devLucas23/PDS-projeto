from django.urls import path
from .views import UserCreateView, UserLoginView
from django.conf import settings


urlpatterns = [
    path('create/', UserCreateView.as_view(), name='user-create'),
    path('login/',  UserLoginView.as_view(), name='user-login'),
] 
