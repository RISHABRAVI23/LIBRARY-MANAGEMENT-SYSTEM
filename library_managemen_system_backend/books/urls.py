from django.urls import path
from . import views

urlpatterns = [
	path('api/', views.BookView.as_view()),
	path('api/<str:id>/', views.BookView.as_view()),
]
