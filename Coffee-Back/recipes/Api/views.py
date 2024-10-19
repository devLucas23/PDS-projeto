from rest_framework.viewsets import ModelViewSet
from recipes.models import Recipes, Ingredient
from recipes.Api.serializers import RecipeSerializer,IngredientSerializer

class RecipeListCreateView(ModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer

class IngredientListCreateView(ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    