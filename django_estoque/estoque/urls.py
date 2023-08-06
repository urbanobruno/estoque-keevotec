from django.urls import path
from . import views

urlpatterns = [
    path('listar_mercadorias/', views.listar_mercadorias, name='listar_mercadorias'),
    path('cadastrar_mercadoria/', views.cadastrar_mercadoria, name='cadastrar_mercadoria'),
    path('editar_mercadoria/<int:mercadoria_id>/', views.editar_mercadoria, name='editar_mercadoria'),
    path('deletar_mercadoria/<int:mercadoria_id>/', views.deletar_mercadoria, name='deletar_mercadoria'),

]