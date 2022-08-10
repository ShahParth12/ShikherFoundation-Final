"""shikherngo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home,name="home"),
    path('home',views.home,name="home"),
    path('volunteer',views.volunteer,name="volunteer"),
    path('donate',views.donate,name="donate"),
    path('login',views.login,name="login"),
    path('events',views.events,name="events"),
    path('about',views.about,name="about"),
    path('accesslogin',views.accesslogin,name="adminlogin"),
    path('shop', views.shop, name="shop"),
    path('checkout', views.checkout , name ="checkout"),
    
]
