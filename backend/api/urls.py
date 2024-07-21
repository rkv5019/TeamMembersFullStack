from django.urls import path
from . import views

urlpatterns = [
    path("members/", views.TeamMemberListCreate.as_view(), name="team-member-list"),
    path("members/delete/<int:pk>/", views.TeamMemberDelete.as_view(), name="delete-team-member"),
    path("members/update/<int:pk>/", views.TeamMemberUpdate.as_view(), name="update-team-member"),
]
