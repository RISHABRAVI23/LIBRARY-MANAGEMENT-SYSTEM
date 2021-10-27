import random
import string
from django.db import models

# Create your models here.
def generate_unique_id():
	length = 18
	while True:
		id = ''.join(random.choices(string.ascii_uppercase, k=length))
		if Book.objects.filter(book_id=id).count() == 0:
			break
	
	return id

class Book(models.Model):
	book_id = models.CharField(max_length=20, default="", unique=True)
	book_name = models.CharField(max_length=50, default="")
	book_desc = models.CharField(max_length=150, default="")
	book_author = models.CharField(max_length=20, default="")
	book_image = models.ImageField(upload_to="books/images", default="")
	borrowed = models.BooleanField(default=False)


	def __str__(self) -> str:
		return self.book_name
	