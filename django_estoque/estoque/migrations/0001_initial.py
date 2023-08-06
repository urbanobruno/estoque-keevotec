# Generated by Django 4.2.4 on 2023-08-03 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mercadoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=20)),
                ('descricao', models.CharField(max_length=100)),
                ('quantidade', models.PositiveIntegerField()),
                ('unidade_medida', models.CharField(max_length=20)),
            ],
        ),
    ]
