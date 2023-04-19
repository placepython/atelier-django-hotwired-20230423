import http

from django.views.generic import (
    CreateView,
    ListView,
    DetailView,
    UpdateView,
    DeleteView,
)
from django.urls import reverse_lazy
from .models import Task


class TaskListView(ListView):
    model = Task
    context_object_name = "tasks"
    template_name = "tasks/list.html"


list_view = TaskListView.as_view()


class TurboFormErrorMixin:
    def form_invalid(self, form):
        response = super().form_invalid(form)
        response.status_code = http.HTTPStatus.UNPROCESSABLE_ENTITY
        return response


class TaskCreateView(TurboFormErrorMixin, CreateView):
    model = Task
    fields = ("title", "due_date")
    success_url = reverse_lazy("tasks:task-list")
    template_name = "tasks/create.html"


create_view = TaskCreateView.as_view()


class TaskDeleteView(TurboFormErrorMixin, DeleteView):
    model = Task
    fields = ("title", "due_date")
    context_object_name = "task"
    success_url = reverse_lazy("tasks:task-list")
    template_name = "tasks/delete.html"


delete_view = TaskDeleteView.as_view()


class TaskUpdateView(TurboFormErrorMixin, UpdateView):
    model = Task
    fields = ("title", "due_date")
    context_object_name = "task"
    success_url = reverse_lazy("tasks-list")
    template_name = "tasks/update.html"


update_view = TaskUpdateView.as_view()


class TaskDetailView(DetailView):
    model = Task
    context_object_name = "task"
    template_name = "tasks/detail.html"


detail_view = TaskDetailView.as_view()
