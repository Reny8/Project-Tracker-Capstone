# Generated by Django 4.0.4 on 2022-05-19 20:22

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('projects', '0004_alter_projects_assigned_users'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='assigned_users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
