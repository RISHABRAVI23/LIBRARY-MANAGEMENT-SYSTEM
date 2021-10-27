from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

# Create your views here.


class BookCreateView(generics.CreateAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer
class BookListView(generics.ListAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer