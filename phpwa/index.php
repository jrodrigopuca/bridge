<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="manifest" href="manifest.json">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php 
    echo "hola"
  ?>
      <script src="app.js"></script>
    <script>
        if ('serviceWorker' in navigator){
            window.addEventListener('load',()=>{
                navigator.serviceWorker.register('service-worker.js')
            })
        }

    </script>
</body>
</html>
