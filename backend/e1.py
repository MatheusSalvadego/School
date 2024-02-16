from datetime import datetime

# Usado para guardar valores previamente calculados
cache = {}


# Calcula o fib de n
def fib(n):
    if n in cache:
        return cache[n]

    if n < 2:
        result = n
    else:
        result = fib(n - 1) + fib(n - 2)
        cache[n] = result

    return result


# Exercisio 1 -> Some 4 números
def sum(a, b, c, d):
    return a + b + c + d


# Exercisio 2 -> Calcule idade por ano
def getAgeByYear(year):
    return datetime.now().year - year


# Exercisio 3 -> Calcule a média de 3 notas
def getAvg(n1, n2, n3):
    return (n1 + n2 + n3) / 3


# Loga tudo no console
print(fib(10))
print(sum(10, 10, 20, 20))
print(getAgeByYear(2007))
print(getAvg(10, 10, 8))
