from rest_framework import serializers
from user.models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    profile_image = serializers.ImageField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'profile_image')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_image = validated_data.pop('profile_image', None)
        user = CustomUser.objects.create_user(**validated_data)
        if profile_image:
            user.profile_image = profile_image
            user.save()
        return user
