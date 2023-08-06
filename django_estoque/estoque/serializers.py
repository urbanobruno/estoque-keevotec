from rest_framework import serializers
from .models import Mercadoria

class MercadoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mercadoria
        fields = ['id', 'codigo', 'descricao', 'quantidade', 'unidade_medida']