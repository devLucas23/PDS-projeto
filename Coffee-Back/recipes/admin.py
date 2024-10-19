from django.contrib import admin
from recipes.models import Recipes,Ingredient

# Register your models here.
admin.site.register(Recipes)
admin.site.register(Ingredient)
