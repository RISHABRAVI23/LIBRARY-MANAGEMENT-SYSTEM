from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model = Book
		fields = ('id', 'book_id', 'book_name', 'book_desc', 'book_author', 'book_image', 'borrowed')