
from django.http import JsonResponse
from .models import Mercadoria
from .serializers import MercadoriaSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# @api_view(['GET']) # TODO check later
def listar_mercadorias(request):
    mercadorias = Mercadoria.objects.all()
    serializer = MercadoriaSerializer(mercadorias, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def cadastrar_mercadoria(request):
    print("Abrindo view")
    if request.method == 'POST':
        print("chegou post")
        serializer = MercadoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def editar_mercadoria(request, mercadoria_id):
    print(request.data)
    if request.method == 'PUT':
        mercadoria = Mercadoria.objects.get(id=mercadoria_id)
        serializer = MercadoriaSerializer(mercadoria, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deletar_mercadoria(request, mercadoria_id):
    if request.method == 'DELETE':
        mercadoria = Mercadoria.objects.get(id=mercadoria_id)
        mercadoria.delete()
        return Response(status=status.HTTP_200_OK)