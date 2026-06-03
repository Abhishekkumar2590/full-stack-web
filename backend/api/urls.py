from django.urls import include, path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/", views.CreateUserView.as_view()),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("auth/", include("rest_framework.urls")),
    path("notes/", views.NoteListCreateView.as_view(), name="notes"),
    path("notes/<int:pk>/", views.NoteDeleteView.as_view(), name="note-delete"),
]
