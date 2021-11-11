from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer

# Create your views here.

class BookView(APIView):
	def get(self, request, id=None, format=None):
		if id!=None:
			serializer = BookSerializer(Book.objects.get(book_id=id))
			return Response(serializer.data, status=status.HTTP_200_OK)
		books = Book.objects.all()
		serializer = BookSerializer(books, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer=BookSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		