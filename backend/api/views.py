from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer, TeamMemberSerializer
from rest_framework.permissions import AllowAny
from .models import TeamMember

class TeamMemberListCreate(generics.ListCreateAPIView):
    serializer_class = TeamMemberSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return TeamMember.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class TeamMemberDelete(generics.DestroyAPIView):
    serializer_class = TeamMemberSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return TeamMember.objects.all()

class TeamMemberUpdate(generics.UpdateAPIView):
    serializer_class = TeamMemberSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return TeamMember.objects.all()
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
