from django.db import models

# Create your models here.

class Mercadoria(models.Model):
    codigo = models.CharField(max_length=20)
    descricao = models.CharField(max_length=50)
    quantidade = models.PositiveIntegerField()
    unidade_medida = models.CharField(max_length=20)

    def __str__(self):
        return self.codigo