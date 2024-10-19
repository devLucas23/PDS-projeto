from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from user.models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.status import HTTP_200_OK

class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class UserLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                            context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = CustomUserSerializer(user)
        profile_image_url = request.build_absolute_uri(user.profile_image.url) if user.profile_image else None
        return Response({'token': token.key, 'user': user_serializer.data, 'profile_image_url': profile_image_url}, status=HTTP_200_OK)
