from django.urls import path
from . import views

urlpatterns = [
	path('new/', views.BookCreateView.as_view()),
	path('all/', views.BookListView.as_view()),
]
