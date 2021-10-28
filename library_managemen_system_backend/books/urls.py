from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.BookCreateView.as_view()),
	path('get/', views.BookListView.as_view()),
]
