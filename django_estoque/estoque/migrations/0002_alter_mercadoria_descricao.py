# Generated by Django 4.2.4 on 2023-08-06 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mercadoria',
            name='descricao',
            field=models.CharField(max_length=50),
        ),
    ]