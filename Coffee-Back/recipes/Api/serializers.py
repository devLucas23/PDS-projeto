from rest_framework import serializers
from recipes.models import Recipes, Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name', 'quantify']

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Recipes
        fields = ['id', 'title', 'intensity', 'description', 'preparation', 'ingredients', 'user_id', 'likes']
    
    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipes.objects.create(**validated_data)
        for ingredient_data in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **ingredient_data)
        return recipe


      