from inspect import Parameter
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.contrib import messages

def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def donate(request):
    return render(request, "donate.html")

def events(request):
    return render(request, "events.html")

def volunteer(request):
    return render(request, "volunteer.html")

def login(request):
    return render(request,"adminlogin.html")

def shop(request):
    return render(request , "shop.html")

def checkout(request):
    return render(request , "checkout.html")

def accesslogin(request):
    incuname=request.GET.get('uname')
    incpass=request.GET.get('pass')
    if incuname == 'shikheradmin' and incpass=='Shikher@123':
        return render(request,"adminevent.html")
    else:
        parameter={'message' : 'Incorrect credentials , login failed'}
        return render(request ,'adminlogin.html' ,parameter)       
