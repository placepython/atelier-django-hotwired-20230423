from django.urls import path
from . import views

app_name = "tasks"

urlpatterns = [
    path("create/", views.create_view, name="task-create"),
    path("", views.list_view, name="task-list"),
    path("<int:pk>/delete/", views.delete_view, name="task-delete"),
    path("<int:pk>/update/", views.update_view, name="task-update"),
    path("<int:pk>/", views.delete_view, name="task-detail"),
]
