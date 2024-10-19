from django.db import models

# Create your models here.
class Recipes (models.Model):
    title = models.CharField(max_length=100)
    intensity = models.IntegerField(default=1)
    description = models.TextField()
    preparation = models.TextField()
    user_id = models.IntegerField(default=1)
    likes = models.IntegerField(default=1)

    def _str_(self):
        return self.title
class Ingredient(models.Model):
    recipe = models.ForeignKey(Recipes, related_name='ingredients', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantify = models.IntegerField(default=1)

    def _str_(self):
        return self.name    