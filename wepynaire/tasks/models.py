from django.db import models
from django.core.validators import MinLengthValidator
from django.utils import timezone


class Task(models.Model):
    title = models.CharField(
        max_length=250,
        validators=[
            MinLengthValidator(limit_value=5),
        ],
    )
    due_date = models.DateField(default=timezone.now)
