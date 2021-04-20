from django.shortcuts import render

# Create your views here.
def home_autofin(request):
    context = {}
    return render(request,'home.html',context)

def register_autofin(request):
    context = {}
    return render(request,'register.html',context)

def payment_autofin(request):
    context = {}
    return render(request,'payment.html',context)
