extends Node

@export var editor_comandos: LineEdit

var diccionario_de_comandos: Dictionary {}

func _ready():
  diccionario_de_comandos = {
    "/kill_game": Callable(self, "_cerrar_juego")
  }

func _on_button_pressed():
  var comando: String = editor_comandos.text.strip_edges()
  if diccionario_de_comandos.has(comando):
    var accion: Callable = diccionario_de_comandos[comando]
    accion.call()
    editor_comandos.text = ""
  else:
    editor_comandos.text = ""
    print("Comando no reconocido por la consola...")

func _cerrar_juego():
  get_tree().quit()
