import time

# tiempoIdeal = time.strftime("%m/%d/%Y, %H:%M:%S", traerTiempo)
# print(tiempoIdeal)

def grabarTexto():
  traerTiempo = time.localtime()
  tiempoIdeal = time.strftime("%H:%M", traerTiempo)
  archivo = open('texto.txt','w')
  archivo.write(tiempoIdeal)
  archivo.close()

while True:
  grabarTexto()
  time.sleep(5)